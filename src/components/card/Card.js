import './Card.css';

const Card = ({cardData, type}) => {
  let componentToRender;

  if (type === 'favorites') {
    componentToRender = (
      <div className="favorites">
        {cardData}
      <button>Delete</button>
      </div>
      
    )
  } else if (type === 'submissions') {
    componentToRender = ( <div className="submissions">
      {cardData}
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