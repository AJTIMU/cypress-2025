describe("Assertion on this TC",()=>{

    it("Assertion implicit",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        // should and
       // cy.url().should('include','orangehrmlive.com')
       // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       // cy.url().should('contain','orangehrmlive')

        
         //  cy.url().should('include','orangehrmlive.com')
        //   .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         //  .should('contain','orangehrmlive')

           cy.url().should('include','orangehrmlive.com')
          .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
               .and('contain','orangehrmlive').and('not.contain','amit')
             cy.title().should('include','Orange').and('eq',"OrangeHRM")

             cy.get('.orangehrm-login-branding > img').should('be.visible')
             .and('exist')

             cy.xpath('//a').should('have.length', 7)  // No of links

             cy.get('[placeholder="Username"]').type('Admin')// provide value into inputbox
             .should('have.value','Admin')//value




    })
    it("Assertion Explicit",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[placeholder="Password"]').type('admin123')
        cy.get('[type="submit"]').click()


        let expname="Sakshi Tiwari";
        
        cy.get(".oxd-userdropdown-name").then( (x)=>{
            let actname =x.text()

            //BDD style
            expect(actname).to.equal(expname)
            expect(actname).to.not.equal(expname)
            //TDD style
            assert.equal(actname,expname)
            assert.notEqual(actname,expname)
            




        } )


    })

})