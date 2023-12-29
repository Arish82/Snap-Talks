import React from "react";
import "./index.css";

export default function SearchBar() {
    return (
        <div class="search-container">
            <input
                id="search"
                name="search"
                type="text"
                class="search-input"
                placeholder="Search..."
            />
            <label for="search" class="search-button">
                <i class="fas fa-search"></i>
            </label>
        </div>
    );
}
