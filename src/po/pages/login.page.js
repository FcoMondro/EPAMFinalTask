const LoginFormComponent = require('./../components/common/loginForm.component');

class LoginPage {

    constructor() {
        //this.page = page;
        //this.loginForm = new LoginFormComponent(); //eliminar
        this.usernameField = $(`//$input[@data-test="username"]`);
        this.passwordField = $(`//$input[@data-test="password"]`);
        this.logginButton = $(`input[@data-test="login-button"]`);
        this.loginErrorBanner = $(`h3[@data-test="error"]`);
    }

    
    
    async openLoginPage () {
        await browser.url("https://www.saucedemo.com/");
    }

    async fillLoginFields(user, password) {
        await this.usernameField.setValue(user);
        await this.passwordField.setValue(password);
    }

    async clearField (param) {
        await this.item(param).click();
        // Simulate Ctrl + A (Select all) and Delete
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
    }


    
}

module.exports = LoginPage;