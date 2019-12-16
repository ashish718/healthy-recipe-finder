import React from "react";
import style from './recipe.module.css'

const Recipe = ({title, health_label, image, ingredients})=>{
	return(
		<div className={style.recipe}>
		<h1>{title}</h1>
		<ol><h2>Health Label:</h2>{health_label.map(h =>(
			<li>{h}</li>

			))}</ol>

		<ol> <h2>ingredients:</h2> {ingredients.map(ingredient=>(
			<li>{ingredient.text}</li>
		))}
		</ol>
		<img className={style.image} src={image} alt=""/>

		</div>
	);

}

export default Recipe;