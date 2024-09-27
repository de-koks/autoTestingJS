import { Then } from "@wdio/cucumber-framework";
import { pages } from "../po/pages/index";


Then('Current URL corresponds to {string} page', async pageName => {
    // console.log('Config Object:', browser.config);
    // console.log('Base URL:', browser.config.baseUrl);
    const baseUrl = browser.config.baseUrl;
    await expect(browser).toHaveUrl(baseUrl + pages(pageName).url);
});