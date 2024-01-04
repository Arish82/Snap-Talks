import React, { useEffect, useState } from 'react'
import "./index.css"
import { ChatState } from '../../Context/ChatProvider';
import { getsender } from '../config/ChatLogic';
import ChatCard from '../ChatCard';
import axios from 'axios';

export default function MyChat(props) {
    const { user, chats, setChats, selectedChat, setSelectedChat } = ChatState();
    const [userlogged, setuserlogged] = useState();

    const handleCreateChat = async (userId) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`
                }
            }
            const { data } = await axios.post("/api/chat", { userId }, config);

            if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);

            setSelectedChat(data);
            props.handleCloseSearch();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    const fetchChats = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
            const { data } = await axios.get("/api/chat", config);
            setChats(data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        setuserlogged(JSON.parse(localStorage.getItem("user")));
        fetchChats();
    }, []);

    return (
        <>
            <div className="profile-container scroller-container">
                {
                    props.searchTime &&
                    props.searchResult.map((member, key) => {
                        return (
                            <ChatCard
                                key={member._id}
                                _id={member._id}
                                onClickFunc={handleCreateChat}
                                member={member}
                                chatname={member.name}
                                url={member.pic}
                                latestMessage={member.email}
                                bio={"Hey, here I'm using SnapTalk!🙂"}
                            />
                        )
                    })
                }
                {
                    (!props.searchTime) &&
                    chats.map((chat) => {
                        const sender = getsender(userlogged, chat.users);
                        console.log(userlogged);
                        return (
                            <ChatCard
                                active={chat === selectedChat ? `active-holder` : ""}
                                onClickFunc={() => setSelectedChat(chat)}
                                chatname={chat.chatName === "sender" ? sender.name : chat.chatName}
                                timestamp={"12:34 PM"}
                                url={sender.pic}
                                latestMessage={"Small message regarding the user..."}
                                unread={0}
                                typing={false}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
