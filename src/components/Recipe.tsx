import React from "react";
import pic from "../assets/img.jpg";

const Recipe: React.FC = () => {
    return (
        <div className="recipe">
            <img 
                src={pic}
                alt="image"
                className="image"
            />
            <h3>Pasta with Garlic, Scallions, Cauliflower and BreadCrumbs</h3>
        </div>
    )
}

export default Recipe;