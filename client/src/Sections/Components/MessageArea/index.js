import React from 'react';
import "./index.css";
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import ProfileImage from '../UserAvatar';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Dropdown } from 'antd';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import AllChatSet from './AllChatSet';

const items = [
    {
        key: '1',
        label: (
            <div className='opt' >
                Edit
            </div>
        ),
    },
    {
        key: '2',
        label: (
            <div className='opt' >
                Pin
            </div>
        ),
    },
    {
        key: '3',
        label: (
            <div className='opt' >
                Delete
            </div>
        ),
    },
];
export default function MessageArea() {
    var url = "https://t4.ftcdn.net/jpg/06/45/98/67/360_F_645986787_Vi2gX4riQy9d147RrU3rYfapkEKxMw9Z.jpg";
    return (
        <>
            <div className="scrollable-div scroller-design">
                <div className="scrollable-content">
                    <AllChatSet sender="right" url={url} username={"User Name"} />
                    <AllChatSet sender="left" url={url} username={"User Name"} />
                    <AllChatSet sender="left" url={url} username={"User Name"} />
                    <AllChatSet sender="right" url={url} username={"User Name"} />
                </div>
            </div>
        </>
    )
}
