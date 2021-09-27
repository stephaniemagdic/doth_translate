describe('Interpretation Display User Flows', () => {
  // it('A user should see a quote randomly generated on page load', () => {
  //   cy.fetchRandomQuote()
  //   cy.visit('http://localhost:3000/category/theme/love')
  //   cy.get('.Quote')
  //   cy.contains('But lest myself be guilty to self wrong, i\'ll stop mine ears against the mermaid\'s song')
  // });

  // tests for what is seen on inital page load.

  it('A user should see definitions available for words over 5 letters in length if the API has a definition avaialable', () => {
    cy.getDefinition()
    cy.fetchQuoteByTitle()
    cy.visit('http://localhost:3000/category/title/othello')
    cy.get('.Quote')
    cy.contains( 'Which')
    cy.contains('thing')
    cy.contains('TEST DEFINITION HERE')
  });
  
  it('A user should see a random quote of a chosen theme on page load that matches the theme in the url', () => {
    cy.fetchQuoteByTheme()
    cy.visit('http://localhost:3000/category/theme/love')
    cy.url().should('contain', 'love')
    cy.get('.Quote')
    cy.contains('Do')
    cy.contains('protest')
    cy.contains('never')
    cy.contains('loved')
    cy.contains('myself')
    cy.contains('till')
    cy.contains('now')
    cy.contains('infixed')
    cy.contains('beheld')
    cy.get('.Word').should('have.length', 18)
  });

  it('A user should see a quote randomly quote by chosen title/piece of literature on page load', () => {
    cy.fetchQuoteByTitle()
    cy.visit('http://localhost:3000/category/title/othello')
    cy.url().should('contain', 'othello')
    cy.get('.Quote')
    cy.contains('Which')
    cy.contains('thing')
    cy.contains('to')
    cy.contains('do')
    cy.contains('egregiously')
    cy.contains('madness')
    cy.contains('Venice')
    cy.contains('Cassio')
    cy.contains('Moor')
    cy.get('.Word').should('have.length', 70)
  });

  //TO DO: FIX THIS TEST.
  it('A user should be able to click the save button to save a quote', () => {
    cy.fetchQuoteByTitle()
    cy.visit('http://localhost:3000/category/title/othello')
    // cy.get('[id=test]')
    cy.get('.favorite-btn').click()
    cy.visit('http://localhost:3000/my-interpretations')
    //TO DO: FIX ASSERTION
    // cy.get('[id=test]')
    cy.contains(`Which thing to do, if this poor trash of Venice, whom trace for his quick hunting, stand the putting on, i'll have our Michael Cassio on the hip, abuse him to the Moor in the rank garb (For fear Cassio with my nightcap too), make the Moor thank me, love me, and reward me for making him egregiously an ass and practicing upon his peace and quiet even to madness.`)
  });

  it('A user should be able to type in the interpretation input field and see their text displayed on the page', () => {
    cy.visit('http://localhost:3000/category/theme/love')
    cy.get('input').type('HERE IS MY INTERPRETATION')
    cy.should('have.value', 'HERE IS MY INTERPRETATION')
  });


  it('A user should be able to click on submit interpretation to save their interpetation', () => {
    cy.visit('http://localhost:3000/category/theme/love')
    cy.get('input').type('HERE IS MY INTERPRETATION')
    cy.should('have.value', 'HERE IS MY INTERPRETATION')
    cy.get('.submit-btn').click()
    cy.visit('http://localhost:3000/my-interpretations')
    cy.get('.interpretations').should('contain', 'HERE IS MY INTERPRETATION') 
  });

  it('A user should be taken to their favorites/saved interpretations dashboard when clicking on go to my interpretations button', () => {
    cy.visit('http://localhost:3000/category/theme/love')
    cy.get('.my-interpretations-btn').click()
    cy.url().should('include', 'my-interpretations')
  });

  it('A user should be able to click the Shakespeare button to be navigated back to the main page', () => {
    cy.visit('http://localhost:3000/category/theme/love')
    cy.get('.shakespeare').click()
    cy.url().should('not.include', 'category/theme/love')
  });

  //LATER FUNCTIONALITY STILL NEED TO TEST:
    //a user should be able to click a button to see a randomly generated quote.
    //choose a new topic button

})