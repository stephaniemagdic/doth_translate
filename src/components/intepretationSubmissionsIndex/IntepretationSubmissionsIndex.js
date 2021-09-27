import CardsContainer from '../cardsContainer/CardsContainer';
import './InterpretationsSubmissionIndex.css'

const InterpretationSubmissionIndex = ({favorites, userSavedInterpretations, deleteQuoteFromStorage}) => {
  return (
    <div className="InterpretationSubmissionIndex">
      <CardsContainer cards={favorites} type='favorites' deleteQuoteFromStorage={deleteQuoteFromStorage} />
      <CardsContainer cards={userSavedInterpretations} type='submissions'/>
    </div>
  )
}

export default InterpretationSubmissionIndex;