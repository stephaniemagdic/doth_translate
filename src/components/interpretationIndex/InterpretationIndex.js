  import React, {useEffect, useState} from 'react';
  import {fetchQuoteByTheme, fetchQuoteByTitle} from '../../util.js'
  import Quote from '../quote/Quote.js'
  import './InterpretationIndex.css'
  import {Link} from 'react-router-dom';

  const InterpretationIndex = ({addInterpretation, addToFavorites, match}) => {
    const [quote, setQuote] = useState('')
    const [error, setError] = useState(null)
    const [currentInterpretation, setCurrentInterpretation] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)

    const fetchThemeQuote = async (theme) => {
      try {
        const data = await fetchQuoteByTheme(theme)
        setQuote(data.quote.quote)
        console.log("data for theme quote-->", data)
      } catch (err) {
        setError(err)
      }
    }

    const fetchTitleQuote = async (title) => {
      try {
        const data = await fetchQuoteByTitle(title)
        setQuote(data.quote.quote)
      } catch (err) {
        setError(err)
      }
    }


    useEffect(() => {
      if ( window.location.href.includes('/category/title/')) {
        // fetchTitleQuote(match.match.params.choice)
        const urlParams = window.location.href.split("/")
        const index = (window.location.href.split("/").indexOf('title')) + 1
        const param = urlParams[index]
        fetchTitleQuote(param)     
      } else if ( window.location.href.includes('/category/theme/') ) {
        // fetchThemeQuote(match.match.params.choice)
       const urlParams = window.location.href.split("/")
       const index = (window.location.href.split("/").indexOf('theme')) + 1
       const param = urlParams[index]
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
          {/* <p>TEST -- INTERPRETATION INDEX</p>
          <p>TEST -- {quote}</p> */}
          <Quote quote={quote} addToFavorites={addToFavorites} />
        </div>
        <input
          type='text'
          placeholder='Type your interpretation here'
          onChange={(event) => handleChange(event)}
        />
        <button onClick={() => addInterpretation(currentInterpretation)}
        className="submit-btn" disabled={isDisabled}>Submit Intepretation</button>
        <Link to='/my-interpretations' >
          <button className='my-interpretations-btn'>
            GO TO MY INTERPRETATIONS
          </button>
        </Link>
      </div>
    )
  }

  export default InterpretationIndex;
