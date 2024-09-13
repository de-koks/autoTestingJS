class HeaderComponent {

    constructor() {
        this.dropdownNavMenuSelector = '[data-test-id="dropdown-nav-menu"]';
    }

    get dropMenu() {
        return $(this.dropdownNavMenuSelector);
    }

    firstLevelMenuItem(parameter) {
        const selectors = {
            products: '[data-test-id="first-level-menu-item-0"]',
            consideringcontacts: '[data-test-id="first-level-menu-item-1"]',
            wearandcare: '[data-test-id="first-level-menu-item-2"]',
            eyehealthrecources: '[data-test-id="first-level-menu-item-3"]',
            getcontacts: '[data-test-id="first-level-menu-item-4"]'
        };
        const selector = selectors[parameter.toLowerCase()];
        if (!selector) {
            throw new Error(`No selector found for parameter: ${parameter}`);
        }
        return $(selector);
    }
}

export default HeaderComponent;