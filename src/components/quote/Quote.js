import Word from '../word/Word.js';
import './Quote.css';
import saveIcon from '../../assets/add.png'
import {useState} from 'react';

const Quote = ({quote, addToFavorites, quoteID}) => {
  const [isDisabled, toggleIsDisabled] = useState(false)
  const words = quote.quote.split(" ").map(word => <Word word={word}/> )

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
