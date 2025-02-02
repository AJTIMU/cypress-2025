
describe('Find Xpath from Automation practice page',()=>{
    it('Hotstar pe xpath find karna',()=>{
        cy.visit("https://www.ebay.com")
        cy.xpath('//*[@id="vl-flyout-nav"]/ul/li[2]/a').should('have.length',1)



    })


})