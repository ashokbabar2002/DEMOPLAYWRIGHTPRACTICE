import { test, expect } from '@playwright/test';
import { time } from 'node:console';


test.beforeAll(async(browser,context,page)=>{
    console.log('before all tests');
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    console.log('before all tests - browser launched');    
})

    test.beforeEach('before each test',async()=>{
        await   page.goto('https://saucedemo.com/');
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder  ('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        console.log('before each test - login successful');
    })

    
test('SauceHasText',async({page})=>{
   await page.locator('.inventory_item_name')
   .filter({ hasText: 'Sauce Labs Bolt T-Shirt' })
   .getByRole('button', { name: 'Add to cart' }).click();
   console.log('Item added to cart');  

})

test.afterEach('after each test',async()=>{
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');   
    console.log('after each test');
})

test.afterAll(async(browser,context,page)=>{
    await page.close();
    await context.close();
    await browser.close();
    console.log('after all tests');
})

