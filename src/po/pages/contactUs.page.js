import BasePage from "./base.page";

class ContactUsPage extends BasePage {
    constructor() {
        super('/contact-us');
    }
    get complaintLink() {
        return $('//a[@data-test-id="link"]/span[text()="Complaint"]');
    }

    links(linkName) {
        const items = {
            complaint: this.complaintLink
        }
        const link = linkName.toLowerCase();
        if (!items[link]) {
            throw new Error(`No link on Contact Us page for ${linkName}`);
        }
        return items[link];
    }
}

export default ContactUsPage;