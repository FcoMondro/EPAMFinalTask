class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = page.$$(`//div[@data-test="inventory-item"]`);
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