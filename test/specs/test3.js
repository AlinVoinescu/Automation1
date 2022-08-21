describe('libris.ro', () => {

    it('should login with credentials', async () => {
        await browser.url('http://libris.ro/login.jsp');

        const userBox = await $('#date-inregistrare-user');
        const passBox = await $('#parola');
        const loginButton = await $('.log-in-cont-inregistrare-btn');

        await userBox.setValue('AlinVoi');
        await passBox.setValue('carteamea123');
        await loginButton.click();
       
});

    it('', async () => {
      await browser.url('http://libris.ro');

      const searchBox = await $('#autoComplete');
      const searchButton = await $('#autoCompleteButton');
      const wishButton = await $('.add-wishlist-icon');
      const wishCheckButton = await $('.header-menu-icon-desk');

      await searchBox.setValue('ion creanga');
      await searchButton.click();
      await wishButton.click();
      await wishCheckButton.click();



});



});