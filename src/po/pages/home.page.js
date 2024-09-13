import CookieBannerComponent from "../components/common/cookieBanner.component";
import HeaderComponent from "../components/common/header.component";

class HomePage {

    constructor() {
        this.cookieBanner = new CookieBannerComponent();
        this.header = new HeaderComponent();
    }

    async open() {
        await browser.url('https://www.acuvue.com/en-us/');
    }
}

export default HomePage;