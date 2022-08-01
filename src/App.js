import React from 'react';
import './App.css';
import CategoriesContainer from './containers/CategoriesContainer'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './containers/Home'
import Navigation from './components/Navigation';
import IngredientsContainer from './containers/IngredientsContainer'
import IngredientsList from './containers/IngredientsList';

function App() {
  return (
  <Router>
    <Navigation/>
     <div className="App">
       <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/categories' component={CategoriesContainer}/>
          <Route exact path='/ingredients' component={IngredientsContainer}/>
          <Route path='/ingredients/:id' component={IngredientsList}/>
          </Switch>
    </div>
  </Router>
  );
}

export default App;

//done


/*      Summary 

1. We have a Home page
  * We created a home page which is a container (view Page) and it is static does not have a component
  * We gave it a route which is in the app.js file 
  * It is on the Navbar which are Navlinks in the Navgation.js file under component folder
2. We have a Category Page 
  * We render the page, goes through the mount but nothing happens then it renders and goes through the mount which is (useEffect) again and then grabs the categories and then renders the page for a last time  
  * It shows a list of all the button which gets formmated through Category Component 
  * When we click on a Category component did update gets triggered because of handle on click and because of the udpate and renders the page using that information to show all the meals using mealContainer and Meals component 
3. We have an Ingreident page 
  * we render the page goes through the mount initally then goes again and grabs data the second time
  * We have buttons for every ingredient because of the ingredent component and it is linked to the ingridentList view page which gets its data from the MealContainer 



*/