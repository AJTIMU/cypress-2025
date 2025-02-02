
import 'cypress-file-upload'
describe('file upload',()=>{
it('single file ', () => {
    
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').attachFile('customer.csv')
    cy.get('#file-submit').click()
    cy.wait(200)
    cy.get('#content > div > h3').should('have.text','File Uploaded!')


});

it.only('File upload- rename', () => {

    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').attachFile({filePath:'customer.csv',fileName:'Myfile.csv'})
    cy.get('#file-submit').click()
    cy.wait(200)
    cy.get('#content > div > h3').should('have.text','File Uploaded!')

    
});

it('File upload - Drag and drop ', () => {
    
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('div #drag-drop-upload').attachFile('customer.csv',{subjectType:'drag-n-drop'})

    
});

it('File upload - multiple file to upload ', () => {
    
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('div #drag-drop-upload').attachFile('customer.csv','Resume.pdf')

})
})