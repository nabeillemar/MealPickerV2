import React from "react";
import { NavLink } from "react-router-dom"

const link = {
    width: '100px',
    padding: '12px',
    margin: "0 6px 6px",
    background: 'blue',
    textDecoration: "none",
    color: "white"
}

const Navigation = () => (
    <div>
        <NavLink
            to='/'
            exact
            style={link}
            activeStyle={{
                background: "darkblue"
            }}
            >
            Home</NavLink>

            <NavLink
            to='/categories'
            exact
            style={link}
            activeStyle={{
                background: "darkblue"
            }}
            >
            Categories</NavLink>


            <NavLink
            to='/ingredients'
            exact
            style={link}
            activeStyle={{
                background: "darkblue"
            }}
            >
            Ingredients</NavLink>

    </div>
)

export default Navigation

// done 