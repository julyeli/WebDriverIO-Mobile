const SELECTORS = {
    ANDROID: {
        TEXT: '*//android.widget.TextView',
        TEXT_FIELD: '*//android.widget.EditText',
    }
};

/**
 * Obtener el texto de un elemento, incluyendo a los childs
 *
 * @param {element} element
 * @param {boolean} isXpath
 *
 * @return {string}
 */
export function getTextOfElement(element, isXpath = false) {
    let visualText;

    try {
        if (driver.isAndroid) {
            visualText = element
                .$$(SELECTORS.ANDROID.TEXT)
                .reduce(
                    (currentValue, el) => `${currentValue} ${el.getText()}`,
                    '',
                );
        } else {
            const iosElement = isXpath
                ? element.$$(SELECTORS.IOS.TEXT_ELEMENT)
                : element;

            if (isXpath) {
                visualText = element
                    .$$(SELECTORS.IOS.TEXT_ELEMENT)
                    .reduce(
                        (currentValue, el) => `${currentValue} ${el.getText()}`,
                        '',
                    );
            } else {
                visualText = iosElement.getText();
            }
        }
    } catch (e) {
        visualText = element.getText();
    }

    return visualText.trim();
}
