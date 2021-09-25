import './Card.css';

const Card = ({cardData, type}) => {
  let componentToRender;

  if (type === 'favorites') {
    componentToRender = (
      // <div className="favorites" id={cardData.id} key={cardData.id}>
      <div className="favorites">
        {cardData.quote}
        {console.log("favorits card data", cardData)}
      <button>Delete</button>
      <button>Interpret</button>
      </div>
      
    )
  } else if (type === 'submissions' && cardData.quote) {
    componentToRender = ( <div className="submissions" >
      {/* ///saying card data is undefined... */}
      Quote: {cardData.quote.quote}
      Your Interpretation: {cardData.interpretation}
      {console.log("DATATTTTTTT--", cardData)}
    <button>EDIT</button>
    </div>)
  } else if (type === 'theme-options') {
    componentToRender = ( <div className="theme-options" >
      <button>{cardData}</button>
    </div>)
  } else if (type === 'title-options') {
    componentToRender = ( <div className="title-options" >
    <button>{cardData}</button>
  </div>)
  }

  return (
    <div>
      {componentToRender}
    </div>
   
  )
}

export default Card;