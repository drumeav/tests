describe("Should select two documents from the docs list and merge them into single PDF", () => {
  it(
    "navigate to Documents page and merge two docs into single pdf file",
    { viewportWidth: 1200 },
    () => {
      cy.visit("/");

      cy.get(":nth-child(5) > a", { timeout: 6000 }).click();

      cy.get("#id_username").type("test+klooney@hometap.com");
      cy.get("#id_password").type("testpassword1{enter}");

      //cy.login("test+klooney@hometap.com","testpassword1{enter}")

      cy.get('[data-testid="trackfilter-clear"]', { timeout: 6000 }).click(); //clear the filters
      cy.get('[data-testid="filter-stage"]')
        .click()
        .type("Application in Review{enter}");

      cy.get("div.TracksTableContainer").click();
      cy.get("div.TracksTableContainer").then(($el) => {
        cy.wrap($el).find("a").first().click();
      });

      cy.get("nav>a").last().click();

      cy.get('input[type="checkbox"]').last().check({ force: true });
      cy.get('input[type="checkbox"]').each(($elem, index) => {
        if (index === 2) {
          cy.wrap($elem).click({ force: true });
        }
      });

      cy.get('[class="htco-MenuDropdown ButtonBarDropDown"]').click();
      cy.get("a>i").last().click();

      cy.get('[class="htco-TextInput"]').type("Merged");

      cy.get('[class=" css-1exy1t-control"]').last().type("AVM Report{enter}");
      cy.get('[class="htco-Button htco-isSolid"]').last().click();
    }
  );
});
