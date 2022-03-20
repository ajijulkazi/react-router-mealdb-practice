import React from 'react';

const Food = (props) => {
    const {strMeal,strInstructions}=props.Meal;
    return (
        <div>
            <h2>{strMeal}</h2>
        </div>
    );
};

export default Food;