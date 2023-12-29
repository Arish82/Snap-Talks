import React from "react";
import { MessageFilled } from "@ant-design/icons";
import SearchBar from "../SearchBar";
import ProfileImage from "../Avatar";
import "./index.css"

export default function Header(props) {
    return (
        <>
            <div className="logo-header">
                <div className="logo">
                    <span>Snap</span>Talk
                    <span>
                        <MessageFilled className="logo-icon" />
                    </span>
                </div>
                <ProfileImage
                    src={props.url}
                    count={1}
                    alt="Avatar"
                    width="3.5em"
                    height="3.5em"
                />
            </div>
            <div className="search-bar border-bottom border-1">
                <SearchBar />
            </div>
        </>
    );
}