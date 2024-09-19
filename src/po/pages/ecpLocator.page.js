import BasePage from "./base.page";
import ECPLocatorComponent from "../components/ecpLocator/ecpLocator.component";

class ECPLocatorPage extends BasePage {
    constructor() {
        super('/get-contacts/find-an-eye-doctor');
        this.ecpLocator = new ECPLocatorComponent();
    }
}

export default ECPLocatorPage;