const Card = ({cardData, type}) => {
  console.log(cardData, type)

  let componentToRender;

  if (type === 'favorites') {
    componentToRender = (
      <div className="favorites">
        {cardData}
      </div>
    )
  } else if (type === 'submissions') {
    componentToRender = ( <div className="submissions">
      {cardData}
    </div>)
  }

  return (
    <div>
      {componentToRender}
    </div>
   
  )
}

export default Card;