import React, { useEffect, useState } from "react";
import "./index.css";
import ChatBox from "../../Sections/ChatBox";
import DrawerMenu from "../../Sections/DrawerMenu";
import MessageContainer from "../../Sections/MessageContainer";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../../Context/ChatProvider";
import { MessageFilled } from "@ant-design/icons";
import MailLockRoundedIcon from '@mui/icons-material/MailLockRounded';

function HomePage() {
  const [open, setOpen] = useState(false);
  const { user, selectedChat, setSelectedChat } = ChatState();
  const [selectedUsers, setselectedUsers] = useState([]);

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
            <DrawerMenu
              open={open}
              selectedUsers={selectedUsers}
              setselectedUsers={setselectedUsers}
              closeGroupChatCreater={closeGroupChatCreater}
            />
          </div>
          <div className="message-box scroller-container">
            {
              selectedChat ? 
              <MessageContainer />
              :
              <div className="message-container w-100 d-flex justify-content-center align-items-center flex-column fw-bold" style={{backgroundColor: "var(--primary-light)"}} >
                <h1 className="fw-bold" >Join <span style={{color: "var(--primary)"}} >Snap</span>Talk
                    <span>
                        <MessageFilled style={{color: "var(--primary)"}} className="logo-icon" />
                    </span> Today</h1>
                <p>
                <span  >
                  <MailLockRoundedIcon style={{fontSize: "1.2em"}}/>
                </span> Your Messages are safe with us.</p>
              </div>
            }
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
