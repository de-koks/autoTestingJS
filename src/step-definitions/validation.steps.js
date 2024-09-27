import { Then } from "@wdio/cucumber-framework";
import { pages } from "../po/pages/index";
import { compareText } from "./utils/compare-text";


Then('Current URL corresponds to {string} page', async pageName => {
    await expect(browser).toHaveUrl(browser.options.baseUrl + pages(pageName).url + '/');
});

Then('Current URL {string} {string} page', async (compareOtion, pageName) => {
    const currentUrl = await browser.getUrl();
    const expectedUrl = browser.options.baseUrl + pages(pageName).url + '/'
    return compareText(expectedUrl, currentUrl, compareOtion);
});