describe('api testing', () => {


    it("Approach1'-hard code json Object", () => {

        const requestBody={

                  "name": "Apple MacBook Pro 16",
                "data": {
                          "year": 2019,
                         "price": 1849.99,
                           "CPU model": "Intel Core i9",
                             "Hard disk size": "1 TB",
                }
        }

            cy.request(  {

                        method: 'POST',
                        url: 'https://api.restful-api.dev/objects',
                        body: requestBody

        }
        )
             .then((response)=>{

                expect(response.status).to.eq(200)
                
               
            })

        
    });
    
});