import './Card.css';

const Card = ({cardData, type}) => {
  let componentToRender;

  if (type === 'favorites') {
    componentToRender = (
      <div className="favorites">
        {cardData}
      <button>REMOVE FROM FAVORITES</button>
      </div>
      
    )
  } else if (type === 'submissions') {
    componentToRender = ( <div className="submissions">
      {cardData}
    <button>EDIT</button>
    </div>)
  } else if (type === 'theme-options') {
    componentToRender = ( <div className="theme-options">
      {cardData}
    <button>CHOOSE</button>
    </div>)
  } else if (type === 'title-options') {
    componentToRender = ( <div className="title-options">
    {cardData}
  <button>CHOOSE</button>
  </div>)
  }

  return (
    <div>
      {componentToRender}
    </div>
   
  )
}

export default Card;