
class LoginPage {
    /*
    *Action methods
    */
    VerifyNewUserSignupVisible() {
        cy.get('.signup-form>h2').should('be.visible')
    }
    enterName(userName){
        cy.get('input[data-qa="signup-name"]').type(userName)
    }
    enterRandomEmail(){
        cy.generateRandomEmail().then((email)=>{
            cy.get('input[data-qa="signup-email"]').type(email)
          })
    }
    clickSignupButton(){
        cy.get('button[data-qa="signup-button"]').click()
    }
    verifyLoginToYourAccountVisible(){
        cy.get('.login-form>h2').should('be.visible')
    }
    enterValidLoginEmail(validEmail){
        cy.get('input[data-qa="login-email"]').type(validEmail)
    }
    enterValidPassword(validPassword){
        cy.get('input[data-qa="login-password"]').type(validPassword)
    }
    clickLoginBtn(){
        cy.get('button[data-qa="login-button"]').click()
    }
}
export default LoginPage;