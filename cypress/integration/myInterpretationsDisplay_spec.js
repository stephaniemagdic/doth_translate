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
  //quote is fetched
  //

})