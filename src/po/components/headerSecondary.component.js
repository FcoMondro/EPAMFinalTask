class HeaderSecondary {
    constructor(page) {
        this.page = page;
        this.container = page.$(`//div[@data-test="secondary-header"]`);
        this.title = page.$(`//span[@data-test="title"]`);
        this.sortDropdown = page.$(`//select[@data-test="product-sort-container"]`);


    }

}

module.exports = HeaderSecondary;