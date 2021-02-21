import React from 'react';
import BurgerBulider from '../../containers/BurgerBulider/BurgerBulider';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => { // get array of string of the keys.(from the ingredient object)
        //console.log(igKey);
        return [...Array(props.ingredients[igKey])].map((_,i) =>{
        console.log(igKey);
        console.log(i);
           return <BurgerIngredient key={igKey+i} type={igKey} />
        }); //[,]
    }).reduce((arr,el) => {
        return arr.concat(el)
    },[]); 
    if(transformedIngredients.length ===0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    console.log(transformedIngredients);
return (
    <div className ={classes.Burger}>
        <BurgerIngredient type ="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type ="bread-bottom"/>
    </div>
);
};

export default burger;