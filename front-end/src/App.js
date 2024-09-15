import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Reels from "./Pages/Reels";
import Profile from "./Pages/Profile";
import ProfileEdit from "./Pages/ProfileEdit";
import Messages from "./Pages/Messages";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="/explore" element={<ProtectedRoute><Explore/></ProtectedRoute>}/>
          <Route path="/reels" element={<ProtectedRoute><Reels/></ProtectedRoute>}/>
          <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
          <Route path="/profile/edit" element={<ProtectedRoute><ProfileEdit/></ProtectedRoute>}/>
          <Route path="/messages" element={<ProtectedRoute><Messages/></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
