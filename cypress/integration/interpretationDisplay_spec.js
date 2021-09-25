describe('Interpretation Display User Flows', () => {
  // it('A user should see a quote randomly generated on page load', () => {
  //   cy.fetchRandomQuote()
  //   cy.visit('http://localhost:3000/category/theme/love')
  //   cy.get('.Quote')
  //   cy.contains('But lest myself be guilty to self wrong, i\'ll stop mine ears against the mermaid\'s song')
  // });

  it('A user should be taken to a my interpretations page when clicking on my intepretations button', () => {
    cy.visit('http://localhost:3000/category/theme/love')
    cy.get('.my-interpretations-btn').click()
    cy.url().should('include', 'my-interpretations')
  });

  it('A user should be able to type in the interpretation input field and see their text displayed on the page', () => {
    cy.visit('http://localhost:3000/category/theme/love')
    cy.get('input').type('HERE IS MY INTERPRETATION')
    cy.should('have.value', 'HERE IS MY INTERPRETATION')
  });


  it('A user should see a quote randomly quote by chosen title on page load', () => {
    cy.getDefinition('egregious')
    cy.fetchQuoteByTitle()
    cy.visit('http://localhost:3000/category/title/othello')
    cy.get('.Quote')
    cy.contains( 'Which')
    cy.contains('thing')
    // cy.contains('egregiously').trigger('hover')
    cy.contains('very bad and easily noticed')
    cy.get('.defined').should('have.length', 18)
    // cy.get('.defined > :nth-child(14) ').contains('very bad and easily noticed')

    //  expect(Cypress.$('.datatable > tr')).to.have.lengthOf(4)
  });

;
  

  it('A user should see a quote randomly quote by chosen theme on page load', () => {
    // cy.fetchQuoteByTheme()
    // cy.visit('http://localhost:3000/category/theme/love')
    // cy.get('.Quote')
    // cy.contains('Do protest never loved myself till now infixed beheld myself drawn in the flattering table of her eye.')
  });
  //a user should be able to click a button to see a randomly generated quote.
  
  //definitions are fetched and on hover definitions can be seen.

})