import { registerPage, registerpage } from '../Pages/register'
    const registerobj  = new registerPage()
import registordata from '../../fixtures/registordata.json'

describe('Test Automation', () => {


    it('Automated register Flow', () => {

        registerobj.openurl()
        registerobj.enterFirstName(registordata.firstName)
        registerobj.enterLastName(registordata.lastName)
        registerobj.enterEmail(registordata.email)
        registerobj.enterTelephone(registordata.telephone)
        registerobj.enterPassword(registordata.password)
        registerobj.enterConfirmPassword(registordata.password)
        registerobj.enterCheckbox()
        registerobj.entercontinue()

 } )

        
    })
    