export const fetchRandomQuote = () => {
  return fetch('https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/single').then((res) => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
}

export const fetchDefinition = (word) => {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((res) => res.ok ? res.json() : console.log("something went wrong, res:", res)).catch(err => err)
}

export const fetchQuoteByTitle = (title) => {
  return fetch(`https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/by-play/${title}`).then((res) => res.ok ? res.json() : console.log("something went wrong, res:", res)).catch(err => err)
}

export const fetchQuoteByTheme = (theme) => {
  return fetch(`https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/by-theme/${theme}`).then((res) => res.ok ? res.json() : console.log("something went wrong, res:", res)).catch(err => err)
}

export const fetchAllTitles = () => {
  return fetch('https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/play-titles').then((res) => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
}

export const fetchAllThemes = () => {
  return fetch('https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/themes').then((res) => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
}


// get a single random quote by title: 'https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/by-play/henry-v'


//Dictionary API url list
// fetch by language/word ... https://api.dictionaryapi.dev/api/v2/entries/en/rites