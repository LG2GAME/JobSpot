import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import ignore from "ignore";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname);
const README_PATH = path.resolve(__dirname, "README.md");
const GITIGNORE_PATH = path.resolve(__dirname, ".gitignore");

const START_TAG = "<!-- prettier-ignore-start -->";
const END_TAG = "<!-- prettier-ignore-end -->";

const gitignore = ignore();

if (fs.existsSync(GITIGNORE_PATH)) {
  const giContent = fs.readFileSync(GITIGNORE_PATH, "utf8");
  gitignore.add(giContent.split("\n"));
}

const FORCE_IGNORE_PATTERNS = [
  ".git",
  "node_modules",
  "**/node_modules",
  ".next",
  "**/.next",
  "build",
  "**/build",
  "dist",
  "**/dist",
  "out",
  "**/out",
  ".vercel",
  "**/.vercel",
  "readmeUpdate.ts",
];
gitignore.add(FORCE_IGNORE_PATTERNS);

function shouldIgnore(relPath: string): boolean {
  if (!relPath) return false;
  const normalized = relPath.replace(/\\/g, "/");

  return gitignore.ignores(normalized);
}

function getTree(dirPath: string, prefix = "", basePath = ROOT_DIR): string {
  const relPath = path.relative(basePath, dirPath);

  if (!relPath && dirPath === basePath) {
  } else if (shouldIgnore(relPath)) {
    return "";
  }

  let items = fs.readdirSync(dirPath).sort();

  items = items.filter(
    (item) => !shouldIgnore(path.relative(basePath, path.join(dirPath, item)))
  );

  let tree = "";

  items.forEach((item, index) => {
    const fullPath = path.join(dirPath, item);
    let isDir;
    try {
      isDir = fs.statSync(fullPath).isDirectory();
    } catch (e) {
      return;
    }

    const isLast = index === items.length - 1;

    tree += `${prefix}${isLast ? "└── " : "├── "}${item}\n`;

    if (isDir) {
      tree += getTree(fullPath, prefix + (isLast ? "    " : "│   "), basePath);
    }
  });

  return tree;
}

function updateReadme(tree: string) {
  if (!fs.existsSync(README_PATH)) {
    console.error(
      `❌ Nie znaleziono pliku README.md w ścieżce: ${README_PATH}`
    );
    return;
  }

  let readme = fs.readFileSync(README_PATH, "utf-8");

  const treeBlock = `${START_TAG}
\`\`\`plaintext
${tree.trim()}
\`\`\`
${END_TAG}`;

  if (!readme.includes(START_TAG) || !readme.includes(END_TAG)) {
    console.error(
      "❌ Błąd: Plik README.md nie zawiera obu tagów: <!-- prettier-ignore-start --> i <!-- prettier-ignore-end -->"
    );
    return;
  }

  readme = readme.replace(
    new RegExp(`${START_TAG}[\\s\\S]*?${END_TAG}`, "gm"),
    treeBlock
  );

  const now = new Date();
  const formattedDate = now.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  readme = readme.replace(
    /## Ostatnia aktualizacja[\s\S]*?(?=\n##|$)/,
    `## Ostatnia aktualizacja\n\n*${formattedDate}*`
  );

  fs.writeFileSync(README_PATH, readme, "utf-8");
  console.log("✅ README.md został zaktualizowany!");
}

const tree = getTree(ROOT_DIR);
if (tree) {
  updateReadme(tree);
} else {
  console.log("Brak treści drzewa do wygenerowania.");
}
