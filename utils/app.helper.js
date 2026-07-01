class AppHelper {
    constructor(driver) {
        this.driver = driver;
    }

    async launch(){
        await this.driver.launchApp();
    }

    async close(){
        await this.driver.closeApp();
    }

    async resetApp(){
        await this.driver.terminateApp('com.swaglabsmobileapp');

        await this.driver.pause(1000);

        await this.driver.activateApp('com.swaglabsmobileapp');
    }

    async reload(){
        
        await this.driver.reloadSession();
        
    }

    
}

export default AppHelper;