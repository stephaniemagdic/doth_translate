Cypress.Commands.add('fetchRandomQuote', () => {
  cy.intercept('GET', 'https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/single', {
    statusCode: 200,
    body: { quote: {
      id: "266603a8-9d5d-11ea-965d-ac2b6ef23411",
      play: "(The Comedy of Errors, Act 12, Scene 64)",
      quote: "But lest myself be guilty to self wrong, i'll stop mine ears against the mermaid's song.",
      rating: 0
    }
  }
  })
})


// Cypress.Commands.add('fetchQuoteByTitle', () => {
//   cy.intercept('GET', 'https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/by-play/othello', {
//     statusCode: 200,
//     body: { quote: {
//       quote: 
//         'Which thing to do, if this poor trash of Venice, whom trace for his quick hunting, stand the putting on, i\'ll have our Michael Cassio on the hip, abuse him to the Moor in the rank garb (For fear Cassio with my nightcap too), make the Moor thank me, love me, and reward me for making him egregiously an ass and practicing upon his peace and quiet even to madness.'
//     } 
//     }
//   })
// })

// Cypress.Commands.add('fetchQuoteByTheme', () => {
//   cy.intercept('GET', 'https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/by-theme/love', {
//     statusCode: 200,
//     body: { quote: {
//       quote: 'Do protest never loved myself till now infixed beheld myself drawn in the flattering table of her eye.'
//     }
//     }
//   })
// })

Cypress.Commands.add('addInterpretation', () => {
  cy.visit('http://localhost:3002/category/theme/love')
  cy.get('input').type('HERE IS MY INTERPRETATION')
  cy.get('.submit-btn').click()
})


// cy.get('favorite-btn').click()

