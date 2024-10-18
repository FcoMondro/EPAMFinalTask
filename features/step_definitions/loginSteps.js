require("chromedriver");
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const assert = require('assert');
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

const { Given, When, Then } = require('@cucumber/cucumber');
//const { expect } = require('chai');

const LoginPage = require('../pageObjects/pages/login.page');
const credentials = require('../../src/tests/testData');
const loginPage = new LoginPage();

Given("the user is on the login page", async () => {
    await driver.get("https://www.saucedemo.com/");
});

When("the user types any credentials in login fields", async () => {
    await driver.findElement(By.xpath('//input[@data-test="username"]')).sendKeys(credentials.CREDENTIALS.INVALID_CREDENTIALS.email);
    //await loginPage.loginForm.item('username').setValue(credentials.CREDENTIALS.INVALID_CREDENTIALS.email);
    // await $("//input[@data-test='username']").setValue("");
    
    await driver.findElement(By.xpath('//input[@data-test="password"]')).sendKeys(credentials.CREDENTIALS.INVALID_CREDENTIALS.password);
    //await loginPage.loginForm.item('password').setValue(credentials.CREDENTIALS.INVALID_CREDENTIALS.password);
    // await $("//input[@data-test='password']").setValue(""); 
});

When("the user clears both fields", async () => {

    await driver.findElement(By.xpath('//input[@data-test="username"]')).sendKeys(Key.chord(Key.CONTROL, "a", Key.DELETE));
    //await loginPage.loginForm.clearField('username');
    
    await driver.findElement(By.xpath('//input[@data-test="password"]')).sendKeys(Key.chord(Key.CONTROL, "a", Key.DELETE));
    //await loginPage.loginForm.clearField('password');
});

When("clicks the {string} button", async (string) => {
    await driver.findElement(By.xpath('//input[@data-test="login-button"]')).click();
    //await loginPage.loginForm.item('logginButton').click();
    // await $("//input[@data-test='login-button']").click();
});

Then("{string} error is displayed", async (string) => {
    await assert.equal(await driver.findElement(By.xpath('//h3[@data-test="error"]')).getText(), 'Epic sadface: Username is required');
    //await expect(await loginPage.loginForm.item('loginError').getText()).toEqual('Epic sadface: Username is required');
    // const loginError = await $("//div[@class='error-message-container error']/h3");
    // await expect(await loginError.getText()).toEqual('Epic sadface: Username is required');

});