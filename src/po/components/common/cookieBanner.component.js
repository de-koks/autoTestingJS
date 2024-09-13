import BaseComponent from "./base.component";

class CookieBannerComponent extends BaseComponent{

    constructor() {
        super('div[aria-label="Cookie banner"]')
    }

    async close() {
        await $('button.banner-close-button').click();
    }
}

export default CookieBannerComponent;