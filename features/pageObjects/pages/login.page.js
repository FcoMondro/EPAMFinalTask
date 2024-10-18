const LoginFormComponent = require('../components/login.component');

class LoginPage {

    constructor() {
        this.loginForm = new LoginFormComponent();
    }

    
    async open () {
        await driver.get("https://www.saucedemo.com/");
    }
    
}

module.exports = LoginPage;