export const fetchRandomQuote = () => {
  return fetch('https://shakespeare-quotes-generator.herokuapp.com/api/v1/quotes/single').then((res) => res.ok ? res.json() : console.log("something went wrong")).catch(err => err)
}

export const fetchDefinition = (word) => {
  //https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=68472c7d-1931-4202-8173-28c4329b1f20
  //https://www.dictionaryapi.com/api/v3/references/sd3/json/dragon?key=your-api-key
  //https://dictionaryapi.com/api/v3/references/ithesaurus/json/test?key=1eb92823-8edc-4a04-a33f-f9c69c824ab1
  //https://dictionaryapi.com/api/v3/references/learners/json/test?key=c80e6519-7311-4235-9297-4ba6a1b27611
  return fetch(`https://dictionaryapi.com/api/v3/references/learners/json/${word}?key=c80e6519-7311-4235-9297-4ba6a1b27611`).then(res => res.json()
    // res.ok ? res.json() 
    // console.log("dictionary res-->", res)
   
)
//: console.log("something went wrong, res:", res)).catch(err => err)
  // return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((res) => res.ok ? res.json() : console.log("something went wrong, res:", res)).catch(err => err)
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