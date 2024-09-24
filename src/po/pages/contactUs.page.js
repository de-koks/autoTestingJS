import BasePage from "./base.page";

class ContactUsPage extends BasePage {
    constructor() {
        super('/contact-us');
        this.links = {
            complaint: this.complaintLink
        }
    }
    get complaintLink() {
        return $('//a[@data-test-id="link"]/span[text()="Complaint"]');
    }
}

export default ContactUsPage;