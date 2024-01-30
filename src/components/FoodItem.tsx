/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

interface recipeProps {
    image: string,
    title: string,
}

const FoodItem: React.FC<recipeProps> = ({
    image,
    title,
}) => {

    return (
        <div
            className="food-item">
            <img
                src={image}
                alt="image"
                className="image"
            />
            <h3>{title}</h3>
        </div>
    )
}

export default FoodItem;