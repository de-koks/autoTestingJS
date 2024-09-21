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
        await expect(homePage.cookieBanner.rootEl).toBeDisplayed();
    });

    it('Closing Cookie banner', async () => {
        await homePage.cookieBanner.close();
        expect(homePage.cookieBanner.rootEl).not.toBeDisplayed();
    });
});

describe('Free Trial form required fields validation', () => {
    it('Navigate to Free Trial form', async () => {         
        await homePage.header.firstLevelMenuItem('getContacts').waitScrollClick();   
        await expect(homePage.header.dropMenu).toBeDisplayed();

        await homePage.header.getContactsLink('getFreeTrial').waitScrollClick();
        await expect(browser).toHaveUrl(expect.stringContaining(freeTrialFromPage.url));
    });

    it('Verify Email wrong format validation error message is displayed', async () => {
        await freeTrialFromPage.freeTrialForm.field('email').waitScrollClick();
        await freeTrialFromPage.freeTrialForm.field('email').setValue('@mail.com');
        await expect(freeTrialFromPage.freeTrialForm.fieldErrorMessage('email')).not.toBeDisplayed();

        await freeTrialFromPage.freeTrialForm.field('firstName').waitScrollClick();
        await expect(freeTrialFromPage.freeTrialForm.fieldErrorMessage('email')).toBeDisplayed();
    });

    it('Verify Email wrong format validation error message text', async () => {
        await expect(freeTrialFromPage.freeTrialForm.fieldErrorMessage('email')).toHaveText("Invalid format for email");

        const errorMessageFontColor = await freeTrialFromPage.freeTrialForm.fieldErrorMessage('email').execute((element) => {
            return window.getComputedStyle(element).color;
        });
        expect(errorMessageFontColor).toEqual('rgb(221, 28, 20)');
    });
    
    it('Verify Email field has border highlighted in red', async () => {
        const borderValue = await freeTrialFromPage.freeTrialForm.field('email').execute((element) => {
            return window.getComputedStyle(element).border;
        });       
        expect(borderValue).toEqual('2px solid rgb(221, 28, 20)');
    });
});

describe('Perform ECP Locator search', () => {
    it('Navigate to ECP Locator page', async () => {
        await freeTrialFromPage.header.firstLevelMenuItem('getContacts').waitScrollClick();
        await expect(freeTrialFromPage.header.dropMenu).toBeDisplayed();

        await freeTrialFromPage.header.getContactsLink('findDoctor').waitScrollClick();
        await expect(browser).toHaveUrl(expect.stringContaining(ecpLocatorPage.url));
    });

    it('Perform search on ECP locator page', async () => {
        await ecpLocatorPage.ecpLocator.searchInput.addValue('NY');
        await ecpLocatorPage.ecpLocator.searchBtn.waitScrollClick();
    });

    it('Search results are displayed', async () => {
        await ecpLocatorPage.ecpLocator.searchResultCards[0].waitForDisplayed({
            timeout: 10000,
            interval: 1000
        });
        await expect(ecpLocatorPage.ecpLocator.searchResultCounter).toBeDisplayed();
    });
});

describe('Applying filters to ECP Locator search results', async () => {
    it('Apply "Preferred" filter', async () => {
        const resultNumberBeforeFilter = await ecpLocatorPage.ecpLocator.extractSearchResultNumber();

        await ecpLocatorPage.ecpLocator.acuvuePreferredCheckbox.waitScrollClick();
        await ecpLocatorPage.ecpLocator.searchResultCards[0].waitForDisplayed({
            timeout: 10000,
            interval: 1000
        });

        const resultNumberAfterFilter = await ecpLocatorPage.ecpLocator.extractSearchResultNumber();
        expect(resultNumberAfterFilter < resultNumberBeforeFilter).toBe(true);

        await ecpLocatorPage.ecpLocator.acuvuePreferredCheckbox.waitScrollClick();
    });
});

