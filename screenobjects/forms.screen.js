import { getTextOfElement } from '../helpers/utils';

const SELECTORS = {
    FORMS_SCREEN: '~Forms-screen',
    INPUT: '~text-input',
    ACTIVE_BUTTON: '~button-Active',
};

class FormsScreen extends AppScreen {
    constructor() {
        super(SELECTORS.FORMS_SCREEN);
    }

    get input() {
        return $(SELECTORS.INPUT);
    }

    get activeButton() {
        return $(SELECTORS.ACTIVE_BUTTON);
    }

    get alert() {
        return NativeAlert;
    }
}

export default new FormsScreen();
