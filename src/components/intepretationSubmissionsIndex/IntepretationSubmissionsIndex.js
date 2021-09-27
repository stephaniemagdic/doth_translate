import CardsContainer from '../cardsContainer/CardsContainer';
import './InterpretationsSubmissionIndex.css'

const InterpretationSubmissionIndex = ({favorites, savedInterpretations, deleteQuote}) => {
  return (
    <div className="InterpretationSubmissionIndex">
      <CardsContainer cards={favorites} type='favorites' deleteQuote={deleteQuote} />
      <CardsContainer cards={savedInterpretations} type='submissions'/>
    </div>
  )
}

export default InterpretationSubmissionIndex;