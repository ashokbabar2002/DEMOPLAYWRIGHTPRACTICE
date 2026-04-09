import { Locator, Page } from "@playwright/test";
export class AccountInfoPage{
    readonly page:Page;
     readonly title:Locator;
     readonly name:Locator;
//     readonly email:Locator;
     readonly password:Locator;
    readonly firstname:Locator;
    readonly lastname:Locator;
    readonly company:Locator;
    readonly address:Locator;
    readonly country:Locator;
    readonly state:Locator;
    readonly city:Locator;
    readonly zipcode:Locator;
    readonly phone:Locator;
    readonly submitbtn:Locator;     

     constructor(page: Page){
        this.title = page.locator("#id_gender2");
        this.name = page.locator("#name");     
   //     this.email = page.locator("#email");
        this.password = page.locator("#password");
        this.firstname = page.locator("#first_name");
        this.lastname = page.locator("#last_name");
        this.address = page.locator("#address1");
        this.country = page.locator("#country");
        this.state = page.locator("#state");
        this.city = page.locator("#city");
        this.zipcode = page.locator("#zipcode");
        this.phone = page.locator("#mobile_number");
        this.submitbtn = page.locator("xpath=//button[@data-qa='create-account']");      
     }
    async signupPersonalInfo(name:string){
    await    this.title.check();
    await    this.name.fill(name);   
   // await    this.email.fill("ashokbabar2@gmail.com");
    await    this.password.fill("ashok123");
    await    this.firstname.fill("ashok2");
    await    this.lastname.fill("babar2");
    await    this.address.fill("pune");      
    await    this.country.selectOption("India");
    await    this.state.fill("maharashtra");
    await    this.city.fill("pune");
    await    this.zipcode.fill("411028");
    await    this.phone.fill("9876543210");
    await    this.submitbtn.click();
        
    }}
          
     
    
    