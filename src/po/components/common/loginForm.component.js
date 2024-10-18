class LoginFormComponent {

    // get rootEL() {
    //     return $('//div[@class="login-box"]');
    // }
    
    item (param) {
        const selectors = {
            username: '//input[@data-test="username"]',
            password: '//input[@data-test="password"]',
            logginButton: '//input[@data-test="login-button"]',
            loginError: '//h3[@data-test="error"]'
        };

        //return this.rootEL.$(`//${selectors[param]}`);
        return this.item(param);
    }

    async clearField (param) {
        await this.item(param).click();
        // Simulate Ctrl + A (Select all) and Delete
        await driver.keys(['Control', 'a']);
        await driver.keys('Delete');
    }
}

module.exports = LoginFormComponent;