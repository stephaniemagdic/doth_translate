describe('Interpretation Display User Flows', () => {
  it('A user should see a quote randomly generated on page load', () => {
    cy.fetchRandomQuote()
    cy.visit('http://localhost:3002/category/theme/love')
    cy.get('.Quote')
    cy.contains('But lest myself be guilty to self wrong, i\'ll stop mine ears against the mermaid\'s song')
  });

  it('A user should be taken to a my interpretations page when clicking on my intepretations button', () => {
    cy.visit('http://localhost:3002/category/theme/love')
    cy.get('.my-interpretations-btn').click()
    cy.url().should('include', 'my-interpretations')
  });


  it('A user should see a quote randomly quote by chosen title on page load', () => {
    cy.fetchQuoteByTitle()
    cy.visit('http://localhost:3002/category/title/othello')
    cy.get('.Quote')
    cy.contains( 'Which thing to do, if this poor trash of Venice, whom trace for his quick hunting, stand the putting on, i\'ll have our Michael Cassio on the hip, abuse him to the Moor in the rank garb (For fear Cassio with my nightcap too), make the Moor thank me, love me, and reward me for making him egregiously an ass and practicing upon his peace and quiet even to madness.')
  });

  it('A user should see a quote randomly quote by chosen theme on page load', () => {
    cy.fetchQuoteByTheme()
    cy.visit('http://localhost:3002/category/theme/love')
    cy.get('.Quote')
    cy.contains('Do protest never loved myself till now infixed beheld myself drawn in the flattering table of her eye.')
  });
  //a user should be able to click a button to see a randomly generated quote.

})