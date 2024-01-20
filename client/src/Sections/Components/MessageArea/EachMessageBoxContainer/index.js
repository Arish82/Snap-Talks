import React from 'react'
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import "./index.css";
// import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

export default function EachMessageBoxContainer(props) {
    return (
        <>
            <div className="each-message-box-container">
                <div className="each-message-box first-message">
                    <p>
                        {props.message}
                    </p>
                    <div className="message-likes-time">
                        <div className="likes">
                            {/* ❤️😂 */}
                        </div>
                        <div className="time">
                            <span>
                                {props.time}
                            </span>
                            <span className='seen-icons' >
                                {/* <DoneRoundedIcon /> */}
                                <DoneAllRoundedIcon />
                            </span>
                        </div>
                    </div>
                    <div className="menu-container">
                        <span>
                            <EmojiEmotionsRoundedIcon />
                        </span>
                        <span>
                            {/* When More Options are implemented
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        placement="bottomLeft"
                                        arrow
                                    >
                                        <KeyboardArrowDownRoundedIcon />
                                    </Dropdown> */}
                            <DeleteRoundedIcon />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
