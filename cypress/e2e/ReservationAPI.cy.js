describe('Reservation API endpoints', () => {
  it('can GET reservation (Read Reservations)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Reservation')
     cy.get('.opblock-summary-description').contains('Read Reservations').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('.opblock-control__btn').contains('Execute').click()
    // You can add more assertions here to validate the response body
  })
  it('can POST reservation (Create Reservation)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Reservation')
     cy.get('.opblock-summary-description').contains('Create Reservation').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="reservationdetails_id"]').type('60')
     cy.get('.opblock-control__btn').contains('Execute').click()
    // You can add more assertions here to validate the response body
  })
  it('can GET reservation (Read Reservation By Id)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Reservation')
     cy.get('.opblock-summary-description').contains('Read Reservation By Id').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="reservation_id"]').type('60')
     cy.get('.opblock-control__btn').contains('Execute').click()
    // You can add more assertions here to validate the response body
  })
  it('can PUT reservation (Update Reservation)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Reservation')
     cy.get('.opblock-summary-description').contains('Update Reservation').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="reservation_id"]').type('90')
     cy.get('input[placeholder="reservationdetails_id"]').type('90')
     cy.get('.opblock-control__btn').contains('Execute').click()
    // You can add more assertions here to validate the response body
  })
  it('can DELETE reservation (Delete Reservation)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Reservation')
     cy.get('.opblock-summary-description').contains('Delete Reservation').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="reservation_id"]').type('60')
     cy.get('.opblock-control__btn').contains('Execute').click()
    // You can add more assertions here to validate the response body
  })
})