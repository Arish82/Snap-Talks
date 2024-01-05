import React from 'react'
import { Image } from 'antd';
import "./index.css";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function ProfileViewer(props) {
  return (
    <>
        <div onClick={props.handleButtonClick} className='closing' >
            <CloseRoundedIcon />
        </div>
        <div className={`${props.display} chat-description-container`}>
            <div className="image-preview">
                <Image
                    width={200}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            </div>
            <div className="details">
                <div className="chat-name">
                    Md Arish
                    <EditRoundedIcon />
                </div>
                <div className="email">
                    arish123.ahamad@gmail.com
                </div>
            </div>
        </div>
    </>
  )
}
