import { test, expect } from '@playwright/test';

test.only('visualtest', async ({page})=> {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.locator ('#txtUsername').fill('Admin');
await page.locator ('#txtPassword').fill('admin123');
await page.locator ('#btnLogin').click();        
})