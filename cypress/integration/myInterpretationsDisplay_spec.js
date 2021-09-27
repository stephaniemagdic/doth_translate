describe('My Interpretations Display User Flows', () => {
  //what is seen on page load.
  it('A user should see interpretation submissions when visiting the page', () => {
    cy.addInterpretation()
    cy.visit('http://localhost:3000/my-interpretations')
    cy.get('.interpretations')
    cy.contains('HERE IS MY INTERPRETATION')
  });

  it('A user should see their favorited quotes when visiting the page', () => {
    cy.addFavorite()
    cy.visit('http://localhost:3000/my-interpretations')
    cy.get('.favorites')
    cy.contains('But lest myself be guilty to self wrong, i\'ll stop mine ears against the mermaid\'s song.')
  });

  it('A user should be able to click the Shakespeare button to be navigated back to the main page', () => {
    cy.visit('http://localhost:3000/my-interpretations')
    cy.get('.shakespeare').click()
    cy.url().should('not.include', 'http://localhost:3000/my-interpretations')
  });

  //TESTS TO WRITE AFTER FUNCTIONALITY IS BUILT
  it('A user be able to click the pencil icon to be taken back to edit the selected interpretation', () => {
    cy.addInterpretation()
    cy.visit('http://localhost:3000/my-interpretations')
    cy.get('.pencil').click()
    cy.url().should('include', 'http://localhost:3000/edit')
    cy.get('input').should('have.value', 'HERE IS MY INTERPRETATION')
  })

  //will pass when funcitonality is written in.
  it('A user be able to click the arrow icon to be taken back to interpret a selected saved quote', () => {
    cy.addFavorite()
    cy.visit('http://localhost:3000/my-interpretations')
    cy.get('.arrow').click()
    cy.url().should('include', 'http://localhost:3000/edit')
    cy.get('words-container')
    //.should have id ...   id: "266603a8-9d5d-11ea-965d-ac2b6ef23411",
  });

})