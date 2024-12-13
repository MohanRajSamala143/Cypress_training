
import HomePage from '../Pageobjects/HomePage';
import LoginPage from '../Pageobjects/LoginPage';
import SignupPage from '../Pageobjects/SignupPage';
import AccountCreatedPage from '../Pageobjects/AccountCreatedPage'
import ProductsPage from '../Pageobjects/ProductsPage';
let product1Price, product2Price;

describe('UI testing', () => {
  let UserData,productsData;
  beforeEach(() => {
    //get data from User Details JSON
    cy.fixture('UserDetails').then((data)=>{
      UserData = data
    })
    //get data from products JSON
    cy.fixture('products').then((data)=>{
      productsData = data
    })
    //Navigate to URL
    cy.visit(Cypress.env('baseUrl'))
  })
  
  //Test Case 1: Register  User
  it('Register User', () => {
    const homePage = new HomePage()
    homePage.VerifyHomePageVisible()
    homePage.clickSignupLogin()
    const loginPage = new LoginPage()
    loginPage.VerifyNewUserSignupVisible()
    loginPage.enterName(UserData.userName)
    loginPage.enterRandomEmail()
    loginPage.clickSignupButton()
    const signupPage = new SignupPage()
    signupPage.VerifyEnterAccountInformationVisible()
    signupPage.selectGender(UserData.Gender)
    signupPage.enterPassword(UserData.password)
    signupPage.selectDOB(UserData.DOB.year, UserData.DOB.month, UserData.DOB.date)
    signupPage.clickNewsLettersCheckbox()
    signupPage.clickOptinCheckbox()
    signupPage.enterFirstName(UserData.firstName)
    signupPage.enterLastName(UserData.lastName)
    signupPage.enterCompanyName(UserData.companyName)
    signupPage.enterAddressLine1(UserData.addressLine1)
    signupPage.enterAddressLine2(UserData.adderssLine2)
    signupPage.selectCountry(UserData.country)
    signupPage.enterStage(UserData.stage)
    signupPage.enterCity(UserData.city)
    signupPage.enterZipCode(UserData.zipcode)
    signupPage.enterMobileNumber(UserData.mobileNumber)
    signupPage.clickCreateAccountBtn()
    const accountCreatedPage = new AccountCreatedPage()
    accountCreatedPage.VerifyAccountCreatedIsVisible()
    accountCreatedPage.clickContinueButton()
    homePage.verifyThatLoggedInAsUserNameVisible(UserData.userName)
    homePage.clickDeleteAccountButton()
    homePage.verifyAccountDeletedIsVisible()
  })

  //Test Case 2: Login User with correct email and password
  it('Login User with correct email and password', () => {
    const homePage = new HomePage()
    homePage.VerifyHomePageVisible()
    homePage.clickSignupLogin()
    const loginPage = new LoginPage()
    loginPage.verifyLoginToYourAccountVisible()
    loginPage.enterValidLoginEmail(UserData.validEmail)
    loginPage.enterValidPassword(UserData.validPassword)
    loginPage.clickLoginBtn()
    homePage.verifyThatLoggedInAsUserNameVisible(UserData.userName)
  })

  //Test Case 9: Search Product
  it('Search Product', () => {
    const homePage = new HomePage()
    homePage.VerifyHomePageVisible()
    homePage.clickProducts()
    const productsPage = new ProductsPage()
    productsPage.VerifyProductsPageLoaded()
    productsPage.enterProductNameInSearch(productsData.productName)
    productsPage.clickSearchButton()
    productsPage.verifySearchedProductIsVisible()
    productsPage.verifyAllProductsRelatedToSearchAreVisible()

  })

  //Test Case 12: Add Products in Cart
  it('Add Products in Cart', () => {
    const homePage = new HomePage()
    homePage.VerifyHomePageVisible()
    homePage.clickProducts()
    const productsPage = new ProductsPage()
    //get product1 price
    productsPage.getFistProduct().invoke('text')
      .then((priceText) => {
        product1Price = parseInt(priceText.replace(/[^0-9]/g, ''), 10)
        console.log(product1Price)
      })
    productsPage.hoverOverAndAddFirstProductToCart()
    productsPage.clickContinueShoopingBtn()
    //get product2 price
    productsPage.getSecondProduct().invoke('text')
      .then((priceText) => {
        product2Price = parseInt(priceText.replace(/[^0-9]/g, ''), 10)
        console.log(product2Price)
      })
    productsPage.hoverOverAndAddSecondProductToCart()
    productsPage.clickViewCartBtn()
    productsPage.verifyBothProductsAddedToCart()
    //verify product1 price is equal to product1 price in cart
    productsPage.getFirstProductPriceFromCart().invoke('text').then((cartPriceText) => {
      const cartPrice = parseInt(cartPriceText.replace(/[^0-9]/g, ''), 10)
      expect(cartPrice).to.equal(product1Price);
    })
    //verify product2 price is equal to product2 price in cart
    productsPage.getSecondProductPriceFromCart().invoke('text').then((cartPriceText) => {
      const cartPrice = parseInt(cartPriceText.replace(/[^0-9]/g, ''), 10)
      expect(cartPrice).to.equal(product2Price);
    })
    productsPage.verifyQuantity()
    //verify total price of product1
    productsPage.getFirstProductTotalPriceFromCart().invoke('text').then((cartPriceText) => {
      const cartPrice = parseInt(cartPriceText.replace(/[^0-9]/g, ''), 10)
      expect(cartPrice).to.equal(product1Price);
    })
    //verify total price of product2
    productsPage.getSecondProductTotalPriceFromCart().invoke('text').then((cartPriceText) => {
      const cartPrice = parseInt(cartPriceText.replace(/[^0-9]/g, ''), 10)
      expect(cartPrice).to.equal(product2Price);
    })
  })
})