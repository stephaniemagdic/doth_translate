  import React, {useEffect, useState} from 'react';
  import {fetchQuoteByTheme, fetchQuoteByTitle} from '../../util.js'
  import Quote from '../quote/Quote.js'
  import './InterpretationIndex.css'
  import {Link} from 'react-router-dom';
  import Error from '../error/Error'

  const InterpretationIndex = ({addInterpretation, addToFavorites, match}) => {
    const [quote, setQuote] = useState('')
    const [error, setError] = useState(null)
    const [currentInterpretation, setCurrentInterpretation] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)

    const fetchThemeQuote = async (theme) => {
      try {
        const data = await fetchQuoteByTheme(theme)
        setQuote({quote: data.quote.quote, id: data.quote.id})    
      } catch (err) {
        setError("no quote found")
      }
    }

    const fetchTitleQuote = async (title) => {
      try {
        const data = await fetchQuoteByTitle(title)
        setQuote({quote: data.quote.quote, id: data.quote.id})
      } catch (err) {
        setError("no quote found")
      }
    }

    useEffect(() => {
      if ( window.location.href.includes('/category/title/')) {
        const urlParams = window.location.href.split("/")
        const choiceIndex = (window.location.href.split("/").indexOf('title')) + 1
        const param = urlParams[choiceIndex]
        fetchTitleQuote(param)     
      } else if ( window.location.href.includes('/category/theme/') ) {
        const urlParams = window.location.href.split("/")
        const choiceIndex = (window.location.href.split("/").indexOf('theme')) + 1
        const param = urlParams[choiceIndex]
        fetchThemeQuote(param)
      }    
    }, ([]))

    const handleChange = (event) => {
      setCurrentInterpretation(event.target.value)
      if (event.target.value) {
        setIsDisabled(false)
      }
    }

    return (
      <div className="InterpretationIndex">
        {error && <Error type={error}/>}
        <div className="quote-container">
          <nav>
            <button>
              GET A NEW QUOTE
            </button>
            <Link to="/">
            <button>
              CHOOSE A NEW CATEGORY
            </button>
            </Link>
            <button>
              CHOOSE A NEW TOPIC
            </button>
          </nav>
          {quote && <Quote quote={quote} addToFavorites={addToFavorites}/>}
        </div>
        <input
          type='text'
          placeholder='Type your interpretation here'
          onChange={(event) => handleChange(event)}
        />
        <button onClick={() => addInterpretation(quote, currentInterpretation)}
        className="submit-btn" disabled={isDisabled}>Submit Intepretation</button>
        <Link to='/my-interpretations' >
          <button className='my-interpretations-btn' >
            GO TO MY INTERPRETATIONS
          </button>
        </Link>
      </div>
    )
  }

  export default InterpretationIndex;
