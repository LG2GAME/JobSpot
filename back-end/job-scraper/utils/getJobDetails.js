async function getJobDetails(browser, url) {
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "networkidle2" });
    await page.waitForSelector('[data-test="block-description"]', {
      timeout: 10000,
    });

    const description = await page.$eval(
      '[data-test="block-description"]',
      (descElement) => {
        const listItems = descElement.querySelectorAll("li");
        return Array.from(listItems)
          .map((item) => item.innerText)
          .join(" ");
      }
    );

    return description || null;
  } catch (err) {
    return null;
  } finally {
    await page.close();
  }
}

module.exports = getJobDetails;
