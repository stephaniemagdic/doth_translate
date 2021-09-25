import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import InterpretationIndex from '../interpretationIndex/InterpretationIndex.js';
import IntepretationsSubmisssionsIndex from '../intepretationSubmissionsIndex/IntepretationSubmissionsIndex';
import { useState, useEffect } from 'react';
import DashboardIndex from '../dashboardIndex/DashboardIndex'
import CategoryIndex from '../categoryIndex/CategoryIndex'
import shakespeareIcon from '../../assets/shakespeare.png';


function App() {
  const [userSavedInterpretations, setUserSavedInterpretations] = useState([])
  const [favorites, setFavorites] = useState([])
  //Right now we will have our saved interpretations held in app so it can be passed to our my-interpretationIndex

  const addInterpretation = (newInterpretation) => {
    //if empty string or undefined.
    if (!newInterpretation) {
      return
    }
    setUserSavedInterpretations([...userSavedInterpretations, newInterpretation])
    const storageInterpretations = JSON.stringify([...userSavedInterpretations, newInterpretation])
    localStorage.setItem('interpretations', storageInterpretations)
  }

  const addToFavorites = (newFavorite) => {
    // TO DO: only add unique values to favorites.
    if(favorites.includes(newFavorite)) {
      return
    }
    setFavorites([...favorites, newFavorite])
    const storageFavorites = JSON.stringify([...favorites, newFavorite])
    localStorage.setItem('favorites', storageFavorites)
  }

  //get local storage items on render.
  useEffect(
    () => {
      if(localStorage.favorites) {
        const retrievedFavorites = JSON.parse(localStorage.getItem('favorites'))
        setFavorites(retrievedFavorites)
      }
      if(localStorage.interpretations) {
        const retrievedInterpretations = JSON.parse(localStorage.getItem('interpretations'))
        setUserSavedInterpretations(retrievedInterpretations)
      }
    }, [])




  return (
    <div className="App">
      <Switch>
      <Route
        exact path = "/"
        render={(match) => <DashboardIndex />}
      />
      <Route
      exact path= "/category/:type"
      render={(match) => <CategoryIndex category={match}/>}
      />
      <Route
      exact path= "/category/theme/:choice"
      // render={(match) =><InterpretationIndex choice={match.params.choice} displayType={"theme"} isEditing={false}/>}
      render={() => <InterpretationIndex addInterpretation={addInterpretation} addToFavorites={addToFavorites}/>}
      />
      <Route
      exact path= "/category/title/:choice"
      // render={(match) =><InterpretationIndex choice={match.params.choice} displayType={"theme"} isEditing={false}/>}
      render={(match) => <InterpretationIndex addInterpretation={addInterpretation} addToFavorites={addToFavorites} match={match}/>}
      />

      {/* <Route
      exact path= "/category/title/:choice"
      render={(match) =><InterpretationIndex choice={match.params.choice} displayType="theme" isEditing={false}/>}
      /> */}
      <Route
      exact path= "/my-interpretations"
      render={(match) =><IntepretationsSubmisssionsIndex favorites={favorites} userSavedInterpretations={userSavedInterpretations}/>}
      />
      {/* <Route
      exact path= "edit/:id"
      render={(match) =><InterpretationIndex isEditing={true}/>}
      /> */}
      <Route render={() => <p> Error! </p>} />
      </Switch>
      <nav> 
        <Link to="/">
          <img src={shakespeareIcon} alt="Shakespeare icon" className="shakespeare"></img>
        </Link>
      </nav>
    </div>
  );
}

export default App;
