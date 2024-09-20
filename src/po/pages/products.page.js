import ProductsCatalogueComponent from "../components/productsCatalogue/productsCatalogue.component";
import BasePage from "./base.page";

class ProductsPage extends BasePage {
    constructor() {
        super('/products');
        this.productsCatalogue = new ProductsCatalogueComponent;
    }
}

export default ProductsPage;