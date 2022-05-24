
module.exports = class Page {
    /**
    * Abrir una página de un sitio web
    * @param path es la página de un sitio, por ejemplo www.sitio.com/page.html
    */
    open (path) {
        return browser.url(`https://www.ebay.com/${path}`)
    }
}
