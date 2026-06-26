const { test, expect } = require('@playwright/test');

test('fills the contact form, takes a screenshot, submits, and reaches the thank you page', async ({ page }) => {
  await page.goto('/');

  await page.fill('#name', 'Ron Avital');
  await page.fill('#email', 'ron.avital@example.com');
  await page.fill('#phone', '0501234567');
  await page.fill('#company', 'Acme Inc.');
  await page.fill('#website', 'https://example.com');

  // change Number of Employees from 1-10 to 51-500
  await page.selectOption('#employees', '51-500');

  // Screenshot before clicking "Request a call back"
  await page.screenshot({ path: 'screenshots/before-submit.png', fullPage: true });

  await page.click('text=Request a call back');

  await expect(page).toHaveURL(/thank-you\.html/);
  console.log('Reached the thank you page');
});
