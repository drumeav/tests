describe("Should combine uploaded docs into single PDF file", () => {
  it(
    "navigate to Documents page, upload docs and combine them into single pdf",
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

      cy.get('[type="checkbox"]').check({ force: true });
      cy.get(
        "#Main > div > div > div > div.htco-Paper.TrackDetailsContent > div > div.ButtonBar > span > button:nth-child(2)"
      ).click();

      cy.get(
        "body > div.animated.htco-ModalWrapper > div > div > div > div > div.htco-ModalConfirmFooter > button.htco-Button.htco-isDanger"
      ).click();

      cy.get("div.ButtonBar >button").click();

      cy.get('[class="htco-DropdownSelector css-2b097c-container"]').type(
        "Virtual Appraisal{enter}"
      );

      cy.get('input[type="file"]').selectFile(
        "cypress/fixtures/images/credit_report.heic",
        { force: true }
      );
      cy.get('input[type="file"]').selectFile(
        "cypress/fixtures/images/drivers_license.jpg",
        { force: true }
      );
      cy.get('input[type="file"]').selectFile(
        "cypress/fixtures/images/ho_policy.pdf",
        { force: true }
      );
      cy.get('input[type="file"]').selectFile(
        "cypress/fixtures/images/lease_agreement.jpeg",
        { force: true }
      );
      cy.get('input[type="file"]').selectFile(
        "cypress/fixtures/images/lien_statement.png",
        { force: true }
      );

      cy.get('[role="checkbox"]').first().click();

      cy.get('[class="htco-TextInput NewMergedDocumentField"]').type("Merged");

      cy.get('[class="icon htco-Icon icon-pin icon-2x"]').click();

      cy.get('[class="htco-Button htco-isSolid"]').first().click();

      cy.get('[class="DocumentsControllerLinkName"]')
        .first()
        .should("have.text", "Merged.pdf");
    }
  );
});
