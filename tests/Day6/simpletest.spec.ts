import { test, expect ,chromium} from '@playwright/test';
import { time } from 'node:console';

test('basictest',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   //const title = await page.title();
   //@ts-checkexpect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
   await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').fill('admin123');
   await page.getByRole('button', { name: 'Login' }).click();
   await page.waitForTimeout(2000);
   console.log('Login successful');
   //await page.getByRole('listitem').filter({ hasText: 'menu' }).click();
   await page.locator('xpath=//*[@class="oxd-userdropdown-name"]').click();
   await page.waitForTimeout(2000);
   //await page.getByRole('listitem').filter({ hasText: 'Logout' }).click();
   await page.locator('xpath=//*[@class="oxd-dropdown-menu"]/li[4]').click();
   await page.waitForTimeout(5000);
   console.log('Logout successful');
   }
);

