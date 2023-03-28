export default class ClientDelayPage {
  constructor() {
    this.url = "http://uitestingplayground.com/clientdelay";
    this.containt = $("div > h3");
    this.delayedElement = $("#delayed-element");
    this.btnPrimary = $("button[class='btn btn-primary']");
    this.loading = $("i[class='fa fa-spinner fa-spin']");
    this.response = $("p[class='bg-success']");
  }

  async open() {
    await browser.url(this.url);
  }

  async checkEveryExistence() {
    await this.containt.waitForDisplayed();
    await expect(this.containt).toBeDisplayed();
    await this.btnPrimary.waitForDisplayed();
    await expect(this.btnPrimary).toBeDisplayed();
    await expect(this.loading).not.toBeDisplayed();
    await expect(this.response).not.toBeDisplayed();
  }

  async clickOnDelayButton() {
    this.btnPrimary.waitForDisplayed();
    await this.btnPrimary.click();
    await expect(this.loading).toBeDisplayed();
  }

  async checkResponseAfter14Seconds() {
    await this.btnPrimary.click();
    await this.loading.waitForDisplayed();
    await expect(this.loading).toBeDisplayed();
    await browser.pause(14000);
    await expect(this.loading).toBeDisplayed();
    await expect(this.response).not.toBeDisplayed();
  }

  async checkResponseAfter15Seconds() {
    await this.btnPrimary.click();
    await this.loading.waitForDisplayed();
    await expect(this.loading).toBeDisplayed();
    await this.response.waitUntil(
      async () => {
        return await this.response.isDisplayed();
      },
      { timeout: 15500, timeoutMsg: "The response never shows up" }
    );
    await expect(this.loading).not.toBeDisplayed();
    await expect(this.response).toBeDisplayed();
    expectChai(await this.response.getText()).to.include(
      "Data calculated on the client side."
    );
  }
}
