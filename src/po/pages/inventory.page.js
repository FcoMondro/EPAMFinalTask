class InventoryPage {
    constructor(page){
        this.page = page;
        this.inventoryList = page.$(`//div[@data-test="inventory-list"]`);
        this.inventoryItem = page.$(`//div[@data-test="inventory-item"]`);
        this.inventoryItemName = page.$(`//div[@data-test="inventory-item-name"]`);
        this.inventoryItemPrice = page.$(`//div[@data-test="inventory-item-price"]`);
        this.inventoryItemAddToCartButton = page.$(`//button[contains(@class,'btn_inventory')]`);

        this.cartButton = page.$('.shopping_cart_link');

    }

    async addProductToCartByName(productName) {
        const productElements = await this.page.findElements(this.inventoryItem);
        for (const product of productElements) {
            const nameElement = await product.findElement(this.productName);
            const name = await nameElement.getText();
            if(name.trim() === productName){
                const addToCartButton = await product.findElement(this.inventoryItemAddToCartButton);
                await addToCartButton.click();
                break;
            }
        }
    }

    async goToCart() {
        const cartButton = await this.page.findElement(this.cartButton);
        await cartButton.click();

    }
}

module.exports = InventoryPage;