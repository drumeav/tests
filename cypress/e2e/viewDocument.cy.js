describe('Should be able to view the documents of a track', () => {
    it('navigate to Reviewer page and log in as AS', () => {
        cy.visit('/')

        cy.get(':nth-child(5) > a', {timeout: 6000}).click()

//it('login as AS', () => {
        cy.get('#id_username').type("test+klooney@hometap.com")
        cy.get('#id_password').type("testpassword1{enter}")


        //cy.login("test+klooney@hometap.com","testpassword1{enter}")


        cy.get('[data-testid="trackfilter-clear"]', {timeout: 6000}).click()//clear the filters
        cy.get('[data-testid="filter-stage"]').click()

        //cy.get('[class="FilterMultiSelect__indicator FilterMultiSelect__dropdown-indicator css-127n8m2-indicatorContainer"]').fourth().click()

        //cy.get('[data-testid="filter-stage"]').then(ar => {
            //cy.wrap(ar).click()
            //cy.get('[data-testid="filter-stage"]').each((item) => {
                //if (item.text() === 'Application in Review') {
                    //cy.get(item).click({force: true})
                //}
            //})

            /*        cy.get('#react-select-9-option-4',{timeout: 6000}).click()
                    cy.get('.css-wd8iji',{timeout: 6000}).click()
             //cy.get('[data-test="IA069711"]').click()
                cy.get("a").each($a =>{
                    const ar = $a.text();
                    expect($a, ar).to.have.attr("href").contains("/tracks/")
                })*/


            //cy.get('a[href^="/tracks/"]',{timeout: 6000}).click()

            //cy.get('href').contains("/tracks/").first().click()


        })
    })
//})