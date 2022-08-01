import React, { Component, useEffect, useState } from 'react'
import Ingredient from '../components/Ingredient'


const URL = "https://www.themealdb.com/api/json/v1/1/list.php?i=list"


const IngredientsContainer = () => {
    const [ingredients, setIngredients] = useState([])
    const [ingredient, setIngredient] = useState("")

    useEffect(()=> {
        console.log("IngredientsContainer Mount")
        //debugger
        fetch(URL)
        .then(res => res.json())
        .then(data => { // this is the array we are getting from the API 
            //debugger
            console.log(data.meals) // this is the actual array 
            setIngredients(data.meals) // we are setting the current state of categories to be data.categories which is the array 
            setIngredient(ingredient)
    })
},[ingredient]);



    const handleOnClick = (e) => {
        //debugger
        console.log(e.target.id)//within the attributes of e there is an attribute called target and another one call id 
        //debugger
        this.setState({
            ingredient: e.target.id // this render's the page that you click, the button that you click it renders that page 
        })
    }



    let ingred = ingredients.map((ingredient, i) => { // the second time it renders there is data because it gets it from the API itself 
        return <Ingredient key={i} ingredient={ingredient.strIngredient} handleClick={handleOnClick}/> // creating the props here and sending it to Category.js to format it and send it back 
    })
    console.log("render Ingr page") // the first time it render's there is no information because it has to mount first 
    //debugger
    return (
      <div>
          <h2> The Meal Ingredient </h2>
          {console.log(ingredients)}
          {ingred}
        

        </div>
    )
    // we create a prop here for MealContainer called category which tracks the button category, this is how they get connected.!!!! 

    // when we click a button becuase we used an event handler we attach it to an ID category and set that cateogroy ID to this state.category
  }
  


export default IngredientsContainer