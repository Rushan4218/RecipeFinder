/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { IoMdClose } from "react-icons/io";

type detailsProps = {
    itemDetails: any;
    setShowDetails: (value: boolean) => void
}



const Details: React.FC<detailsProps> = ({
    itemDetails,
    setShowDetails }) => {

    console.log("this is itemDetails")
    console.log(itemDetails)

    if (itemDetails) {
        <div>
            No details available...
        </div>
    }
    return (
        <div className="details">
            <img
                // src={itemDetails.imgUrl || "url"}
                alt="IMAGENOTLOADED"
                className="details-img"
            />
            <h1 className="details-title">
                {/* {itemDetails.title} */}
            </h1>
            <h2 className="subtitle">
                Ingredients
            </h2>
            <ul className="ingredient-list content">
                {/* {itemDetails.ingredients.map((ingredient: any, index: number) => {
                    return <li key={index}>{ingredient.name}</li>
                })} */}
            </ul>
            <h2 className="subtitle">
                Instructions
            </h2>
            <h3
                className="details-instructions content"
            // dangerouslySetInnerHTML={{ __html: itemDetails.instructions }}
            >

            </h3>
            <div
                className="close-button"
                onClick={() => setShowDetails(false)}>
                <IoMdClose className="close-button-icon" />
            </div>
        </div>
    )
}

export default Details;