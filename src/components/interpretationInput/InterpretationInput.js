import {
  useState,
  useEffect
} from 'react';
import {
  Link
} from 'react-router-dom'

const InterpretationInput = ({
  handleSubmitInterpretation,
  handleSubmitEditInterpretation,
  type
}) => {
  const [currentInterpretation, setCurrentInterpretation] = useState('')
  const [isDisabled, setIsDisabled] = useState(true);
  const [editedInterpretation, setEditedInterpretation] = useState("Type your interpretation here...")

  useEffect(() => {
    const checkPlaceholder = () => {
      const retrievedItems = JSON.parse(localStorage.getItem('interpretations'))
      const paramIndex = window.location.href.split('/').indexOf('edit') + 1;
      const quoteId = window.location.href.split('/')[paramIndex]
      const newList = retrievedItems.filter(quote => parseInt(quote.id) === parseInt(quoteId));
      setEditedInterpretation(newList[0].interpretation)
    }
    if (type === 'editInterpretation') {
      checkPlaceholder()
    }
  }, [type])

  const handleChange = (event) => {
    event.preventDefault()
    setCurrentInterpretation(event.target.value)
    if (event.target.value) {
      setIsDisabled(false)
    }
  }

  const handleEditChange = (event) => {
    setEditedInterpretation(event.target.value)
    if (event.target.value) {
      setIsDisabled(false)
    }
  }

  const handleSubmit = (event) => {
    if (type === 'newInterpretation') {
      handleSubmitInterpretation(event, currentInterpretation)
      setCurrentInterpretation('')
    } else if (type === 'editInterpretation') {
      handleSubmitEditInterpretation(editedInterpretation)
      setEditedInterpretation('')
    }
  }

  return (
   <div>
      {type === 'newInterpretation' && (
        <>
          <input
            type='text'
            placeholder='Type your interpretation here...'
            onChange={(event) => handleChange(event)}
            value={currentInterpretation}
          />
          <button onClick={(event) => handleSubmit(event)}
            className="submit-btn" disabled={isDisabled}>
              SUBMIT INTERPRETATION
          </button>
            <Link to='/my-interpretations' >
              <button className='my-interpretations-btn' >
                GO TO MY INTERPRETATIONS
              </button>
            </Link>
        </>
      )}
      {type === 'editInterpretation' && (
        <>
          <input
            type='text'
            placeholder={editedInterpretation || "Type your interpretation here..."}
            value={editedInterpretation}
            onChange={(event) => handleEditChange(event)}
          />
          <div className='buttonContainer'>
            <button onClick={() => handleSubmit()}
            className="submit-btn" disabled={isDisabled}>
              Submit Intepretation
            </button>
            <Link to='/my-interpretations' >
              <span><button className='my-interpretations-btn'>
                GO TO MY INTERPRETATIONS
              </button></span>
            </Link>
          </div>
        </>
      )}
   </div>
  )
}

export default InterpretationInput;