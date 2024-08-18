const { browser, expect } = require("@wdio/globals");

describe('Trial suit', () => {

    it('Navigate to Home page and check page title', async () => {
        await browser.url("https://acuvue.com/en-us/");
        const homePageTitle = await browser.getTitle();

        expect(homePageTitle).toEqual("Homepage/Start Here - ACUVUE® Brand Contact Lenses");
    });

    it('Check Email format validation message', async () => {
        await $('//input[@data-test-id="email"]').setValue('mail.com');
        await $('//input[@data-test-id="lastName"]').click();

        const emailValidationErrorMessage = await $('//div[@data-test-id="email-field-error-message"]');
        expect(await emailValidationErrorMessage.getText()).toEqual('Please enter a valid email');
        //also possible:
        //await expect(emailValidationErrorMessage.getText()).toEqual('Please enter a valid email');
    });
});