import { Then } from "@wdio/cucumber-framework";
import { pages } from "../po/pages/index";


Then('Current URL corresponds to {string} page', async pageName => {
    const baseUrl = browser.options.baseUrl;
    await expect(browser).toHaveUrl(browser.options.baseUrl + pages(pageName).url + '/');
});