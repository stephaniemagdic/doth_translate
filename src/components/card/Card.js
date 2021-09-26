import './Card.css';
import bin from '../../assets/bin.png';
import pencil from '../../assets/pencil.png'
import arrow from '../../assets/right-arrow.png'

const Card = ({cardData, type}) => {
  let componentToRender;
  if (type === 'favorites') {
    componentToRender = (
      <div className="favorites" id={cardData.id} key={cardData.id}>
        {cardData.quote}
      <button><img src={bin} alt='trash bin' className="bin"></img></button>
      <button><img src={arrow} alt="right arrow" className="arrow"></img></button>
      </div>
      
    )
  } else if (type === 'submissions' ) {
    componentToRender = ( 
      <div className="submissions" >
        <h3>Quote:</h3> <p> {cardData.quote} </p>
        <h3>Your Interpretation:</h3> <p> {cardData.interpretation} </p>
        <button><img src={pencil} alt='pencil' className="pencil"></img></button>
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
    <div className="Card">
      {componentToRender}
    </div>
  )
}

export default Card;