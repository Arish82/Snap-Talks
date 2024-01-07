import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from 'antd';
const chatContext = createContext();

const ChatProvider = ({children})=>{
    const [user, setuser] = useState(null);
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState()
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const openMessage = (key,type,content, duration,className,style) => {
        messageApi.open({
          key,
          type: type,
          content: content,
          duration,
          className,
          style
        });
      };
    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      setuser(userInfo);

    //   if(!userInfo){
    //       navigate("/");
    //   }
    }, [navigate])
    

    return (
        <chatContext.Provider value={{user, setuser, chats, setChats, selectedChat, setSelectedChat, contextHolder, openMessage}} >
            {children}
        </chatContext.Provider>
    )
}

export const ChatState = () =>{
    return useContext(chatContext);
}

export default ChatProvider;