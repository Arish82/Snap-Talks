import React, { useEffect, useState } from "react";
import "./index.css";
import ChatBox from "../../Sections/ChatBox";
import DrawerMenu from "../../Sections/DrawerMenu";
import MessageContainer from "../../Sections/MessageContainer";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../../Context/ChatProvider";
import { MessageFilled } from "@ant-design/icons";
import MailLockRoundedIcon from '@mui/icons-material/MailLockRounded';
import BlankContainer from "../../Sections/Components/BlankContainer";

function HomePage() {
  const [open, setOpen] = useState(false);
  const { user, selectedChat, setSelectedChat } = ChatState();
  const [selectedUsers, setselectedUsers] = useState([]);
  const [fetchAgain, setfetchAgain] = useState(false);
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
            <ChatBox showDrawer={showDrawer} fetchAgain={fetchAgain} />
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
                <MessageContainer fetchAgain={fetchAgain} setfetchAgain={setfetchAgain} />
                :
                <BlankContainer />
            }
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
