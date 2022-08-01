import React, { useState, useEffect } from 'react'
import Category from '../components/Category'
import MealContainer from './MealContainer'



/*

When we added Client side routing ex: navbar, NavLink and Links the format changed a bit. 
Home Page is a static route, it just renders whatever we put in its return

        Categories Container 
  - Since this is our parent file this is what activates our categories page 
  1. renders the page
  2. calls on Meal Container render
  3. CategoriesContainer mount 
  4. 


*/


// we are fetching the categories API 
// we are handling a click event for the button
// We are creating props for category called key, category, id, handleClick, so that Category.js can configure and send back 
// we are rendering the {categories} button 
// we are also rendering the the name of the category click and the meals of that category 

// only part I have some confusion on is how the meals and category get connected. let me see..
// it looks like categories 

const URL = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"


const CategoriesContainer = () => {
    const [categories, setCategories] = useState([]) // Tracking the state of all the categories 
    const [category, setCateogry] = useState("") // tracking current state of category

    useEffect(() => { //bascially this is used to get the data or whatever on start up, we can't add this to the render like this we need to first get the data 
        console.log("mount")
        //debugger
        fetch(URL)
        .then(res => res.json())
        .then(data => { // this is the array we are getting from the API 
            //debugger
            console.log(data.meals) // this is the actual array 
            setCategories(data.meals)// we are setting the current state of categories to be data.categories which is the array 
        })
        },[category]);


   const handleOnClick = (e) => {
        //debugger
        console.log(e.target.id)//within the attributes of e there is an attribute called target and another one call id 
        //debugger
        setCateogry(e.target.id) // this render's the page that you click, the button that you click it renders that page 
        }
    



    let cats = categories.map((category, i) => { // the second time it renders there is data because it gets it from the API itself 
        return <Category key={i} category={category.strCategory} handleClick={handleOnClick}/> // creating the props here and sending it to Category.js to format it and send it back 
    })
    console.log("render page") // the first time it render's there is no information because it has to mount first 

    return (
      <div>
          <h2> Main Category (CategoriesContainer) </h2>

          {cats}
          <hr/>
          
          <h3>The {category} Meals:</h3>
          <MealContainer searchTerm={category} searchType="c" banner="Select a Category" />

        </div>
    )
    // we are giving the MealContainer new props so it can search for the category of the meal 
    // we create a prop here for MealContainer called category which tracks the button category, this is how they get connected.!!!! 

    // when we click a button becuase we used an event handler we attach it to an ID category and set that cateogroy ID to this state.category

  
}

// this/


export default CategoriesContainer



/*
Summary: we need a method that fires off a function to get the API and we need someway to call that function automatically and that function is ComponentDidMount
the first time the page renders it doesn't call on the API then the second time it renders it does call the API 

1. page renders with HTML 
2. page again with the componenetdidMount, fetching the data from the API and populating the buttons 
3. the page gets rendered again 
4. when I click one of the button's it takes to to that pages details and the page get rendered again 








*/