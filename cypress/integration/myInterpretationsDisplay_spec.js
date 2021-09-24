describe('Interpretation Display User Flows', () => {

  it('A user should see interpretation submissions when visiting the page', () => {
    cy.addInterpretation()
    cy.visit('http://localhost:3002/my-interpretations')
    cy.get('.interpretations')
    cy.contains('HERE IS MY INTERPRETATION')
  });

})