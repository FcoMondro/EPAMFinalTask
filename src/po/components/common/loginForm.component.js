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
        const field = driver.findElement(By.xpath(this.item(param)));
        await field.click();
        // Simulate Ctrl + A (Select all) and Delete
        await field.sendKeys(['Control', 'a']);
        await field.sendKeys('Delete');
    }
}

module.exports = LoginFormComponent;