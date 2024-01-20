import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Reels from "./Pages/Reels";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/reels" element={<Reels/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
