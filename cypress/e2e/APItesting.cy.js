
describe('API testing', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('APIbaseUrl'))
    })

    //API 1: Get All Products List
    it('Get All Products List', () => {
        const apiUrl = 'https://automationexercise.com/api/productsList';
        cy.request('GET', apiUrl).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('responseCode', 200);
            expect(response.body).to.have.property('products');
            expect(response.body.products).to.be.an('array');

        });
    })

    //API 2: POST To All Products List
    it('POST To All Products List', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('APIbaseUrl')
        }).then((response) => {
            expect(response.status).to.eq(405);
            expect(response.body).to.include('This request method is not supported');
        })
    })
})
