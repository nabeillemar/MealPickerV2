import React, { useState, useEffect } from 'react'
import Meal from '../components/Meal'







// get Fetchs the data doing a get request to the API
// renders the meal on the page, we actually call on this page in the Category Container because we add it to the speific button 
// this container creates the props which are KEY and MEAL and sends it to the MEAL component to configure and send back 
// in the state we are tracking category and meals 
// in URL has this.props.category 


const MealContainer = (props) => {
  const [meals, setMeals] = useState([])
  const [searchTerm, setSearchTerm] = useState("")



    useEffect(() => {
      let url = `https://www.themealdb.com/api/json/v1/1/filter.php?${props.searchType}=${props.searchTerm}`
      //debugger
      fetch(url)
            .then(res => res.json())
            .then(data => { 
                //debugger
                console.log(data.meals)
                console.log("fetching meals")
                //if (data.meals){
                 // this.setState({ // set the new data of the meals and category of the button or category selected 
                 setMeals(data.meals) // we use this information to map the meals below // this is the state 
                 setSearchTerm(searchTerm)// we use 
    })
  }, [props.searchTerm]) // this is the did update mount 


let theMeals = []
if (meals) {
     theMeals = meals.map((meal, i) => <Meal key={i} meal={meal.strMeal} />)
}


  return (
      <div>
        <h3>{searchTerm} Meals</h3> {/* This is not needed */}
        {theMeals}
      </div>
  )
   
    
}





    



export default MealContainer



/*
1. looks like when we click a button, the onclick handler is ran, then it renders the categories container again which activates the MealContainer 
2. Meal Container goes through once without hitting the DidMount then it goes back to hit DID UPDATE which then gets the data from the API and then renders it again and then finsishes by goin back to the DIDUPDATE

OnClick Event handler
Categories Container return 
Meal Container render 
DID update compinent 
get URL
Meal Container Render 
DID update again to finsih 


*/

