import ClientDelayPage from "../pageobjects/clientdelayPage.js"; 

describe('Client Delay', () => {

    let clientDelayPage;

    beforeEach('Open Client Delay page', async () => {
        clientDelayPage = new ClientDelayPage();
        await clientDelayPage.open();
    });

    it('every element should be displayed', async () => {
        await clientDelayPage.checkEveryExistence();
    });

    it('should display loading icon when clicking on button', async () => {
        await clientDelayPage.clickOnDelayButton();
    });

    it('should display response after 14 seconds', async () => {
        await clientDelayPage.checkResponseAfter14Seconds();
    });

    it('should display response after 15 seconds', async () => {
        await clientDelayPage.checkResponseAfter15Seconds();
    });
});