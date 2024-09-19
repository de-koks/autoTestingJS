import { browser, expect } from "@wdio/globals";
import HomePage from "../po/pages/home.page";
import FreeTrialFormPage from "../po/pages/freeTrialForm.page";
import ECPLocatorPage from "../po/pages/ecpLocator.page";
import ECPDetailPage from "../po/pages/ecpDetail.page";
import ContactUsPage from "../po/pages/contactUs.page";
import ComplaintFormPage from "../po/pages/complaintForm.page";
import ProductsPage from "../po/pages/products.page";
import ProductDetailPage from "../po/pages/productDetail.page";

const homePage = new HomePage();
const freeTrialFromPage = new FreeTrialFormPage();
const ecpLocatorPage = new ECPLocatorPage();
const ecpDetailPage = new ECPDetailPage();
const contactUsPage = new ContactUsPage();
const complaintFormPage = new ComplaintFormPage();
const productPage = new ProductsPage();
const productDetailPage = new ProductDetailPage();

//const homePageUrlEnUs = 'https://www.acuvue.com/en-us/';
//const ECPLocatorPageUrlEnUs = 'https://www.acuvue.com/en-us/get-contacts/find-an-eye-doctor/';
//const productPageUrlEnUs = 'https://www.acuvue.com/en-us/products/';
// const freeTrialPageUrlEnUs = 'https://www.acuvue.com/en-us/get-contacts/free-trial-contact-lenses/';

browser.addCommand("waitScrollClick", async function () {
    await this.waitForDisplayed({
        timeout: 5000,
        interval: 500
    });
    await this.scrollIntoView({ block: 'center', inline: 'center' });
    await this.click();
}, true);

describe('Open Homepage and close Cookie banner', () => {
    it('Cookie banners appears on Home page', async () => {
        await homePage.open();

        // const cookieBanner = await $('div[aria-label="Cookie banner"]');
        // await expect(cookieBanner).toBeDisplayed();
        await expect(homePage.cookieBanner.rootEl).toBeDisplayed();
    });

    it('Closing Cookie banner', async () => {
        // const cookieBanner = await $('div[aria-label="Cookie banner"]');
        // const closeCookieBannerButton = await $('button.banner-close-button');
        // await closeCookieBannerButton.waitScrollClick();
        await homePage.cookieBanner.close();

        // expect(cookieBanner).not.toBeDisplayed();
        expect(homePage.cookieBanner.rootEl).not.toBeDisplayed();
    });
});

