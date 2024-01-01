import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const chatContext = createContext();

const ChatProvider = ({children})=>{
    const [user, setuser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      setuser(userInfo);

    //   if(!userInfo){
    //       navigate("/");
    //   }
    }, [navigate])
    

    return (
        <chatContext.Provider value={{user, setuser}} >
            {children}
        </chatContext.Provider>
    )
}

export const ChatState = () =>{
    return useContext(chatContext);
}

export default ChatProvider;