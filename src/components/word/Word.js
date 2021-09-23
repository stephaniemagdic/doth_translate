import {useState, useEffect} from 'react';
import {fetchDefinition} from '../../util.js'

const Word = ({word}) => {
  const [definition, setDefinition] = useState('')

  const getDefinition = async () => {
    try {
      const data = await fetchDefinition(word)
      console.log('data---->', data)
      setDefinition(data[0].meanings[0].definitions[0].definition)
    } catch (err) {
      // setError(err)
      console.log(err)
    }
  }
  
  useEffect(()=> {
    if(word.length >= 5 ) {
    getDefinition()
    }
  }, [])

  return (
    <div className="Word">
      <p>{word}</p>
      <p>{definition}</p>
    </div>
  )
}

export default Word;