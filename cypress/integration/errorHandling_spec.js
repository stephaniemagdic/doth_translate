describe('Interpretation Display User Flows', () => {
  it('A user should see a 404 error page when an undefined path is visited', () => {
    cy.visit('http://localhost:3000/undefinedpath')
    cy.contains('Page Not Found')
  });
  it('A user should see a 500 error when server data cannot be found', () => {
    cy.visit('http://localhost:3000/')
    // cy.makeBadRequest()
    // cy.get('Page Not Found')
  });


})