import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Recipes from "./components/Recipes";

const App: React.FC = () => {

    const [input, setInput] = useState<string>("");
    const handleChange = (value: string) => setInput(value);

    const apiKey = "c1b30b73d1084bf18f2f53adf7b5fa8d";
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${input}`;
    
    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setRecipes(data.results);
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    interface objectSubSet {
        id: number,
        title: string,
        image: string
    }
    const [recipes, setRecipes] = useState<objectSubSet[]>([]);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchData();
    }
    
    return (
        <div className="main-container">
            <SearchBar
                value={input}
                handleChange={handleChange}
                onSubmit={onSubmit}
            />
            <Recipes recipes={recipes}/>
        </div>
    )
}

export default App;