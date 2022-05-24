

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get inpSearch () {
        return $('#kw');
    }

    get btnSearch () {
        return $('.gh-search__submitbtn');
    }

    get fldResult () {
        return $('.result-count__count-heading');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async search (text) {
        await this.inpSearch.setValue(text);
        await this.btnSearch.click();
    }

    async searchTotalResult () {
        var txt = await this.fldResult.getText();
        var value = txt.split('+');
        var totalN = value[0].replace('.','');
        return totalN
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
