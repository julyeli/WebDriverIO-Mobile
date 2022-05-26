import { DEFAULT_TIMEOUT } from '../Constants/constants';
import NativeAlert from '../helpers/NativeAlert';

export default class AppScreen {
    constructor(selector) {
        this.selector = selector;
    }

    /**
     * Espera hasta que la página este visible
     * @param {boolean} isShown
     * @return {boolean}
     */
    waitForIsShown(isShown = true) {
        return $(this.selector).waitForDisplayed(DEFAULT_TIMEOUT, !isShown);
    }

    isDisplayed() {
        return $(this.selector).isDisplayed();
    }

    get alert() {
        return NativeAlert;
    }

}