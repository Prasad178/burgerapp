import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
const burger =(props)=>
{

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igkey=>
    {
        console.log("igkey"+igkey);
        console.log("igkey"+props.ingredients[igkey]);
       return [...Array(props.ingredients[igkey])].map((_,i)=>
          { return <BurgerIngredient key={igkey+1} type={igkey}/>
    })
  })
    .reduce((arr,el)=>{
            return arr.concat(el)
          },[]);
          console.log("transformedIngredients"+transformedIngredients);

        if(transformedIngredients.length===0)
        {
          transformedIngredients=<p>Please start adding the ingredients</p>
        }

return(
      <div className="Burger">
      <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>


      </div>

);
}
export default burger;
