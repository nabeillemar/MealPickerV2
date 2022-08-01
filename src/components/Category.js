import React from 'react'


// this is for our category button, we gave it a handleClick, id and Name

const Category = (props) => {
  return (
    <button onClick={props.handleClick} id={props.category} > {props.category}</button>
  )
}

export default Category


//on click plus handleClick enables us to get more propertirs 
// Index page


