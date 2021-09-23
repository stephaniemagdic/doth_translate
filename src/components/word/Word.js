import {useState, useEffect} from 'react';
import {fetchDefinition} from '../../util.js'
import ReactTooltip from 'react-tooltip';
import './Word.css'

const Word = ({word}) => {
  const [definition, setDefinition] = useState('')
  const [wordComponent, setWordComponent] = useState('')
  //this will be used for styling purposes.
  const [hasDefinition, setHasDefinition] = useState(false)

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
  


  useEffect(async ()=> {
    console.log("I am in useEFFECT!")
    if (word.length >= 5 ) {
      console.log("I am in conditional")
    await getDefinition();
    setHasDefinition(true);
    //to do.. .if definition is undefined ... 
    //  //TO DO: // if(definition ! == undefined)
    //edgecase that we have an empty tooltip.
    setWordComponent(
      <>
       <a data-tip data-for={word}> {word}: {definition}</a>
      <ReactTooltip id={word} >
        <span>{definition}</span>
      </ReactTooltip>
      </>
    )
    
    } else {
      setWordComponent(<span>{word}</span>)
    }
  }, [])

  console.log("wordCompoent", wordComponent)

  return (
    <div className="Word">
     {wordComponent}
    </div>
  )
}

export default Word;

//to do.. .if definition is undefined ... 
