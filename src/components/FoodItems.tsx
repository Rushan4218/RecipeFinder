/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import FoodItem from "./FoodItem";

interface recipesProps {
    foodItems: any[];
    setShowDetails: (value: boolean) => void
    setItemDetails: (value: any) => void
}

const FoodItems: React.FC<recipesProps> = ({ foodItems,
    setShowDetails,
    setItemDetails
}) => {


    const apiKey = "7dc40d83134e45b6ad519ccae9956e72";

    const fetchDetails = async (id: string) => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
            const details = await response.json();
            // console.log("response yesto aaira xa")
            // console.log(response)
            setItemDetails(
                {
                    title: details.title,
                    imgUrl: details.image,
                    ingredients: details.extendedIngredients,
                    instructions: details.instructions
                })
        } catch (error) {
            console.log("Error: ", error);
        }
    }


    return (
        <div
            className="food-item-grid">
            {
                foodItems?.map((item) => {
                    return (
                        <div
                            onClick={() => {
                                setShowDetails(true)
                                fetchDetails(item.id)
                            }}>
                            <FoodItem
                                key={item.id}
                                title={item.title}
                                image={item.image} />
                        </div>
                    )

                })
            }
        </div>
    )
}

export default FoodItems;         