import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

//media
import dropdown from "../media/dropdown.svg";
import heartIcon from "../media/heart-solid.svg";
import commentIcon from "../media/comment-solid.svg";

const Explore = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <Layout>
      <div className="body pt-4">
        <div className="grid grid-cols-3 gap-1 mx-auto w-[65vw]">
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
        <ul className="flex capitalize text-[#A8AEA3] space-x-3 text-[13px] mt-10 mb-3 w-fit mx-auto cursor-pointer">
          <li>meta</li>
          <li>about</li>
          <li>blog</li>
          <li>jobs</li>
          <li>help</li>
          <li>API</li>
          <li>privacy</li>
          <li>terms</li>
          <li>locations</li>
          <li>instagram lite</li>
          <li>threads</li>
          <li>contact uploading & non-Users</li>
          <li>meta verified</li>
        </ul>
        <ul className="text-[13px] w-fit mx-auto flex space-x-5 mb-10">
          <li className="text-[#A8AEA3] flex">
            English <img className="w-[15px]" src={dropdown} alt="" />
          </li>
          <li className="text-[#A8AEA3]">
            &copy; {currentYear} Instagram From{" "}
            <span className="line-through text-[#6d6f6c]"> Meta</span> Taha
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Explore;
