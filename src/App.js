import React from 'react'; // Comes from React
import './App.css'; // So we can connect CSS 
import CategoriesContainer from './containers/CategoriesContainer' // So we can create route path that connects our Navigation to CategoriesContainer 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; // So we have access to the Route and Switch to change links (need to read this more)
import Home from './containers/Home' // Importing from Home
import Navigation from './components/Navigation'; // Importing the Navigation bar
import IngredientsContainer from './containers/IngredientsContainer' // access to the Ingreidnets 
import IngredientsList from './containers/IngredientsList'; // access to the individual meals from the ingredient

function App() {
  return (
  <Router>
    <Navigation/> {/* The Navigation wraps around the Div */}
     <div className="App">
          <Switch> {/* What does this do? */}
            <Route exact path='/' component={Home}/> {/*Connects to a the static page called "HOME" */}
            <Route exact path='/categories' component={CategoriesContainer}/> {/*Connects to a the dyanmic page called CategoriesContainer */}
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