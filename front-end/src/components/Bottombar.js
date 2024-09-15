import React from "react";
import homeIcon from "../media/Home.svg";
import exploreIcon from "../media/Explore.svg";
import reelsIcon from "../media/Reels.svg";
import createIcon from "../media/create.svg";
import messageIcon from "../media/Messenger.svg";
import profileImage from "../media/profileImage.jpg";
import { NavLink } from "react-router-dom";

const Bottombar = () => {
  return (
    <div className="bg-black text-white w-full py-4 border-t border-[#262626] fixed bottom-0 md:hidden z-50">
      <div className="w-full flex justify-evenly">
       <NavLink to="/"> <img src={homeIcon} alt="" /></NavLink>
       <NavLink to="/explore"> <img src={exploreIcon} alt="" /></NavLink>
       <NavLink to="/reels"> <img src={reelsIcon} alt="" /></NavLink>
       <NavLink to="#"> <img src={createIcon} alt="" /></NavLink>
       <NavLink to="/messages"> <img src={messageIcon} alt="" /></NavLink>
       <NavLink to="/profile"> 
            <div className='rounded-full overflow-hidden w-[25px]'>
                <img className='group-hover:scale-105' src={profileImage} alt="" />
            </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Bottombar;
