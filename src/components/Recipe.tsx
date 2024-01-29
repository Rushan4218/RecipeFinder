import React, { useEffect, useState } from "react";

interface recipeProps {
    id: number,
    image: string,
    title: string
}

const Recipe: React.FC<recipeProps> = ({ id, image, title}) => {
    const [itemDetails, setItemDetails] = useState<any>();

    const apiKey = "c1b30b73d1084bf18f2f53adf7b5fa8d";
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

    useEffect(() => {
        if (!itemDetails) return;
        console.log(itemDetails);
    },[itemDetails]);
    const handleItemClick = () => {
        fetchDetails();
    }
    
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

export default Recipe;