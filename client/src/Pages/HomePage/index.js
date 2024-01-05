import React, { useEffect, useState } from "react";
import "./index.css";
import ChatBox from "../../Sections/ChatBox";
import DrawerMenu from "../../Sections/DrawerMenu";
import MessageContainer from "../../Sections/MessageContainer";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../../Context/ChatProvider";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const { user } = ChatState();
  const [selectedUsers, setselectedUsers] = useState([])

  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (!userInfo) {
      navigate("/");
    }
  }, []);

  const containerStyle = {
    position: "relative",
    overflow: "hidden",
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const closeGroupChatCreater = () => {
    setselectedUsers([]);
    setOpen(false);
  };
  return (
    <>
      {user && (
        <div className="main-container">
          <div className="sidebar border-end border-2" style={containerStyle}>
            <ChatBox showDrawer={showDrawer} />
            <DrawerMenu open={open} selectedUsers={selectedUsers} setselectedUsers={setselectedUsers} closeGroupChatCreater={closeGroupChatCreater} />
          </div>
          <div className="message-box scroller-container">
            <MessageContainer />
          </div>
        </div>
      )}
    </>
  );
}