describe('Free Trial form required fields validation', () => {
    it('Navigate to Free Trial form', async () => {
        // await $('[data-test-id="first-level-menu-item-4"]').waitScrollClick();             
        await homePage.header.firstLevelMenuItem('getContacts').waitScrollClick();   

        // const dropdownNavMenu = await $('//div[@data-test-id="dropdown-nav-menu"]');
        // await expect(dropdownNavMenu).toBeDisplayed();
        await expect(homePage.header.dropMenu).toBeDisplayed();

        // await $('a[aria-label="Get a Free[^*] Trial"]').waitScrollClick();
        await homePage.header.getContactsLink('getFreeTrial').waitScrollClick();
        
        // await expect(browser).toHaveUrl(freeTrialPageUrlEnUs);
        await expect(browser).toHaveUrl(expect.stringContaining(freeTrialFromPage.url));
    });

    it('Verify Email wrong format validation error message is displayed', async () => {
        // await $('//div[@data-test-id="free-trial-form"]//input[@data-test-id="email"]').waitScrollClick();
        await freeTrialFromPage.freeTrialForm.field('email').waitScrollClick();

        // await $('//div[@data-test-id="free-trial-form"]//input[@data-test-id="email"]').setValue('@mail.com');
        await freeTrialFromPage.freeTrialForm.field('email').setValue('@mail.com');

        // const emailValidationErrorMessage = 
        //     await $('div[data-test-id="free-trial-form"] div[data-test-id="email-field-error-message"]');
        // await expect(emailValidationErrorMessage).not.toBeDisplayed();
        await expect(freeTrialFromPage.freeTrialForm.fieldErrorMessage('email')).not.toBeDisplayed();

        // await $('//div[@data-test-id="free-trial-form"]//input[@data-test-id="lastName"]').waitScrollClick();
        await freeTrialFromPage.freeTrialForm.field('firstName').waitScrollClick();

        // await expect(emailValidationErrorMessage).toBeDisplayed();
        await expect(freeTrialFromPage.freeTrialForm.fieldErrorMessage('email')).toBeDisplayed();
    });

    it('Verify Email wrong format validation error message text', async () => {
        const emailValidationErrorMessage = 
            // await $('//div[@data-test-id="free-trial-form"]//div[@data-test-id="email-field-error-message"]');    
        // await expect(emailValidationErrorMessage).toHaveText("Invalid format for email");
        await expect(freeTrialFromPage.freeTrialForm.fieldErrorMessage('email')).toHaveText("Invalid format for email");

        // const errorMessageFontColor = await emailValidationErrorMessage.execute((element) => {
        //     return window.getComputedStyle(element).color;
        // });
        const errorMessageFontColor = await freeTrialFromPage.freeTrialForm.fieldErrorMessage('email').execute((element) => {
            return window.getComputedStyle(element).color;
        });
        expect(errorMessageFontColor).toEqual('rgb(221, 28, 20)');
    });
    
    it('Verify Email field has border highlighted in red', async () => {
        // const emailField = await $('//div[@data-test-id="free-trial-form"]//input[@data-test-id="email"]');
        // const borderValue = await emailField.execute((element) => {
        //     return window.getComputedStyle(element).border;
        // });
        const borderValue = await freeTrialFromPage.freeTrialForm.field('email').execute((element) => {
            return window.getComputedStyle(element).border;
        });
        
        expect(borderValue).toEqual('2px solid rgb(221, 28, 20)');
    });
});

describe('Perform ECP Locator search', () => {
    it('Navigate to ECP Locator page', async () => {
        // await $('a[aria-label="Get Contacts"]').waitScrollClick();
        await freeTrialFromPage.header.firstLevelMenuItem('getContacts').waitScrollClick();

        // const dropdownNavMenu = await $('//div[@data-test-id="dropdown-nav-menu"]');
        // await expect(dropdownNavMenu).toBeDisplayed();
        await expect(freeTrialFromPage.header.dropMenu).toBeDisplayed();

        // await $('a[aria-label="Find an Eye Doctor"]').waitScrollClick();
        await freeTrialFromPage.header.getContactsLink('findDoctor').waitScrollClick();

        // await expect(browser).toHaveUrl(expect.stringContaining(ECPLocatorPageUrlEnUs));
        await expect(browser).toHaveUrl(expect.stringContaining(ecpLocatorPage.url));
    });

    it('Perform search on ECP locator page', async () => {
        // await $('[data-test-id="search-form_search-input"]').addValue('NY');
        await ecpLocatorPage.ecpLocator.searchInput.addValue('NY');

        // await $('[data-test-id="autosuggest-input-submit-button"]').waitScrollClick();
        await ecpLocatorPage.ecpLocator.searchBtn.waitScrollClick();
    });

    it('Search results are displayed', async () => {
        // const firstSearchResultsCard = await $$('//div[@data-test-id="search-results-container"]')[0];
        // await firstSearchResultsCard.waitForDisplayed({
        //     timeout: 10000,
        //     interval: 500
        // });
        await ecpLocatorPage.ecpLocator.searchResultCards[0].waitForDisplayed({
            timeout: 10000,
            interval: 1000
        });

        // const searchResultCounter = await $('div[data-test-id="search-results_results-count"]');
        // await expect(searchResultCounter).toBeDisplayed();
        await expect(ecpLocatorPage.ecpLocator.searchResultCounter).toBeDisplayed();
    });
});

