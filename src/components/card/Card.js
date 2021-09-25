import './Card.css';

const Card = ({cardData, type}) => {
  let componentToRender;
  console.log("card data-->", cardData)

  if (type === 'favorites') {
    // MODEL COMPONENT WITH ID
    componentToRender = (
      <div className="favorites" id={cardData.id} key={cardData.id}>
        {cardData.quote}
        {console.log("favorits card data", cardData)}
      <button>Delete</button>
      <button>Interpret</button>
      </div>
      
    )
  } else if (type === 'submissions') {
    componentToRender = ( <div className="submissions" id={cardData.id} key={cardData.id}>
      Quote: {cardData.quote.quote}
      Your Interpretation: {cardData.interpretation}
    <button>EDIT</button>
    </div>)
  } else if (type === 'theme-options') {
    componentToRender = ( <div className="theme-options">
      <button>{cardData}</button>
    </div>)
  } else if (type === 'title-options') {
    componentToRender = ( <div className="title-options">
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