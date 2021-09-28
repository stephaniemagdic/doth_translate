describe('My Interpretations Display User Flows', () => {
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
    cy.contains('Do protest never loved myself till now infixed beheld myself drawn in the flattering table of her eye.')
  });

  it('A user should be able to click the Shakespeare button to be navigated back to the main page', () => {
    cy.visit('http://localhost:3000/my-interpretations')
    cy.get('.shakespeare').click()
    cy.url().should('not.include', 'http://localhost:3000/my-interpretations')
  });

  it('A user be able to click the pencil icon to be taken back to edit the selected interpretation', () => {
    cy.addInterpretation()
    cy.visit('http://localhost:3000/my-interpretations')
    cy.get('.pencil').click()
    cy.url().should('include', 'http://localhost:3000/edit')
    cy.get('input').should('have.value', 'HERE IS MY INTERPRETATION')
  })

  it('A user be able to click the trash bin to delete a quote', () => {
    cy.addFavorite()
    cy.visit('http://localhost:3000/my-interpretations')
    cy.get('.Card').contains('Do protest never loved myself till now infixed beheld myself drawn in the flattering table of her eye')
    cy.get('.bin').click()
    cy.get('.favorites').should('not.contain', 'Do protest never loved myself till now infixed beheld myself drawn in the flattering table of her eye')
  
  })
  it('A user should see a 404 error page when an undefined path is visited', () => {
    cy.visit('http://localhost:3000/undefinedpath')
    cy.contains('Page Not Found')
  });
})




