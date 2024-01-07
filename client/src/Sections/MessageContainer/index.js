import React, { useEffect, useState } from 'react'
import "./index.css"
import ProfileImage from '../Components/UserAvatar'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import AttachmentIcon from '@mui/icons-material/Attachment';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';
import { Popover } from 'antd';
import MessageArea from '../Components/MessageArea';
import ProfileViewer from './ProfileViewer';
import { ChatState } from '../../Context/ChatProvider';
import { getsender } from '../Components/config/ChatLogic';
import axios from 'axios';

const colors = [
    "#faafa8", "#d3bfdb", "#fff8b8", "#efeff1", "#f6e2dd"
];
const content = (
    <div className='color-container'>
        {
            colors.map((e, key) => 
            <div 
                key={key} 
                className='color-box squircles' 
                style={{ backgroundColor: e }} 
            >
            </div>)
        }
    </div>
);

export default function MessageContainer({fetchAgain, setfetchAgain}) {
    const {user, selectedChat, openMessage} = ChatState();
    const [message, setmessage] = useState("")
    const [allMessages, setallMessages] = useState([]);
    const [box1Width, setBox1Width] = useState("100%");
    const [box2Width, setBox2Width] = useState("0%");
    const handleButtonClick = () => {
        setBox1Width(box1Width === "66%" ? "100%" : "66%");
        setBox2Width(box2Width === "0%" ? "33%" : "0%");
    };
    const handleSendMessage= async(e)=>{
        try{
            const config={
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`
                }
            };

            setmessage("");
            const {data} = await axios.post("/api/message",{
                content: message,
                chatId: selectedChat._id
            }, config);
            setallMessages([...allMessages,data]);
            setfetchAgain(!fetchAgain)
            // console.log(data);
        }catch(err){
            console.log(err);
            openMessage("error-message","error","Message not sent!");
        }
    }
    const fetchMessages = async()=>{

        if(!selectedChat) return;

        try{
            const config={
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`
                }
            };

            const {data} = await axios.get(`/api/message/${selectedChat._id}`,config);
            setallMessages(data);
            // console.log(data);
        }
        catch(err){
            console.log(err);
            openMessage("key","error","Failed to fetch messages");
        }
    }
    useEffect(() => {
      fetchMessages();
    }, [selectedChat])
    
    const handletyping = (e) => {
        if(e.target.value!=="\n")
            setmessage(e.target.value)
    }
    const props = {
        chatName: "User Name",
        status: "online"
    }
    
    return (
        <>
            <div className="message-container" style={{ width: `${box1Width}` }} >
                <div className="chat-header ">
                    <div onClick={handleButtonClick} className="details d-flex align-items-center">
                        <ProfileImage style={{ height: "3.6em", width: "3.6em" }} src={selectedChat.isGroupChat?selectedChat.pic:getsender(user,selectedChat.users).pic} />
                        <div className="chat-details">
                            <div className='chat-name'>
                                {selectedChat.isGroupChat?selectedChat.chatName:getsender(user,selectedChat.users).name}
                            </div>
                            <div className="status">
                                {props.status}
                            </div>
                        </div>
                    </div>
                    <div className="options">
                        <div className="dots squircles">
                            <MoreVertRoundedIcon />
                        </div>
                    </div>
                </div>

                <div className="chat-body">
                    <MessageArea allMessages={allMessages} />
                </div>
                <div className="chat-footer ">
                    <div className="chat-icons">
                        <div className="attach-icon squircles">
                            <AttachmentIcon />
                        </div>
                    </div>
                    <textarea onKeyDown={(e)=> {
                        if(e.nativeEvent.key==="Enter" && !e.nativeEvent.shiftKey)
                            handleSendMessage();
                    }} 
                    value={message} 
                    onChange={handletyping} 
                    className='message-input' rows="1" type="text" placeholder="Type your message..." />
                    <div className="chat-icons">
                        <div className="color-icon squircles">
                            <Popover style={{ backgroundColor: "transparent" }} content={content} title="" trigger="click" >
                                <PaletteRoundedIcon />
                            </Popover>
                        </div>
                        {
                            message.length === 0 ?
                            <div className="send-icon squircles">
                                <MicRoundedIcon />
                            </div>:
                            <div className="send-icon squircles" onClick={handleSendMessage}>
                                <SendRoundedIcon/>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="border-start details-profile-container" style={{ width: `${box2Width}` }}>
                <ProfileViewer fetchAgain={fetchAgain} setfetchAgain={setfetchAgain} handleButtonClick={handleButtonClick} display={box1Width === "100%" ? "" : "show"} />
            </div>
        </>
    )
}
