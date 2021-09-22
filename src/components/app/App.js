import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
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
      render={(match) =><InterpretationIndex choice={match.params.choice} displayType={"theme"} isEditing={false}/>}
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
