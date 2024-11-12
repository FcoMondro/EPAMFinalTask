const HeaderPrimaryComponent = require('../components/header.component');
const HeaderSecondaryComponent = require('../components/headerSecondary.component');

class InventoryItemPage {
    constructor(page){
        this.page = page;
        this.headerPrimary = new HeaderPrimaryComponent();
        this.headerSecondary = new HeaderSecondaryComponent();
        this.item = page.$(`//div[@data-test="inventory-item"]`);
        this.itemName = page.$(`//div[@data-test="inventory-item-name"]`);
        this.itemPrice = page.$(`//div[@data-test="inventory-item-price"]`);
        this.itemAddToCartButton = page.$(`//button[@data-test="add-to-cart"]`);
        this.itemRemoveFromCartButton = page.$(`//button[@data-test="remove"]`);
    }

    async getItemName() {
        let itemName = await this.itemName;
        return itemName.getText();
    }

    async addToCart() {
        let addToCartButton = await this.itemAddToCartButton;
        await addToCartButton.click();
    }

    async removeFromCart() {
        let removeFromCartButton = await this.itemRemoveFromCartButton;
        await removeFromCartButton.click();
    }
}

module.exports = InventoryItemPage;