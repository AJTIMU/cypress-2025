describe('Radio button check ui',()=>{
    it('checking radio button', () => {
        cy.visit("https://testautomationpractice.blogspot.com")


        //visibility of radio buttons
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')

        //selecting of radio buttons
            cy.get('#male').check().should('be.checked')
          cy.get('#female').should('not.be.checked')

           cy.get('#female').check().should('be.checked')
            cy.get('#male').should('not.be.checked')
        

        
    })
    it('checking Checkbox ', () => {
        cy.visit("https://testautomationpractice.blogspot.com")


        //visibility of  checkbox
        cy.get('#monday').should('be.visible')
       

        //selecting of checkbox 
            cy.get('#monday').check().should('be.checked')

        // unselection
            cy.get('#monday').uncheck().should('not.be.checked')

        //selecting all the checbox
         cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
         cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')


        //select first checbox

         cy.get('input.form-check-input[type="checkbox"]').first().check()

        //select last checbox
         cy.get('input.form-check-input[type="checkbox"]').last().check()


})
})