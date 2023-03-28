import WikipediaPage from "../pageobjects/wikipediaPage.js";
import { getWordsData } from "../data/dataWords.js";

describe("Wikipedia page", () => {
  let wikipediaPage;

  beforeEach("Open Wikipedia page", async () => {
    wikipediaPage = new WikipediaPage();
    await wikipediaPage.openPortada();
  });

  it("should have the right title and says welcome", async () => {
    await wikipediaPage.hasTitle("Wikipedia, la enciclopedia libre");
    await wikipediaPage.hasWelcomeElement();
  });

  it("search 'globant'", async () => {
    await wikipediaPage.searchFor("globant");
    await wikipediaPage.hasSearchResultGlobant();
  });

  it("changes language to English when clicking on 'English' link", async () => {
    await wikipediaPage.switchToEnglish();
    await expect(browser).toHaveUrlContaining("en.wikipedia.org");
  });

  it("takes you to page history when clicking on 'Historial' link", async () => {
    await wikipediaPage.goToHistory();
    await expect(browser).toHaveUrlContaining(
      "Wikipedia:Portada&action=history"
    );
  });

  it("takes you to donation page when clicking on 'Donar' link", async () => {
    await wikipediaPage.goToDonationPage();
    await expect(browser).toHaveUrlContaining("donate.wikimedia.org");
  });

  it("shows 'No se encontraron resultados' message when searching for non-existent page", async () => {
    wikipediaPage.searchFor("qwertyuiopasdfghjklzxcvbnm");
    wikipediaPage.hasNoResultsMessage();
  });

  it("clicking on link within article takes you to the correct page", async () => {
    wikipediaPage.clickLinkWithinArticle();
  });

  it("clicking 'Random article' button takes you to a random Wikipedia page", async () => {
    wikipediaPage.clickRandomArticleButton();
    await expect(browser).toHaveUrlContaining("wikipedia.org");
  });

  it("Search random article by using data.json", async () => {
    getWordsData.forEach(async (word) => {
      wikipediaPage.searchFor(word);
      wikipediaPage.checkResultFor(word);
      // its not neccessary to go back to the main page,
      // because the beforeEach function will do it due to the fact that the page is refreshed 
      await expect(wikipediaPage.searchInput).tobeDisplayed();
    });
  });
});
