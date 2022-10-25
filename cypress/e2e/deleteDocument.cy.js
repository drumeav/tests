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

            //cy.get('#cell-6-39f20916-38b8-4b4f-93cf-4aeaeeb5d1dd > .DocumentActions > .PinButton').click()

            cy.get('input[type="checkbox"]').last().check({force: true})

            /*cy.get('[class="ButtonBarContainer shouldDisplay"]').click()
            cy.get('[class="ButtonBarContainer shouldDisplay"]').then(($el) => {
                cy.wrap($el).find('button').last().click()
            })*/


  cy.get("#Main > div > div > div > div.htco-Paper.TrackDetailsContent > div > div.ButtonBar > span > button:nth-child(2)").click();

  cy.get("body > div.animated.htco-ModalWrapper > div > div > div > div > div.htco-ModalConfirmFooter > button.htco-Button.htco-isDanger").click();



            //cy.get('.ButtonBarContainer > :nth-child(2)', {timeout: 6000}).click()

                //cy.get('.htco-isDanger').click({force: true})




        })
})