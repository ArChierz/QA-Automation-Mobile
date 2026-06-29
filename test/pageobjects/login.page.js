class LoginPage {

    get usernameInput(){
        return $('android= new UiSelector().text("Username")');
    }

    get passwordInput(){
        return $('~test-Password');
    }

    get loginButton(){
        return $('android= new UiSelector().text("LOGIN")');
    }

    get titleText(){
        return $('android= new UiSelector().className("android.widget.ImageView").instance(0)');
    }

    get errorMessage(){
        return $('android= new UiSelector().text("Username and password do not match any user in this service.")');
    }
}

export default new LoginPage();