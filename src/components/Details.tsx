import React from "react";
import { IoMdClose } from "react-icons/io";

const Details: React.FC<any> = ({ itemDetails, handleDeleteClicked }) => {

    console.log("hello");
    
    const ingredients = itemDetails.ingredients.map((ingredient: any, index: number) => {
        return <li key={index}>{ingredient.name}</li>
    })

    return (
        <div className="details">
            <img 
                src={itemDetails.imgUrl}
                alt="IMAGENOTLOADED"
                className="details-img"
            />
            <h1 className="details-title">{itemDetails.title}</h1>
            <h2 className="subtitle">Ingredients</h2>
            <ul className="ingredient-list content">{ingredients}</ul>
            <h2 className="subtitle">Instructions</h2>
            <h3 className="details-instructions content" dangerouslySetInnerHTML={{__html: itemDetails.instructions}}></h3>
            <div className="close-button" onClick={handleDeleteClicked}><IoMdClose className="close-button-icon"/></div>
        </div>
    )
}

export default Details;