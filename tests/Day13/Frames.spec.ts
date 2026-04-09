import { test, expect } from '@playwright/test';
 
test('frames', async ({ page }) => {
await page.goto ('https://ui.vision/demo/webtest/frames/')
const allframes = page.frames() //locating all the frames on the page and storing them in a variable
console.log("Total number of frames: " + allframes.length) //printing the total number of frames on the page

//1st approach using page.frame
const frame1= page.frame({url :'https://ui.vision/demo/webtest/frames/frame_1.html'}) //locating the first frame using its URL and storing it in a variable
// await frame1?.fill("[name='mytext1']", "HELLO WORLD")
if(frame1){
    await frame1.fill("[name='mytext1']", "HELLO WORLD") //filling the text box in the first frame with the text "HELLO WORLD"
}
else{
    throw new Error("Frame not found") //throwing an error if the frame is not found
}
await page.waitForTimeout(5000) //waiting for 5 seconds to see the changes in the first frame
 
//2nd approach using frame locator
const framenew = page.frameLocator('frame[src="frame_2.html"]');
await framenew.locator("[name='mytext2']").fill("HELLO WORLD") //filling the text box in the second frame with the text "HELLO WORLD"
})



test('Datepicker ', async ({ page }) => {
    await page.goto ('https://ui.vision/demo/webtest/frames/')
   // const datepicker = page.locator('#datepicker')
    //await datepicker.fill('03/24/2026') //clicking on the datepicker input field to open the datepicker
    const noofframes  = await page.frames().length //getting the number of frames on the page and storing it in a variable
    console.log("Total number of frames: " + noofframes) //printing the number of frames on the page
    console.log("Frames are : " + page.frames().map(frame => frame.name()).join("\n"))//printing the number of frames on the page using the frames() method directly
     });


