describe('Sign-Up Page Functionality', () => {
  // Test Case 1: Valid Form Submission
  it('should create a new user account upon valid form submission', () => {
    cy.visit('http://localhost:8000/sign-up') // Assuming your sign-up page URL is '/signup'

    // Fill in form fields with valid data
    cy.get('input[aria-describedby="input-0-messages"]').type('jra@uic.edu')
    cy.get('input[aria-describedby="input-2-messages"]').type('12345678')
    cy.get('input[name="input-10-2"]').type('iloveuic')

    cy.get('.text-subtitle-2').click({ multiple: true })
  
    // Submit the form
    cy.contains('create an account').click({force: true})

  // Assert redirection to the landing pageafter successful sign-up
    cy.url().should('include', 'http://localhost:8000/') // Adjust this to your actual homepage URL
  })

  // Test Case 2: Invalid Form Submission
  it('should prompt the user to correct input fields upon invalid form submission', () => {
    cy.visit('http://localhost:8000/sign-up') // Assuming your sign-up page URL is '/signup'
     
    // Fill in form fields with valid data
    cy.get('input[aria-describedby="input-0-messages"]').type('jra@uic.edu')
    cy.get('input[aria-describedby="input-2-messages"]').type('iloveuic')
    cy.contains('Required').should('exist');

    cy.get('.text-subtitle-2').click({ multiple: true })
  
    // Checking if cannot submit the form
    cy.contains('create an account').click({force: true})

  })
  // Test Case 3: Navigate to Sign Up Page
  it('should redirect the user to the sign-up page upon clicking "Sign Up" link', () => {
    cy.visit('http://localhost:8000/login') // Assuming your homepage URL is '/homepage'

    // Click on the "Sign Up" link
    cy.contains('Sign Up').click()

    // Assert redirection to the sign-up page
    cy.url().should('include', 'http://localhost:8000/sign-up') // Adjust this to your actual sign-up page URL
  })
})
