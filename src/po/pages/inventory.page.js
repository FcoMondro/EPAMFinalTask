class InventoryPage {
    constructor(page){
        this.page = page;
        this.inventoryItems = page.$$(`//div[@data-test="inventory-item"]`);
        this.inventoryItemName = `//div[@data-test="inventory-item-name"]`;
        this.inventoryItemPrice = `//div[@data-test="inventory-item-price"]`;
        this.inventoryItemAddToCartButton = `//button[contains(@class,'btn_inventory')]`;
    }

    async addItemToCartByName (productName) {
        const productElements = await this.inventoryItems;
        for (const product of productElements) {
            const nameElement = await product.$(this.inventoryItemName);
            const name = await nameElement.getText();
            
            if(name == productName) {
                const addToCartButton = await product.$(this.inventoryItemAddToCartButton);
                await addToCartButton.click();
                break;
            }
        }
    }

    async addMultipleItemsToCartByName(productNames) {
        for (const name of productNames) {
            await this.addItemToCartByName(name);
        }
    }
}

module.exports = InventoryPage;