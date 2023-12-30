import React, { useState } from 'react'
import "./index.css"
import SideBar from '../../Components/SideBar'
import SideMenu from "../../Components/SideMenu"

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const containerStyle = {
    position: "relative",
    overflow: "hidden",
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () =>{
    setOpen(false);
  }
  return (
    <>
      <div className="main-container">
        <div className="sidebar border-end border-2" style={containerStyle} >
          <SideBar showDrawer={showDrawer} />
          <SideMenu open={open} onClose={onClose} />
        </div>
        <div className="message-box scroller-container">
          
        </div>
      </div>
    </>
  )
}
