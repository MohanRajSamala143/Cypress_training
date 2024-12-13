
class AccountCreatedPage {

    VerifyAccountCreatedIsVisible() {
        cy.get('[data-qa="account-created"]>b')
        .should('have.text', 'Account Created!')
    }
    clickContinueButton(){
        cy.get('a[data-qa="continue-button"]').click()
    }
}
export default AccountCreatedPage;