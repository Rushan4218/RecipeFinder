/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import FoodItems from "./components/FoodItems";
import Details from "./components/Details";

const App: React.FC = () => {

    const [input, setInput] = useState<string>("");
    const handleChange = (value: string) => setInput(value);

    const apiKey = "7dc40d83134e45b6ad519ccae9956e72";
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${input}`;

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setFoodItems(data.results);
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    interface objectSubSet {
        id: number,
        title: string,
        image: string
    }
    const [foodItems, setFoodItems] = useState<objectSubSet[]>([]);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchData();
    }


    const [showDetails, setShowDetails] = useState(false);
    const [itemDetails, setItemDetails] = useState<any>();
    const [loading, setLoading] = useState(false)

    return (
        <div className="main-container"
            style={{ position: 'relative' }}>

            {
                showDetails && (
                    <div
                        style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            minHeight: "100%",
                            width: "100%",
                            zIndex: "100"
                        }}
                    >
                        <Details
                            loading={loading}
                            itemDetails={itemDetails}
                            setShowDetails={setShowDetails}
                        />
                    </div>
                )

            }
            <SearchBar
                value={input}
                handleChange={handleChange}
                onSubmit={onSubmit}
            />
            <div className="item-container">
                <FoodItems
                    setLoading={setLoading}
                    setShowDetails={setShowDetails}
                    foodItems={foodItems}
                    setItemDetails={setItemDetails}
                />
            </div>

        </div>
    )
}

export default App;