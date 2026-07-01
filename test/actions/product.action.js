import productPage from "../pageobjects/product.page.js";

class productAction{

    async hasProductTitle(){
        const titleText = await productPage.titleText;
        return await titleText.waitForDisplayed({timeout:5000});
    }

    async clickBurgerMenu(){
        const burgerMenu = await productPage.burgerMenu;
        await burgerMenu.click();
    }

    async isLogoutButtonVisible(){
        const logoutButton = await productPage.logoutButton;
        try {
            await logoutButton.waitForDisplayed({timeout:5000});
            return true;
        } catch (error) {
            return false;
        }
    }

    async clickLogoutButton(){
        const logoutButton = await productPage.logoutButton;
        // await this.clickBurgerMenu();
        try {
            await logoutButton.waitForDisplayed({timeout:5000});
            await logoutButton.click();
            // return true;
        } catch (error) {
            return false;
        }
    }

    async clickFilterButton(){
        const filterButton = await productPage.filterButton;
        await filterButton.click();
    }

    async isFilterPop(){
        const sortItemsText = await productPage.sortItemsText;

        try {
            await sortItemsText.waitForDisplayed({timeout:5000});
            return true;
        } catch (error) {
            return false;
        }
        // const sortItemsText = await productPage.sortItemsText;
        // return (!await sortItemsText.waitForDisplayed({timeout:5000})) ? false : true;
    }

    async clickCancelFilter(){
        const cancelButton = await productPage.cancelFilter;
        // await this.clickFilterButton();
        if(!await cancelButton.waitForDisplayed({timeout:5000})){
            return false;
        }
        await cancelButton.click();
    }

    async scroll(direction = 'down'){
        const {height, width} = await DriverConfig.getWindowSize();
        const startY = direction === 'down' ? height * 0.8 : height * 0.2;
        const endY = direction === 'down' ? height *0.2 : height * 0.8;

        await driver.performActions([
            {
                type: 'pointer',
                id: 'pointer1',
                actions: [
                    { type: 'pointerMove', x:width / 2, y: startY, duration:100},
                    {type: 'pointerDown', duration: 100},
                    {type: 'pointerMove', x: width/2, y: endY, duration:500},
                    {type: 'pointerUp', duration:100}
                ]
            }
        ]);
    }

    async scrollToElement(selector, maxSwipers = 10){
        for (let i=0; i < maxSwipers; i++){
            const element = await $(selector);
            const isDisplayed = element.isDisplayed();
            if(isDisplayed) return true;

            await this.scroll('up');

        }
        return false;
    }

    async logout(){
        await this.clickBurgerMenu();
        await this.clickLogoutButton();
    }

    async cancelFilter(){
        await this.clickFilterButton();
        await this.clickCancelFilter();
    }
}

export default new productAction();