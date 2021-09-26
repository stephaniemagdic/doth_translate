import CardsContainer from '../cardsContainer/CardsContainer';
import './InterpretationsSubmissionIndex.css'

const InterpretationSubmissionIndex = ({favorites, userSavedInterpretations}) => {
  return (
    <div className="InterpretationSubmissionIndex">
      <CardsContainer cards={favorites} type='favorites' />
      <CardsContainer cards={userSavedInterpretations} type='submissions'/>
    </div>
  )
}

export default InterpretationSubmissionIndex;