import Word from '../word/Word.js';

const Quote = ({quote}) => {
  const words = quote.split(" ").map(word => <Word word={word}/> )
  console.log(words)

  //am I creating an object where there are definitions for each word that is over 5 letters long
  // then highlighting the words that have a property of defined on them?

  return (
    <div className="Quote">
      {quote}
      {words}
    </div>
  )
}

export default Quote;

//Love and languish for his sake. B it ounce, or cat, or bear, pard, or boar with bristled hair, in thy eye that shall appear when thou wak'st, it is thy dear.

//(32) ['Love', 'and', 'languish', 'for', 'his', 'sake.', 'B', 'it', 'ounce,', 'or', 'cat,', 'or', 'bear,', 'pard,', 'or', 'boar', 'with', 'bristled', 'hair,', 'in', 'thy', 'eye', 'that', 'shall', 'appear', 'when', 'thou', "wak'st,", 'it', 'is', 'thy', 'dear.']