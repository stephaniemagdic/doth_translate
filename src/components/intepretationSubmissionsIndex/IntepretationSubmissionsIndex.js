import CardsContainer from '../cardsContainer/CardsContainer';

const InterpretationSubmissionIndex = ({favorites, userSavedInterpretations}) => {
  return (
    <div className="InterpretationSubmissionIndex">
      <p>Interpretation Submissions</p>
      <CardsContainer cards={favorites} type='favorites'/>
      <CardsContainer cards={userSavedInterpretations} type='submissions'/>
    </div>
    
  )
}

export default InterpretationSubmissionIndex;