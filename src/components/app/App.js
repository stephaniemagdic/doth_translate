import './App.css';
import { Route, Switch } from 'react-router-dom';
import InterpretationIndex from '../interpretationIndex/InterpretationIndex.js';
import { useState } from 'react';


function App() {
  const [userSavedInterpretations, setUserSavedInterpretations] = useState([])
  //Right now we will have our saved interpretations held in app so it can be passed to our my-interpretationIndex

  const addInterpretation = (newInterpretation) => {
    setUserSavedInterpretations([...userSavedInterpretations, newInterpretation])
  }


  return (
    <div className="App">
      <Switch>
{/*       <Route
        exact path = "/"
        render={(match) => <DashboardIndex />}
      />
      <Route
      exact path= "/category/:type"
      render={(match) => <CategoryIndex category={match.params.type}/>}
      /> */}
      <Route
      exact path= "/category/theme/:choice"
      // render={(match) =><InterpretationIndex choice={match.params.choice} displayType={"theme"} isEditing={false}/>}
      render={() => <InterpretationIndex addInterpretation={addInterpretation}/>}
      />
      {/* <Route
      exact path= "/category/title/:choice"
      render={(match) =><InterpretationIndex choice={match.params.choice} displayType="theme" isEditing={false}/>}
      />
      <Route
      exact path= "/my-interpretations"
      render={(match) =><IntepretationsSubmisssionsIndex/>}
      />
      <Route
      exact path= "edit/:id"
      render={(match) =><InterpretationIndex isEditing={true}/>}
      /> */}
      <Route render={() => <p> Error! </p>} />
      </Switch>
    </div>
  );
}

export default App;
