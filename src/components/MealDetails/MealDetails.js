import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import Food from '../Food/Food';

const MealDetails = () => {

const {mealId}=useParams();

const [meal, setMeal]=useState({});
useEffect(() => {
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setMeal(data.meals[0]));
},[]);








    // const {mealId} = useParams();
    // // const {idMeal,strMeal}=props.meal;
    
    // // const history= useHistory();
    //  const [meal, setMeal]= useState({});
    //  useEffect(()=>{
    //     const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>console.log(data));
    // },[]);
    // // data.meals[0].strMeal
    // // const handleMeal=()=>{
    // //     history.push(`/meal${mealId}`);
    // // }
    return (
        <div>
           {/* <h2>{meal.strMeal}</h2>
           <button onClick={handleMeal}>See details</button> */}
           <h2>Every single meal.{mealId}</h2>
           {/* <h4>{JSON.stringify(meal.strMeal)}</h4> */}
           <img src={meal.strMealThumb} alt="" />
           <h4>{meal.strMeal}</h4>
           <p><small>{meal.strArea}</small></p>
           <p>{meal.strInstructions}</p>
           
           {/* <h3>{meal}</h3> */}
           {/* {
               meal.map(m=> <Food
               Meal={meal}
               ></Food>)
           } */}
           {/* <img className='img-size' src={meal.strMealThumb} alt="" />
            
            <p><small>{meal.strArea}</small></p>
            <p>{meal.strInstructions}</p> */}

        </div>
    );
};

export default MealDetails;