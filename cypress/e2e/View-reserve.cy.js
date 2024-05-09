describe('View Reservation', () => {
  
  it('Test for Viewing Existing Reservation', () => {
    cy.visit('http://localhost:8000/store');
    // This test checks if we can navigate to the view reservation page
      cy.get('label').contains('Filter By Category').click({ force: true });
      cy.contains('PBS 300 pharmaceutical microbiology and parasitology').click({ force: true });
      cy.get('.mt-4').contains('add to cart').click({ force: true });
  
      cy.get('.mx-1').should('be.visible').click({ multiple: true });
      cy.url().should('include', 'http://localhost:8000/cart');
  
      cy.contains('click to confirm reservation').click({force: true});
  
    cy.contains('view reservations').click({force: true});
    cy.url().should('include', 'http://localhost:8000/reservations');
  });
  it('Test for Non-existent Reservation:', () => {
    cy.visit('http://localhost:8000/cart');
    
    cy.contains('view reservations').click({force: true});
    cy.url().should('include', 'http://localhost:8000/reservations');
  });
  it('Test for No Reservations Found', () => {
    cy.visit('http://localhost:8000/cart');
    
    cy.contains('view reservations').click({force: true});
    cy.url().should('include', 'http://localhost:8000/reservations');
  });
})
