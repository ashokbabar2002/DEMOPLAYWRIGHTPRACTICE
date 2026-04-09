import { test, expect } from '@playwright/test';
import { time } from 'node:console';

test('SauceHasText',async({page})=>{
    await page.goto('https://saucedemo.com/');
   //const title = await page.title();
   //@ts-checkexpect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
   await page.getByPlaceholder('Username').fill('standard_user');
   await page.getByPlaceholder  ('Password').fill('secret_sauce');
   await page.getByRole('button', { name: 'Login' }).click();
   console.log('Login successful');
   await page.locator('.inventory_item_name')
   .filter({ hasText: 'Sauce Labs Bolt T-Shirt' })
   .getByRole('button', { name: 'Add to cart' }).click();
   console.log('Item added to cart');  

})
test('testfunctions',async({page})=>{
class add{
    a:number;    b:number;
    actualadd(a:number,b:number):number{
        console.log("inside actualadd function");
        this.a=a;
        this.b=b;
        if(this.b){
            console.log(this.a+this.b);
        }else{
            console.log(this.a);    
        }
         return this.a+this.b;
    }    
} 
const ad1 = new add();
console.log("hhh");
ad1.actualadd(2,3);
})