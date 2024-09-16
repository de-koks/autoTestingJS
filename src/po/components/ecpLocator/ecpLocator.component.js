import BaseComponent from "../common/base.component";

class ECPLocatorComponent extends BaseComponent {
    constructor() {
        super('div[data-test-id="ecp-locator-wrapper"]');
    }
    get searchInput() {
        return this.rootEl.$('input[data-test-id="search-form_search-input"]');
    }
    get searchBtn() {
        return this.rootEl.$('button[data-test-id="autosuggest-input-submit-button"]');
    }
    get searchResultCards() {
        return this.rootEl.$$('//div[@data-test-id="search-results-container"]');
    }
    get searchResultCounter() {
        return this.rootEl.$('div[data-test-id="search-results_results-count"]');
    }

    get acuvuePreferredCheckbox() {
        return this.rootEl.$('div[data-test-id="checkbox-buttonacuvue-preferred"]');
    }

    // method to extract the exact number of ECP search resuts
    async extractSearchResultNumber() {
        const counterText = await this.searchResultCounter.getText();
        const match = counterText.match(/(\d+)\s+Results$/);
        if (match && match[1]) {
          return parseInt(match[1], 10);
        }
        throw new Error('The text from the search result counter does not match the expected pattern');
    }
}

export default ECPLocatorComponent;