import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Meal = (props) => {
    const {idMeal ,strMeal,strArea, strInstructions, strMealThumb} =props.meal;
    const history=useHistory();
    const activeStyle={
        textDecoration: 'none'
    }
    const handleBtn=()=>{
        history.push(`/meal/${idMeal}`);
    }
    
    return (
        <div className=''>
            <div className='img-size'>
            <img src={strMealThumb} alt="" />
            </div>
            
            <h3>{strMeal} {idMeal}</h3>
            <p><small>{strArea}</small></p>
            <p>{strInstructions.slice(0,100)}</p>
            <NavLink style={activeStyle} to={`/meal/${idMeal}`}>
            <Button variant="contained" color="primary">
             Show Details
            </Button>
            </NavLink>
            <NavLink to={`/meal/${idMeal}`}>See More</NavLink> 
            <Button onClick={handleBtn} variant="contained" color="primary">
             Show Details
            </Button>

        </div>
    );
};

export default Meal;