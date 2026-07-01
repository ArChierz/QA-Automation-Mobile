// const { default: loginPage } = require("../pageobjects/login.page");
import loginPage from "../pageobjects/login.page.js";
import productAction from "./product.action.js";
class LoginAction{

    async enterUsername(username){
        const field = await loginPage.usernameInput;
        await field.setValue(username);
    }

    async enterPassword(password){
        const field = await loginPage.passwordInput;
        await field.setValue(password);
    }

    async tapLoginButton(){
        const loginButton = await loginPage.loginButton;
        await loginButton.click();
    }

    async login(username, password){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.tapLoginButton();

        if(!this.loginErrorMessage()){
            await productAction.hasProductTitle();        

        }
    }

    async hasLoginTitle(){
        const titleText = await loginPage.titleText;
        return await titleText.waitForDisplayed({timeout:5000});
    
    }

    async loginErrorMessage(){
        const errorMessage = await loginPage.errorMessage;
        return await errorMessage.waitForDisplayed({timeout:5000});
    }

}

export default new LoginAction();