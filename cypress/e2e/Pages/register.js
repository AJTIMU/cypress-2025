export
class registerPage{
weblocator={

    FirstName:'#input-firstname',
    LastName:'#input-lastname',
    EMail:'#input-email',
    Telephone:'#input-telephone',
    Password:'#input-password',
    ConfrimPassword:'#input-confirm',
    Checkbox:'[type="checkbox"]',
    continue:'[value="Continue"]',


}

openurl(){
    cy.visit(Cypress.env('URL'))
}
enterFirstName(FName){

    cy.get(this.weblocator.FirstName).type(FName)
}
enterLastName(LName){

    cy.get(this.weblocator.LastName).type(LName)
}
enterEmail(email){

    cy.get(this.weblocator.EMail).type(email)
}
enterTelephone(telephone){

    cy.get(this.weblocator.Telephone).type(telephone)
}
enterPassword(password){

    cy.get(this.weblocator.Password).type(password)
   
}

enterConfirmPassword(cpassword){

  
    cy.get(this.weblocator.ConfrimPassword).type(cpassword)
}
enterCheckbox(){

    cy.get(this.weblocator.Checkbox).check()
}

entercontinue(){

    cy.get(this.weblocator.continue).click()
}

}