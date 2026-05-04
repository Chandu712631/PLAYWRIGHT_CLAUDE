const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I open the example page', async function () {
  await this.page.goto('https://example.com');
});

Then('I should see the page title {string}', async function (title) {
  await expect(this.page).toHaveTitle(new RegExp(title));
});

Then('I should see the heading {string}', async function (heading) {
  await expect(this.page.locator('h1')).toHaveText(heading);
});
