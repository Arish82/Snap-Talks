import React from "react";
import "./index.css";

export default function SearchBar(props) {
    return (
        <div className="search-container" style={props.style}>
            <input
                id={props.id}
                name="search"
                type="text"
                className="search-input"
                placeholder="Search..."
            />
            <label htmlFor={props.id} className="search-button">
                <i className="fas fa-search"></i>
            </label>
        </div>
    );
}