describe('Applying filters to ECP Locator search results', async () => {

    // function extractSearchResultNumber(searchResultCounterText) {
    //     const match = searchResultCounterText.match(/(\d+)\s+Results$/);
    //     if (match && match[1]) {
    //       return parseInt(match[1], 10);
    //     }
    //     throw new Error('The text from the search result counter does not match the expected pattern');
    // }

    it('Apply "Preferred" filter', async () => {
        // const searchResultCounter = await $('div[data-test-id="search-results_results-count"]');
        // const searchResultCounterTextWithoutAppliedFilters = await searchResultCounter.getText();
        // const searchResultNumberWithoutAppliedFilters = extractSearchResultNumber(searchResultCounterTextWithoutAppliedFilters);
        const resultNumberBeforeFilter = await ecpLocatorPage.ecpLocator.extractSearchResultNumber();

        // const preferredFilterCheckbox = await $('div[data-test-id="checkbox-buttonacuvue-preferred"]');
        // preferredFilterCheckbox.waitScrollClick();
        await ecpLocatorPage.ecpLocator.acuvuePreferredCheckbox.waitScrollClick();

        // const firstSearchResultsCard = await $$('//div[@data-test-id="search-results-container"]')[0];
        // await firstSearchResultsCard.waitForDisplayed({
        //     timeout: 10000,
        //     interval: 500
        // });
        await ecpLocatorPage.ecpLocator.searchResultCards[0].waitForDisplayed({
            timeout: 10000,
            interval: 1000
        });

        // const searchResultCounterTextPreferredFilterApplied = await searchResultCounter.getText();
        // const searchResultNumberPreferredFilterApplied = extractSearchResultNumber(searchResultCounterTextPreferredFilterApplied);
        const resultNumberAfterFilter = await ecpLocatorPage.ecpLocator.extractSearchResultNumber();

        //number of results with applied filter should be less than number without filters
        // expect(searchResultNumberPreferredFilterApplied < searchResultNumberWithoutAppliedFilters).toBe(true);
        expect(resultNumberAfterFilter < resultNumberBeforeFilter).toBe(true);

        // await preferredFilterCheckbox.waitScrollClick();
        await ecpLocatorPage.ecpLocator.acuvuePreferredCheckbox.waitScrollClick();
    });
});

