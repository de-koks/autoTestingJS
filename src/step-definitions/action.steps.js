import { Given, When } from "@wdio/cucumber-framework";
// import ContactUsPage from "../po/pages/contactUs.page";
// import ComplaintFormPage from "../po/pages/complaintForm.page";
import { pages } from "../po/pages/index";


browser.addCommand("waitScrollClick", async function () {
    await this.waitForDisplayed({
        timeout: 5000,
        interval: 500
    });
    await this.scrollIntoView({ block: 'center', inline: 'center' });
    await this.click();
}, true);

// const pages = {
//     contactuspage: new ContactUsPage(),
//     complaintformpage: new ComplaintFormPage()
// }

// const contactUsPageLinks ={
//     complaint: return pages('contactUsPage').complaintLink
// }

Given('I open {string} page', function(pageName) {
    pageName += 'page';
    const cleanedPageName = pageName.replace(/\s+/g, '');
    return pages(cleanedPageName).open();
});

When('I close cookie banner', () => {
    return pages('contactUsPage').cookieBanner.close();
});

When('I click {string} link on {string} page', (linkName, pageName) => {
    const cleanedPageName = pageName.replace(/\s+/g, '') + 'page';
    return pages(cleanedPageName).links(linkName).waitScrollClick();
});