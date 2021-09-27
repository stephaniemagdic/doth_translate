import {useState, useEffect} from 'react';
import {fetchDefinition} from '../../util.js'
import ReactTooltip from 'react-tooltip';
import './Word.css'

const Word = ({word, countDef}) => {
  // countDef()
  const [definition, setDefinition] = useState('')
  // const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState(null)

  const getDefinition = async () => {
    try {
      const data = await fetchDefinition(word)
      setDefinition(data[0].meta['app-shortdef'].def[0])
      // setIsLoading(false)
    } catch (err) {
      //data cleaning function?
      // console.log("error retrieving a definition for",)
      // setIsLoading(false)
    }
  }

  useEffect(() => {  
    if (word.length >= 5 ) {
      getDefinition();
    } else {
      // setIsLoading(false)
    }
  }, [])

  return (
    <div className="Word" key={word}>
      {/* {error && <p>{error}</p>} */}
      {/* {isLoading && <p>Fetching your quote's context clues!</p>} */}
      {word.length >= 5 && definition && (
         <>
         <a data-tip data-for={word}> <span className="defined word">{word}</span></a>
        <ReactTooltip id={word}>
          <span>{definition}</span>
        </ReactTooltip>
        </>
      )}
      {word.length < 5 && <span className="word">{word}</span>}
      {word.length >=5 && !definition && <span className="word">{word}</span>}
    </div>
  )
}

export default Word;

