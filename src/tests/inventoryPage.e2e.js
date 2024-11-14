const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../po/pages/login.page');
const InventoryPage = require('../po/pages/inventory.page');
const CartPage = require('../po/pages/cart.page');
const credentials = require('./testData');
const AllureReporter = require('@wdio/allure-reporter').default;

describe("Inventory Page", () => {
    let page;
    let loginPage;
    let inventoryPage;
    let cartPage;

    beforeEach(async () => {
        page = browser;
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
        await loginPage.openLoginPage();
        await loginPage.validLogin();
    });

    it('should update "Add to cart" button to "Remove" button', async () =>{
        const productName = "Sauce Labs Backpack";
        await inventoryPage.addItemToCartByName(productName);

        const itemButtonText = await inventoryPage.getInventoryItemButtonText(productName);
        expect(itemButtonText).toEqual("Remove");
        
    });

    it('should update "Remove" button to "Add to cart" button', async () => {
        const productName = "Sauce Labs Backpack";
        await inventoryPage.addItemToCartByName(productName);

        const itemButtonText = await inventoryPage.getInventoryItemButtonText(productName); 
        expect(itemButtonText).toEqual("Add to cart");

    });

    it('should visualize producst in page', async () => {

    });

    it('should sort products', async () => {

    });

    it('should open item detail page', async () => {

    });
});