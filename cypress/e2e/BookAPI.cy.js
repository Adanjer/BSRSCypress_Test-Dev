describe('Book API Endpoints', () => {
  it('can GET student (Read Books)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Book')
     cy.get('.opblock-summary-description').contains('Read Books').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('.opblock-control__btn').contains('Execute').click()
    // You can add more assertions here to validate the response body
  })
  it('can POST book (Create Book)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Book')
     cy.get('.opblock-summary-description').contains('Create Book').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="mngstore"]').type('test10')
     cy.get('input[placeholder="mngbkstore"]').type('test11')
     cy.get('input[placeholder="bookTitle"]').type('webbook')
     cy.get('input[placeholder="bookquantityAvailability"]').type('200')
     cy.get('input[placeholder="bookpriceDetails"]').type('500')
     cy.get('.opblock-control__btn').contains('Execute').click()
    // You can add more assertions here to validate the response body
  })
  it('can GET book (Read Book By Id)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Book')
     cy.get('.opblock-summary-description').contains('Read Book By Id').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="book_id"]').type('5')
     cy.get('.opblock-control__btn').contains('Execute').click()
    // You can add more assertions here to validate the response body
  })
  it('can PUT book (Update Book)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Book')
     cy.get('.opblock-summary-description').contains('Update Book').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="book_id"]').type('5')
     cy.get('input[placeholder="mngstore"]').type('test12')
     cy.get('input[placeholder="mngbkstore"]').type('test13')
     cy.get('input[placeholder="bookTitle"]').type('webbook')
     cy.get('input[placeholder="bookquantityAvailability"]').type('200')
     cy.get('input[placeholder="bookpriceDetails"]').type('500')
     cy.get('.opblock-control__btn').contains('Execute').click()
    // You can add more assertions here to validate the response body
  })
  it('can DELETE student (Delete Book)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Book')
     cy.get('.opblock-summary-description').contains('Delete Book').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="book_id"]').type('5')
     cy.get('.opblock-control__btn').contains('Execute').click()
    // You can add more assertions here to validate the response body
  })
})