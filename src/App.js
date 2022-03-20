import './App.css';
import Restaurant from './components/Restaurant/Restaurant';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <Switch>
            <Route path="/home">
            <Restaurant></Restaurant>
            </Route>
            <Route exact path='/'>
             <Restaurant></Restaurant>
            </Route>
            <Route path='/meal/:mealId'>
              <MealDetails></MealDetails>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
