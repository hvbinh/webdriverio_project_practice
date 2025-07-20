
describe('table example',function()
{
    it('Verify can interact with table',async ()=>{
        await browser.url('https://demoqa.com/webtables')
        await browser.pause(3000);
        let tbody="[class='rt-tbody'] [class='rt-tr-group']";
        let rows = await $$(tbody);
        console.log("rows length:"+await rows.length);

        for(let row of rows)
        {
            let cols =  await $$("[class='rt-td']");
            
              for(let cell of cols)
              {
                    console.log("text: "+await cell.getText());
                    if((await cell.getText()).includes('Vega'))
                    {
                        console.log("Vega dispays");
                        await expect((await cell.getText())).toContain('Vega');
                        break;
                    }
              }
        }
        let txtSearch= await $("input[id='searchBox']");
        await txtSearch.click();
        await txtSearch.setValue("Vega");
        //await txtSearch.addValue('\uE007'); // Enter key code
        
        let textLength = (await txtSearch.getValue()).length;
        await browser.pause(3000);
        for(let i=0;i<textLength;i++)
        {
            await browser.keys('Backspace');
        }

        // add new employee
        let btn_add = "button[id='addNewRecordButton']";
        await $(btn_add).click();
        await $("input[id='firstName']").waitForDisplayed({ timeout: 5000 });
        await $("input[id='firstName']").setValue("Michael");
        await $("input[id='lastName']").setValue("Ho");
        await $("input[id='userEmail']").setValue("michaelho@abc.com");
        await $("input[id='age']").setValue("30");
        await $("input[id='salary']").setValue("1000");
        await $("input[id='department']").setValue("HR");
        await $("button[id='submit']").click();
        await browser.pause(3000);
        //edit
        await txtSearch.setValue("Michael");
        await $("span[title='Edit']").click();
        await $("input[id='firstName']").setValue("Michael1");
        await $("button[id='submit']").click();
        await browser.pause(3000);
        //delete
        
        await browser.pause(1000);
        await $("span[title='Delete']").click();
        await browser.pause(3000);
        textLength = (await txtSearch.getValue()).length;
        await txtSearch.click();
        for(let i=0;i<textLength;i++)
        {
            await browser.keys('Backspace');
        }
        const select = await $("[class='select-wrap -pageSizeOptions']>select");
        await select.selectByVisibleText("5 rows");
        await browser.pause(10000);


    console.log();
        
    })
}) 