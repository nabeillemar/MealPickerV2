import React from 'react'


// we get the prop MealName from MealContainer and we configure it here and we basically give the template to MealContainer

const Meal = (props) => {
  return (
    <div>
        <h3> {props.meal}</h3>
        </div>
  )
}

export default Meal

