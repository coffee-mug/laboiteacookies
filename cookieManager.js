const puppeteer = require('puppeteer');

async function getCookies(domain) {
  const browser = await puppeteer.launch({ waitUntil: 'networkidle2' });
  const page = await browser.newPage();
  await page.goto(domain);

  const cookies = await page._client.send('Network.getAllCookies');

  await browser.close();

  return cookies;
};

module.exports = {
    getCookies
}

