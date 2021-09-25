import {useState, useEffect} from 'react';
import {fetchDefinition} from '../../util.js'
import ReactTooltip from 'react-tooltip';
import './Word.css'

const Word = ({word}) => {
  const [definition, setDefinition] = useState('')

  //this will be used for styling purposes.
  const [hasDefinition, setHasDefinition] = useState(false)
  const getDefinition = async () => {
    try {
      const data = await fetchDefinition(word)
      console.log('new definition data here---->',word, data)
      // setDefinition(data[0].meanings[0].definitions[0].definition)
      console.log("here--------->",data[0].meta['app-shortdef'].def[0])
      setDefinition(data[0].meta['app-shortdef'].def[0])
      setHasDefinition(true)

    } catch (err) {
      // setError(err)
      console.log(err)
    }
  }

  useEffect(() => {  
    if (word.length >= 5 ) {
    getDefinition();
    }
  }, [])


   

  return (
    <div className="Word">
      {word.length >= 5 && definition && (
         <>
         <a data-tip data-for={word}> <span className="defined">{word}</span></a>
        <ReactTooltip id={word} >
          <span>{definition}</span>
        </ReactTooltip>
        </>
      )}
      {word.length < 5 && <span>{word}</span>}
      {word.length >=5 && !definition && <span>{word}</span>}
   
    </div>
  )
}

export default Word;

//to do.. .if definition is undefined ... 
