import React from "react";
import FoodItem from "./FoodItem";

interface recipesProps {
    foodItems: any[];
    displayDetails: (itemDetails: any) => void;
}

const FoodItems: React.FC<recipesProps> = ({ foodItems, displayDetails }) => {

    const foodElements: JSX.Element[]= foodItems.map((item) => {
        return (
            <FoodItem 
                key={item.id}
                id={item.id}
                title={item.title} 
                image={item.image}
                displayDetails={displayDetails}
            />
        )

    }) 
    return (
        <div className="food-item-grid">
            {foodElements}
        </div>
    )
}

export default FoodItems;         