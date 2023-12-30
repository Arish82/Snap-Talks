import React from 'react'
import "./index.css"
import Header from '../Header';
import MessageCard from "../MessageCard/index"
import SearchBar from '../SearchBar';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import DropDownMenu from "../DropDownMenu"

export default function SideBar(props) {
    var url = "https://t4.ftcdn.net/jpg/06/45/98/67/360_F_645986787_Vi2gX4riQy9d147RrU3rYfapkEKxMw9Z.jpg";
    return (
        <>
            <Header url={url} />
            <div className="search-bar border-bottom border-1">
                <SearchBar
                    style={{
                        width: "75%"
                    }}
                    id= "serach"
                    />
                <FilterListRoundedIcon />
                <DropDownMenu showDrawer={props.showDrawer} />
            </div>
            <div className="profile-container scroller-container"  >
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
            </div>

        </>
    )
}
