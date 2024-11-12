const HeaderPrimaryComponent = require('../components/header.component');
const HeaderSecondaryComponent = require('../components/headerSecondary.component');

class CartPage {
    constructor(page) {
        this.page = page;
        this.headerPrimary = new HeaderPrimaryComponent(this.page);
        this.headerSecondary = new HeaderSecondaryComponent(this.page);
        this.cartItems = page.$$(`//div[@data-test="inventory-list"]`);
        this.cartItemName = `//div[@data-test="inventory-item-name"]`;
    }

    async isProductInCart(productName) {
        const cartItems = await this.cartItems;
        for (const item of cartItems) {
            const nameElement = await item.$(this.cartItemName);
            const name = await nameElement.getText();
            if(name == productName) {
                return true;
            }
        }
        return false;
    }
}

module.exports = CartPage;