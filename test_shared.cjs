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

  await page.goto('https://ais-pre-cqrrz43ilc2k47z5cl3inq-330379135195.europe-west2.run.app', { waitUntil: 'networkidle0' });
  await browser.close();
})();
