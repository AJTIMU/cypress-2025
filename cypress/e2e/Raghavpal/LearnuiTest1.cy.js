

it('Google search', () => {


    cy.visit('https://www.google.com',{ failOnStatusCode: false })
    cy.wait(5000)
    cy.get('#APjFqb').type('Automation step by step{Enter}')
  

    
})