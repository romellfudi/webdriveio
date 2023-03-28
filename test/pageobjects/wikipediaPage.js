// This is an example of a page object for the Wikipedia website
export default class WikipediaPage {
  constructor() {
    this.urlPortada = "https://es.wikipedia.org/wiki/Wikipedia:Portada";
    this.welcomeElement = $("//a[text()='Bienvenidos']");
    this.searchInput = $("#searchInput");
    this.searchButton = $("#searchButton");
    this.searchGlobantResult = $("//a[text()='Globant']");
    this.englishLink = $(
      "#p-lang li.interlanguage-link.interwiki-en.mw-list-item a"
    );
    this.historialLink = $("#ca-history");
    this.donarLink = $("#n-sitesupport a span");
    this.noResultsMessage = $("p.mw-search-nonefound");
    this.linkWithinArticle = $("//a[text()='Categoría:Actualidad']");
    this.randomArticleButton = $("//span[text()='Página aleatoria']");
  }

  // Opens the Wikipedia homepage
  async openPortada() {
    await browser.url(this.urlPortada);
  }

  // Checks that the browser's title matches the expected title
  async hasTitle(title) {
    await expect(browser).toHaveTitle(title);
  }

  // Checks that the "Bienvenidos" element is displayed, clickable and exists
  async hasWelcomeElement() {
    await this.welcomeElement.waitForDisplayed();
    await expect(this.welcomeElement).toBeDisplayed();
    await expect(this.welcomeElement).toBeClickable();
    await this.welcomeElement.waitForClickable();
    await expect(this.welcomeElement).toBeDisplayed();
    await expect(this.welcomeElement).toExist();
  }

  // Searches for a given term in the Wikipedia search bar
  async searchFor(searchTerm) {
    await this.searchInput.waitForDisplayed();
    await this.searchInput.setValue(searchTerm);
    await this.searchButton.waitForDisplayed();
    await this.searchButton.click();
  }

  // Checks that the search result for "Globant" is displayed, clickable and exists
  async hasSearchResult() {
    await this.searchGlobantResult.waitForDisplayed();
    await expect(this.searchGlobantResult).toBeDisplayed();
    await expect(this.searchGlobantResult).toBeClickable();
    await this.searchGlobantResult.waitForClickable();
    await expect(this.searchGlobantResult).toBeDisplayed();
    await expect(this.searchGlobantResult).toExist();
  }

  // Clicks the "English" link to switch to the English version of Wikipedia
  async switchToEnglish() {
    await this.englishLink.waitForDisplayed();
    await this.englishLink.isDisplayed();
    await this.englishLink.click();
  }

  // Clicks the "Historial" link to go to the page's history
  async goToHistory() {
    await this.historialLink.waitForDisplayed();
    await this.historialLink.click();
  }

  // Clicks the "Donar" link to go to the donation page
  async goToDonationPage() {
    await this.donarLink.waitForDisplayed();
    await this.donarLink.click();
  }

  // Checks that the "No hay resultados" message is displayed and contains the expected text
  async hasNoResultsMessage() {
    await this.noResultsMessage.waitForDisplayed();
    await expect(this.noResultsMessage).toBeDisplayed();
    expectChai(await this.noResultsMessage.getText()).to.include(
      "No hay resultados que cumplan los criterios de búsqueda"
    );
  }

  // Clicks a link within the current article
  async clickLinkWithinArticle() {
    await this.linkWithinArticle.waitForDisplayed();
    const linkUrl = await this.linkWithinArticle.getAttribute("href");
    await this.linkWithinArticle.click();
    await expect(browser).toHaveUrlContaining(linkUrl);
  }

  // Clicks the random article button and waits until a new page is loaded
  async clickRandomArticleButton() {
    await this.randomArticleButton.waitForDisplayed();
    const currentPageUrl = await browser.getUrl();
    await this.randomArticleButton.click();
    await browser.waitUntil(
      async () => {
        const newPageUrl = await browser.getUrl();
        return newPageUrl !== currentPageUrl;
      },
      { timeout: 500, timeoutMsg: "Failed to navigate to a new page" }
    );
    await expect(browser).toHaveUrlContaining("wikipedia.org");
  }
}
