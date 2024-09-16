class HeaderComponent {

    constructor() {
        this.dropdownNavMenuSelector = '[data-test-id="dropdown-nav-menu"]';
    }

    get dropMenu() {
        return $(this.dropdownNavMenuSelector);
    }

    /**
     * @param menuItem {'products' | 'consideringContacts' | 'wearAndCare' | 'eyeHealthRecources' | 'getContacts'}
     */
    firstLevelMenuItem(menuItem) {
        const selectors = {
            products: '[data-test-id="first-level-menu-item-0"]',
            consideringcontacts: '[data-test-id="first-level-menu-item-1"]',
            wearandcare: '[data-test-id="first-level-menu-item-2"]',
            eyehealthrecources: '[data-test-id="first-level-menu-item-3"]',
            getcontacts: '[data-test-id="first-level-menu-item-4"]'
        };
        const selector = selectors[menuItem.toLowerCase()];
        if (!selector) {
            throw new Error(`No selector found for menu item: ${menuItem}`);
        }
        return $(selector);
    }

    /**
     * @param option {'howToGet' | 'comfortPromise' | 'getFreeTrial' | 'prepareFor' | 'findDoctor'}
     */
    getContactsOption(option) {
        const selectors = {
            howtoget: '(//a[@data-test-id="nav-link"])[1]',
            comfortpromise: '(//a[@data-test-id="nav-link"])[2]',
            getfreetrial: '(//a[@data-test-id="nav-link"])[3]',
            preparefor: '(//a[@data-test-id="nav-link"])[4]',
            finddoctor: '(//a[@data-test-id="nav-link"])[5]'
        }
        const selector = selectors[option.toLowerCase()];
        if (!selector) {
            throw new Error(`No selector found for Get Contacts optio: ${option}`);
        }
        return this.dropMenu.$(selector);
    }
    
}

export default HeaderComponent;