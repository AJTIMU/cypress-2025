

describe('Practice for CSS Locator', () =>
{
it("Css Locator tag Id",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        

        cy.get('#Wikipedia1_wikipedia-search-input').type('Automation')// id   tag is optional

        cy.get('.wikipedia-search-button[type="submit"]').click()  // class
        cy.get('#Wikipedia1_wikipedia-search-results > :nth-child(3) > a').contains("Automation Master")//Assertion

})

})