describe('ECP Detail page', () => {
    it('Navigate to ECP Detail page, verify clinic title', async () => {
        const firstClinicTitle = await ecpLocatorPage.ecpLocator.searchResultTitles[0].getText();
        await ecpLocatorPage.ecpLocator.searchResultTitles[0].waitScrollClick();

        await browser.waitUntil( async () => await ecpDetailPage.ecpDetails.rootEl.isDisplayed(),
        { timeout: 5000, interval: 500, timeoutMsg: "ECP details section was not loaded" }
        );
        await expect(ecpDetailPage.ecpDetails.ecpTitle).toHaveText(firstClinicTitle);

        const ecpTitleFontSize = await ecpDetailPage.ecpDetails.ecpTitle.execute((element) => {
            return window.getComputedStyle(element).fontSize;
        });
        expect(ecpTitleFontSize).toEqual('28px');
    });

    it('Get Directions provides with a Google maps route', async () => {
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
        await ecpDetailPage.footer.helpAndCareColumnLink('contactUs').waitScrollClick();
        expect(browser).toHaveUrl(expect.stringContaining(contactUsPage.url));

        await contactUsPage.complaintLink.waitScrollClick();
        expect(browser).toHaveUrl(expect.stringContaining(complaintFormPage.url));
    });

    it('Fill out fields on Complaint form Step 1', async () => {
        await complaintFormPage.complaintForm.stepOneField('firstName').addValue(firstName);
        await complaintFormPage.complaintForm.stepOneField('lastName').addValue(lastName);
        await complaintFormPage.complaintForm.stepOneField('email').addValue(email);
        await complaintFormPage.complaintForm.stepOneField('phone').addValue(phone);
        await complaintFormPage.complaintForm.stepOneField('addressOne').addValue(addressOne);
        await complaintFormPage.complaintForm.stepOneField('addressTwo').addValue(addressTwo);
        await complaintFormPage.complaintForm.stepOneField('city').addValue(city);
        await complaintFormPage.complaintForm.stepOneField('zipCode').addValue(zipCode);
        await complaintFormPage.complaintForm.selectRandomCountry();
    });

    it('Navigate to Step 2', async () => {
        await complaintFormPage.complaintForm.nextBtn.waitScrollClick();
        await expect(complaintFormPage.complaintForm.formTitle).toHaveText('Step 2: Detailed Information');
    });

    it('Return to step 1 and verify inputted data is saved', async () => {
        await complaintFormPage.complaintForm.backBtn.waitScrollClick();
        await expect(complaintFormPage.complaintForm.formTitle).toHaveText('Step 1: Contact Information');

        await expect(complaintFormPage.complaintForm.stepOneField('firstName')).toHaveValue(firstName);
        await expect(complaintFormPage.complaintForm.stepOneField('lastName')).toHaveValue(lastName);
        await expect(complaintFormPage.complaintForm.stepOneField('email')).toHaveValue(email);

        const phoneWithMask = await complaintFormPage.complaintForm.stepOneField('phone').getValue();
        const phoneWithoutMask = phoneWithMask.replace(/\D/g, '');
        expect(phoneWithoutMask).toEqual(phone);

        await expect(complaintFormPage.complaintForm.stepOneField('addressOne')).toHaveValue(addressOne);
        await expect(complaintFormPage.complaintForm.stepOneField('addressTwo')).toHaveValue(addressTwo);
        await expect(complaintFormPage.complaintForm.stepOneField('city')).toHaveValue(city);
        await expect(complaintFormPage.complaintForm.stepOneField('zipCode')).toHaveValue(zipCode);
    });
});

describe('Product detail page', () => {
    it('Navigate to Product page', async () => {
        await complaintFormPage.header.firstLevelMenuItem('products').waitScrollClick();
        await expect(complaintFormPage.header.dropMenu).toBeDisplayed();
        await complaintFormPage.header.productsLink('allProducts').waitScrollClick();
        await expect(browser).toHaveUrl(expect.stringContaining(productPage.url));
    });

    it('Product Filters are displayed on Product page', async () => {
        await expect(productPage.productsCatalogue.productFamilyBtn).toBeDisplayed();
        await expect(productPage.productsCatalogue.conditioBtn).toBeDisplayed();
        await expect(productPage.productsCatalogue.needStateBtn).toBeDisplayed();
        await expect(productPage.productsCatalogue.replacementScheduleBtn).toBeDisplayed();
    });

    it('Click on Product card leads to relevant Product Detail page', async () => {
        const randomProduct = productPage.productsCatalogue.selectRandomProduct();
        await productPage.productsCatalogue.productCards[(await randomProduct).index].waitScrollClick();

        await expect(productDetailPage.productHeroBanner.bannerHeadline)
            .toHaveText(expect.stringContaining((await randomProduct).title), { ignoreCase: true });
    });
});
