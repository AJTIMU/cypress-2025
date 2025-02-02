import { LoginPage } from "./Pages/Login_page";
const loginPage= new LoginPage()


it('POM Demo', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
                 loginPage.enterUsername('Admin')
                    loginPage.enterPassword('admin123')
                 loginPage.clickLogin()
});
