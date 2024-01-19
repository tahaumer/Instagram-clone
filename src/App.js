import React from "react";
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom"
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
