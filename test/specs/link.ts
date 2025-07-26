
describe('Verify link', function () {

    it('Verify link, windows', async () => {
        await browser.url('https://demoqa.com');
        await clickOnTextFromlist("div[class='card-body']",'Elements');
        await clickOnTextFromlist("li[class*='btn-light '] > span",'Links');
        let homeQU7HU_link = await browser.$("a[id='dynamicLink']")
        homeQU7HU_link.waitForDisplayed({timeout:1000});
        homeQU7HU_link.click();
        await browser.pause(3000);

        //lay tat ca cac windows
        const windowList = await browser.getWindowHandles();
        console.log("window length: "+windowList.length);
        const currentWindow = await browser.getWindowHandle();
        for(const windowItem of windowList)
        {
            if(windowItem != currentWindow)
            {
                await browser.switchToWindow(windowItem);
                break;
            }
        }
        // click on Form in new window
        await clickOnTextFromlist("div[class='card-body']",'Forms');

        // go back default window
        await browser.switchToWindow(currentWindow);
        await clickOnTextFromlist("li[class*='btn-light '] > span",'Buttons');
        



    })
    async function clickOnTextFromlist(locator:string,text:string): Promise<void> {
        const listMenu = await $$(locator);
        for (let item of listMenu) {
            console.log(await item.getText());
            if ((await item.getText()).includes(text)) {
                await item.click();
                break;
            }
        }

    }


})



