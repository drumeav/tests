describe("Should be able to delete the document from actions field", () => {
  it(
    "navigate to Documents page, actions field and delete the document",
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

      cy.get('[class="htco-MenuDropdown DocumentActionsMenuContainer"]')
        .first()
        .click();
      cy.get('[class="icon htco-Icon icon-delete icon-lg"]').click();

      cy.get('[class="htco-Button htco-isDanger"]').click();
    }
  );
});
