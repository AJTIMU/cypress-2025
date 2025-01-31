describe('Alerts',()=>{
//   Javascript Alert:  It will have some text and an ok button

    it('Js alerts', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('[onclick="jsAlert()"]').click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains("I am a JS Alert")
        })
        // alert window automatically closed by cypress
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

//   Javascripts confirm Alert:  It will have some text with 'OK'  and 'CANCEL' buttons

    it('Js confirm', () => {      //   Ok button 
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get('[onclick="jsConfirm()"]').click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains("I am a JS Confirm")
        })
        // alert window automatically closed by cypress using OK button by default 
        cy.get('#result').should('have.text','You clicked: Ok')

    })

//   Javascripts confirm Alert:  by 'CANCEL' buttons

it('Js confirm', () => {     // using cancel
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    cy.get('[onclick="jsConfirm()"]').click()

    cy.on('window:confirm',(t)=>{
        expect(t).to.contains("I am a JS Confirm")
    })
    
    cy.on('window:confirm',() => false)//    cypress close alert window using cancel buttons
    cy.get('#result').should('have.text','You clicked: Cancel')



})

// Javascripts Prompt Alert:  It will have some text with a text box for user input along with "ok"

it('Js prompt Alert', () => {     


    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('welcome')

    })
    cy.get('[onclick="jsPrompt()"]').click()   //  cypress by default close alert by using ok button

    cy.get('#result').should('have.text','You entered: welcome')

})


/// Javascripts Prompt Alert:  It will have some text with a text box for user input along with canceel buttons

it.skip('Js prompt Alert', () => {     


    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('welcome')

    })
    cy.get('[onclick="jsPrompt()"]').click()   

  //  cy.on('window:prompt',() => false)//    cypress close alert window using cancel buttons
    cy.get('#result').should('have.text','You entered: null')

})

/// Authenticater alert     Approach 1

it('Js prompt Alert', () => {     

    // approach 1 we can pass username pass in url in json format

    cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
    
                                        {username:'admin',password:'admin'}
                                    })
    cy.get('[class="example"]').should('have.contain','Congratulations! You must have the proper credentials.')

})

/// Authenticater alert     Approach 2

it('Js prompt Alert', () => {     

    // approach 1 we can pass username pass in url in json format
    
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

    cy.get('[class="example"]').should('have.contain','Congratulations! You must have the proper credentials.')




})
})