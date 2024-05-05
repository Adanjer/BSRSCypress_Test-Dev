describe('Uniform API endpoints', () => {
  it('can GET uniform (Read Uniforms)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Uniform')
     cy.get('.opblock-summary-description').contains('Read Uniforms').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('.opblock-control__btn').contains('Execute').click()
    // You can add more assertions here to validate the response body
  })
  it('can POST uniform (Create Uniform)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Uniform')
     cy.get('.opblock-summary-description').contains('Create Uniform').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="mngstore"]').type('test10')
     cy.get('input[placeholder="type"]').type('Polo')
     cy.get('input[placeholder="size"]').type('XL')
     cy.get('input[placeholder="uniformQuantityAvailability"]').type('200')
     cy.get('input[placeholder="uniformPriceDetails"]').type('500')
     cy.get('.opblock-control__btn').contains('Execute').click()
    // You can add more assertions here to validate the response body
  })
  it('can GET uniform (Read Uniform By Id)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Uniform')
     cy.get('.opblock-summary-description').contains('Read Uniform By Id').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="uniform_id"]').type('20')
     cy.get('.opblock-control__btn').contains('Execute').click()
    // You can add more assertions here to validate the response body
  })
  it('can PUT uniform (Update Uniform)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Uniform')
     cy.get('.opblock-summary-description').contains('Update Uniform').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="uniform_id"]').type('20')
     cy.get('input[placeholder="mngstore"]').type('test10')
     cy.get('input[placeholder="type"]').type('PE')
     cy.get('input[placeholder="size"]').type('S')
     cy.get('input[placeholder="uniformQuantityAvailability"]').type('600')
     cy.get('input[placeholder="uniformPriceDetails"]').type('300')
     cy.get('.opblock-control__btn').contains('Execute').click()
    // You can add more assertions here to validate the response body
  })
  it('can DELETE uniform (Delete Uniform)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Uniform')
     cy.get('.opblock-summary-description').contains('Delete Uniform').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('input[placeholder="uniform_id"]').type('20')
     cy.get('.opblock-control__btn').contains('Execute').click()
    // You can add more assertions here to validate the response body
  })
})