describe('ECP Detail page', () => {
    it('Navigate to ECP Detail page, verify clinic title', async () => {
        // const firstClinicTitleElement = await $('(//h4[@data-test-id="search-result_title"])[1]');
        // const firstClinicTitle = await firstClinicTitleElement.getText();
        // const searchResultClinicTitle = await ecpLocatorPage.ecpLocator.searchResultTitles[0];

        // await firstClinicTitleElement.waitScrollClick();
        // await searchResultClinicTitle.waitScrollClick();
        const firstClinicTitle = await ecpLocatorPage.ecpLocator.searchResultTitles[0].getText();
        await ecpLocatorPage.ecpLocator.searchResultTitles[0].waitScrollClick();

        // await browser.waitUntil( async () => await $('div[data-test-id="ecp-details-section"]').isDisplayed(),
        //     { timeout: 5000, interval: 500, timeoutMsg: "ECP details section was not loaded" }
        // );
        await browser.waitUntil( async () => await ecpDetailPage.ecpDetails.rootEl.isDisplayed(),
        { timeout: 5000, interval: 500, timeoutMsg: "ECP details section was not loaded" }
        );
        
        // const ecpDetailClinicTitleElement = await $('h3[data-test-id="ecp-details-info-section-title"]>*');
        // await expect(ecpDetailClinicTitleElement).toHaveText(firstClinicTitle);
        await expect(ecpDetailPage.ecpDetails.ecpTitle).toHaveText(firstClinicTitle);

        // const ecpDetailCliniTitleFontSize = await ecpDetailClinicTitleElement.execute((element) => {
        //     return window.getComputedStyle(element).fontSize;
        // });
        const ecpTitleFontSize = await ecpDetailPage.ecpDetails.ecpTitle.execute((element) => {
            return window.getComputedStyle(element).fontSize;
        });
        
        // expect(ecpDetailCliniTitleFontSize).toEqual('28px');
        expect(ecpTitleFontSize).toEqual('28px');
    });

    it('Get Directions provides with a Google maps route', async () => {
        // await $('a[data-test-id="get-directions"]').waitScrollClick();
        await ecpDetailPage.ecpDetails.getDirectionsLink.waitScrollClick();
        
        const handles = await browser.getWindowHandles();
        expect(handles.length).toEqual(2);

        await browser.switchToWindow(handles[1]);
        await expect(browser).toHaveUrl(expect.stringContaining('https://www.google.com/maps/dir/'));
        await browser.closeWindow();

        await browser.switchToWindow(handles[0]);
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
        // await $('//*[@data-test-id="nav-link"]/*[text()="Contact Us"]').waitScrollClick();
        await ecpDetailPage.footer.helpAndCareColumnLink('contactUs').waitScrollClick();
        expect(browser).toHaveUrl(expect.stringContaining(contactUsPage.url));

        // await $('//*[@data-test-id="link"]/*[text()="Complaint"]').waitScrollClick();
        await contactUsPage.complaintLink.waitScrollClick();
        expect(browser).toHaveUrl(expect.stringContaining(complaintFormPage.url));
    });

    it('Fill out fields on Complaint form Step 1', async () => {
        // await $('input[data-test-id="firstName"').addValue(firstName);
        await complaintFormPage.complaintForm.stepOneField('firstName').addValue(firstName);
        // await $('input[data-test-id="lastName"').addValue(lastName);
        await complaintFormPage.complaintForm.stepOneField('lastName').addValue(lastName);
        // await $('input[data-test-id="email"').addValue(email);
        await complaintFormPage.complaintForm.stepOneField('email').addValue(email);
        // await $('input[data-test-id="phone"').addValue(phone);
        await complaintFormPage.complaintForm.stepOneField('phone').addValue(phone);
        // await $('input[data-test-id="addressOne"').addValue(addressOne);
        await complaintFormPage.complaintForm.stepOneField('addressOne').addValue(addressOne);
        // await $('input[data-test-id="addressTwo"').addValue(addressTwo);
        await complaintFormPage.complaintForm.stepOneField('addressTwo').addValue(addressTwo);
        // await $('input[data-test-id="city"').addValue(city);
        await complaintFormPage.complaintForm.stepOneField('city').addValue(city);
        // await $('input[data-test-id="zipCode"').addValue(zipCode);
        await complaintFormPage.complaintForm.stepOneField('zipCode').addValue(zipCode);

        // await $('[data-test-id="complaint-form"] [data-test-id="country"]').waitScrollClick();
        // await $('[data-test-id="complaint-form"] [data-test-id="dropdown-option-0"]').waitScrollClick();
        await complaintFormPage.complaintForm.selectRandomCountry();
    });

    it('Navigate to Step 2', async () => {
        // await $('[data-test-id="complaint-form"] [data-test-id="next"]').waitScrollClick();
        await complaintFormPage.complaintForm.nextBtn.waitScrollClick();

        // const stepTwoTittle = await $('[data-test-id="complaint-form"] [data-test-id="common-header-title"] span');
        // await expect(stepTwoTittle).toHaveText('Step 2: Detailed Information');
        await expect(complaintFormPage.complaintForm.formTitle).toHaveText('Step 2: Detailed Information');
    });

    it('Return to step 1 and verify inputted data is saved', async () => {
        // await $('[data-test-id="complaint-form"] [data-test-id="back"]').waitScrollClick();
        await complaintFormPage.complaintForm.backBtn.waitScrollClick();

        // const stepTwoTittle = await $('[data-test-id="complaint-form"] [data-test-id="common-header-title"] span');
        // await expect(stepTwoTittle).toHaveText('Step 1: Contact Information');
        await expect(complaintFormPage.complaintForm.formTitle).toHaveText('Step 1: Contact Information');

        // await expect($('input[data-test-id="firstName"')).toHaveValue(firstName);
        await expect(complaintFormPage.complaintForm.stepOneField('firstName')).toHaveValue(firstName);
        // await expect($('input[data-test-id="lastName"')).toHaveValue(lastName);
        await expect(complaintFormPage.complaintForm.stepOneField('lastName')).toHaveValue(lastName);
        // await expect($('input[data-test-id="email"')).toHaveValue(email);
        await expect(complaintFormPage.complaintForm.stepOneField('email')).toHaveValue(email);

        // const phoneInputValue = await $('input[data-test-id="phone"]').getValue();
        const phoneWithMask = await complaintFormPage.complaintForm.stepOneField('phone').getValue();
        // const phoneWithoutMask = phoneInputValue.replace(/\D/g, '');
        const phoneWithoutMask = phoneWithMask.replace(/\D/g, '');
        expect(phoneWithoutMask).toEqual(phone);

        // await expect($('input[data-test-id="addressOne"')).toHaveValue(addressOne);
        await expect(complaintFormPage.complaintForm.stepOneField('addressOne')).toHaveValue(addressOne);
        // await expect($('input[data-test-id="addressTwo"')).toHaveValue(addressTwo);
        await expect(complaintFormPage.complaintForm.stepOneField('addressTwo')).toHaveValue(addressTwo);
        // await expect($('input[data-test-id="city"')).toHaveValue(city);
        await expect(complaintFormPage.complaintForm.stepOneField('city')).toHaveValue(city);
        // await expect($('input[data-test-id="zipCode"')).toHaveValue(zipCode);
        await expect(complaintFormPage.complaintForm.stepOneField('zipCode')).toHaveValue(zipCode);
    });
});

