import React, { useState } from 'react'
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
    const [box1Width, setBox1Width] = useState("100%");
    const [box2Width, setBox2Width] = useState("0%");
    const handleButtonClick = () => {
        setBox1Width(box1Width === "66%" ? "100%" : "66%");
        setBox2Width(box2Width === "0%" ? "33%" : "0%");
    };

    const [message, setmessage] = useState("")
    const props = {
        chatName: "User Name",
        status: "online"
    }
    var url = "https://t4.ftcdn.net/jpg/06/45/98/67/360_F_645986787_Vi2gX4riQy9d147RrU3rYfapkEKxMw9Z.jpg";
    return (
        <>
            <div className="message-container" style={{ width: `${box1Width}` }} >
                <div className="chat-header ">
                    <div onClick={handleButtonClick} className="details d-flex align-items-center">
                        <ProfileImage style={{ height: "3.6em", width: "3.6em" }} src={url} />
                        <div className="chat-details">
                            <div className='chat-name'>
                                {props.chatName}
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
                    <MessageArea />
                </div>
                <div className="chat-footer ">
                    <div className="chat-icons">
                        <div className="attach-icon squircles">
                            <AttachmentIcon />
                        </div>
                    </div>
                    <textarea value={message} onChange={(e) => setmessage(e.target.value)} className='message-input' rows="1" type="text" placeholder="Type your message..." />
                    <div className="chat-icons">
                        <div className="color-icon squircles">
                            <Popover style={{ backgroundColor: "transparent" }} content={content} title="" trigger="click" >
                                <PaletteRoundedIcon />
                            </Popover>
                        </div>
                        <div className="send-icon squircles">
                            {
                                message.length === 0 ? <MicRoundedIcon /> : <SendRoundedIcon />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-start details-profile-container" style={{ width: `${box2Width}` }}>
                <ProfileViewer fetchAgain={fetchAgain} setfetchAgain={setfetchAgain} handleButtonClick={handleButtonClick} display={box1Width === "100%" ? "" : "show"} />
            </div>
        </>
    )
}
