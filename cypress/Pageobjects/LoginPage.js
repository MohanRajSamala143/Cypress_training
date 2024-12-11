<reference types="cypress" />

class LoginPage {
    getNewUSerSignUpElement() {
        return cy.contains('New User Signup!')
    }

    /*
    *Action methods
    */
    checkSceniourCitizenCheckBox() {
        this.getSeniourCitizenCheckBox().click()
    }
}
export default LoginPage;