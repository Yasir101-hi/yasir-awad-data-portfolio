const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.evaluate(() => {
    console.log(Object.getOwnPropertyDescriptor(window, 'fetch'));
  });
  
  page.on('console', msg => {
    console.log('CONSOLE:', msg.text());
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  await page.evaluate(() => {
    const desc = Object.getOwnPropertyDescriptor(window, 'fetch');
    console.log("After load:", desc ? desc.writable : 'no desc');
  });

  await browser.close();
})();
