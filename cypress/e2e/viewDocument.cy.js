describe('Should delete a file from the documents list of a track', () => {
    it('navigate to Reviewer page, log in as AS and delete the last file in the documents list',
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

            cy.get('#cell-2-39f20916-38b8-4b4f-93cf-4aeaeeb5d1dd').click()
            //cy.get('#cell-2-39f20916-38b8-4b4f-93cf-4aeaeeb5d1dd').then(($el) => {
            //cy.wrap($el).find('a').first().click()
            //})


        })
})







