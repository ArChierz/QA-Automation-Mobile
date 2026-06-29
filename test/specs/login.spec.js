// const { default: loginAction } = require("../actions/login.action");
// const { default: productPage } = require("../pageobjects/product.page");
import loginAction from "../actions/login.action.js";
import productAction from "../actions/product.action.js";

describe('Swag Lab App', function(){

    afterEach(async function(){
        if(browser){
            await browser.reloadSession();
        }
    });

    // after(async function(){
    //     if(browser){
    //         await browser.deleteSession();
    //     }
    // });

    describe('Login - Positive Test', function(){
        
        it('should login successsfully with valid credentials', async function(){
    
            const loginTitle = await loginAction.hasLoginTitle();
            await expect(loginTitle).toBe(true);
    
            await loginAction.login('standard_user', 'secret_sauce');
    
            const isProductVisible = await productAction.hasProductTitle();
            await expect(isProductVisible).toBe(true);

            
        });

        
    });

    describe('Login - Negative Test', function(){

        it('should fail login with invalid password', async function(){
            const loginTitle = await loginAction.hasLoginTitle();
            expect(loginTitle).toBe(true);
    
            await loginAction.login('standard_user', 'secret_sauces');

            const errorLogin = await loginAction.loginErrorMessage();
            await expect(errorLogin).toBe(true);
            
            
        });


    });

});