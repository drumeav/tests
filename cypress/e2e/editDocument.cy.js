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



            cy.get("#\\33 9f20916-38b8-4b4f-93cf-4aeaeeb5d1dd > div > i").click();

            cy.get("#\\33 9f20916-38b8-4b4f-93cf-4aeaeeb5d1dd > span > a:nth-child(2)").click();

            cy.get("#Main > div > div > div > div.htco-Paper.TrackDetailsContent > div > div:nth-child(6) > div.SlideInFromRightSlideIn.isOpen > form > div:nth-child(1) > div.htco-DropdownSelector.css-2b097c-container > div > div.css-1hb7zxy-IndicatorsContainer > div > i").click();

            cy.get('div.css-1uccc91-singleValue').click()

            cy.get("#Main > div > div > div > div.htco-Paper.TrackDetailsContent > div > div:nth-child(6) > div.SlideInFromRightSlideIn.isOpen > form > div.EditDocumentFormButtonsContainer > button.htco-Button.htco-isSolid").click();


                cy.get('#cell-3-39f20916-38b8-4b4f-93cf-4aeaeeb5d1dd > div').should('have.text', 'Lease Agreements')

        })
})
