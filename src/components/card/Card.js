import './Card.css';

const Card = ({cardData, type}) => {
  let componentToRender;
  if (type === 'favorites') {
    componentToRender = (
      <div className="favorites" id={cardData.id} key={cardData.id}>
        {cardData.quote}
      <button>Delete</button>
      <button>Interpret</button>
      </div>
      
    )
  } else if (type === 'submissions' ) {
    componentToRender = ( 
      <div className="submissions" >
        <h3>Quote:</h3> <p> {cardData.quote} </p>
        <h3>Your Interpretation:</h3> <p> {cardData.interpretation} </p>
        <button>EDIT</button>
      </div> 
    )
  } else if (type === 'theme-options') {
    componentToRender = ( 
      <div className="theme-options" >
        <button>{cardData}</button>
      </div>
    )
  } else if (type === 'title-options') {
    componentToRender = (
      <div className="title-options" >
        <button>{cardData}</button>
      </div>
    )
  }
  return (
    <div>
      {componentToRender}
    </div>
  )
}

export default Card;