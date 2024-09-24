import { Given, When } from "@wdio/cucumber-framework";
import ContactUsPage from "../po/pages/contactUs.page";
import ComplaintFormPage from "../po/pages/complaintForm.page";

browser.addCommand("waitScrollClick", async function () {
    await this.waitForDisplayed({
        timeout: 5000,
        interval: 500
    });
    await this.scrollIntoView({ block: 'center', inline: 'center' });
    await this.click();
}, true);

const pages = {
    contactuspage: new ContactUsPage(),
    complaintformpage: new ComplaintFormPage()
}

const contactUsPageLinks ={
    complaint: new ContactUsPage().complaintLink
}

Given('I open {string} page', function(pageName) {
    pageName += 'page';
    const cleanedPageName = pageName.replace(/\s+/g, '').toLowerCase();
    if (!pages[cleanedPageName]) {
        throw new Error(`Page not found: ${pageName}`);
    }
    return pages[cleanedPageName].open();
});

When('I close cookie banner', () => {
    return pages.contactuspage.cookieBanner.close();
});

When('I click {string} link on {string} page', (linkName, pageName) => {
    linkName = linkName.toLowerCase();
    if (!contactUsPageLinks[linkName]) {
        throw new Error(`Link ${linkName} not found on ${pageName} page`);
    }
    pageName += 'page';
    const cleanedPageName = pageName.replace(/\s+/g, '').toLowerCase();
    if (!pages[cleanedPageName]) {
        throw new Error(`Page not found: ${pageName}`);
    }
    return pages[cleanedPageName].links[linkName].waitScrollClick();
});