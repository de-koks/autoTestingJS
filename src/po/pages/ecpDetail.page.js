import ECPDetailsComponent from "../components/ecpDetails/ecpDetails.component";
import BasePage from "./base.page";

class ECPDetailPage extends BasePage {
    constructor() {
        super('/get-contacts/find-an-eye-doctor');
        this.ecpDetails = new ECPDetailsComponent();
    }
}

export default ECPDetailPage;