import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";


interface searchBarProps {
    value: string,
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void
}
const SearchBar: React.FC<searchBarProps> = ({ value, handleChange }) => {

    return (
        <div className="top-area">
            <div>
                <h1 className="title">Recipe Finder</h1>
                <h2 className="sub-title">The smart way to find recipes</h2>
            </div>
            <form className="form-search">
                <input 
                    type="input" 
                    className="search-box"
                    value={value}
                    onChange={handleChange}
                />
                <button className="search-btn"><FaSearch className="search-icon"/></button>
            </form>
        </div>
    )
}

export default SearchBar;