import React, { useState } from 'react';
import './index.css';
import ChatCard from '../ChatCard';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import SearchBar from '../SearchBar';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import UserAvatar from '../UserAvatar';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import UploadImage from '../UploadImage/UploadImage';
import EmojiInput from './EmojiInput';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';

function DrawerMenu(props) {
    var url = "https://t4.ftcdn.net/jpg/06/45/98/67/360_F_645986787_Vi2gX4riQy9d147RrU3rYfapkEKxMw9Z.jpg";
    const [groupName, setgroupName] = useState(false);
    const nextStephandler= ()=>{
        setgroupName(true);
    }
    return (
        <>
            <div className={`drawer ${props.open ? 'open' : ''}`}>
            <div className="groupchat-creater-header border-bottom">
                <ArrowBackIosRoundedIcon style={{ cursor: "pointer" }} onClick={props.onClose} />
                <div className="groupchat-creater-text">
                    Create a Group Chat
                </div>
            </div>
            {
                !groupName &&
                <div className="groupchat-creater-body">
                    <div className="gc-search-bar"  >
                        <div className="members-list">
                            <div className="member">
                                <UserAvatar src={url} width={"1.8em"} height={"1.8em"}/> 
                                User Name 
                                <ClearRoundedIcon />
                            </div>
                            <div className="member">
                                <UserAvatar src={url} width={"1.8em"} height={"1.8em"}/> 
                                User Name 
                                <ClearRoundedIcon />
                            </div>
                            <div className="member">
                                <UserAvatar src={url} width={"1.8em"} height={"1.8em"}/> 
                                User Name 
                                <ClearRoundedIcon />
                            </div>
                        </div>
                        <SearchBar id="user-search" style={{ width: "90%" }} />
                    </div>
                    <div className="groupchat-creater-profile-container scroller-container">
                        <ChatCard style={{ height: "20%" }} url={url} latestMessage="Hey, here I'm using SnapTalk" chatname="User Name" />
                        <ChatCard style={{ height: "20%" }} url={url} latestMessage="Hey, here I'm using SnapTalk" chatname="User Name" />
                        <ChatCard style={{ height: "20%" }} url={url} latestMessage="Hey, here I'm using SnapTalk" chatname="User Name" />
                        <ChatCard style={{ height: "20%" }} url={url} latestMessage="Hey, here I'm using SnapTalk" chatname="User Name" />
                        <ChatCard style={{ height: "20%" }} url={url} latestMessage="Hey, here I'm using SnapTalk" chatname="User Name" />
                        <ChatCard style={{ height: "20%" }} url={url} latestMessage="Hey, here I'm using SnapTalk" chatname="User Name" />
                        <ChatCard style={{ height: "20%" }} url={url} latestMessage="Hey, here I'm using SnapTalk" chatname="User Name" />
                        <ChatCard style={{ height: "20%" }} url={url} latestMessage="Hey, here I'm using SnapTalk" chatname="User Name" />
                        <ChatCard style={{ height: "20%" }} url={url} latestMessage="Hey, here I'm using SnapTalk" chatname="User Name" />
                        <ChatCard style={{ height: "20%" }} url={url} latestMessage="Hey, here I'm using SnapTalk" chatname="User Name" />
                        <ChatCard style={{ height: "20%" }} url={url} latestMessage="Hey, here I'm using SnapTalk" chatname="User Name" />
                        <ChatCard style={{ height: "20%" }} url={url} latestMessage="Hey, here I'm using SnapTalk" chatname="User Name" />
                    </div>
                </div>
            }
            {
                groupName &&
                <>
                    <div className="groupchat-creater-body upload-box">
                        <UploadImage />
                        <EmojiInput />
                    </div>
                </>
            }


            <div className="groupchat-creater-footer d-flex border-top justify-content-center align-items-center">
                <div className='squircles' >
                    {
                        !groupName && <ArrowForwardRoundedIcon onClick={nextStephandler} />
                    }
                    {
                        groupName && <DoneOutlineRoundedIcon />
                    }
                </div>
            </div>

            </div>
        </>
    );
}

export default DrawerMenu;
