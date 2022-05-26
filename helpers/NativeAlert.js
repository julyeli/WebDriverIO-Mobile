const SELECTORS = {
    ANDROID: {
        ALERT_TITLE:
            '*//android.widget.TextView[@resource-id="android:id/alertTitle"]',
        ALERT_MESSAGE:
            '*//android.widget.TextView[@resource-id="android:id/message"]',
        ALERT_BUTTON: 
            '*//android.widget.Button[@text="{BUTTON_TEXT}"]',
    }
};

class NativeAlert {
    /**
     * Espera por que exista el alert
     */
    static waitForIsShown(isShown = true) {
        const selector = driver.isAndroid
            ? SELECTORS.ANDROID.ALERT_TITLE
            : '';
        $(selector).waitForExist(11000, !isShown);
    }

    static alert() {
        const selector = driver.isAndroid
            ? SELECTORS.ANDROID.ALERT_TITLE
            : '';
        return $(selector);
    }

    /**
     * Hace clic en un botón 
     * @param {string} selector
     */
    static pressButton(selector) {
        const buttonSelector = driver.isAndroid
            ? SELECTORS.ANDROID.ALERT_BUTTON.replace(
                  /{BUTTON_TEXT}/,
                  selector.toUpperCase(),
              )
            : `~${selector}`;
        $(buttonSelector).click();
    }

    /**
     * Toma el texto del alert
     *
     * @return {string}
     */
    static text() {
        return `${$(SELECTORS.ANDROID.ALERT_TITLE).getText()}\n${$(
            SELECTORS.ANDROID.ALERT_MESSAGE,
        ).getText()}`;
    }
}

export default NativeAlert;
