import React from 'react'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Dropdown } from 'antd';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import "./index.css";
import EachMessageBoxContainer from '../EachMessageBoxContainer';

export default function AllChatSet(props) {
    return (
        <>
            <div className={`${props.sender}-chats all-chats-set`}>
                <div className="user-pic">
                    <div>
                        <img className='' src={props.url} alt="" srcset="" />
                    </div>
                </div>
                <div className="message-content">
                    <div className="user-details">
                        <div className="user-name">{props.username}</div>
                    </div>
                    <EachMessageBoxContainer message={"This is Arish from IIIT Bhopal"} time={"2:47 am"} />
                    <EachMessageBoxContainer message={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti accusantium harum dolorum, quas odit consequatur ipsum nisi doloribus placeat ea, tenetur laboriosam illum magnam expedita ratione! Rem, fugit maxime?"} time={"2:47 am"} />
                    <EachMessageBoxContainer message={"Are you serious?"} time={"2:47 am"} />
                    <EachMessageBoxContainer message={"Hi, Arish this side!"} time={"2:47 am"} />
                </div>
            </div>
        </>
    )
}

                    // <div className="each-message-box-container">
                    //     <div className="each-message-box first-message">
                    //         <p>
                    //             This is Arish from IIIT Bhopal
                    //         </p>
                    //         <div className="message-likes-time">
                    //             <div className="likes">
                    //                 ❤️
                    //             </div>
                    //             <div className="time">
                    //                 <span>
                    //                     2:47 am
                    //                 </span>
                    //                 <span className='seen-icons' >
                    //                     {/* <DoneRoundedIcon /> */}
                    //                     <DoneAllRoundedIcon />
                    //                 </span>
                    //             </div>
                    //         </div>
                    //         <div className="menu-container">
                    //             <span>
                    //                 <EmojiEmotionsRoundedIcon />
                    //             </span>
                    //             <span>
                    //                 {/* When More Options are implemented
                    //                 <Dropdown
                    //                     menu={{
                    //                         items,
                    //                     }}
                    //                     placement="bottomLeft"
                    //                     arrow
                    //                 >
                    //                     <KeyboardArrowDownRoundedIcon />
                    //                 </Dropdown> */}
                    //                 <DeleteRoundedIcon />
                    //             </span>
                    //         </div>
                    //     </div>
                    // </div>
                    // <div className="each-message-box-container">
                    //     <div className="each-message-box" >
                    //         <p>
                                
                    //         </p>
                    //         <div className="message-likes-time">
                    //             <div className="likes">
                    //                 😂
                    //             </div>
                    //             <div className="time">
                    //                 <span>
                    //                     2:47 am
                    //                 </span>
                    //                 <span className='seen-icons' >
                    //                     {/* <DoneRoundedIcon /> */}
                    //                     <DoneAllRoundedIcon />
                    //                 </span>
                    //             </div>
                    //         </div>
                    //         <div className="menu-container">
                    //             <span>
                    //                 <EmojiEmotionsRoundedIcon />
                    //             </span>
                    //             <span>
                    //                 <DeleteRoundedIcon />
                    //             </span>
                    //         </div>
                    //     </div>
                    // </div>
                    // <div className="each-message-box-container">
                    //     <div className="each-message-box" >
                    //         <p>
                    //             Hi
                    //         </p>
                    //         <div className="message-likes-time">
                    //             <div className="likes">
                    //                 ✌️
                    //             </div>
                    //             <div className="time">
                    //                 <span>
                    //                     2:47 am
                    //                 </span>
                    //                 <span className='seen-icons' >
                    //                     {/* <DoneRoundedIcon /> */}
                    //                     <DoneAllRoundedIcon />
                    //                 </span>
                    //             </div>
                    //         </div>
                    //         <div className="menu-container">
                    //             <span>
                    //                 <EmojiEmotionsRoundedIcon />
                    //             </span>
                    //             <span>
                    //                 <DeleteRoundedIcon />
                    //             </span>
                    //         </div>
                    //     </div>
                    // </div>