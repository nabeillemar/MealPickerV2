import React, { Component } from 'react'
import MealContainer from './MealContainer'

class IngredientsList extends Component {
  render() {
    return (
      <div>
          <h2>The Meals with {this.props.match.params.id.split("_").join(" ")}</h2>
            <MealContainer searchTerm={this.props.match.params.id.split("_").join(" ")} searchType="i" />
            {console.log(this.props.match.id)}

      </div>
    )
  }
}

export default IngredientsList

//done

//this is <Route path='/ingredients/:id' component={IngredientsList}/>
// we are calling the componenet MealContainer which fetchs the meals here again 


// i think i have to change this to a arrow function page and maybe add state? 