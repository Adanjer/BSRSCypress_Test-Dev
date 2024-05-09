describe('ReservationDetails API endpoints', () => {
  it('can POST reservationdetails (Read Reservations By Studentid)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/ReservationDetails')
     cy.get('.opblock-summary-description').contains('Read Reservations By Studentid').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="reservation_id"]').type('40')
     cy.get('.opblock-control__btn').contains('Execute').click()
     cy.request('GET','https://bookstore-backend-api.vercel.app/docs#/ReservationDetails').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
    // You can add more assertions here to validate the response body
  })
  it('can GET reservationdetails (Read Reservation By Id)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/ReservationDetails')
     cy.get('.opblock-summary-description').contains('Read Reservation By Id').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="reservation_id"]').type('40')
     cy.get('.opblock-control__btn').contains('Execute').click()
     cy.request('GET','https://bookstore-backend-api.vercel.app/docs#/ReservationDetails').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
    // You can add more assertions here to validate the response body
  })
  it('can GET reservationdetails (Read Reservations)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/ReservationDetails')
     cy.get('.opblock-summary-description').contains('Read Reservations').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('.opblock-control__btn').contains('Execute').click()
     cy.request('GET','https://bookstore-backend-api.vercel.app/docs#/ReservationDetails').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
    // You can add more assertions here to validate the response body
  })
  it('can DELETE reservationdetails (Delete Reservation)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/ReservationDetails')
     cy.get('.opblock-summary-description').contains('Delete Reservation').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="reservation_id"]').type('77')
     cy.get('.opblock-control__btn').contains('Execute').click()
     cy.request('GET','https://bookstore-backend-api.vercel.app/docs#/ReservationDetails').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
    // You can add more assertions here to validate the response body
  })
  it('can PUT reservationdetails (Set Reservation Status)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/ReservationDetails')
     cy.get('.opblock-summary-description').contains('Set Reservation Status').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="reservationdetailsID"]').type('36')
     cy.get('input[placeholder="status"]').type('36')
     cy.get('.opblock-control__btn').contains('Execute').click()
     cy.request('GET','https://bookstore-backend-api.vercel.app/docs#/ReservationDetails').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
    // You can add more assertions here to validate the response body
  })
})