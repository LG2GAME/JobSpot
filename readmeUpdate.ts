// npx tsx .\readmeUpdate.ts

import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

// Ścieżki
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "src");
const README_PATH = path.resolve(__dirname, "README.md");
const START_TAG = "<!-- prettier-ignore-start -->";
const END_TAG = "<!-- prettier-ignore-end -->";

function getTree(dirPath: string, prefix = ""): string {
  const items = fs.readdirSync(dirPath).sort();
  let tree = "";

  for (const [index, item] of items.entries()) {
    const fullPath = path.join(dirPath, item);
    const isDir = fs.statSync(fullPath).isDirectory();
    const isLast = index === items.length - 1;

    tree += `${prefix}${isLast ? "└── " : "├── "}${item}\n`;
    if (isDir) tree += getTree(fullPath, prefix + (isLast ? "    " : "│   "));
  }

  return tree;
}

function updateReadme(tree: string) {
  let readme = fs.readFileSync(README_PATH, "utf-8");

  const treeBlock = `${START_TAG}
\`\`\`plaintext
${tree.trim()}
\`\`\`
${END_TAG}`;

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

const tree = "src\n" + getTree(ROOT_DIR, "   ");
updateReadme(tree);
