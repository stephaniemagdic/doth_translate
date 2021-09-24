import CardsContainer from '../cardsContainer/CardsContainer';

const InterpretationSubmissionIndex = ({favorites, userSavedInterpretations}) => {
  return (
    <div className="InterpretationSubmissionIndex">
      <p>Interpretation Submissions</p>
      <CardsContainer cards={favorites}/>
      <CardsContainer cards={userSavedInterpretations}/>
    </div>
    
  )
}

export default InterpretationSubmissionIndex;