// TO DO: this component will be rendered by pulling the value of the choice key from the match param
// it will then take that value and do a conditionally pull for one of two fetches based on another property: displayType={"theme"} or displayType={"title"}

// Setup: Take that value and do a fetch depending on the type


//Interpretation Index's state
  // currentQuote

//child components:
 // button - get a new quote, choose a newCategory, choose a new topic, go to my interpretations

 //Quote Component -- holds the quote
   // holds sentenceDefinitions 
   // will create individual Word Components for each word that has an event listener to pop up the react tooltip.
 
  //TextBoxComponent
  // Submit Finished Interpretation Button

  // const InterpretationIndex = ({choice, displayType}) => {

  import React, {useEffect, useState} from 'react';
  import {fetchRandomQuote} from '../../util.js'
  import Quote from '../quote/Quote.js'
  import './InterpretationIndex.css'
  import {Link} from 'react-router-dom';

  //if in edit mode .. will display interpretation index editMode.
  const InterpretationIndex = ({addInterpretation, addToFavorites}) => {
    const [quote, setQuote] = useState('')
    const [error, setError] = useState(null)
    const [currentInterpretation, setCurrentInterpretation] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)


    const fetchSingleQuote = async () => {
      console.log("I am in fetchSingleQuote!")
      try {
        const data = await fetchRandomQuote()
        console.log('data---->', data)
        setQuote(data.quote.quote)
      } catch (err) {
        setError(err)
        console.log(err)
      }
    }
  
    // currently on page load a random quote is generated.
    useEffect(() => {
      fetchSingleQuote()
    }, ([]))

    const handleChange = (event) => {
      setCurrentInterpretation(event.target.value)
      if (event.target.value) {
        setIsDisabled(false)
      }
    }

    return (
      <div className="InterpretationIndex">
        <nav>
          <button>
            GET A NEW QUOTE
          </button>
          <button>
            CHOOSE A NEW CATEGORY
          </button>
          <button>
            CHOOSE A NEW TOPIC
          </button>
          <Link to='/my-interpretations' >
          <button className='my-interpretations-btn'>
            GO TO MY INTERPRETATIONS
          </button>
          </Link>
        </nav>
        <p>INTERPRETATION INDEX</p>
        <p>TEST -- {quote}</p>
        <Quote quote={quote} addToFavorites={addToFavorites} />
        <input
          type='text'
          placeholder='Type your interpretation here'
          onChange={(event) => handleChange(event)}
        />
        <button onClick={() => addInterpretation(currentInterpretation)}
        className="submit-btn" disabled={isDisabled}>Submit Intepretation</button>
      </div>
    )
  }

  export default InterpretationIndex;

//TO do: dont save interpretations that are empty.
    //disable button if empty.