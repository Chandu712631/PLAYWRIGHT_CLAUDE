const { test, expect } = require('@playwright/test');

test('register a new user with random data', async ({ page }) => {
  const randomSuffix = Date.now();
  const firstName = `Test${randomSuffix}`;
  const lastName = 'User';
  const email = `testuser${randomSuffix}@example.com`;
  const phone = '5551234567';
  const password = 'P@ssw0rd123!';

  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.click('text=Register here');
  await expect(page).toHaveURL(/auth\/register/);

  await page.fill('input[placeholder="First Name"]', firstName);
  await page.fill('input[placeholder="Last Name"]', lastName);
  await page.fill('input[placeholder="email@example.com"]', email);
  await page.fill('input[placeholder="enter your number"]', phone);
  await page.selectOption('select', { label: 'Engineer' });
  await page.click('label:has-text("Male")');
  await page.fill('input[placeholder="Passsword"]', password);
  await page.fill('input[placeholder="Confirm Passsword"]', password);
  await page.check('input[type="checkbox"]');

  await expect(page.locator('button:has-text("Register")')).toBeVisible();
  await page.click('button:has-text("Register")');

  await page.waitForURL(/auth\/login|client\//, { timeout: 10000 });
  await expect(page.locator('text=Already have an account? Login here')).toBeVisible();
});