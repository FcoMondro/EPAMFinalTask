class HeaderPrimary {
    constructor(page) {
        this.page = page;
        this.sideMenuButton = page.$(`//button[@id="react-burger-menu-btn"]`);
        this.closeMenuButton = page.$(`//button[@id="react-burger-cross-btn"]`);
        this.sideMenu = page.$(`//div[@class="bm-menu-wrap"]`);
        this.logo = page.$(`//div[@class="app_logo"]`);
        this.cartButton = page.$(`//a[@data-test="shopping-cart-link"]`);
        this.cartBadge = page.$(`//span[data-test="shopping-cart-badge"]`);
    }

    async openMenu() {
        let menuButton = await this.sideMenuButton;
        await menuButton.click();
    }

    async closeMenu(){
        let closeMenuButton = await this.closeMenuButton;
        await closeMenuButton.click();
    }

    async isMenuVisible(){
        let sideMenu = await this.sideMenu;
        if(sideMenu.checkVisibility() == true){
            return true;
        }
        else {
            return false;
        }
    }

    async getCarItemCount() {
        let cartBadge = await this.cartBadge;
        if(cartBadge.isExisting() == false){
            return 0;
        }
        else{
            return Number(cartBadge.getText());
        }

    }

}

module.exports = HeaderPrimary;