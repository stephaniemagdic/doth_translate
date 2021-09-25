import backgroundImage from '../../assets/Page-not-found.png'
import './Error.css'

const Error = ({type, message}) => {
  let quote;
  if (type === '404') {
    quote = <div className='error-quote'>
      <span>To be, or not to be, that is the question: </span>
    <span>
      Whether 'tis nobler in the mind to suffer
    <span> The slings and arrows of outrageous fortune,</span>
    Or to take arms against a sea of troubles </span>
    <span> And by opposing end them. </span> <span> To die—to sleep,
    No more </span>
    <h2>Page Not Found</h2>
    </div>
    
    
    
  } else if (type === 500) {
    quote = `
    Oh, conspiracy, are you ashamed to show your face even at night, when evil things are most free? If so, when it's day, where are you going to find a cave dark enough to hide your monstrous face? 
    -Julius Caesar: Act 2 Scene 1 Page 4

    Internal Server Error.`
  }

  return (
    <div className='Erorr'>
    <img src={backgroundImage} alt="Shakespeare book sitting up by its edges"></img>
    {quote}
  </div>
  )

}

export default Error;