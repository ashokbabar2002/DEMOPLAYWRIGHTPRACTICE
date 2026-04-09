import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginbutton:Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginbutton = page.locator('#login-button');    
    }    
    async Lunchpp(){
       this.page.goto("https://www.saucedemo.com/");
       }
    
    async LogintoApplication(username2:String, password2:String){   
    await this.username.fill(username2);
    await this.password.fill(password2);
    await this.loginbutton.click();
    }
}