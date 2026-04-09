import { test, expect } from '@playwright/test';
//import { expect } from '@playwright/test';
import { time } from 'node:console';
import { argon2 } from 'node:crypto';

test('Keyboardactions',async({page})=>{
    await page.goto('https://gotranscript.com/');
    await page.locator('#name').fill('Selenium');
    await page
   //await page.locator('#male').check();
    await expect(page.locator('#male')).not.toBeChecked();
});

test.only('hiddendropdown',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('PIM').click();
    await page.waitForTimeout(4000);
    await page.locator('form i').nth(1).click();
    const options = page.locator('div[role="listbox"] span');
    const count = await options.count();
    for(let i=0 ; i<count;i++){
        let gettextforeachoption[] = await options.nth(i).innerText();
        console.log(gettextforeachoption)};           
    await page.waitForTimeout(4000);
});
