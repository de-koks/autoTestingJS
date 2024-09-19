import BaseComponent from "./base.component";

class FooterComponent extends BaseComponent {
    constructor() {
        super('//div[@data-test-id="footer-container"]');
        this.secondColumnSelector = '//div[@data-test-id="column-links-column-1"]'
    }

    /**
     * @param link {'contactUs' | 'comfortPromise' | 'FAQ' | 'patientGuides' | 'sitemap' | 'selectLocation'}
     */
    helpAndCareColumnLink(link) {
        const selectors = {
            contactus: '//a[@data-test-id="nav-link"][1]',
            comfortpromise: '//a[@data-test-id="nav-link"][2]',
            faq: '//a[@data-test-id="nav-link"][3]',
            patientguides: '//a[@data-test-id="nav-link"][4]',
            sitemap: '//a[@data-test-id="nav-link"])[5]',
            selectlocation: '//a[@data-test-id="nav-link"][6]'
        }
        const selector = selectors[link.toLowerCase()];
        if (!selector) {
            throw new Error(`No selector found for link: ${link}`);
        }
        return this.rootEl.$(this.secondColumnSelector + selector);
    }
}

export default FooterComponent;