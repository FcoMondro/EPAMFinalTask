class HeaderSecondary {
    constructor(page) {
        this.page = page;
        this.container = page.$(`//div[@data-test="secondary-header"]`);
        this.title = page.$(`//span[@data-test="title"]`);
        this.sortDropdown = page.$(`//select[@data-test="product-sort-container"]`);
    }

    async getTitle() {
        let title = await this.title;
        return title.getText();
    }

    async orderProductsByValue(value) {
        let dropDown = await this.sortDropdown;
        await dropDown.selectByAttribute('value',value);

    }

}

module.exports = HeaderSecondary;