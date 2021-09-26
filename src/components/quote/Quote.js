import Word from '../word/Word.js';
import './Quote.css';

const Quote = ({quote, addToFavorites, quoteID}) => {
  const words = quote.quote.split(" ").map(word => <Word word={word}/> )
  console.log("quoteeeee", quote)

  return (
    <div className="Quote" id={quoteID} key={quoteID}>
      <div className="words-container">
      {words}
      </div>
      <button onClick={() => addToFavorites(quote.quote, quoteID)} className="favorite-btn" >Save For Later</button>
    </div>
  )
}

export default Quote;
