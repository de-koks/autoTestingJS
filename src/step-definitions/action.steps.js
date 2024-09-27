import { Given, When } from "@wdio/cucumber-framework";
import { pages } from "../po/pages/index";


browser.addCommand("waitScrollClick", async function () {
    await this.waitForDisplayed({
        timeout: 5000,
        interval: 500
    });
    await this.scrollIntoView({ block: 'center', inline: 'center' });
    await this.click();
}, true);

Given('I open {string} page', function(pageName) {
    return pages(pageName).open();
});

When('I close cookie banner', () => {
    return pages('contactUsPage').cookieBanner.close();
});

When('I click {string} link on {string} page', (linkName, pageName) => {
    return pages(pageName).links(linkName).waitScrollClick();
});

When('I set {string} value to {string} field on Complaint form Step 1', async (value, field) => {
    await pages("complaintFormPage").complaintForm.stepOneField(field).addValue(value);
});