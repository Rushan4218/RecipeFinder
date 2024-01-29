import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Recipes from "./components/Recipes";

const App: React.FC = () => {

    const [input, setInput] = useState<string>("");   

    const handleChange = (value: string) => {
        setInput(value);
    } 
    return (
        <div className="main-container">
            <SearchBar 
                value={input}
                handleChange={handleChange}
            />
            <Recipes />
        </div>
    )
}

export default App;