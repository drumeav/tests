describe('Should download a file from the documents list of a track', () => {
    it('navigate to Reviewer page, log in as AS and download a document',
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

            cy.get('input[type="checkbox"]').last().check({force: true})

            cy.get('[class="ButtonBar"]').click()
            cy.get('[class="ButtonBar"]').click().then(($el) => {
                cy.wrap($el).contains('Download').click()
            })
        })
})