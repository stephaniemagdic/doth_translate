import Word from '../word/Word.js';
import './Quote.css';


const Quote = ({quote, addToFavorites, quoteID}) => {
  console.log("QUOTE-->", quote)
  const words = quote.quote.split(" ").map(word => <Word word={word}/> )
  console.log(words)
  console.log("quote id here", quoteID)


  

  //am I creating an object where there are definitions for each word that is over 5 letters long
  // then highlighting the words that have a property of defined on them?

  return (
    <div className="Quote" id={quoteID}>
      <div className="words-container">
      {words}
      </div>
      <button onClick={() => addToFavorites(quote, quoteID)} className="favorite-btn" >Save For Later</button>
    </div>
  )
}

export default Quote;

//Love and languish for his sake. B it ounce, or cat, or bear, pard, or boar with bristled hair, in thy eye that shall appear when thou wak'st, it is thy dear.

//(32) ['Love', 'and', 'languish', 'for', 'his', 'sake.', 'B', 'it', 'ounce,', 'or', 'cat,', 'or', 'bear,', 'pard,', 'or', 'boar', 'with', 'bristled', 'hair,', 'in', 'thy', 'eye', 'that', 'shall', 'appear', 'when', 'thou', "wak'st,", 'it', 'is', 'thy', 'dear.']