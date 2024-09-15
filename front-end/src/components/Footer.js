import React, { useState, useEffect } from "react";
import dropdown from "../media/dropdown.svg";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    useEffect(() => {
      setCurrentYear(new Date().getFullYear());
    }, []);
  return (
    <>
    <ul className="flex flex-wrap items-center justify-center capitalize text-[#A8AEA3] space-x-3 text-[13px] mb-3 w-fit mx-auto cursor-pointer">
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
    </>
  )
}

export default Footer