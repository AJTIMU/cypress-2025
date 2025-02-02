


it.skip('Read files using Fixture', () => {

    cy.fixture("example.json").then((data)=>{

        cy.log(data.name)
        cy.log(data.email)
    })
    
it.skip('Read files using readfile', () => {

        cy.readFile('example').then((data)=>{

            cy.log(data.name)
        })



    })

it('write file demo ', () => {

    cy.writeFile('./cypresssample.txt','Hello i am Learner ')
    cy.writeFile('sample.txt','Hello i am nothing ',{flag:'a+'})

    
})


})