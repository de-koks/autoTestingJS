import BaseComponent from "../common/base.component";

class ECPDetailsComponent extends BaseComponent {
    constructor() {
        super('div[data-test-id="ecp-details-section"]');
    }

    get ecpTitle() {
        return this.rootEl.$('h3[data-test-id="ecp-details-info-section-title"]>*');
    }
    get getDirectionsLink() {
        return this.rootEl.$('a[data-test-id="get-directions"]');
    }
}

export default ECPDetailsComponent;