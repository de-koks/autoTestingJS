import CookieBannerComponent from "../components/common/cookieBanner.component";
import FooterComponent from "../components/common/footer.component";
import HeaderComponent from "../components/common/header.component";

class BasePage {

    constructor(url) {
        this.pageUrl = url;
        this.header = new HeaderComponent;
        this.footer = new FooterComponent;
        this.cookieBanner = new CookieBannerComponent;
    }

    get url() {
        return this.pageUrl;
    }

    // async open() {
    //     await browser.url(this.url);
    // }

    open() {
        return browser.url(this.url);
    }
}

export default BasePage;