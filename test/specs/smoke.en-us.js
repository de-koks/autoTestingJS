import { browser, expect } from "@wdio/globals";

const homePageUrlEnUs = 'https://www.acuvue.com/en-us/';
const ECPLocatorPageUrlEnUs = 'https://www.acuvue.com/en-us/get-contacts/find-an-eye-doctor/';
const productPageUrlEnUs = 'https://www.acuvue.com/en-us/products/';
const freeTrialPageUrlEnUs = 'https://www.acuvue.com/en-us/get-contacts/free-trial-contact-lenses/';

describe('Free Trial form required fields validation', () => {
    it('Navigate to Free Trial form', async () => {
        await browser.url(homePageUrlEnUs);
        await $('a[aria-label="Get Contacts"]').click();

        const dropdownNavMenu = await $('//div[@data-test-id="dropdown-nav-menu"]');
        await expect(dropdownNavMenu).toBeDisplayed();

        await $('a[aria-label="Get a Free[^*] Trial"]').click();
        await expect(browser).toHaveUrl(freeTrialPageUrlEnUs);
    });

    it('Verify Email wrong format validation error message is displayed', async () => {
        await $('//div[@data-test-id="free-trial-form"]//input[@data-test-id="email"]').setValue('@mail.com');
        const emailValidationErrorMessage = 
            await $('div[data-test-id="free-trial-form"] div[data-test-id="email-field-error-message"]');
        await expect(emailValidationErrorMessage).not.toBeDisplayed();

        await $('//div[@data-test-id="free-trial-form"]//input[@data-test-id="lastName"]').click();
        await expect(emailValidationErrorMessage).toBeDisplayed();
    });

    it('Verify Email wrong format validation error message properties', async () => {
        const emailValidationErrorMessage = 
            await $('div[data-test-id="free-trial-form"] div[data-test-id="email-field-error-message"]');

        //check that message has red font
        await expect(emailValidationErrorMessage).
            toHaveElementProperty('color', 'rgb(221, 28, 20)');
    
        await expect(emailValidationErrorMessage).
            toHaveText("Invalid format for email");
    });
});

describe('ECP Locator search', () => {
    it('Navigate to ECP Locator page', async () => {
        await browser.url(homePageUrlEnUs);
        await $('a[aria-label="Get Contacts"]').click();

        const dropdownNavMenu = await $('//div[@data-test-id="dropdown-nav-menu"]');
        await expect(dropdownNavMenu).toBeDisplayed();

        await $('a[aria-label="Find an Eye Doctor"]').click();
        await expect(browser).toHaveUrl(expect.stringContaining(ECPLocatorPageUrlEnUs));
    });
});