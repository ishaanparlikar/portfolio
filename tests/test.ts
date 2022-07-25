import { test, expect } from '@playwright/test';

test('dark mode test', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  const title = page.locator('html');
  await expect(title).toHaveAttribute('data-theme','dark');
});