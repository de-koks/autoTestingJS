import ComplaintFormComponent from "../components/complaintForm/complaintForm.component";
import BasePage from "./base.page";

class ComplaintFormPage extends BasePage {
    constructor() {
        super('/contact-us/complaint-form');
        this.complaintForm = new ComplaintFormComponent();
    }
}

export default ComplaintFormPage;