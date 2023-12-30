import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignUp';

export default function App() {

  return (
    <>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/chats" element={<ChatPage />} />
        <Route  path="/login" element={<LoginPage />} />
        <Route  path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}
