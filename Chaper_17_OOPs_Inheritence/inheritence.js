//check once 
//single inheritence
class BasePage {
    constructor(page) {
        this.page = page;
    }

    async open() {
        console.log("Opening page: " + this.page);
    }

    async close() {
        console.log("Closing page");
    }
}

class LoginPage extends BasePage {


}


let loginPage = new LoginPage();

loginPage.open();
loginPage.close();

/*
OP:
[Running] node "c:\Users\samee\OneDrive\Desktop\Samruddhi\Plawright AI mastery TTA\PlaywrightPrograms\Chaper_17_OOPs_Inheritence\inheritence.js"

*/