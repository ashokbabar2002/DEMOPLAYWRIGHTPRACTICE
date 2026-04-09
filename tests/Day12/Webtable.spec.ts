import { test, expect, Locator } from '@playwright/test';
//import { expect } from '@playwright/test';
import { time } from 'node:console';
import { argon2 } from 'node:crypto';

// test('Webtablecase',async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/');
//     const tablelocator:Locator = page.locator('#productTable');
//     const columncount = await tablelocator.locator('thead tr th').count();
//     console.log('Column count is: ' + columncount);
//     const rowcount = await tablelocator.locator('tbody tr').count();
//     console.log('Row count is: ' + rowcount);
//     for(let i=0; i<rowcount; i++){
//        const cell = tablelocator.locator('td');
//         for(let j = 0; j<await cell.count(); j++){
//             const celltext = await cell.nth(j).textContent();
//             console.log(celltext);                         
//                     }
//             }   
            //     for(let k=0; k<; k++){

//     }   
// });       
    test.only('Static Webtablecase',async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/');
        const tablelocator:Locator = page.locator('//table[@name="BookTable"]');        
       const rowcount = await tablelocator.locator('tbody tr').count();
       console.log('Row count is: ' + rowcount);

       const getcolumnnames = await tablelocator.locator('tbody tr th').allTextContents();
       const getcolumncount = await tablelocator.locator('tbody tr th').count();       
       console.log('Column count is: ' + getcolumncount);
       console.log(getcolumnnames);
       for(let i=1; i< rowcount; i++){
           const cell = tablelocator.locator('tbody tr').nth(i).locator('td');
           {
            for(let j=0;j< getcolumncount; j++){
                console.log(await cell.nth(j).textContent());                
             } 
          }}        

});
