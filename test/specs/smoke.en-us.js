import { browser, expect } from "@wdio/globals";

const homePageUrlEnUs = 'https://www.acuvue.com/en-us/';
const ECPLocatorPageUrlEnUs = 'https://www.acuvue.com/en-us/get-contacts/find-an-eye-doctor/';
const productPageUrlEnUs = 'https://www.acuvue.com/en-us/products/';
const freeTrialPageUrlEnUs = 'https://www.acuvue.com/en-us/get-contacts/free-trial-contact-lenses/';

browser.addCommand("waitForAndClick", async function () {
    await this.waitForDisplayed({
        timeout: 5000,
        interval: 500
    });
    await this.click();
}, true);

describe('Open Homepage and close Cookie banner', () => {
    it('Cookie banners appears on Home page', async () => {
        await browser.url(homePageUrlEnUs);

        const cookieBanner = await $('div[aria-label="Cookie banner"]');
        await expect(cookieBanner).toBeDisplayed();
    });

    it('Closing Cookie banner', async () => {
        const cookieBanner = await $('div[aria-label="Cookie banner"]');
        const closeCookieBannerButton = await $('button.banner-close-button');

        await closeCookieBannerButton.waitForAndClick();
        expect(cookieBanner).not.toBeDisplayed();
    });
});

describe('Free Trial form required fields validation', () => {
    it('Navigate to Free Trial form', async () => {        
        await $('a[aria-label="Get Contacts"]').waitForAndClick();

        const dropdownNavMenu = await $('//div[@data-test-id="dropdown-nav-menu"]');
        await expect(dropdownNavMenu).toBeDisplayed();

        await $('a[aria-label="Get a Free[^*] Trial"]').waitForAndClick();
        await expect(browser).toHaveUrl(freeTrialPageUrlEnUs);
    });

    it('Verify Email wrong format validation error message is displayed', async () => {
        await $('//div[@data-test-id="free-trial-form"]//input[@data-test-id="email"]').setValue('@mail.com');
        const emailValidationErrorMessage = 
            await $('div[data-test-id="free-trial-form"] div[data-test-id="email-field-error-message"]');
        await expect(emailValidationErrorMessage).not.toBeDisplayed();

        await $('//div[@data-test-id="free-trial-form"]//input[@data-test-id="lastName"]').waitForAndClick();
        await expect(emailValidationErrorMessage).toBeDisplayed();
    });

    it('Verify Email wrong format validation error message text', async () => {
        const emailValidationErrorMessage = 
            await $('//div[@data-test-id="free-trial-form"]//div[@data-test-id="email-field-error-message"]');
    
        await expect(emailValidationErrorMessage).
            toHaveText("Invalid format for email");
    });
});

describe('ECP Locator search', () => {
    it('Navigate to ECP Locator page', async () => {
        await browser.url(homePageUrlEnUs);
        await $('a[aria-label="Get Contacts"]').waitForAndClick();

        const dropdownNavMenu = await $('//div[@data-test-id="dropdown-nav-menu"]');
        await expect(dropdownNavMenu).toBeDisplayed();

        await $('a[aria-label="Find an Eye Doctor"]').waitForAndClick();
        await expect(browser).toHaveUrl(expect.stringContaining(ECPLocatorPageUrlEnUs));
    });

    it('Perform search on ECP locator page', async () => {
        await $('[data-test-id="search-form_search-input"]').addValue('NY');
        await $('[data-test-id="autosuggest-input-submit-button"]').waitForAndClick();
    });

    it('Search result cards are displayed', async () => {
        const firstSearchResultsCard = await $$('//div[@data-test-id="search-results-container"]')[0];
        await expect(firstSearchResultsCard).toBeDisplayed();
    });
});

