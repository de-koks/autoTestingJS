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
        await $('a[aria-label="Get Contacts"]').click();

        const dropdownNavMenu = await $('//div[@data-test-id="dropdown-nav-menu"]');
        await expect(dropdownNavMenu).toBeDisplayed();

        await $('a[aria-label="Find an Eye Doctor"]').click();
        await expect(browser).toHaveUrl(expect.stringContaining(ECPLocatorPageUrlEnUs));
    });

    it('Perform search on ECP locator page', async () => {
        await $('[data-test-id="search-form_search-input"]').addValue('NY');
        await $('[data-test-id="autosuggest-input-submit-button"]').click();
    });

    it('Search results counter is displayed', async () => {
        const loadingSpinner = await $('[data-test-id="loading-spinner-container"]');
        await loadingSpinner.waitForDisplayed({ reverse: true });

        const searchResultsCounter = await $('[data-test-id="search-results_results-count"]');
        await expect(searchResultsCounter).toBeDisplayed();
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
        await $('//*[@data-test-id="nav-link"]/*[text()="Contact Us"]').click();
        await $('//*[@data-test-id="link"]/*[text()="Complaint"]').click();
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

        await $('[data-test-id="complaint-form"] [data-test-id="country"]').click();
        await $('[data-test-id="complaint-form"] [data-test-id="dropdown-option-0"]').click();
    });

    it('Navigate to Step 2', async () => {
        await $('[data-test-id="complaint-form"] [data-test-id="next"]').click();

        const stepTwoTittle = await $('[data-test-id="complaint-form"] [data-test-id="common-header-title"] span');
        await expect(stepTwoTittle).toHaveText('Step 2: Detailed Information');
    });

    it('Return to step 1 and verify inputted data is saved', async () => {
        await $('[data-test-id="complaint-form"] [data-test-id="back"]').click();

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

describe('Filtering products on Product page', () => {
    it('Navigate to Product page', async () => {
        await $('//a[@aria-label="Products"]').click();

        const dropdownNavMenu = await $('[data-test-id="dropdown-nav-menu"]');
        await expect(dropdownNavMenu).toBeDisplayed();

        await $('a[aria-label="All Products"]').click();
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

    it('Filter products by Product Family', async () => {
        const productFamilyDropdown = await $('button[data-test-id="product-family"]');
        await productFamilyDropdown.scrollIntoView();
        await productFamilyDropdown.click();

        const productFamilyOptions = await $$('[data-test-id="select-options-container"] button');

        //select every option in 'Product Family' filter one by one
        for (let filterOption of productFamilyOptions) {

            //enable current option
            await filterOption.click();
            const currentSelectedOptionName = await filterOption.getAttribute('name');

            //close 'Product Family' dropdown
            //await productFamilyDropdown.click();

            //check that product name on each card matches currently selected filter option
            const filteredProducts = await $$('//h3[@data-test-id="product-card-text"]//span');
            for (let product of filteredProducts) {
                await expect(product).toHaveText(expect.stringContaining(currentSelectedOptionName));
            }

            //open again 'Product Family' dropdown and disable option
            //await productFamilyDropdown.click();
            await filterOption.click();
        }

        //close 'Product Family' dropdown
        //await productFamilyDropdown.click();
    });
});