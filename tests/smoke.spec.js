import { test, expect } from '@playwright/test';

test('app loads and renders a design', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1').first()).toBeVisible();
});
