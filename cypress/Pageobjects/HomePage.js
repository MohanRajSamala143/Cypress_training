
class HomePage {
    clickSignupLogin() {
        cy.contains('Signup / Login').click();
    }
    clickProducts() {
        cy.contains('Products').click()
    }
    VerifyHomePageVisible() {
        cy.title().should('contain', 'Automation Exercise');
        cy.get('div.logo img').should('be.visible');
    }
    verifyThatLoggedInAsUserNameVisible(userName) {
        cy.get('i.fa-user+b').should('be.visible').should('have.text', userName)
    }
    clickDeleteAccountButton() {
        cy.get('a[href="/delete_account"]').click()
    }
    verifyAccountDeletedIsVisible() {
        cy.get('[data-qa="account-deleted"]>b')
            .should('have.text', 'Account Deleted!')
    }

}
export default HomePage;