export const fetchRandomQuote = () => {
  return fetch('https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/single').then((res) => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
}

// export const fetchQuoteByTitle = () => {

// }

// export const fetchQuoteByTheme = () => {

// }


//url list
// all titles: 'https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/play-titles'
// get a single random quote by title: 'https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/by-play/henry-v'


//Dictionary API url list
// fetch by language/word ... https://api.dictionaryapi.dev/api/v2/entries/en/rites