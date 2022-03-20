import { Box, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css'

const Restaurant = () => {
    const [searchText, setSearchText] =useState('');
    const [Meals, setMeals] = useState([]);

    useEffect(() => {
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res =>res.json())
        .then(data =>setMeals(data.meals));
    },[searchText]);

    const handleSearchField= event=>{
        const searchTextValue=event.target.value;
        setSearchText(searchTextValue);
    }
    return (
        <div>
            <input onChange={handleSearchField} placeholder='Type your meal' type="text" />
            <div className='meals-container'>
            {
                Meals.map(meal=> <Meal
                key={meal.idMeal}
                meal={meal}
                ></Meal>)
            }
            {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    Meals.map(meal => <Grid item xs={2} sm={3} md={4}>
                        <Meal 
                        key={meal.idMeal}
                        meal={meal}
                        ></Meal>

                    </Grid>)
                }
            </Grid>
    </Box> */}

            

            
            </div>
            
        </div>
    );
};

export default Restaurant;