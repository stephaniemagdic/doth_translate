import {useState, useEffect} from 'react';

const Word = ({word}) => {
  const [definition, setDefinition] = useState('')

  useEffect(()=> {

  }, [])

  return (
    <p>{word}</p>
  )
}

export default Word;