describe('Step 1 of Complaint form saves inputted data', () => {
 
    //variables to input data and to verify the data is saved
    const firstName = 'John';
    const lastName = 'Doe';
    const email = 'example@email.com';
    const phone = '1234567890';
    const addressOne = '4358 Quiet Valley Lane';
    const addressTwo = '270 Hannah Street';
    const city = 'New York';
    const zipCode = '12345'; 
    
    it('Navigate to Complaint form', async () => {
        await $('//*[@data-test-id="nav-link"]/*[text()="Contact Us"]').waitForAndClick();
        await $('//*[@data-test-id="link"]/*[text()="Complaint"]').waitForAndClick();
    });

    it('Fill out fields on Complaint form Step 1', async () => {
        await $('input[data-test-id="firstName"').addValue(firstName);
        await $('input[data-test-id="lastName"').addValue(lastName);
        await $('input[data-test-id="email"').addValue(email);
        await $('input[data-test-id="phone"').addValue(phone);
        await $('input[data-test-id="addressOne"').addValue(addressOne);
        await $('input[data-test-id="addressTwo"').addValue(addressTwo);
        await $('input[data-test-id="city"').addValue(city);
        await $('input[data-test-id="zipCode"').addValue(zipCode);

        await $('[data-test-id="complaint-form"] [data-test-id="country"]').waitForAndClick();
        await $('[data-test-id="complaint-form"] [data-test-id="dropdown-option-0"]').waitForAndClick();
    });

    it('Navigate to Step 2', async () => {
        await $('[data-test-id="complaint-form"] [data-test-id="next"]').waitForAndClick();

        const stepTwoTittle = await $('[data-test-id="complaint-form"] [data-test-id="common-header-title"] span');
        await expect(stepTwoTittle).toHaveText('Step 2: Detailed Information');
    });

    it('Return to step 1 and verify inputted data is saved', async () => {
        await $('[data-test-id="complaint-form"] [data-test-id="back"]').waitForAndClick();

        const stepTwoTittle = await $('[data-test-id="complaint-form"] [data-test-id="common-header-title"] span');
        await expect(stepTwoTittle).toHaveText('Step 1: Contact Information');

        await expect($('input[data-test-id="firstName"')).toHaveValue(firstName);
        await expect($('input[data-test-id="lastName"')).toHaveValue(lastName);
        await expect($('input[data-test-id="email"')).toHaveValue(email);

        const phoneInputValue = await $('input[data-test-id="phone"]').getValue();
        const phoneWithoutMask = phoneInputValue.replace(/\D/g, '');
        expect(phoneWithoutMask).toEqual(phone);

        await expect($('input[data-test-id="addressOne"')).toHaveValue(addressOne);
        await expect($('input[data-test-id="addressTwo"')).toHaveValue(addressTwo);
        await expect($('input[data-test-id="city"')).toHaveValue(city);
        await expect($('input[data-test-id="zipCode"')).toHaveValue(zipCode);
    });
});

describe('Product detail page', () => {
    it('Navigate to Product page', async () => {
        await $('//a[@aria-label="Products"]').waitForAndClick();

        const dropdownNavMenu = await $('[data-test-id="dropdown-nav-menu"]');
        await expect(dropdownNavMenu).toBeDisplayed();

        await $('a[aria-label="All Products"]').waitForAndClick();
        await expect(browser).toHaveUrl(expect.stringContaining(productPageUrlEnUs));
    });

    it('Product Filters are displayed on Product page', async () => {
        const productFamilyDropdown = await $('button[data-test-id="product-family"]');
        const conditionDropdown = await $('button[data-test-id="condition"]');
        const needStateDropdown = await $('button[data-test-id="need-state"]');
        const replacementScheduleDropdown = await $('button[data-test-id="replacement-schedule"]');

        await expect(productFamilyDropdown).toBeDisplayed();
        await expect(conditionDropdown).toBeDisplayed();
        await expect(needStateDropdown).toBeDisplayed();
        await expect(replacementScheduleDropdown).toBeDisplayed();
    });

    it('Navigate to and verify Product page', async () => {
        const firstProductCard = await $$('[data-test-id="product-card-container"]')[0];
        const firstProductTitleElement = await $$('[data-test-id="product-card-text"]>span')[0];
        const firstProductTitleText = await firstProductTitleElement.getText();

        await firstProductCard.waitForAndClick();

        await expect(browser).toHaveTitle(expect.stringContaining(firstProductTitleText));
        const bannerTitle = await $('[data-test-id="banner-headline"] > span');
        await expect(bannerTitle).toHaveText(expect.stringContaining(firstProductTitleText));
    });
});