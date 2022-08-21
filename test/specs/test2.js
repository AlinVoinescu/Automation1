describe('eMag.ro', () => {

    it('should contain a logo', async () => {
        await browser.url('http://emag.ro')
        const logoButton = await $('.navbar-branding');
        await expect(logoButton).toBeDisplayed();
    });

    it('should open Resigilate page', async () => {

        const resigilateButton = await $('[title="Resigilate"]');
        await resigilateButton.click();
       
        await expect(browser).toHaveTitle('Produse resigilate - eMAG.ro');
    });


});