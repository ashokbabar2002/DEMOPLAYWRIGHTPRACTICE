import { test, expect } from '@playwright/test';
 
test('downloadfile', async ({ page }) => {
await page.goto ('https://commitquality.com/practice-file-download')
const waitevent = await page.waitForEvent('download')
await page.getByRole('button',{name:'Download File'}).click() 
waitevent.saveAs('./tests/files/abc.txt')

});
