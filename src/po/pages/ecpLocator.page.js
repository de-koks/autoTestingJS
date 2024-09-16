import ECPLocatorComponent from "../components/ecpLocator/ecpLocator.component";
import ECPLocatorComponent from "../components/ecpLocator/ecpLocator.component";
import BasePage from "./base.page";

class ECPLocatorPage extends BasePage {
    constructor() {
        super('/get-contacts/find-an-eye-doctor/');
        this.ecpLocator = new ECPLocatorComponent();
    }
}

export default ECPLocatorPage;