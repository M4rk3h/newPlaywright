import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Create a Browser and go to Google
  await page.goto('https://www.google.co.uk/');
  // Click Reject All from the cookies banner
  await page.getByRole('button', { name: 'Reject all' }).click();
  // Click the about button
  await page.getByRole('link', { name: 'About' }).click();
  // 
  await expect(page).toHaveURL(/about.google/);
  // Close the browser/page
  await page.close();
});