  import React, {useEffect, useState} from 'react';
  // import {fetchQuoteByTheme, fetchQuoteByTitle} from '../../util.js'
  import {playQuotes} from '../../data/playQuotes';
  import {themeQuotes} from '../../data/themeQuotes';
  import Quote from '../quote/Quote.js'
  import './InterpretationIndex.css'
  import {Link} from 'react-router-dom';
  import Error from '../error/Error'
  import InterpretationInput from '../interpretationInput/InterpretationInput'
  import uuid from 'react-uuid';

  const InterpretationIndex = ({addInterpretation, addQuote, isEditing, editInterpretation}) => {

    const [quote, setQuote] = useState('')
    const [error, setError] = useState(null)
    const [disableFavoriteButton, setDisableFavoriteButton] = useState(false)
    const [interpretationId, setInterpretationId] = useState(null)

    const fetchThemeQuote = async (theme) => {
      // try {
      //   const data = await fetchQuoteByTheme(theme)
      //   setQuote({quote: data.quote.quote, id: data.quote.id})    
      // } catch (err) {
      //   setError("no quote found")
      // }
      setQuote({quote: themeQuotes[theme][Math.floor(Math.random()*themeQuotes[theme].length)], id: uuid()})
    }


    const fetchTitleQuote = async (title) => {
      // try {
      //   const data = await fetchQuoteByTitle(title)
      //   setQuote({quote: data.quote.quote, id: data.quote.id})
      // } catch (err) {
      //   setError("no quote found")
      // }
      console.log("title from url", title)
      setQuote({quote: playQuotes[title][[Math.floor(Math.random()*playQuotes[title].length)]], id: uuid()})
    }

    const findQuoteFromStorageById = () => {
      const retrievedItems = JSON.parse(localStorage.getItem('interpretations'))
      const paramIndex = window.location.href.split('/').indexOf('edit') + 1;
      const quoteId = window.location.href.split('/')[paramIndex]
      const newList = retrievedItems.filter(quote => parseInt(quote.id) === parseInt(quoteId));
      if(!newList){
        window.location.assign("/badpath");
      }
      setQuote({quote:newList[0].quote})
      setInterpretationId(newList[0].id)
    }

    const fetchByParam = () => {
      if (isEditing) {
        findQuoteFromStorageById()
      }
      if (!isEditing) {
        if (window.location.href.includes('/category/title/')) {
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
      } 
    }


    useEffect(() => {
      fetchByParam() 
    }, [])

    const fetchANewQuote = () => {
      fetchByParam();
      setDisableFavoriteButton(true)
    }

    const resetDisabledButton = () => {
      setDisableFavoriteButton(false)
    }
 
    const handleSubmitInterpretation = (event, currentInterpretation) => {
      addInterpretation(quote, currentInterpretation)
    }
 
    const handleSubmitEditInterpretation = (editedInterpretation) => {
      editInterpretation(quote, editedInterpretation, interpretationId)
    }

    return (
      <div className="InterpretationIndex">
        {!isEditing && (
          <>
        {error && <Error type={error}/>}
        <div className="quote-container">
          <nav>
            <button onClick={() => fetchANewQuote()}>
              GET A NEW QUOTE
            </button>
            <Link to="/">
            <button>
              CHOOSE A NEW CATEGORY
            </button>
            </Link>
          </nav>
          {quote && <Quote quote={quote} addQuote={addQuote} type='new' disableFavoriteButton={disableFavoriteButton} resetDisabledButton={resetDisabledButton}/>}
        </div>
        <InterpretationInput  handleSubmitInterpretation={handleSubmitInterpretation} type='newInterpretation' />
        </>
        )
      }

      { isEditing && (
        <>
          {error && <Error type={error}/>}
          <div className="quote-container">
            <nav>
              <Link to="/doth_translate/">
              <span><button className='arrow-transition-button'>
                CHOOSE A NEW CATEGORY
              </button></span>
              </Link>
            </nav>
            {quote && <Quote quote={quote} type='edit'/>}
          </div>
          <InterpretationInput handleSubmitEditInterpretation={handleSubmitEditInterpretation} type='editInterpretation' />
        </>
        )
        }
     
    </div>
    )

  }

  export default InterpretationIndex;
