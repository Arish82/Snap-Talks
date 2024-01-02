import React, { useState } from "react";
import "./index.css";

export default function SearchBar(props) {
    return (
        <div className="search-container" style={props.style}>
            <input
                value={props.searchUser}
                onChange={(e) => {
                    props.setSearchUser(e.target.value)
                    props.handleUserSearch(e.target.value);
                }}
                id={props.id}
                name="search"
                type="text"
                className="search-input"
                placeholder="Search..."
            />
                {
                    !props.show &&
                    <label htmlFor={props.id} className="search-button">
                        <i className="fas fa-search"></i>
                    </label>
                }    
                {
                    props.show && 
                    <div className="search-button" onClick={()=>{
                        props.handleCloseSearch();
                    }}>
                        <i class="fas fa-times"></i>
                    </div>
                }
        </div>
    );
}
