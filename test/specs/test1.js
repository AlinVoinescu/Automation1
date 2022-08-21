describe('eMag.ro', () => {
    it('should have the correct page title', async () => {
        await browser.url('http://emag.ro');
        await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');

        const searchBox = await $("#searchboxTrigger");

        const helpLink = await $(".navbar-aux-help-link");

        helpLink.click();
    });

    it('should contain a cart button', async () => {
       
        const cartButton = await $('#my_cart');
        await expect(cartButton).toBeDisplayed();
    });
});