<reference types="cypress" />

class HomePage{
    clickSignupLogin() {
        cy.contains('Signup').click();
    }
    clickProducts(){
        cy.contains('Products').click();
    }
}
export default HomePage;