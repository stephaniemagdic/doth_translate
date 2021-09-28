import {useState, useEffect} from 'react';
import Word from '../word/Word.js';
import './Quote.css';
import saveIcon from '../../assets/add.png';
import uuid from 'react-uuid';

const Quote = ({quote, addQuote, type, disableFavoriteButton, resetDisabledButton}) => {
  const [isDisabled, toggleIsDisabled] = useState(false);
  const id = uuid();
  const words = quote.quote.split(" ").map(word => <Word word={word} id={word} key={uuid()}/> );

  useEffect(() => {
    if (disableFavoriteButton) {
      toggleIsDisabled(false)
    }
    if (type === 'new'){
      resetDisabledButton()
    }
  }, [disableFavoriteButton, type, resetDisabledButton])

  const handleClick = () => {
    addQuote(quote.quote, id)
    toggleIsDisabled(true)
  }
 
  return (
    <>
      {type === 'new' && (
        <div className="Quote" id={id} key={id}>
          <div className="words-container">
            {words}
          </div>
          <button onClick={() => handleClick()} className="favorite-btn" disabled={isDisabled}>
            <img src={saveIcon} alt='plus sign' className='saveIcon'></img>
          </button>
        </div>
      )}
        {type === 'edit' && (
        <div className="Quote" id={id} key={id}>
          <div className="words-container">
            {words}
          </div>
        </div>
      )}
    </>
  )
}

export default Quote;
