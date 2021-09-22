// TO DO: this component will be rendered by pulling the value of the choice key from the match param
// it will then take that value and do a conditionally pull for one of two fetches based on another property: displayType={"theme"} or displayType={"title"}

// Setup: Take that value and do a fetch depending on the type


//Interpretation Index's state
  // currentQuote

//child components:
 // button - get a new quote, choose a newCategory, choose a new topic, go to my interpretations

 //Quote Component -- holds the quote
   // holds sentenceDefinitions 
   // will create individual Word Components for each word that has an event listener to pop up the react tooltip.
 
  //TextBoxComponent
  // Submit Finished Interpretation Button

  // const InterpretationIndex = ({choice, displayType}) => {
  const InterpretationIndex = () => {

    return (
      <div className="InterpretationIndex">
        <p>INTERPRETATION INDEX</p>
      </div>
    )
  }

  export default InterpretationIndex;

