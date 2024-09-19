import BasePage from "./base.page";

class ContactUsPage extends BasePage {
    constructor() {
        super('/contact-us');
    }
    get complaintLink() {
        return $('//a[@data-test-id="link"]/span[text()="Complaint"]');
    }
}

export default ContactUsPage;