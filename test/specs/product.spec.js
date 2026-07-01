import loginAction from "../actions/login.action.js";
import productAction from "../actions/product.action.js";
import credentials from "../test_data/credentials.js";
import AppHelper from "../../utils/app.helper.js";

describe('Swag Lab App - Product Functionality', function(){

    let appHelper;

    beforeEach(async function(){
        appHelper = new AppHelper(driver);

        await loginAction.login(credentials.standard_user.username, credentials.standard_user.password);
    });

    describe('Sorting - Positive Test', function(){

        

        it("should successfully cancel sorting", async function(){

            await productAction.clickFilterButton();
            
            let isSortTextVisible = await productAction.isFilterPop();
            await expect(isSortTextVisible).toBe(true);

            await productAction.clickCancelFilter();

            isSortTextVisible = await productAction.isFilterPop();
            await expect(isSortTextVisible).toBe(false);

            // const isProductVisible = await productAction.hasProductTitle();
            // await expect(isProductVisible).toBe(true);

            // blabla

            // const loginTitle = await loginAction.hasLoginTitle();
            // await expect(loginTitle).toBe(true);
    
            // await loginAction.login(credentials.standard_user.username, credentials.standard_user.password);
            
            // const isProductVisible = await productAction.hasProductTitle();
            // await expect(isProductVisible).toBe(true);
        })



    });

    describe('Logout - Positive Test', function(){

        it("should successfully logout from the app", async function(){
            await productAction.clickBurgerMenu();

            const logoutVisible = await productAction.isLogoutButtonVisible();
            expect(logoutVisible).toBe(true);

            await productAction.clickLogoutButton();

            const loginVisible = await loginAction.hasLoginTitle();
            expect(loginVisible).toBe(true);
        })
    })

    afterEach(async function(){
        // if(browser){
        //     await browser.reloadSession();
        // }

        // await appHelper.reload();
        await appHelper.resetApp();
        

    });

});