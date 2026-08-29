const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.evaluateOnNewDocument(() => {
    let originalFetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      get() {
        return originalFetch;
      },
      set(v) {
        console.error("SOMEONE IS SETTING FETCH! STACK:", new Error().stack);
        originalFetch = v;
      },
      configurable: true
    });
  });

  page.on('pageerror', err => {
    console.log('PAGE ERROR:', err.message);
  });
  
  page.on('console', msg => {
    console.log('CONSOLE:', msg.text());
  });

  const url = process.argv[2] || 'http://localhost:3000';
  await page.goto(url, { waitUntil: 'networkidle0' });
  await browser.close();
})();
