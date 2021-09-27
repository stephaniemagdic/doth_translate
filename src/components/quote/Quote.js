import Word from '../word/Word.js';
import './Quote.css';
import saveIcon from '../../assets/add.png'
import {useState, useEffect} from 'react';
import uuid from 'react-uuid';

const Quote = ({quote, addToFavorites, quoteID}) => {
  const [isDisabled, toggleIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [count, setCount] = useState(0)

  const countDefinitionsFetched = () => {
    // setCount(count + 1)
  }

  const words = quote.quote.split(" ").map(word => <Word word={word} countDef={countDefinitionsFetched} id={word} key={uuid()}/> )

  const handleClick = () => {
    addToFavorites(quote.quote, quoteID)
    toggleIsDisabled(true)
  }

 

 
  return (
    <div className="Quote" id={quoteID} key={quoteID}>
      <div className="words-container">
      {words}
      </div>
      <button onClick={() => handleClick()} className="favorite-btn" disabled={isDisabled}><img src={saveIcon} alt='plus sign' className='saveIcon'></img></button>
    </div>
  )
}

export default Quote;
