import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import PostsSection from "../components/Posts";
import SavedSection from "../components/Saved"

import user from "../media/user.jpg";
import {SettingIcon,SavedSmallIcon,PostIcon,PlusIcon,TagIcon} from '../media/svg'


const Profile = () => {
  const [activeSection, setActiveSection] = useState("posts");

  return (
    <Layout>
      <div className="body text-black dark:text-white">
        <div className="flex mx-auto w-[100vw] lg:w-[65vw] mt-4 md:mt-16 ">
          <div className="flex mx-2">
            <div className="rounded-full overflow-hidden md:w-[150px] w-[90px] h-[90px] md:h-[150px] md:mr-10 mr-6 lg:mx-24 dark:border-[#363636] border-[#d4d4d4] border-[3px]">
              <img className="rounded-full w-full h-full object-cover object-center border-white dark:border-black border-4" src={user} alt="" />
            </div>
            <div>
              <div className="flex flex-col md:flex-row gap-2">
                <h2 className=" mb-4 text-xl">_taha_umer_</h2>
                <div className="flex">
                  <button className="dark:bg-[#363636] bg-[#EFEFEF] hover:bg-[#DBDBDB] dark:hover:bg-[#262626] md:ml-4 w-[120px] rounded-lg text-sm h-[32px] font-semibold tracking-wide">
                    Edit Profile
                  </button>
                  <button className="dark:bg-[#363636] bg-[#EFEFEF] hover:bg-[#DBDBDB] dark:hover:bg-[#262626] ml-4 w-[120px] rounded-lg text-sm h-[32px] font-semibold tracking-wide">
                    View archive
                  </button>
                </div>
                <SettingIcon/> 
              </div>
              <div className="md:flex gap-10 hidden">
                <p>154 posts</p>
                <p>177 followers</p>
                <p>219 following</p>
              </div>
              <div className="text-sm mt-5 md:ml-0 -ml-[110px]">
                <p>طحہ عمر</p>
                <p>27•sep🎂</p>
                <p>🇸🇦＝❤</p>
                <p>Faisalabadi🤞🏻</p>
                <p>اللْہ جو کرتا ہّے بّھتر کرتا ہّے۔</p>
              </div>
            </div>
            </div>
        </div>
        <div className="flex md:gap-10 gap-2 mx-2 md:mx-auto w-[65vw] my-5 md:my-14">
          <div className=" lg:ml-24 cursor-pointer">
            <div className="rounded-full overflow-hidden w-[60px] md:w-[80px] border-1 border-[#d4d4d4]">
              <img
                className="border-[3px] dark:white dark:border-black rounded-full"
                src={user}
                alt=""
              />
            </div>
            <p className="text-center mt-3 text-[12px] font-semibold">
              Story 1
            </p>
          </div>
          <div className=" cursor-pointer">
            <div className="rounded-full overflow-hidden w-[60px] md:w-[80px] border-1 border-[#d4d4d4]">
              <img
                className="border-[3px] dark:white dark:border-black rounded-full"
                src={user}
                alt=""
              />
            </div>
            <p className="text-center mt-1 md:mt-3 text-[12px] font-semibold">
              Story 2
            </p>
          </div>
          <div className=" cursor-pointer">
            <div className="rounded-full overflow-hidden w-[60px] md:w-[80px] dark:bg-[#121212] bg-[#FAFAFA] flex justify-center border-1 border-[#d4d4d4]">
              <div className="border-[3px] dark:white dark:border-black rounded-full p-4 ">
              <PlusIcon/>
              </div>
            </div>
            <p className="text-center mt-3 text-[12px] font-semibold">New</p>
          </div>
        </div>
        <div className="w-[65vw] mx-auto border-t dark:border-[#262626] border-[#DBDBDB]">
          <div className=" space-x-20 flex justify-center">
            <button
              className={`flex items-center gap-2 py-3 text-[13px] tracking-[1px] font-semibold ${
                activeSection === "posts"
                  ? " border-t dark:border-white border-black"
                  : "text-[#A8A8A8]"
              }`}
              onClick={() => setActiveSection("posts")}
            >
                <PostIcon/> POST
            </button>
            <button
              className={`flex items-center gap-2 py-3 text-[13px] tracking-[1px] font-semibold ${
                activeSection === "saved"
                  ? " border-t dark:border-white border-black"
                  : "text-[#A8A8A8]"
              }`}
              onClick={() => setActiveSection("saved")}
            >
              <SavedSmallIcon/> SAVED
            </button>
            <button
              className={`flex items-center gap-2 py-3 text-[13px] tracking-[1px] font-semibold ${
                activeSection === "tagged"
                  ? " border-t dark:border-white border-black"
                  : "text-[#A8A8A8]"
              }`}
              onClick={() => setActiveSection("tagged")}
            >
             <TagIcon/> TAGGED
            </button>
          </div>
        </div>
        {activeSection === "posts" && <PostsSection />}
        {activeSection === "saved" && <SavedSection />}
        {activeSection === "tagged" && <PostsSection />}
      </div>
    </Layout>
  );
};

export default Profile;