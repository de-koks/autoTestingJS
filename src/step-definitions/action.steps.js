import { Given, When } from "@wdio/cucumber-framework";
import ContactUsPage from "../po/pages/contactUs.page";
import ComplaintFormPage from "../po/pages/complaintForm.page";

// const contactuspage = new ContactUsPage();
// const complaintformpage = new ComplaintFormPage();
const pages = {
    contactuspage: new ContactUsPage(),
    complaintformpage: new ComplaintFormPage()
}

Given('I open {string} page', function(pageName) {
    pageName += 'page';
    const cleanedPageName = pageName.replace(/\s+/g, '').toLowerCase();
    return pages[cleanedPageName].open();
});

When('I close cookie banner', () => {
    return pages.contactuspage.cookieBanner.close();
});