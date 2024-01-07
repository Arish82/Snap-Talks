import React, {useState} from 'react'
import { Image } from 'antd';
import "./index.css";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { ChatState } from '../../../Context/ChatProvider';
import ChatCard from '../../Components/ChatCard';
import { getsender } from "../../Components/config/ChatLogic"
import { Dropdown } from 'antd';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import { Avatar } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
// import { Button, Modal } from 'antd';
import Modal from "../../Components/Modal/index"

export default function ProfileViewer(props) {
    const { user, selectedChat } = ChatState();
    const sender = getsender(user, selectedChat.users);
    const [modal2Open, setModal2Open] = useState(false);

    const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

    const items = [
        {
            key: '1',
            label: <div>Make Group Admin</div>,
        },
        {
            key: '2',
            label: <div>Remove</div>,
        }
    ];
    return (
        <>
            <div onClick={props.handleButtonClick} className='closing' >
                <CloseRoundedIcon />
            </div>
            <div className={`${props.display} chat-description-container`}>
                <div className="image-preview">
                    <Image
                        style={{
                            // width: "100%",
                            objectFit: "cover",
                            // border: "2px solid red"
                        }}
                        width={200}
                        height={200}
                        src={selectedChat.isGroupChat ? selectedChat.pic : sender.pic}
                    // src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </div>
                <div className="details">
                    <div className="chat-name">
                        {/* Md Arish */}
                        {selectedChat.isGroupChat ? selectedChat.chatName : sender.name}
                        <EditRoundedIcon />
                    </div>
                    <div className="email">
                        {selectedChat.isGroupChat ? `Group . ${selectedChat.users.length} members` : sender.email}
                        {/* arish123.ahamad@gmail.com */}
                    </div>
                </div>
            </div>
            {
                selectedChat.isGroupChat &&
                <>
                    <div className={`profile-container group-members scroller-container ${props.display}`}>
                        {
                            user._id === selectedChat.groupAdmin._id &&
                            <>
                                <div className="add-btn" 
                                    onClick={toggleModal}
                                    // onClick={() => setModal2Open(true)} 
                                >
                                    <div className="profile-icon squircles">
                                        <PersonAddAlt1RoundedIcon />
                                        {/* <Avatar  icon={<PersonAddAlt1RoundedIcon/>} /> */}
                                    </div>
                                    <div className="profile-text">
                                        Add members
                                    </div>
                                </div>
                                <div>
                                {/* <button onClick={toggleModal}>Open Modal</button> */}
                                
                                </div>
                                {/* <Modal
                                    title="Add members in Group"
                                    centered
                                    open={modal2Open}
                                    onOk={() => setModal2Open(false)}
                                    onCancel={() => setModal2Open(false)}
                                >
                                    <p>some contents...</p>
                                    <p>some contents...</p>
                                    <p>some contents...</p>
                                </Modal> */}
                            </>
                        }
                        {
                            selectedChat.users.map((chat) => {

                                return (
                                    <ChatCard
                                        url={chat.pic}
                                        chatname={chat.name}
                                        latestMessage={chat.email}
                                        onClickFunc={() => console.log("Clicked")}
                                        content={
                                            <div className="btn-container">
                                                {
                                                    chat._id === selectedChat.groupAdmin._id &&
                                                    <div className='tag' >Group Admin</div>
                                                }
                                                {
                                                    user._id !== chat._id &&
                                                    <Dropdown menu={{ items }} placement="bottomRight" arrow>
                                                        <KeyboardArrowDownRoundedIcon />
                                                    </Dropdown>
                                                }
                                            </div>
                                        }
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={`exit-group ${props.display}`}>
                        <LogoutRoundedIcon /> Exit Group
                    </div>
                    {showModal && <Modal onClose={toggleModal} />}
                </>
            }
        </>
    )
}
