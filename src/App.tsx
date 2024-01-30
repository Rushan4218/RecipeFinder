import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import FoodItems from "./components/FoodItems";
import Details from "./components/Details";

const App: React.FC = () => {

    const [input, setInput] = useState<string>("");
    const handleChange = (value: string) => setInput(value);

    const apiKey = "272b8ee4f7c84a7e87c867db06a0919a";
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
    const [detailsEl, setDetailsEl] = useState<any>();
    const [showDetails, setShowDetails] = useState<boolean>(false);

    
    let itemInformation;
    const displayDetails = (itemDetails: any) => {
        itemInformation = itemDetails;
        setShowDetails(true);
        setDetailsEl(<Details itemDetails={itemInformation} handleDeleteClicked={setShowDetails(false)}/>)
    }
    console.log(showDetails);
    return (
        <div className="main-container">
            <SearchBar
                value={input}
                handleChange={handleChange}
                onSubmit={onSubmit}
            />
            <div className="item-container">
                {showDetails && detailsEl}
                <FoodItems
                    foodItems={foodItems}
                    displayDetails={displayDetails}
                />
            </div>
            
        </div>
    )
}

export default App;