class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.$(`//input[@data-test="username"]`);
        this.passwordField = page.$(`//input[@data-test="password"]`);
        this.logginButton = page.$(`//input[@data-test="login-button"]`);
        this.loginErrorBanner = page.$(`//h3[@data-test="error"]`);
    }

    async openLoginPage () {
        await this.page.url("https://www.saucedemo.com/");
    }

    async setUsernameField(username) {
        await this.usernameField.setValue(username);
    }

    async setPasswordField(password) {
        await this.passwordField.setValue(password);
    }

    async clearUsernameField() {
        await this.usernameField.click();
        await this.page.keys(['Control', 'a']);
        await this.page.keys('Delete');
    }

    async clearPasswordField() {
        await this.passwordField.click();
        await this.page.keys(['Control', 'a']);
        await this.page.keys('Delete');
    }

    async clickLoginButton() {
        await this.logginButton.click();

    }

    async getErrorText() {
        return await this.loginErrorBanner.getText();
    }
}

module.exports = LoginPage;