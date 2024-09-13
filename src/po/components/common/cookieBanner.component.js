class CookieBannerComponent {
    get banner() {
        return $('div[aria-label="Cookie banner"]');
    }
    async close() {
        await $('button.banner-close-button').click();
    }
}

export default CookieBannerComponent;