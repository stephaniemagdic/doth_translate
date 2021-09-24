import Card from '../card/Card';

const CardsContainer = ({cards, type}) => {

    const cardComponents = cards.map(card => <Card cardData={card} type={type}/>)

    return (
      <>
      { type === "submissions" && (<div className="interpretations">
      {cardComponents}
   </div>)}
      
   { type === "favorites" && (<div className="favorites">
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