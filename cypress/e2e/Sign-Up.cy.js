describe('Sign-Up Page Functionality', () => {
  // Test Case 1: Valid Form Submission
  it('should create a new user account upon valid form submission', () => {
    cy.visit('http://localhost:8000/sign-up') // Assuming your sign-up page URL is '/signup'

    // Fill in form fields with valid data
    cy.get('input[name="email-input"]').type('jra@uic.edu')
    cy.get('input[name="id-input"]').type('12345678')
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
    cy.get('input[name="email-input"]').type('jra@uic.edu')
    cy.get('input[name="input-10-2"]').type('iloveuic')
    cy.contains('Required').should('exist');

    cy.get('.text-subtitle-2').click({ multiple: true })
  
    // Checking if cannot submit the form
    cy.contains('create an account').click({force: true})

  })

  // Test Case 3: Verify Successful Email Verification
it('should indicate successful email verification with a valid verification link', () => {
  // Simulate successful email verification by setting the 'valid' variable to true
  cy.visit('http://localhost:8000/sign-up') // Visit the sign-up page with a valid verification link

  // Assert that the success message is displayed
  cy.contains('Thank you for verifying your email address. You can now log in').should('exist')
})

// Test Case 4: Verify Failed Email Verification
it('should indicate failed email verification with an invalid verification link', () => {
  // Simulate failed email verification by setting the 'valid' variable to false
  cy.visit('http://localhost:8000/sign-up') // Visit the sign-up page with an invalid verification link

  // Assert that the error message is displayed
  cy.contains('Invalid verification link, it either the link has expired or was already used. Want to try again?').should('exist')
})
  // Test Case 5: Navigate to Sign Up Page
  it('should redirect the user to the sign-up page upon clicking "Sign Up" link', () => {
    cy.visit('http://localhost:8000/login') // Assuming your homepage URL is '/homepage'

    // Click on the "Sign Up" link
    cy.contains('Sign Up').click()

    // Assert redirection to the sign-up page
    cy.url().should('include', 'http://localhost:8000/sign-up') // Adjust this to your actual sign-up page URL
  })
})
