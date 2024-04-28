describe('Add Reservation', () => {

  it('redirects to store page when clicked on "Go To Store" link', () => {
    cy.visit('http://localhost:8000/home');
    // This test checks if we can navigate to the store page
    cy.get('.text-uppercase').click();
    cy.url().should('include', 'http://localhost:8000/store');
  });

  it('Test for successful reservation', () => {
    cy.visit('http://localhost:8000/store');
    // This test adds reservations items
    cy.get('label').contains('Filter By Category').click({ force: true });
    cy.contains('Books').click({ force: true });
    cy.contains('Uniform').click({ force: true });
    cy.contains('All').click({ force: true });

    cy.get('label').contains('Filter By Category').click({ force: true });
    cy.contains('PBS 300 pharmaceutical microbiology and parasitology').click({ force: true });
    cy.get('.mt-4').contains('add to cart').click({ force: true });

    cy.get('.mx-1').should('be.visible').click({ multiple: true });
    cy.url().should('include', 'http://localhost:8000/cart');

    
    cy.contains('click to confirm reservation').click({force: true});
  });

    it('should add another item or reservation to the cart (possible overlapping)', () => {
      cy.visit('http://localhost:8000/store');
      // This test adds reservations for two items and checks if the cart URL is correct
      cy.get('label').contains('Filter By Category').click({ force: true });
      cy.contains('Books').click({ force: true });
      cy.contains('Uniform').click({ force: true });
      cy.contains('All').click({ force: true });
  
      cy.contains('School Uniform(Women)').click({ force: true });
  
      cy.get('label').contains('Size').next().click({ force: true }); // Click on the size dropdown
      cy.contains('S').click({ force: true }); // size options
      
      cy.get('.mt-4').contains('add to cart').click({ force: true });
  
      cy.get('label').contains('Filter By Category').click({ force: true });
      cy.contains('PBS 300 pharmaceutical microbiology and parasitology').click({ force: true });
      cy.get('.mt-4').contains('add to cart').click({ force: true });
  
      cy.get('.mx-1').should('be.visible').click({ multiple: true });
      cy.url().should('include', 'http://localhost:8000/cart');
  
    
      
      cy.contains('click to confirm reservation').click({force: true});
  
  });
  
  it('should restrict you for uniform reservation due to missing or invalid input (Test for invalid input)', () => {
    cy.visit('http://localhost:8000/store');
    // This test checks for invalid input
    cy.get('.mt-4').contains('add to cart').click({ force: true });
  });
});
