import Card from '../card/Card';
import {Link} from 'react-router-dom';
import './CardsContainer.css';

const CardsContainer = ({cards, type}) => {
   let cardComponents;

   if(type === "theme-options" ) {
     
   cardComponents = cards.map(card =>
      <div key={card}>
       <Link to={`/category/theme/${card}`}>
      <Card cardData={card} type={type}/>
      </Link>
      </div>
      )
   } else if (type === "title-options") {


       cardComponents = cards.map(card =>
         <div key={card}>
       <Link to={`/category/title/${card}`}>
      <Card cardData={card} type={type}/>
      </Link>
      </div>
      )
   } else if (type === "submissions" || type === "favorites") {
       cardComponents = cards.map(card => <Card cardData={card} type={type}/>)
   }

   

    return (
      <>
      { type === "submissions" && (<div className="interpretations">
      <h2>My Interpretations</h2>
      {cardComponents}
   </div>)}
      
   { type === "favorites" && (<div className="favorites">
      <h2>Saved Quotes</h2>
      {cardComponents}
   </div>)}

   { type === "title-options" && (<div className="titles">
      {cardComponents}
   </div>)}

   { type === "theme-options" && (<div className="themes">
      {cardComponents}
   </div>)}

      
      </>
     
    )

}

export default CardsContainer;