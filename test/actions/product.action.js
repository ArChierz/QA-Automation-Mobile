import productPage from "../pageobjects/product.page.js";

class productAction{

    async hasProductTitle(){
        const titleText = await productPage.titleText;
        return await titleText.waitForDisplayed({timeout:5000});
    }
}

export default new productAction();