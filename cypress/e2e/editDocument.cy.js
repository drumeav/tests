describe('Should be able to edit the type of a document', () => {
    it('navigate to Reviewer page, log in as AS and edit the type of the first file',
        {viewportWidth: 1200},
        () => {
            cy.visit('/')

            cy.get(':nth-child(5) > a', {timeout: 6000}).click()

            cy.get('#id_username').type("test+klooney@hometap.com")
            cy.get('#id_password').type("testpassword1{enter}")


            //cy.login("test+klooney@hometap.com","testpassword1{enter}")

            cy.get('[data-testid="trackfilter-clear"]', {timeout: 6000}).click()//clear the filters
            cy.get('[data-testid="filter-stage"]').click().type("Application in Review{enter}")


            cy.get('div.TracksTableContainer').click()
            cy.get('div.TracksTableContainer').then(($el) => {
                cy.wrap($el).find('a').first().click()
            })

            cy.get('nav>a').last().click()



            cy.get("#\\38 de697c0-13b6-4592-80d8-53eb0a5e32e8 > div > i").click();

  cy.get("#\\38 de697c0-13b6-4592-80d8-53eb0a5e32e8 > span > a:nth-child(2)").click();

  cy.get("#Main > div > div > div > div.htco-Paper.TrackDetailsContent > div > div:nth-child(6) > div.SlideInFromRightSlideIn.isOpen > form > div:nth-child(1) > div.htco-DropdownSelector.css-2b097c-container > div > div.css-g1d714-ValueContainer").click();

  cy.get("#react-select-5-option-37").click();

  cy.get("#Main > div > div > div > div.htco-Paper.TrackDetailsContent > div > div:nth-child(6) > div.SlideInFromRightSlideIn.isOpen > form > div.EditDocumentFormButtonsContainer > button.htco-Button.htco-isSolid").click();

                cy.get('#cell-3-8de697c0-13b6-4592-80d8-53eb0a5e32e8 > div').should('have.text', 'Lease Agreements')

        })
})
