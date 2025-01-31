describe('handle table',(()=> {

        beforeEach('login',()=>{       /// Hook it will execute multiple time before it 

            cy.visit('https://demo.opencart.com/admin/index.php')
            cy.wait(3000)
            cy.get('[type="submit"]').click()

            //customer main menu to customer sub menu
            cy.get('#menu-customer').click()
            cy.get('#menu-customer>ul>li:first-child').click() //   customer sub/child

        })

        it('check Number row & column', () => {
            
            cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10')
            cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','6')


        })

        it('check cell data from specific row & column', () => {
            
            cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(5)>td:nth-child(3)')
            .contains('leduyquan25741244@gmail.com')

        })

        it('Read all the rows & columns data in the first Page', () => {
            cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
                .each( ($row,indexedDB, $rows)=>{

                    cy.wrap($row).within(()=>{
                        cy.get('td').each(  ( $col,index,$cols)=>{

                            cy.log($col.text)


                        })

                    })

                })


        })

        it.only('Pangination', () => {

            // Find total no. of pages
            let totalpage
            cy.get('.col-sm-6 text-end').then( (e)=>{

                let mytext=e.text()   // Showing 1 to 10 of 16004 (1601 Pages)
                totalpage= mytext.substring(mytext.indexof("(") +1, mytext.indexof("page")-1)
                cy.log("total no of page in table"+ totalpage)


            })


        })


    }))
