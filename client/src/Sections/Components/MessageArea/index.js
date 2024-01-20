import React from 'react';
import "./index.css";
import AllChatSet from './AllChatSet';
import { groupConsecutive } from '../config/ChatLogic';
import { ChatState } from '../../../Context/ChatProvider';

export default function MessageArea({allMessages}) {
    const {user} = ChatState();
    groupConsecutive(allMessages)
    return ( 
        <>
            <div className="scrollable-div scroller-design">
                <div className="scrollable-content">
                    {
                        allMessages && groupConsecutive(allMessages).map((setMessage)=>{
                            return(
                                <AllChatSet setMessage={setMessage} sender={user._id===setMessage[0].sender._id?"right": "left"} url={setMessage[0].sender.pic} username={setMessage[0].sender.name} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
