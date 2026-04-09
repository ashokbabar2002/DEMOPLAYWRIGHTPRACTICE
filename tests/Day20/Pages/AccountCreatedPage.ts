import { Locator, Page } from "@playwright/test";

export class AccountCreatedPage{
    readonly accountbtn:Locator;  
    readonly page:Page;     
    
        constructor(page: Page){
        this.page = page;
        this.accountbtn = page.locator(".btn.btn-primary");
        
    }    
    async verifyaccountcreated(){
       const accountbtn= await this.accountbtn.isVisible();   
         if(accountbtn){  
       console.log("Account created successfully");
       }
         else{
          console.log("Account creation failed");
         }
    }}
