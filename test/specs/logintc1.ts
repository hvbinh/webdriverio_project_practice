describe("login tc", () => {
  it("tests login tc", async () => {
    
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await $("#username").click()
    await $("#username").setValue("tomsmith")

    await $("#password").click()
    await $("#password").setValue("SuperSecretPassword!")
    await browser.$("button[type='submit']").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
    await $("a[href='/logout']").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
  });
});
