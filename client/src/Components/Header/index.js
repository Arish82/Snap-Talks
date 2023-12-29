import React from "react";
import { MessageFilled } from "@ant-design/icons";
import ProfileImage from "../ProfileImage";
import "./index.css"
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

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
        </>
    );
}