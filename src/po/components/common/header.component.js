import BaseComponent from "./base.component";

class HeaderComponent extends BaseComponent {

    constructor() {
        super('//div[@data-test-id="local-navigation-bar"]')
        this.dropdownNavMenuSelector = '//div[@data-test-id="dropdown-nav-menu"]';
    }

    get dropMenu() {
        return $(this.dropdownNavMenuSelector);
    }

    /**
     * @param menuItem {'products' | 'consideringContacts' | 'wearAndCare' | 'eyeHealthRecources' | 'getContacts'}
     */
    firstLevelMenuItem(menuItem) {
        const selectors = {
            products: '//a[@data-test-id="first-level-menu-item-0"]',
            consideringcontacts: '//a[@data-test-id="first-level-menu-item-1"]',
            wearandcare: '//a[@data-test-id="first-level-menu-item-2"]',
            eyehealthrecources: '//a[@data-test-id="first-level-menu-item-3"]',
            getcontacts: '//a[@data-test-id="first-level-menu-item-4"]'
        };
        const selector = selectors[menuItem.toLowerCase()];
        if (!selector) {
            throw new Error(`No selector found for menu item: ${menuItem}`);
        }
        return this.rootEl.$(selector);
    }

    /**
     * @param link {'allProducts' | 'productQuiz' | 'typesOfContacts'}
     */
    productsLink(link) {
        const selectors = {
            allproducts: '(//a[@data-test-id="nav-link"])[1]',
            productquiz: '(//a[@data-test-id="nav-link"])[2]',
            typesofcontacts: '(//a[@data-test-id="nav-link"])[3]'
        }
        const selector = selectors[link.toLowerCase()];
        if (!selector) {
            throw new Error(`No selector found for Products link: ${link}`);
        }
        return this.dropMenu.$(selector);
    }

    /**
     * @param link {'howToGet' | 'comfortPromise' | 'getFreeTrial' | 'prepareFor' | 'findDoctor'}
     */
    getContactsLink(link) {
        const selectors = {
            howtoget: '(//a[@data-test-id="nav-link"])[1]',
            comfortpromise: '(//a[@data-test-id="nav-link"])[2]',
            getfreetrial: '(//a[@data-test-id="nav-link"])[3]',
            preparefor: '(//a[@data-test-id="nav-link"])[4]',
            finddoctor: '(//a[@data-test-id="nav-link"])[5]'
        }
        const selector = selectors[link.toLowerCase()];
        if (!selector) {
            throw new Error(`No selector found for Get Contacts link: ${link}`);
        }
        return this.dropMenu.$(selector);
    }
}

export default HeaderComponent;