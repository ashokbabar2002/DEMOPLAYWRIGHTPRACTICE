import { test, expect } from '@playwright/test';
//import { expect } from '@playwright/test';
import { time } from 'node:console';
import { argon2 } from 'node:crypto';

test('SauceHasText',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
   //const title = await page.title();
   //@ts-checkexpect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
   await page.locator('#female').check();
   await expect(page.locator('#female')).toBeChecked();
   //await page.locator('#male').check();
   await expect(page.locator('#male')).not.toBeChecked();
});

test('testchekboxes',async({page})=>{   
    await page.goto('https://testautomationpractice.blogspot.com/');
    const chekboxarry = ['#monday','#tuesday','#wednesday','#thursday','#friday'];
    for(const eachelement of chekboxarry){
        await page.locator(eachelement).check();
        await page.waitForTimeout(2000);
        await expect(page.locator(eachelement)).toBeChecked();
    }
});

test('dropdownvalidation',async({page})=>{   
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#country').selectOption('Canada');
    await page.waitForTimeout(2000);
    await page.locator('#colors').selectOption(['Green','Yellow']);
    await page.waitForTimeout(2000);    
    });

test.only('alerts',async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/');        
        page.on('dialog', async(a1) => {
           console.log(a1.message());
        await page.waitForTimeout(2000);    
            await a1.accept()});
                    
        await page.locator('#alertBtn').click();
        await page.waitForTimeout(2000);
        
        
        page.on('dialog', async(a2) => {
          console.log(a2.message());  
          await page.waitForTimeout(2000);
          await a2.accept()});

        await page.locator('#confirmBtn').click();
        await page.waitForTimeout(2000);        
});
    


