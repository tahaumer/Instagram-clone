import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Reels from "./Pages/Reels";
import Profile from "./Pages/Profile";
import Messages from "./Pages/Messages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/reels" element={<Reels/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/messages" element={<Messages/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
