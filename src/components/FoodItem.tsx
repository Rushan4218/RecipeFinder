import React, { useEffect, useState } from "react";

interface recipeProps {
    id: number,
    image: string,
    title: string
    displayDetails: (itemDetails: any) => void;
}

const FoodItem: React.FC<recipeProps> = ({ id, image, title, displayDetails }) => {
    const [itemDetails, setItemDetails] = useState<any>();

    const apiKey = "272b8ee4f7c84a7e87c867db06a0919a";
    const fetchDetails = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
            const details = await response.json();            
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

    const handleItemClick = () => {
        fetchDetails();
    }
    useEffect(() => {
        displayDetails(itemDetails);
    }, [itemDetails]);
    
    return (
        <div className="food-item" onClick={handleItemClick}>
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