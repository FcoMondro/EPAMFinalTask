const { expect, browser, $ } = require('@wdio/globals')
const LoginPage = require('../../src/po/pages/login.page');
const credentials = require('../../src/tests/testData');
//const allureReporter = require('@wdio/allure-reporter').default;
const loginPage = new LoginPage();
const { Given, When, Then } = require('@cucumber/cucumber');
//const describe = require('@wdio/mocha-framework');

// describe("Feature: Login page", () =>{
//     // beforeEach(async () => {
//     //     await loginPage.open();
//     //     //await browser.url("https://www.saucedemo.com/");  //siempre reiniciar el browser si no es un e2e
//     // });

    // it("UC-1 Test Login form with empty credentials", async () =>{
        Given("the user is on the login page", async () => {
            await loginPage.open();
        });

        When("the user types any credentials in login fields", async () => {
            await loginPage.loginForm.item('username').setValue(credentials.CREDENTIALS.INVALID_CREDENTIALS.email);
            // await $("//input[@data-test='username']").setValue("");
            await loginPage.loginForm.item('password').setValue(credentials.CREDENTIALS.INVALID_CREDENTIALS.password);
            // await $("//input[@data-test='password']").setValue(""); 
        });

        When("the user clears both fields", async () => {
            await loginPage.loginForm.clearField('username');
            await loginPage.loginForm.clearField('password');
        });

        When("clicks the 'Login' button", async () => {
            await loginPage.loginForm.item('logginButton').click();
            // await $("//input[@data-test='login-button']").click();
        });

        Then("'Username is required' error is displayed", async () => {
            await expect(await loginPage.loginForm.item('loginError').getText()).toEqual('Epic sadface: Username is required');
            // const loginError = await $("//div[@class='error-message-container error']/h3");
            // await expect(await loginError.getText()).toEqual('Epic sadface: Username is required');

        });
//     });
// });