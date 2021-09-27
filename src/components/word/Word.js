import {useState, useEffect} from 'react';
import {fetchDefinition} from '../../util.js'
import ReactTooltip from 'react-tooltip';
import './Word.css'

const Word = ({word}) => {
  const [definition, setDefinition] = useState('')

  const getDefinition = async () => {
    try {
      const data = await fetchDefinition(word)
      setDefinition(data[0].meta['app-shortdef'].def[0])
    } catch (err) {
      return
    }
  }

  useEffect(() => {  
    if (word.length >= 5 ) {
      getDefinition();
    } 
  }, [])

  return (
    <div className="Word" key={word}>
      {word.length >= 5 && definition && (
         <>
         <p data-tip data-for={word} className='definition'> <span className="defined word">{word}</span></p>
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

