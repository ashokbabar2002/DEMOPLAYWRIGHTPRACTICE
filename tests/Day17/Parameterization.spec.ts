import {test,expect,devices, chromium} from '@playwright/test';
import data from './Login.json'

// test('downloadfile', async ({ page }) => {
// await page.goto ('https://freelance-learn-automation.vercel.app/login')

// for(const logindata of data){
// await page.locator('#email1').fill(logindata.email);
// await page.locator('#password1').fill(logindata.password);  
// await page.locator('.submit-btn').click()
// await page.locator("xpath=//button[@class='cartBtn']/following-sibling::img[@alt='menu']").click()
// await page.locator("xpath=//button[contains(text(),'Sign out')]").click()

// })

test.only('mobiletest', async ({  })=> {
const mobile1 = devices['iPhone 6 Plus landscape'];
const browser = await chromium.launch();
const context = await browser.newContext({...mobile1});
const page = await context.newPage();
await page.goto('https://freelance-learn-automation.vercel.app/');
await page.waitForTimeout(4000);
//await expect(page.locator("xpath=//h1[contains(text(),'Welcome to the Automation Practice')]")).toBeVisible();
})