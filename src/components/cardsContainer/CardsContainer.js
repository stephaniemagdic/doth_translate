import Card from '../card/Card';

const CardsContainer = ({cards, type}) => {

    const cardComponents = cards.map(card => <Card cardData={card} type={type}/>)

    return (
      <div>
         {cardComponents}
      </div>
     
    )

}

export default CardsContainer;