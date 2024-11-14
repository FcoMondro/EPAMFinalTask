const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../po/pages/login.page');
const InventoryPage = require('../po/pages/inventory.page');
const CartPage = require('../po/pages/cart.page');
const credentials = require('./testData');
const AllureReporter = require('@wdio/allure-reporter').default;

describe("Shopping cart Page", () => {
    let page;
    let inventoryPage;
    let cartPage;
    let loginPage;

    beforeEach(async () => {
        page = browser;
        inventoryPage = new InventoryPage(page);
        loginPage = new LoginPage(page);
        cartPage = new CartPage(page);
        await loginPage.openLoginPage();
        await loginPage.validLogin();
    });
    it('should add an item to the cart', async () => {
        const productName = "Sauce Labs Backpack";
        await inventoryPage.addItemToCartByName(productName);
        await inventoryPage.headerPrimary.goToCart();

        const isInCart = await cartPage.isProductInCart(productName);
        expect(isInCart).toEqual(true);

    });

    it('should delete item from cart', async () => {

    });
});