import React from 'react'
import "./index.css"
import SideBar from '../../Components/SideBar'

export default function HomePage() {
  
  return (
    <>
      <div className="main-container">
        <div className="sidebar border-end border-2">
          <SideBar />
        </div>
        <div className="message-box">

        </div>
      </div>
    </>
  )
}
