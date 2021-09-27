import './Card.css';
import bin from '../../assets/bin.png';
import pencil from '../../assets/pencil.png'
import arrow from '../../assets/right-arrow.png'
import {Link} from 'react-router-dom'

const Card = ({cardData, type, deleteQuoteFromStorage}) => {
  let componentToRender;

  const handleDeleteQuote = (id) => {
    deleteQuoteFromStorage(id)
  }

  if (type === 'favorites') {
    componentToRender = (
      <div className="favorites" id={cardData.id} key={cardData.id}>
        <p>{cardData.quote}</p>
      <button onClick={() => handleDeleteQuote(cardData.id)}><img src={bin} alt='trash bin' className="bin"></img></button>
      <button><img src={arrow} alt="right arrow" className="arrow"></img></button>
      </div>
      
    )
  } else if (type === 'submissions' ) {
    componentToRender = ( 
      <div className="submissions" >
        <div><h3>Quote:</h3><p> {cardData.quote} </p></div>
        <div>
          <h3 className='interpretation-container'>Your Interpretation:</h3><p> {cardData.interpretation} </p>
          <div><button><Link to={`edit/${cardData.id}`}><img src={pencil} alt='pencil' className="pencil"></img></Link></button></div>
        </div>
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