
describe('Shadow example',function()
{
    it('Verify can click on shadow element',async ()=>{
        await browser.url('https://shop.polymer-project.org/')
        const shadowHost = await $("shop-app[page='home']")  //element chứa shadowroot
        await shadowHost.shadow$("a[href='/list/mens_outerwear']").click()  //click on shadow element master branch
    })
}) 
