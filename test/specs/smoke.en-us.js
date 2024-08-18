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

    it('Verify First Name validation error message is displayed', async () => {
        await $('//div[@data-test-id="free-trial-form"]//input[@data-test-id="firstName"]').click();

        const firsNameValidationErrorMessage = 
            await $('div[data-test-id="free-trial-form"] div[data-test-id="first-name-field-error-message"]');
        await expect(firsNameValidationErrorMessage).not.toBeDisplayed();

        await $('//div[@data-test-id="free-trial-form"]//input[@data-test-id="lastName"]').click();
        await expect(firsNameValidationErrorMessage).toBeDisplayed();
    });
});

describe('ECP Locator search', () => {
    it('Navigate to ECP Locator page', async () => {



        //await expect(browser).toHaveUrl(expect.stringContaining(ECPLocatorPageUrlEnUs));
    });
});