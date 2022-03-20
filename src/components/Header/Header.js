import React from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const {mealId} = useParams();
    const activeStyle={
        fontWeight: "bold",
        color: "green"
      }
    return (
        <nav>
            <NavLink activeStyle={activeStyle} to='/home'>Foods</NavLink>
            <NavLink activeStyle={activeStyle} to='/meal'>FoodDetails</NavLink>
        </nav>
    );
};

export default Header;