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


Cypress.Commands.add('fetchQuoteByTitle', () => {
  cy.intercept('GET', 'https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/by-play/othello', {
    statusCode: 200,
    body: { quote: {
      quote: 
        'Which thing to do, if this poor trash of Venice, whom trace for his quick hunting, stand the putting on, i\'ll have our Michael Cassio on the hip, abuse him to the Moor in the rank garb (For fear Cassio with my nightcap too), make the Moor thank me, love me, and reward me for making him egregiously an ass and practicing upon his peace and quiet even to madness.'
    } 
    }
  })
})

Cypress.Commands.add('fetchQuoteByTheme', () => {
  cy.intercept('GET', 'https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/by-theme/love', {
    statusCode: 200,
    body: { quote: {
      quote: 'Do protest never loved myself till now infixed beheld myself drawn in the flattering table of her eye.'
    }
    }
  })
})

Cypress.Commands.add('addInterpretation', () => {
  cy.visit('http://localhost:3002/category/theme/love')
  cy.get('input').type('HERE IS MY INTERPRETATION')
  cy.get('.submit-btn').click()
})

Cypress.Commands.add('addFavorite', () => {
  cy.fetchRandomQuote()
  cy.visit('http://localhost:3002/category/theme/love')
  cy.get('.favorite-btn').click()
})

Cypress.Commands.add('getDefinition', (word) => {
  const endpoint = `https://dictionaryapi.com/api/v3/references/learners/json/${word}?key=c80e6519-7311-4235-9297-4ba6a1b27611`
  cy.intercept('GET', endpoint, {
    statusCode: 200,
    body: [{"meta":{"id":"egregious","uuid":"052a338e-1091-4ac1-a839-3e3160516221","src":"learners","section":"alpha","target":{"tuuid":"93e48919-c025-46bd-9f62-f05f87263739","tsrc":"collegiate"},"stems":["egregious","egregiously","egregiousness"],"app-shortdef":{"hw":"egregious","fl":"adjective","def":["{it}formal{\/it} {bc} very bad and easily noticed"]},"offensive":false},"hwi":{"hw":"egre*gious","prs":[{"ipa":"\u026a\u02c8gri\u02d0\u02a4\u0259s","sound":{"audio":"egregi01"}}]},"fl":"adjective","gram":"more ~; most ~","def":[{"sseq":[[["sense",{"sls":["formal"],"dt":[["text","{bc}very bad and easily noticed "],["vis",[{"t":"The article contains a number of {it}egregious{\/it} [={it}glaring, obvious{\/it}] errors."},{"t":"an {it}egregious{\/it} example of political bias"},{"t":"{it}egregious{\/it} misconduct"}]]]}]]]}],"uros":[{"ure":"egre*gious*ly","fl":"adverb"},{"ure":"egre*gious*ness","fl":"noun","gram":"noncount"}],"shortdef":["TEST"]}]
    })
  })

  Cypress.Commands.add('getDefinition2', () => {
    const endpoint = `https://dictionaryapi.com/api/v3/references/learners/json/madness?key=c80e6519-7311-4235-9297-4ba6a1b27611`
    cy.intercept('GET', 'https://dictionaryapi.com/api/v3/references/learners/json/madness.?key=c80e6519-7311-4235-9297-4ba6a1b27611', {
      statusCode: 200,
      body: 
      [{"meta":{"id":"egregious","uuid":"052a338e-1091-4ac1-a839-3e3160516221","src":"learners","section":"alpha","target":{"tuuid":"93e48919-c025-46bd-9f62-f05f87263739","tsrc":"collegiate"},"stems":["egregious","egregiously","egregiousness"],"app-shortdef":{"hw":"egregious","fl":"adjective","def":["TEST DEFINITION HERE"]},"offensive":false},"hwi":{"hw":"egre*gious","prs":[{"ipa":"\u026a\u02c8gri\u02d0\u02a4\u0259s","sound":{"audio":"egregi01"}}]},"fl":"adjective","gram":"more ~; most ~","def":[{"sseq":[[["sense",{"sls":["formal"],"dt":[["text","{bc}very bad and easily noticed "],["vis",[{"t":"The article contains a number of {it}egregious{\/it} [={it}glaring, obvious{\/it}] errors."},{"t":"an {it}egregious{\/it} example of political bias"},{"t":"{it}egregious{\/it} misconduct"}]]]}]]]}],"uros":[{"ure":"egre*gious*ly","fl":"adverb"},{"ure":"egre*gious*ness","fl":"noun","gram":"noncount"}],"shortdef":["very bad and easily noticed"]}]
      })
    })


//      setDefinition(data[0].meta['app-shortdef'].def[0])

