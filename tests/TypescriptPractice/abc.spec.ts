import{test,expect} from '@playwright/test';
import { table } from 'node:console';

test('checkboxes', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const weekdays = ['#sunday','#monday'];
    for(const local of weekdays){
        await page.locator(local).scrollIntoViewIfNeeded();
        await page.locator(local).click();
    }
    await page.waitForTimeout(40000)});

test('check_list',async({ page }) => {  
    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.locator('#country').selectOption('India');
    //await page.locator('#country').selectOption({index:5});
    await page.locator('#colors').scrollIntoViewIfNeeded();
    await page.locator('#colors').isVisible();
    await page.locator('#colors').selectOption(['Yellow','Green']);
    await page.waitForTimeout(3000);
    
  });

  test('check_alerts',async({ page }) => {  
    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.locator('#country').selectOption('India');
    //await page.locator('#country').selectOption({index:5});
    page.on('dialog', async(dialog) => {
        await dialog.accept('Playwright');
        console.log(dialog.message());
        
    
    })
       await page.waitForTimeout(3000);

    await page.locator('#confirmBtn').scrollIntoViewIfNeeded();
    await page.locator('#confirmBtn').isVisible();
    await page.locator('#confirmBtn').click();
    await page.waitForTimeout(3000);
      
  });

  test("Check hidden dropdown", async({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByRole('listbox').click();
    await page.getByText('Administration').click();
    await page.waitForTimeout(3000);    
  })

  test("check webtabele", async({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const rowcount = await page.locator('xpath=//table[@name="BookTable"]/tbody/tr').count();
    const colcount = await page.locator('xpath=//table[@name="BookTable"]/tbody/tr[1]/th').count();
    for(let i=1; i<=rowcount; i++){
     const table = await page.locator('xpath=//table[@name="BookTable"]/tbody/tr[i])')
       for(let j=1; j<=colcount; j++){
        const tablevalues = await page.locator('xpath=//table[@name="BookTable"]/tbody/tr[i]/td[j]').textContent();
            console.log(tablevalues);  
      //console.log(tablevalues);
     }}
    })


     test("check frames",async({page})=>{
            await page.goto('https://ui.vision/demo/webtest/frames/');
            const getallframes = page.frames().length;
            console.log("no of frames are : " + getallframes);        
            
            await page.frameLocator("//frame[@src='frame_3.html']")
            .frameLocator("//iframe[@src='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']")
            .locator("//span[contains(text(),'Hi, I am the UI.Vision IDE')]").click()
     })          
          
     test("check for multiple tabs",async({page,context})=>{
        await page.goto("http://the-internet.herokuapp.com/windows")
        await page.locator("text=Click Here").click();
        await page.waitForEvent('popup');
        let allpages = context.pages();
        console.log(allpages.length);

        for(let eachtab of allpages){
            let pagetitle = await eachtab.title();
            console.log(pagetitle);
        }     })

      test("check the slider bar",async({page,context})=>{
            await page.goto("https://jqueryui.com/slider/");
           let slidebar = page.frameLocator("iframe[src='/resources/demos/slider/default.html']").locator('div[id="slider"]')           
            await slidebar.scrollIntoViewIfNeeded();
            let slidehandle = page.locator('span[class="ui-slider-handle ui-corner-all ui-state-default"]')
            const  coordinatedtls=await slidebar.boundingBox();
            console.log(coordinatedtls);          
          })   
          
      test("take screenshot",async({page})=>{ 
        await page.goto("https://testautomationpractice.blogspot.com/");
        const date = new Date().toLocaleString().replace(/:/g,'-');
        await page.screenshot({path:`test-results/Screenshot/VisibletoEye_${date}.png`, fullPage:false});
      })

      test("copy paste text",async({page})=>{
        await page.goto("https://www.saucedemo.com/")
        await page.getByPlaceholder('Username').fill("standard_user");
        await page.getByPlaceholder('Password').fill("secret_sauce");
        await page.getByText('Login').click();

        await page
      })

      test("check boxes and radio buttons",async({page})=>{
       await page.goto("https://testautomationpractice.blogspot.com/")
       const days = ['#sunday','#monday',"#tuesday"]
       for(const checkdays of days){
        console.log(" inside for loop")
           await page.waitForTimeout(3000)
           await page.locator(checkdays).check()
           await page.waitForTimeout(5000)
       }
       
      })

      test("select values from dropdown",async({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/")
      await page.waitForTimeout(3000)
      await page.locator('#colors').selectOption(['Red','Blue'])
                })

      test("alerts",async({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/")
      page.on('dialog',async(dialog)=>{
         await dialog.accept()
         console.log(await dialog.message())
              })
      await page.locator('#alertBtn').click() 
      await page.waitForTimeout(3000)

      })

      test("check for keyboard actions", async({page})=>{
        await page.goto("https://gotranscript.com/text-compare/")
        await page.getByPlaceholder("Paste one version of the text here.").fill("hello world")
        await page.keyboard.press("Control+A")
        await page.keyboard.press("Control+C")
        await page.keyboard.down('Tab')
        await page.keyboard.up('Tab')
        await page.keyboard.press("Control+V")
      })

     test("select hidden items in dd",async({page})=>{
      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php")
      await page.getByPlaceholder("username").fill("Admin")
      await page.getByPlaceholder("password").fill("admin123")
      await page.locator("button[type='submit']").click()
      await page.waitForTimeout(3000)
      await page.getByText('PIM').click()
      await page.locator("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[4]").click()
      await page.waitForTimeout(3000)
      const options =  page.locator("div[role='listbox'] span")
      const total_elements = await options.count()
      
      console.log("total elements in dropdown are "+total_elements)
      let z;
      for(z=0;z<total_elements;z++){
         console.log(await options.nth(z).innerText())  
        }
             await page.locator("//span[contains(text(),'Development')]").click()
      
     })

     test("web table again",async({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/")
      const tableheaders =  page.locator("table[id='productTable'] thead tr th")
      const tablerows = page.locator("table[id='productTable'] tbody tr")
      const numberofrows = await tablerows.count()
      console.log("number of rows are "+ numberofrows)
      const headerlenghth = await tableheaders.count()
      console.log("number of columns are "+headerlenghth)
     // const headervalues = tableheaders.textContent()
      let i;
      for(i=0 ;i <headerlenghth ; i++){
         console.log(await tableheaders.nth(i).textContent())
      }

      for(let i=0;i< numberofrows;i++){
           for(let j=0;j< headerlenghth-1;j++){
           const row = tablerows.nth(i).locator("td")
           const celldata = await row.nth(j).innerText()
           console.log("cell data is "+ celldata)
        }
      }
     })
   
     test("check out frames",async({page})=>{
      await page.goto("https://ui.vision/demo/webtest/frames")
      const allframes = page.frames()
      for(let framename of allframes){
        console.log("framenames are :" + framename.name())
      }
      console.log(allframes)
      const frame2 = page.frameLocator("frame[src='frame_2.html']")
      await frame2.locator("input[name='mytext2']").fill("hello world")
      const frame3 = page.frameLocator(("frame[src='frame_3.html']"))
      const innerframeforframe3 = await frame3.frameLocator("iframe[src='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']")
      .locator("//span[contains(text(),'Hi, I am the UI.Vision IDE')]").click()
        })


     test.only("test picker",async({page})=>{
     await page.goto("https://testautomationpractice.blogspot.com/")
     await page.locator("#txtDate").click()
     
     const targetdate = '12'
     const targetmonth = 'May'
     const targetyear = '2025'

     const currentmonth = await page.locator("//select[@class='ui-datepicker-month'][@data-handler='selectMonth']//option[@selected='selected']").textContent()
     const currentyear = await page.locator("//select[@class='ui-datepicker-year'][@data-handler='selectYear']//option[@selected='selected']").textContent()
     const currenddate = page.locator("td[class=' ui-datepicker-days-cell-over  ui-datepicker-today']")
     const todaysdate = await currenddate.innerText()
     console.log(currentmonth)
     console.log(currentyear)
     console.log(todaysdate)
      while(true)
      {
        console.log("inside while loop")
       if(targetyear===currentyear && targetmonth===currentmonth && targetdate===todaysdate){
          console.log(" target is todays date ")
       }
       else(targetyear<currentyear){

       }


       



    //     {break}
    //       }
    //    else{



    //    }   


    //   }
     } )  



    
      