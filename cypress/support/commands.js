Cypress.Commands.add('fetchRandomQuote', () => {
  cy.intercept('GET', 'https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/single', {
    statusCode: 200,
    body: {
      id: "266603a8-9d5d-11ea-965d-ac2b6ef23411",
      play: "(The Comedy of Errors, Act 12, Scene 64)",
      quote: "But lest myself be guilty to self wrong, i'll stop mine ears against the mermaid's song.",
      rating: 0
    }
  })
})

// Cypress.Commands.add('fetchQuoteByTheme', () => {
//   cy.intercept('GET', '//https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/by-theme/love', {
//     statusCode: 200,
//     body: {
  
//     }
//   })
// })

// Cypress.Commands.add('fetchQuoteByTitle', () => {
//   cy.intercept('GET', 'https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/by-play/othello', {
//     statusCode: 200,
//     body: {
   
//     }
//   })
// })

