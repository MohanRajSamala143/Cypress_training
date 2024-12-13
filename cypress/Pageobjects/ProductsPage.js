
class ProductsPage {
    getFistProduct(){
        return cy.get('div.productinfo>h2').eq(0)
    }
    getSecondProduct(){
        return cy.get('div.productinfo>h2').eq(1)
    }
    VerifyProductsPageLoaded() {
        cy.title().should('contain', 'All Products');
    }
    enterProductNameInSearch(productName) {
        cy.get('input#search_product').type(productName)
    }
    clickSearchButton() {
        cy.get('button#submit_search').click()
    }
    verifySearchedProductIsVisible() {
        cy.get('div.features_items>h2')
            .should('have.text', 'Searched Products')
            .should('be.visible')

    }
    verifyAllProductsRelatedToSearchAreVisible() {
        cy.get('div.features_items>div.col-sm-4 img').should('be.visible')
    }

    hoverOverAndAddFirstProductToCart(){
        cy.get('.product-image-wrapper').first().trigger('mouseover')
      cy.contains('Add to cart').first().click();
    }
    hoverOverAndAddSecondProductToCart(){
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo').trigger('mouseover')
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo a').click();
    }
    clickContinueShoopingBtn(){
        cy.contains('Continue Shopping').click()
    }
    clickViewCartBtn(){
        cy.get('div.modal-body a').click()
    }
    verifyBothProductsAddedToCart(){
        cy.get('.cart_description').should('have.length', 2);
    cy.get('tr#product-1').should('exist')
    cy.get('tr#product-2').should('exist')
    }
    getFirstProductPriceFromCart(){
        return cy.get('#product-1 .cart_price>p')
    }
    getSecondProductPriceFromCart(){
      return cy.get('#product-2 .cart_price>p')
    }
    verifyQuantity(){
        cy.get('#product-1 .cart_quantity>button').should('have.text','1')
    cy.get('#product-2 .cart_quantity>button').should('have.text','1')
    }
    getFirstProductTotalPriceFromCart(){
        return cy.get('#product-1 .cart_total>p')
    }
    getSecondProductTotalPriceFromCart(){
        return cy.get('#product-2 .cart_total>p')
    }
}
export default ProductsPage;