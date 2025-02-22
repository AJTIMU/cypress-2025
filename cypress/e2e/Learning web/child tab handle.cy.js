describe('handling window Tab approach -1',() => {


    it('Approach -1 ', () => {
        
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example>a').invoke('removeAttr','target').click()
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        //operations  
        cy.go('back')     // back to parent tab

    })

    it('Approach -2 ', () => {
        
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example>a').then((e)=>{

            let url=e.prop('href')

            cy.visit(url)
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(50000)

        //operations  
        cy.go('back')



})
})