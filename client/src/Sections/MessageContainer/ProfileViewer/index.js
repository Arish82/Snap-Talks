import React, { useEffect, useState } from 'react'
import { Image } from 'antd';
import "./index.css";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { ChatState } from '../../../Context/ChatProvider';
import ChatCard from '../../Components/ChatCard';
import { getsender } from "../../Components/config/ChatLogic"
import { Dropdown } from 'antd';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import Modal from "../../Components/Modal/index"
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import axios from 'axios';

export default function ProfileViewer(props) {
    const { user, selectedChat, setSelectedChat } = ChatState();
    const sender = getsender(user, selectedChat.users);
    const [showModal, setShowModal] = useState(false);
    const [groupName, setgroupName] = useState("")
    const [clickEdit, setclickEdit] = useState(false)
    
    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const items = [
        {
            key: '1',
            label: <div>Make Group Admin</div>,
        },
        {
            key: '2',
            label: <div>Remove</div>,
        }
    ];
    const handleGroupNameChange= async(e)=>{
        e && e.preventDefault();
        if(!groupName) return;

        try{
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`
                }
            }
            const { data } = await axios.put("/api/chat/rename", { 
                chatId: selectedChat._id,
                chatName: groupName
             }, config);
             setSelectedChat(data);
             props.setfetchAgain(!props.fetchAgain)
        }catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <div onClick={props.handleButtonClick} className='closing' >
                <CloseRoundedIcon />
            </div>
            <div className={`${props.display} chat-description-container`}>
                <div className="image-preview">
                    <Image
                        style={{objectFit: "cover"}}
                        width={200}
                        height={200}
                        src={selectedChat.isGroupChat ? selectedChat.pic : sender.pic}
                    />
                </div>
                <div className="details">
                    <form onSubmit={handleGroupNameChange} className="chat-name">
                        {
                            selectedChat.isGroupChat?
                            <>
                                {
                                    clickEdit ?
                                    <>
                                        <input id="editGroupName" value={groupName} onChange={(e)=>{setgroupName(e.target.value)}} className="chat-name-text"/>
                                        <div onClick={()=> {
                                            setclickEdit(false);
                                            handleGroupNameChange();
                                        }} className="edit-btn">
                                            <DoneOutlineRoundedIcon  />
                                        </div>
                                    </>:
                                    <>
                                        {selectedChat.chatName}
                                        <label htmlFor='editGroupName' 
                                            className="edit-btn" 
                                            onClick={()=> {
                                                setclickEdit(true);
                                                setgroupName(selectedChat.chatName)
                                            }} >
                                            <EditRoundedIcon />
                                        </label>
                                    </>

                                }
                            </>
                            :
                            sender.name
                        }   	
                    </form>
                    <div className="email">
                        {selectedChat.isGroupChat ? `Group . ${selectedChat.users.length} members` : sender.email}
                    </div>
                </div>
            </div>
            {
                selectedChat.isGroupChat &&
                <>
                    <div className={`profile-container group-members scroller-container ${props.display}`}>
                        {
                            user._id === selectedChat.groupAdmin._id &&
                            <>
                                <div className="add-btn"
                                    onClick={toggleModal}
                                >
                                    <div className="profile-icon squircles">
                                        <PersonAddAlt1RoundedIcon />
                                    </div>
                                    <div className="profile-text">
                                        Add members
                                    </div>
                                </div>
                                <div>
                                </div>
                            </>
                        }
                        {
                            selectedChat.users.map((chat) => {

                                return (
                                    <ChatCard
                                        url={chat.pic}
                                        chatname={chat.name}
                                        latestMessage={chat.email}
                                        onClickFunc={() => console.log("Clicked")}
                                        content={
                                            <div className="btn-container">
                                                {
                                                    chat._id === selectedChat.groupAdmin._id &&
                                                    <div className='tag' >Group Admin</div>
                                                }
                                                {
                                                    user._id !== chat._id &&
                                                    <Dropdown menu={{ items }} placement="bottomRight" arrow>
                                                        <KeyboardArrowDownRoundedIcon />
                                                    </Dropdown>
                                                }
                                            </div>
                                        }
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={`exit-group ${props.display}`}>
                        <LogoutRoundedIcon /> Exit Group
                    </div>
                    {showModal && <Modal onClose={toggleModal} />}
                </>
            }
        </>
    )
}
