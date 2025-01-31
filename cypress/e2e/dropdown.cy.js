describe('testcase dropdown',() =>{
    it.skip('selecting Drop Down', () => {

      cy.visit('https://testautomationpractice.blogspot.com')
      cy.get('#country').select('japan')
      .should('have.value','japan')
    


})

it.skip('selecting Drop Downwith out select down', () => {

    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    cy.get('#select2-billing_country-container').click()
    cy.get("input.select2-search__field").type('Italy').type('{enter}')
    cy.get('#select2-billing_country-container').should('have.text','Italy')

    
})

it.skip('Auto select dropdown', () => {

    cy.visit('https://www.wikipedia.org')
    cy.get('#searchInput').type('Delhi')
    cy.get('.suggestion-title').contains('Delhi University').click()
    
})

it.skip('Dropdown Test', () => {  // ✅ Correct
    cy.visit('https://google.com')
    // Type in search box
    cy.get('[name="q"]').type('cypress automation')
    cy.wait(3000)
  
    // Wait for suggestions to load
    cy.get('.erkvQe li span').should('be.visible')
  
    // Iterate over the suggestions
    cy.get('.erkvQe li span').each(($el,index,$list) => {
      if ($el.text() == 'cypress automation tutorial') {
        cy.wrap($el).click()
      }
    })
  
    // Verify the search box contains the selected value
    cy.get('[name="q"]').should('have.value', 'cypress automation tutorial')
  })


  it('Google Search Test', () => {
    cy.visit('https://www.google.com');
  
    // Type search query with delay
    cy.get('[name="q"]').type('Cypress Automation', { delay: 200 });
  
    // Ensure suggestions load
    cy.get('.erkvQe li span', { timeout: 5000 }).should('be.visible');
  
    // Click on the correct suggestion
    cy.get('.erkvQe li span').each(($el) => {
      if (Cypress.$($el).text().trim() === 'cypress automation tool') {
        cy.wrap($el).click({ force: true });
      }
    });
  
    // Validate search box contains the correct value
    cy.get('[name="q"]').should('have.value', 'cypress automation tool');
  });
  


})
