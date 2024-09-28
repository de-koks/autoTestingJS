import BaseComponent from "../common/base.component";

class ComplaintFormComponent extends BaseComponent {
    constructor() {
        super('div[data-test-id="complaint-form"]');
    }

    get formTitle() {
        return this.rootEl.$('[data-test-id="common-header-title"] span');
    }
    get nextBtn() {
        return this.rootEl.$('button[data-test-id="next"]');
    }
    get backBtn() {
        return this.rootEl.$('button[data-test-id="back"]');
    }

    /**
     * 
     * @param { 'next' | 'back' } buttonName 
     * @returns { nextBtn | backBtn }
     */
    buttons(buttonName) {
        const items = {
            next: this.nextBtn,
            back: this.backBtn
        }
        const button = buttonName.toLowerCase();
        if (!items[button]) {
            throw new Error(`No button is specified on Complaint Form for ${buttonName}`);
        }
        return items[button];
    }

    /**
     * @param field {'firstName' | 'lastName' | 'email' | 'phone' | 'addressOne' | 'addressTwo' | 'country' | 'city' | 'zipCode'}
     */
    stepOneField(field) {
        const selectors = {
            firstname: 'input[data-test-id="firstName"',
            lastname: 'input[data-test-id="lastName"',
            email: 'input[data-test-id="email"',
            phone: 'input[data-test-id="phone"',
            addressone: 'input[data-test-id="addressOne"',
            addresstwo: 'input[data-test-id="addressTwo"',
            country: 'input[data-test-id="country"]',
            city: 'input[data-test-id="city"]',
            zipcode: 'input[data-test-id="zipCode"]'
        }
        const selector = selectors[field.toLowerCase().replace(/\s+/g, '')];

        if (!selector) {
            throw new Error(`No selector found for Complaint Form field: ${field}`);
        }
        return this.rootEl.$(selector);
    }

    async selectRandomCountry() {
        await this.stepOneField('country').click();
        const countries = await $$('div[data-test-id="dropdown-options-container"] li');
        if (countries.length === 0) {
            throw new Error('No options found in "Country" dropdown');
        }
        const randomIndex = Math.floor(Math.random() * countries.length);
        await countries[randomIndex].click();
    }

    /**
     * 
     * @param { 'country' } dropdownName 
     * @returns { selectRandomCountry() }
     */
    selectRandomDropdownOption(dropdownName) {
        const items ={
            country: this.selectRandomCountry()
        }
        const dropdown = dropdownName.toLowerCase().replace(/\s+/g, '');
        if (!items[dropdown]) {
            throw new Error(`No dropdown is specified on Complaint Form for ${dropdownName}`);
        }
        return items[dropdown];
    }
}

export default ComplaintFormComponent;