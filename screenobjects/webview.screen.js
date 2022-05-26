import WebView from '../helpers/WebView';

const SELECTORS = {
    WEB_VIEW_SCREEN: browser.isAndroid
        ? '*//android.webkit.WebView'
        : '_iOS_',
};

class WebViewScreen extends WebView {
    /**
     * Espera por que se muestre el DOM
     * @param {boolean} isShown
     */
    waitForWebViewIsDisplayedByXpath(isShown = true) {
        $(SELECTORS.WEB_VIEW_SCREEN).waitForDisplayed(10000, !isShown);
    }
}

export default new WebViewScreen();
