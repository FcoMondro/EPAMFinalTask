const { expect, browser, By } = require('@wdio/globals')
const LoginPage = require('../po/pages/login.page');
const InventoryPage = require('../po/pages/inventory.page');
const CartPage = require('../po/pages/cart.page');
const credentials = require('./testData');
const AllureReporter = require('@wdio/allure-reporter').default;

describe("Final Task", () => {
    describe('Swag Labs Login', () => {
        let page;
        let loginPage;

        beforeEach(async () => {
            page = browser;
            loginPage = new LoginPage(page);
            await loginPage.openLoginPage();
        });

        it("UC-1 Test Login form with EMPTY credentials", async () =>{
            AllureReporter.addStep('Type any credentials into "Username" and "Password" fields.');
            await loginPage.setUsernameField(credentials.INVALID_CREDENTIALS.email);
            await loginPage.setPasswordField(credentials.INVALID_CREDENTIALS.password);

            AllureReporter.addStep('Clear the inputs'); 
            await loginPage.clearUsernameField();
            await loginPage.clearPasswordField();

            AllureReporter.addStep('Hit the "Login" button');
            await loginPage.clickLoginButton();

            AllureReporter.addStep('Check the error messages: "Username is required"');
            await expect(await loginPage.getErrorText()).toEqual('Epic sadface: Username is required');
        });

        it("UC-2 Test Login form with credentials by passing Username", async () =>{
            AllureReporter.addStep('Type any credentials in username');
            await loginPage.setUsernameField(credentials.INVALID_CREDENTIALS.email);
            
            AllureReporter.addStep('Enter password'); 
            await loginPage.setPasswordField(credentials.INVALID_CREDENTIALS.password);
            
            AllureReporter.addStep('Clear the "Password" input.'); 
            await loginPage.clearPasswordField();

            AllureReporter.addStep('Hit the "Login" button.'); 
            await loginPage.clickLoginButton();

            AllureReporter.addStep('Check the error messages: "Password is required".');
            await expect(await loginPage.getErrorText()).toEqual('Epic sadface: Password is required'); 
        });

        it("UC-3 Test Login form with credentials by passing Username & Password", async () => {
            AllureReporter.addStep('Type credentials in username which are under Accepted username are sections.'); 
            await loginPage.setUsernameField(credentials.VALID_CREDENTIALS.email);
            
            AllureReporter.addStep('Enter password as secret sauce.');
            await loginPage.setPasswordField(credentials.VALID_CREDENTIALS.password);
            
            AllureReporter.addStep('Click on Login'); 
            await loginPage.clickLoginButton();

            AllureReporter.addStep('Validate the title “Swag Labs” in the dashboard.'); // Validate the title “Swag Labs” in the dashboard.
            await expect(page).toHaveTitle('Swag Labs');
        });
    });
});

describe("After course completation xd", () =>{
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

            const isInCart = await cartPage.isProductInCart(productName)
            expect(isInCart).toEqual(true);

        });

        it('should delete item from cart', async () => {

        })
    })
})