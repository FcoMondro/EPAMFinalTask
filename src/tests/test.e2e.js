const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../po/pages/login.page');
const credentials = require('./testData');
const allureReporter = require('@wdio/allure-reporter').default;

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
            allureReporter.addStep('Type any credentials into "Username" and "Password" fields.');
            await loginPage.setUsernameField(credentials.CREDENTIALS.INVALID_CREDENTIALS.email);
            await loginPage.setPasswordField(credentials.CREDENTIALS.INVALID_CREDENTIALS.password);
            
            allureReporter.addStep('Clear the inputs'); 
            await loginPage.clearUsernameField();
            await loginPage.clearPasswordField();

            allureReporter.addStep('Hit the "Login" button');
            await loginPage.clickLoginButton();

            allureReporter.addStep('Check the error messages: "Username is required"');
            await expect(await loginPage.getErrorText()).toEqual('Epic sadface: Username is required');
        });

        it("UC-2 Test Login form with credentials by passing Username", async () =>{
            allureReporter.addStep('Type any credentials in username');
            await loginPage.setUsernameField(credentials.CREDENTIALS.INVALID_CREDENTIALS.email);
            
            allureReporter.addStep('Enter password'); 
            await loginPage.setPasswordField(credentials.CREDENTIALS.INVALID_CREDENTIALS.password);
            
            allureReporter.addStep('Clear the "Password" input.'); 
            await loginPage.clearPasswordField();

            allureReporter.addStep('Hit the "Login" button.'); 
            await loginPage.clickLoginButton();

            allureReporter.addStep('Check the error messages: "Password is required".');
            await expect(await loginPage.getErrorText()).toEqual('Epic sadface: Password is required'); 
        });

        it("UC-3 Test Login form with credentials by passing Username & Password", async () => {
            allureReporter.addStep('Type credentials in username which are under Accepted username are sections.'); 
            await loginPage.setUsernameField(credentials.CREDENTIALS.VALID_CREDENTIALS.email);
            
            allureReporter.addStep('Enter password as secret sauce.');
            await loginPage.setPasswordField(credentials.CREDENTIALS.VALID_CREDENTIALS.password);
            
            allureReporter.addStep('Click on Login'); 
            await loginPage.clickLoginButton();

            allureReporter.addStep('Validate the title “Swag Labs” in the dashboard.'); // Validate the title “Swag Labs” in the dashboard.
            await expect(page).toHaveTitle('Swag Labs');
        });
    });
});