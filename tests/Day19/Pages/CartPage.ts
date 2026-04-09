import { Locator, Page } from "@playwright/test";
export class CartPage{
     readonly backpackddtocart:Locator;
     readonly backpackincart:Locator;
     readonly bikelightddtocart:Locator;
     readonly Tshirtaddtocart:Locator;
     readonly addtocartlink:Locator;
     readonly backpackremovebtn:Locator;
     readonly shoppingcartlink:Locator;

     constructor(page: Page){
        this.backpackddtocart = page.locator("#add-to-cart-sauce-labs-backpack");
        this.backpackincart = page.getByAltText("Sauce Labs Backpack");
        this.bikelightddtocart = page.locator("#add-to-cart-sauce-labs-bike-light");
        this.Tshirtaddtocart = page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
        this.addtocartlink = page.locator(".shopping_cart_link");
        this.backpackremovebtn = page.locator("#remove-sauce-labs-backpack");
        this.shoppingcartlink = page.locator(".shopping_cart_link");
        

     }

    async addtocart(){
        if(this.backpackddtocart){
        await this.backpackddtocart.click();
        if(this.backpackremovebtn){
            "console.log('Backpack added to cart');"
        }
    }}
            
    async Cart(){
        await this.addtocartlink.click();
        await this.shoppingcartlink.getByAltText("Sauce Labs Backpack").isVisible();
        }        
        }
     
    
    