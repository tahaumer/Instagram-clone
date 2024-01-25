import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

//media
import dropdown from "../media/dropdown.svg";
import heartIcon from "../media/heart-solid.svg";
import commentIcon from "../media/comment-solid.svg";
import Footer from "../components/Footer";

const Explore = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <Layout>
      <div className="body pt-4">
        <div className="grid grid-cols-3 gap-1 mx-auto md:max-w-[800px] md:w-[75vw]">
          <div className="w-[full] h-[300px] bg-[#B4B4B4] hover:bg-[#1B1B1B] transitionCs flex justify-center items-center group">
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
              120
            </div>
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
              20
            </div>
          </div>
          <div className="w-[full] h-[300px] bg-[#2C2C2C] hover:bg-[#1B1B1B] flex justify-center items-center group">
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
              120
            </div>
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
              20
            </div>
          </div>
          <div className="w-[full] h-[300px] bg-[#B4B4B4] hover:bg-[#1B1B1B] flex justify-center items-center group">
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
              120
            </div>
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
              20
            </div>
          </div>
          <div className="w-[full] row-span-2 bg-[#333333] hover:bg-[#1B1B1B] flex justify-center items-center group">
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
              120
            </div>
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
              20
            </div>
          </div>
          <div className="w-[full] h-[300px] bg-[#383838] hover:bg-[#1B1B1B] flex justify-center items-center group">
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
              120
            </div>
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
              20
            </div>
          </div>
          <div className="w-[full] h-[300px] bg-[#9b9b9b] hover:bg-[#1B1B1B] flex justify-center items-center group">
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
              120
            </div>
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
              20
            </div>
          </div>
          <div className="w-[full] h-[300px] bg-[#B4B4B4] hover:bg-[#1B1B1B] flex justify-center items-center group">
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
              120
            </div>
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
              20
            </div>
          </div>
          <div className="w-[full] h-[300px] bg-[#2C2C2C] hover:bg-[#1B1B1B] flex justify-center items-center group">
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
              120
            </div>
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
              20
            </div>
          </div>
          <div className="w-[full] h-[300px] bg-[#9b9b9b] hover:bg-[#1B1B1B] flex justify-center items-center group">
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
              120
            </div>
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
              20
            </div>
          </div>
          <div className="w-[full] row-span-2 bg-[#383838] hover:bg-[#1B1B1B] flex justify-center items-center group">
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
              120
            </div>
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
              20
            </div>
          </div>
          <div className="w-[full] h-[300px] bg-[#B4B4B4] hover:bg-[#1B1B1B] flex justify-center items-center group">
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
              120
            </div>
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
              20
            </div>
          </div>
          <div className="w-[full] h-[300px] bg-[#2C2C2C] hover:bg-[#1B1B1B] flex justify-center items-center group">
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
              120
            </div>
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
              20
            </div>
          </div>
          <div className="w-[full] h-[300px] bg-[#2C2C2C] hover:bg-[#1B1B1B] flex justify-center items-center group">
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={heartIcon} alt="" />
              120
            </div>
            <div className="group-hover:flex hidden text-white mr-4">
              <img className=" w-[20px] mr-1" src={commentIcon} alt="" />
              20
            </div>
          </div>
        </div>
       <Footer/>
      </div>
    </Layout>
  );
};

export default Explore;
