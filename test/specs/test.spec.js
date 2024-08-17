const { browser, expect } = require("@wdio/globals");

describe('Test suit', () => {

    it('First test', async () => {
        await browser.url("https://acuvue.com/en-us/");
        const homePageTitle = await browser.getTitle();

        expect(homePageTitle).toEqual("Homepage/Start Here - ACUVUE® Brand Contact Lenses");
    });
});