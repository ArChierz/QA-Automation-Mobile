class ProductPage {

    get titleText(){
        return $('android= new UiSelector().text("PRODUCTS")');
    }

    get burgerMenu(){
        return $('android= new UiSelector().className("android.widget.ImageView").instance(1)');
    }    

    get logoutButton(){
        return $('android= new UiSelector().text("LOGOUT")');
    }   
    
    get addToCart(){
        return $('android= new UiSelector().text("ADD TO CART").instance(0)');
    }

    get removeButton(){
        return $('android= new UiSelector().text("REMOVE")')
    }

    get filterButton(){
        return $('android= new UiSelector().className("android.widget.ImageView").instance(5)');
    }

    get cancelFilter(){
        return $('android= new UiSelector().text("Cancel")');
    }

    get sortItemsText(){
        return $('android= new UiSelector().text("Sort items by...")');
    }
}

export default new ProductPage();