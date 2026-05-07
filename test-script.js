const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1707, height: 879 });
  await page.goto('http://localhost:5173');
  // Wait for loading to finish
  await page.waitForTimeout(5000);
  
  const boundingBox = await page.evaluate(() => {
    const el = document.querySelector('.character-model');
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    return { x: rect.x, y: rect.y, width: rect.width, height: rect.height, transform: window.getComputedStyle(el).transform };
  });
  console.log("Landing Box:", boundingBox);

  await page.evaluate(() => window.scrollBy(0, 1000));
  await page.waitForTimeout(1000);
  const aboutBox = await page.evaluate(() => {
    const el = document.querySelector('.character-model');
    return el ? el.getBoundingClientRect().x : null;
  });
  console.log("About Box X:", aboutBox);
  
  await browser.close();
})();
