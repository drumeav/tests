describe("Should delete a file from the documents list", () => {
  it(
    "navigate to Documents page and delete a document",
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

      cy.get(
        "#Main > div > div > div > div.htco-Paper.TrackDetailsContent > div > div.ButtonBar > span > button:nth-child(2)"
      ).click();

      cy.get(
        "body > div.animated.htco-ModalWrapper > div > div > div > div > div.htco-ModalConfirmFooter > button.htco-Button.htco-isDanger"
      ).click();
    }
  );
});
