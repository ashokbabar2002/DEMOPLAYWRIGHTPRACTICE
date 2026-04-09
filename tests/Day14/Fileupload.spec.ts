import { test, expect } from '@playwright/test';
import { time } from 'node:console';

test('SauceHasText',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.setInputFiles('#singleFileInput', './tests/files/abc.txt');
    await page.waitForTimeout(50000); 
    console.log("file uploaded successfully");//locating the file input element and uploading the file "test.txt" from the specified path
});



