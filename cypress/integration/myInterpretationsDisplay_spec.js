describe('My Interpretations Display User Flows', () => {
  it('A user should see interpretation submissions when visiting the page', () => {
    cy.addInterpretation()
    cy.visit('http://localhost:3002/my-interpretations')
    cy.get('.interpretations')
    cy.contains('HERE IS MY INTERPRETATION')
  });

  it('A user should see their favorited quotes when visiting the page', () => {
    cy.addFavorite()
    cy.visit('http://localhost:3002/my-interpretations')
    cy.get('.favorites')
    cy.contains('But lest myself be guilty to self wrong, i\'ll stop mine ears against the mermaid\'s song.')
  });

  it('A user should be able to click the Shakespeare button to be navigated back to the main page', () => {
    cy.visit('http://localhost:3002/my-interpretations')
    cy.get('.shakespeare').click()
    cy.url().should('not.include', 'http://localhost:3002/my-interpretations')
  });

  //TESTS TO WRITE AFTER FUNCTIONALITY IS BUILT
  //A user should be able to click edit to be taken back to the edit display to edit an interpretation.
  //A user should be able to click the interpret button to be taken back to interpret the quote of choice
  //
  //Add 404 error handling

})