describe('Product detail page', () => {
    it('Navigate to Product page', async () => {
        // await browser.execute(() => window.scrollTo(0, 0));
        // await $('//a[@aria-label="Products"]').waitScrollClick();
        await complaintFormPage.header.firstLevelMenuItem('products').waitScrollClick();

        // const dropdownNavMenu = await $('[data-test-id="dropdown-nav-menu"]');
        // await expect(dropdownNavMenu).toBeDisplayed();
        await expect(complaintFormPage.header.dropMenu).toBeDisplayed();

        // await $('a[aria-label="All Products"]').waitScrollClick();
        await complaintFormPage.header.productsLink('allProducts').waitScrollClick();

        // await expect(browser).toHaveUrl(expect.stringContaining(productPageUrlEnUs));
        await expect(browser).toHaveUrl(expect.stringContaining(productPage.url));
    });

    it('Product Filters are displayed on Product page', async () => {
        // const productFamilyDropdown = await $('button[data-test-id="product-family"]');
        // const conditionDropdown = await $('button[data-test-id="condition"]');
        // const needStateDropdown = await $('button[data-test-id="need-state"]');
        // const replacementScheduleDropdown = await $('button[data-test-id="replacement-schedule"]');

        // await expect(productFamilyDropdown).toBeDisplayed();
        // await expect(conditionDropdown).toBeDisplayed();
        // await expect(needStateDropdown).toBeDisplayed();
        // await expect(replacementScheduleDropdown).toBeDisplayed();

        await expect(productPage.productsCatalogue.productFamilyBtn).toBeDisplayed();
        await expect(productPage.productsCatalogue.conditioBtn).toBeDisplayed();
        await expect(productPage.productsCatalogue.needStateBtn).toBeDisplayed();
        await expect(productPage.productsCatalogue.replacementScheduleBtn).toBeDisplayed();
    });

    it('Click on Product card leads to relevant Product Detail page', async () => {
        // const firstProductCard = await $$('[data-test-id="product-card-container"]')[0];
        // const firstProductTitleElement = await $$('[data-test-id="product-card-text"]>span')[0];
        // const firstProductTitleText = await firstProductTitleElement.getText();
        const randomProduct = productPage.productsCatalogue.selectRandomProduct();

        // await firstProductCard.waitScrollClick();
        await productPage.productsCatalogue.productCards[(await randomProduct).index].waitScrollClick();

        // await expect(browser).toHaveTitle(expect.stringContaining(firstProductTitleText));
        // await expect(browser).toHaveTitle(expect.stringContaining((await randomProduct).title));

        // const bannerTitle = await $('[data-test-id="banner-headline"] > span');
        // await expect(bannerTitle).toHaveText(expect.stringContaining(firstProductTitleText));
        await expect(productDetailPage.productHeroBanner.bannerHeadline)
            .toHaveText(expect.stringContaining((await randomProduct).title), { ignoreCase: true });
    });
});
