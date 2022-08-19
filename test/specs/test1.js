describe('eMag.ro', () => {
    it('should load', async () => {
        await browser.url('http://emag.ro');


        const searchBox = await $("#searchboxTrigger");

        const helpLink = await $(".navbar-aux-help-link");

        helpLink.click();
    });
});