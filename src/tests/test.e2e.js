const { expect, browser, $ } = require('@wdio/globals')
const LoginPage = require('../po/pages/login.page');
const credentials = require('./testData');
const allureReporter = require('@wdio/allure-reporter').default;
const loginPage = new LoginPage();


describe("Final Task", () => {
    describe('Swag Labs Login', () => {
        beforeEach(async () => {
            await loginPage.open();
            //await browser.url("https://www.saucedemo.com/");  //siempre reiniciar el browser si no es un e2e
        });

        it("UC-1 Test Login form with EMPTY credentials", async () =>{

            allureReporter.addStep('Type any credentials into "Username" and "Password" fields.'); // Type any credentials into "Username" and "Password" fields.
            
            await loginPage.loginForm.item('username').setValue(credentials.CREDENTIALS.INVALID_CREDENTIALS.email);
            // await $("//input[@data-test='username']").setValue("");
            await loginPage.loginForm.item('password').setValue(credentials.CREDENTIALS.INVALID_CREDENTIALS.password);
            // await $("//input[@data-test='password']").setValue("");
            
            allureReporter.addStep('Clear the inputs'); // Clear the inputs.
            
            await loginPage.loginForm.clearField('username');
            await loginPage.loginForm.clearField('password');

            allureReporter.addStep('Hit the "Login" button'); // Hit the "Login" button.
            
            await loginPage.loginForm.item('logginButton').click();
            // await $("//input[@data-test='login-button']").click();

            allureReporter.addStep('Check the error messages: "Username is required"'); // Check the error messages: "Username is required".  
            
            await expect(await loginPage.loginForm.item('loginError').getText()).toEqual('Epic sadface: Username is required');
            // const loginError = await $("//div[@class='error-message-container error']/h3");
            // await expect(await loginError.getText()).toEqual('Epic sadface: Username is required');
        });

        it("UC-2 Test Login form with credentials by passing Username", async () =>{

            allureReporter.addStep('Type any credentials in username'); // Type any credentials in username
            
            await loginPage.loginForm.item('username').setValue(credentials.CREDENTIALS.INVALID_CREDENTIALS.email);
            // await $("//input[@data-test='username']").setValue("standard_user");
            
            allureReporter.addStep('Enter password'); // Enter password
            
            await loginPage.loginForm.item('password').setValue(credentials.CREDENTIALS.INVALID_CREDENTIALS.password);
            // await $("//input[@data-test='password']").setValue("");
            
            allureReporter.addStep('Clear the "Password" input.'); // Clear the "Password" input.
            
            await loginPage.loginForm.clearField('password');

            allureReporter.addStep('Hit the "Login" button.'); // Hit the "Login" button.
            
            await loginPage.loginForm.item('logginButton').click();
            //await $("//input[@data-test='login-button']").click();

            allureReporter.addStep('Check the error messages: "Password is required".'); // Check the error messages: "Password is required".
            
            await expect(await loginPage.loginForm.item('loginError').getText()).toEqual('Epic sadface: Password is required');    
            // const loginError = await $("//div[@class='error-message-container error']/h3");
            // await expect(await loginError.getText()).toEqual('Epic sadface: Password is required');
        });

        it("UC-3 Test Login form with credentials by passing Username & Password", async () => {

            allureReporter.addStep('Type credentials in username which are under Accepted username are sections.'); // Type credentials in username which are under Accepted username are sections.
            
            await loginPage.loginForm.item('username').setValue(credentials.CREDENTIALS.VALID_CREDENTIALS.email);
            //await $("//input[@data-test='username']").setValue("standard_user");
            
            allureReporter.addStep('Enter password as secret sauce.'); // Enter password as secret sauce.
            
            await loginPage.loginForm.item('password').setValue(credentials.CREDENTIALS.VALID_CREDENTIALS.password);
            //await $("//input[@data-test='password']").setValue("secret_sauce");
            
            allureReporter.addStep('Click on Login'); // Click on Login
            
            await loginPage.loginForm.item('logginButton').click();
            //await $("//input[@data-test='login-button']").click();

            allureReporter.addStep('Validate the title “Swag Labs” in the dashboard.'); // Validate the title “Swag Labs” in the dashboard.
            
            // const logoDashboard = await $("//div[@class='app_logo']");
            // expect( await logoDashboard.isDisplayed()).toEqual(true);

            // const pageTitle = await browser.getTitle();
            // expect(pageTitle).toHaveTitle('Swag Labs');

            await expect(browser).toHaveTitle('Swag Labs');
        });
    });
});