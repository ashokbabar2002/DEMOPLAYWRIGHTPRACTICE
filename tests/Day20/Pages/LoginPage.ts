import { Locator, Page } from "@playwright/test";


export class LoginPage{
    readonly page:Page;
    readonly username:Locator;
    readonly emailid:Locator;
    readonly signup:Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.getByPlaceholder("Name");
        this.emailid = page.locator("xpath=//input[@name='email'][@data-qa='signup-email']");
        this.signup = page.getByRole("button", { name: "Signup" });
    }    
    async Launchpp(){
    await   this.page.goto("https://automationexercise.com/login");
    console.log("Application launched successfully");
       }    
    
    async LogintoApplication(username:string, emailid:string){   
    await this.username.fill(username);
    console.log("Username entered successfully");
    await this.emailid.fill(emailid);
    console.log("Emailid entered successfully");
    await this.signup.click();
    console.log("Signup button clicked successfully");
    }
}