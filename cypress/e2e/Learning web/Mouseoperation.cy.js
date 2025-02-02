describe('MouseHover',()=>{

it('Mouseover TC ', () => {
    cy.visit('https://demo.opencart.com')
    cy.wait(3000)

    cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('not.be.visible')

    cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

    cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('be.visible')
 
})


it('Right Click Action approach 1', () => {

    cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    cy.get('[class="context-menu-one btn btn-neutral"]').trigger('contextmenu')
    cy.get('.context-menu-icon-copy').should('be.visible')   


    // approach 2

    cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    cy.get('[class="context-menu-one btn btn-neutral"]').rightclick().should('be.visible')


})

it('double click ', () => {
    cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
    cy.frameLoaded('div#iframewrapper')   // iframe locator we have to use plug in for cy.load


    // approach 1 - trigger()

    cy.iframe('div#iframewrapper').find('[ondblclick="myFunction()"]').trigger('dblclick')
    .find('#field2').should('have.value','Hello World!')

    // approach  2 -- dblclick()
    cy.iframe('div#iframewrapper').find('[ondblclick="myFunction()"]').dblclick
    .find('#field2').should('have.value','Hello World!')



    
});



})