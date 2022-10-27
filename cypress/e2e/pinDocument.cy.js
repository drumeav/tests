describe('Should pin a file to the top of the documents list', () => {
    it('navigate to Reviewer page and log in as AS and pin a document',
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
            cy.get('[class="PinButton"]').first().click()



            //cy.get('#cell-4-8de697c0-13b6-4592-80d8-53eb0a5e32e8 > .DocumentActions > .PinButton').click()






        })
})