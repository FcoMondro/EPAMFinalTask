class HeaderPrimary {
    constructor(page) {
        this.page = page;
        this.sideMenu = page.$(`//button[@id="react-burger-menu-btn"]`);
        this.logo = page.$(`//div[@class="app_logo"]`);
        this.cartButton = page.$(`//a[@data-test="shopping-cart-link"]`);
        this.cartBadge = page.$(`//span[data-test="shopping-cart-badge"]`)
    }

}

module.exports = HeaderPrimary;