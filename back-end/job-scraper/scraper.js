const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const formatDateDifference = require("./utils/formatDate");
const getJobDetails = require("./utils/getJobDetails");

const outputPath = path.resolve(
  __dirname,
  "../../front-end/src/assets/data/offers.json"
);
const scrapedLinks = new Set();
const results = [];

(async () => {
  const browser = await puppeteer.launch({ headless: true });

  for (
    let pageNumber = 1;
    pageNumber <= 10 && results.length < 100;
    pageNumber++
  ) {
    const page = await browser.newPage();
    const url = `https://www.pracuj.pl/praca?pn=${pageNumber}`;
    console.log(`⏳ Pobieram stronę: ${url}`);

    await page.goto(url, { waitUntil: "networkidle2" });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await page.waitForSelector('[data-test="default-offer"]');

    const offers = await page.$$eval('[data-test="default-offer"]', (nodes) =>
      nodes.map((offer) => {
        const getText = (selector) =>
          offer.querySelector(selector)?.innerText?.trim() || null;
        const getAttr = (selector, attr) =>
          offer.querySelector(selector)?.getAttribute(attr) || null;

        return {
          logo: getAttr('[data-test="image-responsive"]', "src"),
          title: getText('[data-test="offer-title"]'),
          company: getText('[data-test="text-company-name"]'),
          dateText: getText('[data-test="text-added"]'),
          jobLink:
            offer.querySelector('[data-test="offer-title"] a')?.href || null,
          location: getText('.tiles_r11dm8ju h4[data-test="text-region"]'),
          jobType:
            Array.from(offer.querySelectorAll(".tiles_bfrsaoj li"))
              .map((li) => li.innerText)
              .find((text) => text.toLowerCase().includes("etat")) || null,
        };
      })
    );

    for (const offer of offers) {
      if (
        !offer.logo ||
        !offer.title ||
        !offer.company ||
        !offer.dateText ||
        !offer.jobLink ||
        !offer.location ||
        !offer.jobType
      )
        continue;

      if (scrapedLinks.has(offer.jobLink)) continue;

      const description = await getJobDetails(browser, offer.jobLink);
      if (!description) continue;

      const formattedDate = formatDateDifference(offer.dateText);
      if (!formattedDate) continue;

      results.push({
        logo: offer.logo,
        title: offer.title,
        company: offer.company,
        date: formattedDate,
        description,
        location: offer.location,
        jobType: offer.jobType,
        jobLink: offer.jobLink,
      });

      scrapedLinks.add(offer.jobLink);
      if (results.length >= 100) break;
    }

    await page.close();
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), "utf-8");
  console.log(`✅ Zapisano ${results.length} ofert do ${outputPath}`);

  await browser.close();
})();
