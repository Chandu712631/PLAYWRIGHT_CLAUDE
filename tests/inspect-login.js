const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login', { waitUntil: 'networkidle' });
  console.log('URL:', page.url());
  console.log('Title:', await page.title());
  console.log('Login page content head snippet:');
  const html = await page.content();
  console.log(html.slice(0, 5000).replace(/\n/g, ' '));
  await browser.close();
})();
