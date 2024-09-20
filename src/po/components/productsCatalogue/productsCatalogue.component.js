import BaseComponent from "../common/base.component";

class ProductsCatalogueComponent extends BaseComponent {
    constructor() {
        super('div[data-test-id="products-catalogue-container"]');
    }
    get productFamilyBtn() {
        return this.rootEl.$('button[data-test-id="product-family"]');
    }
    get conditioBtn() {
        return this.rootEl.$('button[data-test-id="condition"]');
    }
    get needStateBtn() {
        return this.rootEl.$('button[data-test-id="need-state"]');
    }
    get replacementScheduleBtn() {
        return this.rootEl.$('button[data-test-id="replacement-schedule"]');
    }
    get productCards() {
        return this.rootEl.$$('div[data-test-id="product-card-container"]');
    }
    get productTitles() {
        return this.rootEl.$$('h3[data-test-id="product-card-text"]>span');
    }
    async selectRandomProduct() {
        const productsNumber = await this.productCards.length;
        if (productsNumber === 0) {
            throw new Error('No product cards found on the page');
        }
        const randomProductIndex = Math.floor(Math.random() * productsNumber);
        const randomProductTitle = await this.productTitles[randomProductIndex].getText();
        return {
            title: randomProductTitle,
            index: randomProductIndex
        }
    }
}

export default ProductsCatalogueComponent;