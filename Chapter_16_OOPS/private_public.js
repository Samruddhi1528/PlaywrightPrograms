//PRIVATE -> # Hidden data
//PUBLIC -> this. Accessible data

class Credentiales {
    #apikey  //Private 
    constructor(user, key) {
        this.user = user;
        this.apikey = key
    }

    getAuthHeader() {
        return "Bearer " + this.apikey;
    }


}

let cred = new Credentiales("admin", "#secreatkey_123456"); //Here # is not mandatory while sending the hash
console.log(cred.getAuthHeader());
console.log(cred.apikey); //undefined
console.log(cred.user); //admin

/*
OP:
[Running] node "c:\Users\samee\OneDrive\Desktop\Samruddhi\Plawright AI mastery TTA\PlaywrightPrograms\Chapter_16_OOPS\private_public.js"
Bearer #secreatkey_123456
#secreatkey_123456
admin

*/