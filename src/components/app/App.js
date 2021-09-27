import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import InterpretationIndex from '../interpretationIndex/InterpretationIndex.js';
import IntepretationsSubmisssionsIndex from '../intepretationSubmissionsIndex/IntepretationSubmissionsIndex';
import DashboardIndex from '../dashboardIndex/DashboardIndex'
import CategoryIndex from '../categoryIndex/CategoryIndex';
import shakespeareIcon from '../../assets/shakespeare.png';
import Error from '../error/Error';

function App() {
  const [userSavedInterpretations, setUserSavedInterpretations] = useState([])
  const [favorites, setFavorites] = useState([])

  const addInterpretation = (quote, newInterpretation) => {
    const newInterpretationObj = {quote: quote.quote, interpretation: newInterpretation, id: Date.now()}
    setUserSavedInterpretations([...userSavedInterpretations, newInterpretationObj])
    const storageInterpretations = JSON.stringify([...userSavedInterpretations, newInterpretationObj]);
    localStorage.setItem('interpretations', storageInterpretations)
  }

  const addQuote = (newFavorite, id) => {
    if(favorites.includes(newFavorite)) {
      return
    }
    const favoriteObj = {quote: newFavorite, id: id}
    setFavorites([...favorites, favoriteObj])
    const storageFavorites = JSON.stringify([...favorites, favoriteObj]);
    localStorage.setItem('favorites', storageFavorites)
  }

  const deleteQuote = (id) => {
    const retrievedItems = JSON.parse(localStorage.getItem('favorites'))
    const newList = retrievedItems.filter(quote =>  quote.id !== id);
    const storageItems = JSON.stringify([...newList]);
    localStorage.setItem('favorites', storageItems)
    setFavorites(newList)
  }
  
  const checkLocalStorage = () => {
    if(localStorage.favorites) {
      const retrievedFavorites = JSON.parse(localStorage.getItem('favorites'))
      setFavorites(retrievedFavorites)
    }
    if(localStorage.interpretations) {
      const retrievedInterpretations = JSON.parse(localStorage.getItem('interpretations'))
      setUserSavedInterpretations(retrievedInterpretations)
    }
  }

  const editInterpretation = (quote, currentInterpretation, id) => {
    const replacementInterpretationObj = {quote: quote.quote, interpretation: currentInterpretation, id: id}
    const toSave = userSavedInterpretations.filter((interpretation) => {
      return interpretation.id !== id
    })
    setUserSavedInterpretations([...toSave, replacementInterpretationObj])
    const storageInterpretations = JSON.stringify([...toSave, replacementInterpretationObj]);
    localStorage.setItem('interpretations', storageInterpretations)
  }

  useEffect(
    () => {
      checkLocalStorage()
    }, [])

  return (
    <div className="App">
      <Link to='/'><h1 className="logo"> Doth Translate </h1></Link>
      <Switch>
        <Route
          exact path = "/"
          render={() => <DashboardIndex />}
        />
        <Route
        exact path= "/category/:type"
        render={(match) => <CategoryIndex category={match}/>}
        />
        <Route
        exact path= "/category/theme/:choice"
        render={(match) => <InterpretationIndex addInterpretation={addInterpretation} addQuote={addQuote} match={match} isEditing={false} />}
        />
        <Route
        exact path= "/category/title/:choice"
        render={(match) => <InterpretationIndex addInterpretation={addInterpretation} addQuote={addQuote} match={match} isEditing={false}/>}
        />
        <Route
        exact path= "/my-interpretations"
        render={() =><IntepretationsSubmisssionsIndex favorites={favorites} userSavedInterpretations={userSavedInterpretations} deleteQuote={deleteQuote}/>}
        />
        <Route
        exact path= "/edit/:id"
        render={(match) =><InterpretationIndex addInterpretation={addInterpretation} addQuote={addQuote} match={match} isEditing={true} editInterpretation={editInterpretation}/>}
        />
        <Route render={() => <Error type='404'/>} />
      </Switch>
      <nav className='back-to-main'> 
        <Link to="/">
          <img src={shakespeareIcon} alt="Shakespeare icon" className="shakespeare"></img>
        </Link>
      </nav>
    </div>
  );
}

export default App;
