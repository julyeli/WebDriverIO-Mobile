export const CONTEXT_REF = {
    NATIVE: 'native',
    WEBVIEW: 'webview',
};
const DOCUMENT_READY_STATE = {
    COMPLETE: 'complete',
    INTERACTIVE: 'interactive',
    LOADING: 'loading',
};

class WebView {
    /**
     * Espera por que se carge la web
     */
    waitForWebViewContextLoaded() {
        driver.waitUntil(
            () => {
                const currentContexts = this.getCurrentContexts();

                return (
                    currentContexts.length > 1 &&
                    currentContexts.find((context) =>
                        context.toLowerCase().includes(CONTEXT_REF.WEBVIEW),
                    )
                );
            },
            10000,
            'Webview context not loaded',
            100,
        );
    }

    /**
     * Cambia entre nativo o web
     * @param {string} context 
     */
    switchToContext(context) {
        driver.switchContext(
            this.getCurrentContexts()[context === CONTEXT_REF.WEBVIEW ? 1 : 0],
        );
    }

    /**
     * Retorna un objeto con la lista de los disponibles
     * @return {object} 
     */
    getCurrentContexts() {
        return driver.getContexts();
    }

    /**
     * Espera por el DOM completamente cargado
     */
    waitForDocumentFullyLoaded() {
        driver.waitUntil(
            () =>
                driver.execute(() => document.readyState) ===
                DOCUMENT_READY_STATE.COMPLETE,
            15000,
            'Website not loaded',
            100,
        );
    }

    /**
     * Espera por la carga completa del sitio
     */
    waitForWebsiteLoaded() {
        this.waitForWebViewContextLoaded();
        this.switchToContext(CONTEXT_REF.WEBVIEW);
        this.waitForDocumentFullyLoaded();
        this.switchToContext(CONTEXT_REF.NATIVE);
    }

    openWebsiteMenu() {
        const toggle = $('.navToggle');
        toggle.waitForDisplayed(3000);
        toggle.click();
    }

    openApiDocs() {
        $('=API').click();
    }

    getHeaderPage() {
        const header = $('h1.postHeaderTitle');
        header.waitForDisplayed(3000);
    }

    clickOnMenuOption(option) {
        const webdriverProtocol = $(`=${option}`);
        webdriverProtocol.waitForDisplayed(3000);
        webdriverProtocol.click();
    }
}

export default WebView;
