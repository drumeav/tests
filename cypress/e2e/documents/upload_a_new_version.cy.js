describe("Should be able to upload a new version of a document", () => {
  it(
    "navigate to Documents page and upload a new version of a document",
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
      cy.get('[class="htco-MenuDropdownItem"]').first().click();
      cy.get('input[type="file"]').selectFile(
        "cypress/fixtures/images/drivers_license.jpg",
        { force: true }
      );

      cy.get('[class="PinButton"]').first().click();
      cy.get('[class="htco-Button htco-isSolid"]').first().click();

      /*cy.get('[class="DocumentsControllerLinkName"]')
        .first()
        .should("have.text", "drivers_license.jpg");*/

      cy.get('[class="icon htco-Icon icon-history icon-lg"]').should(
        "be.visible"
      );
    }
  );
});
