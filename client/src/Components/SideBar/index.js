import React, { useState } from 'react'
import "./index.css"
import Header from '../Header';
import MessageCard from "../MessageCard/index"
import SearchBar from '../SearchBar';
import DropDownMenu from "../DropDownMenu"
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import { ChatState } from '../../Context/ChatProvider';
import axios from 'axios';

export default function SideBar(props) {
    const { user } = ChatState();
    const [searchUser, setSearchUser] = useState("");
    const [searchResult, setsearchResult] = useState([]);
    const [loading, setloading] = useState(false);
    const [searchTime, setsearchTime] = useState(false);
    const [chats, setchats] = useState([])
    var url = "https://t4.ftcdn.net/jpg/06/45/98/67/360_F_645986787_Vi2gX4riQy9d147RrU3rYfapkEKxMw9Z.jpg";

    const handleUserSearch = async (param) => {
        // if(!searchUser) return;
        setsearchTime(true);
        setloading(true);
        try {
            const { data } = await axios.get(`/api/user?search=${param}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
            console.log(data);
            setloading(false);
            setsearchResult(data);
        } catch (err) {
            console.log(err);
        }
    }
    const handleCloseSearch = () => {
        setsearchTime(false);
        setSearchUser("");
        setsearchResult([]);
    }
    const handleCreateChat = () =>{

    }
    return (
        <>
            <Header url={user && user.pic} />
            <div className="search-bar border-bottom border-1">
                <SearchBar
                    searchUser={searchUser}
                    setSearchUser={setSearchUser}
                    handleUserSearch={handleUserSearch}
                    handleCloseSearch={handleCloseSearch}
                    show={searchTime}
                    style={{
                        width: "75%"
                    }}
                    id="serach"
                />
                <FilterListRoundedIcon />
                <DropDownMenu showDrawer={props.showDrawer} />
            </div>

            {/* Implement Segmented for ease tab switch */}
            <div className="profile-container scroller-container">
                {
                    (searchTime) &&
                    (searchResult.map((member, key) => {
                        console.log(member);
                        return (
                            <MessageCard
                                key={member._id}
                                onClick={handleCreateChat}
                                chatname={member.name}
                                url={member.pic}
                                latestMessage={member.email}
                                latestMessages={"Hey, here I'm using SnapTalk!🙂"}
                            />
                        )
                    }))
                }
                {
                    (!searchTime) &&
                    <>
                        <MessageCard chatname={"User Name"} timestamp={"12:34 PM"} url={url} latestMessage={"Small message regarding the user..."} unread={3} typing />
                        <MessageCard chatname={"User Name"} timestamp={"12:34 PM"} url={url} latestMessage={"Small message regarding the user..."} unread={4} />
                        <MessageCard active="active-holder" chatname={"User Name"} timestamp={"12:34 PM"} url={url} latestMessage={"Small message regarding the user..."} unread={0} typing />
                        <MessageCard chatname={"User Name"} timestamp={"12:34 PM"} url={url} latestMessage={"Small message regarding the user..."} unread={1} typing />
                        <MessageCard chatname={"User Name"} timestamp={"12:34 PM"} url={url} latestMessage={"Small message regarding the user..."} unread={3} />
                        <MessageCard chatname={"User Name"} timestamp={"12:34 PM"} url={url} latestMessage={"Small message regarding the user..."} unread={9} typing />
                        <MessageCard chatname={"User Name"} timestamp={"12:34 PM"} url={url} latestMessage={"Small message regarding the user..."} unread={1} typing />
                        <MessageCard chatname={"User Name"} timestamp={"12:34 PM"} url={url} latestMessage={"Small message regarding the user..."} unread={3} typing />
                        <MessageCard chatname={"User Name"} timestamp={"12:34 PM"} url={url} latestMessage={"Small message regarding the user..."} unread={3} typing />
                        <MessageCard chatname={"User Name"} timestamp={"12:34 PM"} url={url} latestMessage={"Small message regarding the user..."} unread={3} typing />
                        <MessageCard chatname={"User Name"} timestamp={"12:34 PM"} url={url} latestMessage={"Small message regarding the user..."} unread={3} typing />
                    </>
                }
            </div>

        </>
    )
}
