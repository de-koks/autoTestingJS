import BaseComponent from "../common/base.component";

class FreeTrialFormComponent extends BaseComponent {

    constructor() {
        super('div[data-test-id="free-trial-form"]');
    }

    /**
     * @param field {'firstName' | 'lastName' | 'email' | 'DoBmonth' | 'DOBday' | 'DoByear' | 'experience' | 'lensBrand' | 'haveECP' | 'promo'}
     */
    field(field) {
        const fields = {
            firstname: 'input[data-test-id="firstName"]',
            lastname: 'input[data-test-id="lastName"]',
            email: 'input[data-test-id="email"]',
            dobmonth: 'input[data-test-id="dateOfBirth-month"]',
            dobday: 'input[data-test-id="dateOfBirth-day"]',
            dobyear: 'input[data-test-id="dateOfBirth-year"]',
            experience: 'input[data-test-id="experience"]',
            lensbrand: 'input[data-test-id="lensBrand"]',
            haveecp: 'input[data-test-id="currentlyHaveEcpEnrollment"]',
            promo: 'div[data-test-id="checkbox-buttonconsentPromo"]'
        }
        const selector = fields[field.toLowerCase()];

        if (!selector) {
            throw new Error(`No selector found for Get Contacts optio: ${field}`);
        }
        return this.rootEl.$(selector);
    }
    /**
     * @param field {'firstName' | 'lastName' | 'email' | 'dateOfBirth' | 'experience' | 'lensBrand' | 'haveECP'}
     */
    fieldErrorMessage(field) {
        const fields = {
            firstname: 'div[data-test-id="first-name-field-error-message"]',
            lastname: 'div[data-test-id="last-name-field-error-message"]',
            email: 'div[data-test-id="email-field-error-message"]',
            dateofbirth: '//input[@data-test-id="dateOfBirth-year"]/../following-sibling::div',
            experience: '//input[@data-test-id="experience"]/../following-sibling::*[@data-test-id="dropdown-error-message"]/span',
            lensbrand: '//input[@data-test-id="lensBrand"]/../following-sibling::*[@data-test-id="dropdown-error-message"]/span',
            haveecp: '//input[@data-test-id="currentlyHaveEcpEnrollment"]/../following-sibling::*[@data-test-id="dropdown-error-message"]/span'
        }
        const selector = fields[field.toLowerCase()];
    
        if (!selector) {
            throw new Error(`No selector found for Get Contacts optio: ${field}`);
        }
        return this.rootEl.$(selector);
    }
}

export default FreeTrialFormComponent;