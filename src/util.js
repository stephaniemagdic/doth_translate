export const fetchRandomQuote = () => {
  return fetch('https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/single').then((res) => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
}

export const fetchDefinition = (word) => {
  return fetch(`https://dictionaryapi.com/api/v3/references/learners/json/${word}?key=c80e6519-7311-4235-9297-4ba6a1b27611`).then(res => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
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
