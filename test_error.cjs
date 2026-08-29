const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('pageerror', err => {
    console.log('PAGE ERROR STACK TRACE:');
    console.log(err.stack);
  });
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('CONSOLE ERROR:', msg.text());
      console.log('Location:', msg.location());
    }
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await browser.close();
})();
