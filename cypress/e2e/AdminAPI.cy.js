describe('Student API Endpoints', () => {
  
  it('can GET admin (Read Admins)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Admin')
     cy.get('.opblock-summary-description').contains('Read Admin').click()
     cy.get('.try-out__btn').contains('Try it out').click()
     cy.get('.opblock-control__btn').contains('Execute').click()
     cy.request('GET','https://bookstore-backend-api.vercel.app/docs#/Admin').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
    // You can add more assertions here to validate the response body
  })

  it('can POST admin (Create Admin)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Admin')
    // First, create a student to retrieve
    cy.get('.opblock-summary-description').contains('Create Admin').click()
    cy.get('.try-out__btn').contains('Try it out').click()
    cy.get('input[placeholder="mngstore"]').type('test20')
    cy.get('input[placeholder="adminID"]').type('100000')
    cy.get('input[placeholder="username"]').type('ali diri')
    cy.get('input[placeholder="password"]').type('buang123')
    cy.get('.opblock-control__btn').contains('Execute').click()
    cy.request('GET','https://bookstore-backend-api.vercel.app/docs#/Admin').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })

  it('can GET admin (Read Admin By Id)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Admin')
    cy.get('.opblock-summary-description').contains('Read Admin By Id').click()
    cy.get('.try-out__btn').contains('Try it out').click()
    cy.get('input[placeholder="admin_id"]').type('100000')
    cy.get('.opblock-control__btn').contains('Execute').click()
    cy.request('GET','https://bookstore-backend-api.vercel.app/docs#/Admin').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })

  it('can PUT admin (Update Admin)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Admin')
    cy.get('.opblock-summary-description').contains('Update Admin').click()
    cy.get('.try-out__btn').contains('Try it out').click()
    cy.get('input[placeholder="admin_id"]').type('100000')
    cy.get('input[placeholder="mngstore"]').type('test20')
    cy.get('input[placeholder="username"]').type('ali diri')
    cy.get('input[placeholder="password"]').type('buang123')
    cy.get('.opblock-control__btn').contains('Execute').click()
    cy.request('GET','https://bookstore-backend-api.vercel.app/docs#/Admin').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })

  it('can DELETE admin (Delete Admin)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Admin')
    // First, create a student to update
    cy.get('.opblock-summary-description').contains('Delete Admin').click()
    cy.get('.try-out__btn').contains('Try it out').click()
    cy.get('input[placeholder="admin_id"]').type('100000')
    cy.get('.opblock-control__btn').contains('Execute').click()
    cy.request('GET','https://bookstore-backend-api.vercel.app/docs#/Admin').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })

  it('can POST admin (Login Admin)', () => {
    cy.visit('https://bookstore-backend-api.vercel.app/docs#/Admin')
    cy.get('.opblock-summary-description').contains('Login Admin').click()
    cy.get('.try-out__btn').contains('Try it out').click()
    cy.get('input[placeholder="username"]').type('admin')
    cy.get('input[placeholder="password"]').type('admin')
    cy.get('.opblock-control__btn').contains('Execute').click()
    cy.request('GET','https://bookstore-backend-api.vercel.app/docs#/Admin').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.above(0)
    })
  })
})
