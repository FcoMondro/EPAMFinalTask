const LoginFormComponent = require('./../components/common/loginForm.component');

class LoginPage {

    constructor() {
        this.loginForm = new LoginFormComponent();
    }

    
    async open () {
        await browser.url("https://www.saucedemo.com/");
    }
    
}

module.exports = LoginPage;