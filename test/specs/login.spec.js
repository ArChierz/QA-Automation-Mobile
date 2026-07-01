// const { default: loginAction } = require("../actions/login.action");
// const { default: productPage } = require("../pageobjects/product.page");
import loginAction from "../actions/login.action.js";
import productAction from "../actions/product.action.js";
import credentials from "../test_data/credentials.js";
import AppHelper from "../../utils/app.helper.js";

describe('Swag Lab App - Login Functionality', function(){

    let appHelper;

    before(async function(){
        appHelper = new AppHelper(driver);
    })

    afterEach(async function(){
        // if(browser){
        //     await browser.reloadSession();
        // }

        // await appHelper.reload();
        await appHelper.resetApp();
        

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
    
            await loginAction.login(credentials.standard_user.username, credentials.standard_user.password);
            
            const isProductVisible = await productAction.hasProductTitle();
            await expect(isProductVisible).toBe(true);
            
            
        });
        
        
    });
    
    describe('Login - Negative Test', function(){
        
        it('should fail login with invalid password', async function(){
            const loginTitle = await loginAction.hasLoginTitle();
            expect(loginTitle).toBe(true);
            
            await loginAction.login(credentials.invalid_userpw.username, credentials.invalid_userpw.password);

            const errorLogin = await loginAction.loginErrorMessage();
            await expect(errorLogin).toBe(true);
            
            
        });


    });

});