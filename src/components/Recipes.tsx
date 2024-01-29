import React from "react";
import Recipe from "./Recipe";

interface recipesProps {
    recipes: any[];
}

const Recipes: React.FC<recipesProps> = ({ recipes }) => {

    const foodElements: JSX.Element[]= recipes.map((item) => {
        return (
            <Recipe 
                key={item.id}
                id={item.id}
                title={item.title} 
                image={item.image}
            />
        )

    }) 
    return (
        <div className="recipes">
            {foodElements}
        </div>
    )
}

export default Recipes;         