import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';

import LoginPage, { login as _login } from '../pageobjects/login.page';
import { flashAlert } from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await _login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(flashAlert).toBeExisting();
    await expect(flashAlert).toHaveText(expect.stringContaining(message));
});

