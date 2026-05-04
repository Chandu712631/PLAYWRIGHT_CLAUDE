const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am on the registration page', async function () {
  await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await this.page.click('text=Register here');
  await expect(this.page).toHaveURL(/auth\/register/);
});

When('I fill in valid registration details', async function () {
  const randomSuffix = Date.now();
  this.registrationData = {
    firstName: `Test${randomSuffix}`,
    lastName: 'User',
    email: `testuser${randomSuffix}@example.com`,
    phone: '5551234567',
    password: 'P@ssw0rd123!',
  };

  await this.page.fill('input[placeholder="First Name"]', this.registrationData.firstName);
  await this.page.fill('input[placeholder="Last Name"]', this.registrationData.lastName);
  await this.page.fill('input[placeholder="email@example.com"]', this.registrationData.email);
  await this.page.fill('input[placeholder="enter your number"]', this.registrationData.phone);
  await this.page.selectOption('select', { label: 'Engineer' });
  await this.page.click('label:has-text("Male")');
  await this.page.fill('input[placeholder="Passsword"]', this.registrationData.password);
  await this.page.fill('input[placeholder="Confirm Passsword"]', this.registrationData.password);
  await this.page.check('input[type="checkbox"]');
});

When('I submit the registration form', async function () {
  await expect(this.page.locator('button:has-text("Register")')).toBeVisible();
  await this.page.click('button:has-text("Register")');
});

Then('I should see the login page', async function () {
  await this.page.waitForURL(/auth\/login|client\//, { timeout: 10000 });
  await expect(this.page.locator('text=Already have an account? Login here')).toBeVisible();
});
