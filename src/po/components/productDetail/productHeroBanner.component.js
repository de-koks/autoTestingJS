import BaseComponent from "../common/base.component";

class ProductHeroBannerComponent extends BaseComponent {
    constructor() {
        super('div[data-test-id="product-hero-banner"]');
    }
    get bannerHeadline() {
        return this.rootEl.$('h1[data-test-id="banner-headline"]>span');
    }
}

export default ProductHeroBannerComponent;