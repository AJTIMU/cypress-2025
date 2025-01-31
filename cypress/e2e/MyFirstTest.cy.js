describe('My First Test', () => {


    it('First_TC_Positive_Scenario', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')



    })

    it('TC_2_Negative_Scenario', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','googlii')

  })

})