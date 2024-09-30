class LoginFormComponent {

    // get rootEL() {
    //     return $('//div[@class="login-box"]');
    // }
    
    /**
     * 
     * @param {string} param 
     * @returns 
     */
    item (param) {
        const selectors = {
            username: 'input[@data-test="username"]',
            password: 'input[@data-test="password"]',
            logginButton: 'input[@data-test="login-button"]',
            loginError: 'h3[@data-test="error"]'
        };

        //return this.rootEL.$(`//${selectors[param]}`);
        return $(`//${selectors[param]}`);
    }

    /**
     * 
     * @param {string} param 
     */
    async clearField (param) {
        await this.item(param).click();
        // Simulate Ctrl + A (Select all) and Delete
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
    }
}

module.exports = LoginFormComponent;