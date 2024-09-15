import FreeTrialFormComponent from "../components/freeTrialForm/freeTrialForm.component";
import BasePage from "./base.page";

class FreeTrialFormPage extends BasePage {
    constructor() {
        super('https://www.acuvue.com/en-us/get-contacts/free-trial-contact-lenses/')
        this.freeTrialForm = new FreeTrialFormComponent;
    }
}

export default FreeTrialFormPage;