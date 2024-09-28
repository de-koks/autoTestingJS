import BasePage from "./base.page";

class ContactUsPage extends BasePage {
    constructor() {
        super('contact-us/');
    }
    get complaintLink() {
        return $('//a[@data-test-id="link"]/span[text()="Complaint"]');
    }

    /**
     * 
     * @param {'complaint'} linkName 
     * @returns { complaintFormPageLink }
     */
    links(linkName) {
        const items = {
            complaint: this.complaintLink
        }
        const link = linkName.toLowerCase();
        if (!items[link]) {
            throw new Error(`No link is specified on Contact Us page for ${linkName}`);
        }
        return items[link];
    }
}

export default ContactUsPage;