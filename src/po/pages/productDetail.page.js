import ProductHeroBannerComponent from "../components/productDetail/productHeroBanner.component";
import BasePage from "./base.page";

class ProductDetailPage extends BasePage {
    constructor() {
        super('/products');
        this.productHeroBanner = new ProductHeroBannerComponent();
    }
}

export default ProductDetailPage;