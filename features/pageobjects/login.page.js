

const Page = require('./page');

/**
 * Selectores y metodos para determinada página
 */
class LoginPage extends Page {
    /**
     * Definición de selectores usando el método GETTER
     */
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
     * Metodos para interactuar con la página 
     */
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
     * Objeto de página
     */
    open (page) {
        return super.open(page);
    }
}

module.exports = new LoginPage();
