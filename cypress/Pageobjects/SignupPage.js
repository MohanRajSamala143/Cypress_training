
class SignupPage {

    VerifyEnterAccountInformationVisible() {
        cy.get('.login-form>h2>b').should('be.visible')
    }
    selectGender(gender) {
        if (gender=='male') {
            cy.get('input#id_gender1').click()
        } else {
            cy.get('input#id_gender2').click()
        }
    }
    enterPassword() {
        cy.get('input[data-qa="password"]').type("Mohan123$")
    }
    selectDOB(year, month, day) {
        cy.get('select#days').select(day)
        cy.get('select#months').select(month)
        cy.get('select#years').select(year)
    }
    clickNewsLettersCheckbox(){
        cy.get('input#newsletter').click()
    }
    clickOptinCheckbox(){
        cy.get('input#optin').click()
    }
    enterFirstName(){
        cy.get('input#first_name').type("Mohan")
    }
    enterLastName(){
        cy.get('input#last_name').type("Samala")
    }
    enterCompanyName(){
        cy.get('input#company').type('cognizant')
    }
    enterAddressLine1(){
        cy.get('input[data-qa="address"]').type('1-11,Hakimpet')
    }
    enterAddressLine2(){
        cy.get('input[data-qa="address2"]').type('Secunderabad')
    }
    selectCountry(){
        cy.get('select[data-qa="country"]').select("India")
    }
    enterStage(){
        cy.get('input[data-qa="state"]').type('Telangana')
    }
    enterCity(){
        cy.get('input[data-qa="city"]').type("Hyderabad")
    }
    enterZipCode(){
        cy.get('input[data-qa="zipcode"]').type("500078")
    }
    enterMobileNumber(){
        cy.get('input[data-qa="mobile_number"]').type('9876543210')
    }
    clickCreateAccountBtn(){
        cy.get('button[data-qa="create-account"]').click()
    }
}
export default SignupPage;