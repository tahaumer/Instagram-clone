import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import PostsSection from "../components/Posts";
import SavedSection from "../components/Saved"
import settingIcon from "../media/Settings-1.svg";
import plusIcon from "../media/Plus icon.svg";
import user from "../media/user.jpg";
import postsIcon from "../media/posts.svg";
import saveIcon from '../media/Save.svg'
import tagIcon from '../media/tag.svg'

const Profile = () => {
  const [activeSection, setActiveSection] = useState("posts");

  return (
    <Layout>
      <div className="body">
        <div className="flex mx-auto w-[100vw] lg:w-[65vw] mt-4 md:mt-16 text-white">
          <div className="flex mx-2">
            <div className="rounded-full overflow-hidden md:w-[150px] w-[90px] h-[90px] md:h-[150px] md:mr-10 mr-6 lg:mx-24 border-[#363636] border-[3px]">
              <img className="rounded-full w-full h-full object-cover object-center border-black border-4" src={user} alt="" />
            </div>
            <div>
              <div className="flex flex-col md:flex-row gap-2">
                <h2 className=" mb-4 text-xl">_taha_umer_</h2>
                <div className="flex">
                  <button className="bg-[#363636] hover:bg-[#262626] md:ml-4 w-[120px] rounded-lg text-sm h-[32px] font-semibold tracking-wide">
                    Edit Profile
                  </button>
                  <button className="bg-[#363636] hover:bg-[#262626] ml-4 w-[120px] rounded-lg text-sm h-[32px] font-semibold tracking-wide">
                    View archive
                  </button>
                </div>
                <img className="w-[25px] -mt-2 hidden md:block" src={settingIcon} alt="" />
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
          <div className="text-white lg:ml-24 cursor-pointer">
            <div className="rounded-full overflow-hidden w-[60px] md:w-[80px] border-2 border-[#363636]">
              <img
                className="border-[3px] border-black rounded-full"
                src={user}
                alt=""
              />
            </div>
            <p className="text-center mt-3 text-[12px] font-semibold">
              Story 1
            </p>
          </div>
          <div className="text-white cursor-pointer">
            <div className="rounded-full overflow-hidden w-[60px] md:w-[80px] border-2 border-[#363636]">
              <img
                className="border-[3px] border-black rounded-full"
                src={user}
                alt=""
              />
            </div>
            <p className="text-center mt-1 md:mt-3 text-[12px] font-semibold">
              Story 2
            </p>
          </div>
          <div className="text-white cursor-pointer">
            <div className="rounded-full overflow-hidden w-[60px] md:w-[80px] bg-[#121212] flex justify-center border-2 border-[#363636]">
              <img
                className="border-[3px] border-black rounded-full p-4 "
                src={plusIcon}
                alt=""
              />
            </div>
            <p className="text-center mt-3 text-[12px] font-semibold">New</p>
          </div>
        </div>
        <div className="w-[65vw] mx-auto border-t border-[#262626]">
          <div className="text-white space-x-20 flex justify-center">
            <button
              className={`flex items-center gap-2 py-3 text-[13px] tracking-[1px] font-semibold ${
                activeSection === "posts"
                  ? " border-t border-white text-white"
                  : "text-[#A8A8A8]"
              }`}
              onClick={() => setActiveSection("posts")}
            >
              <img src={postsIcon} alt="" /> POSTS
            </button>
            <button
              className={`flex items-center gap-2 py-3 text-[13px] tracking-[1px] font-semibold ${
                activeSection === "saved"
                  ? " border-t border-white text-white"
                  : "text-[#A8A8A8]"
              }`}
              onClick={() => setActiveSection("saved")}
            >
              <img className="w-[14px]" src={saveIcon} alt="" /> SAVED
            </button>
            <button
              className={`flex items-center gap-2 py-3 text-[13px] tracking-[1px] font-semibold ${
                activeSection === "tagged"
                  ? " border-t border-white text-white"
                  : "text-[#A8A8A8]"
              }`}
              onClick={() => setActiveSection("tagged")}
            >
              <img className="w-[14px]" src={tagIcon} alt="" /> TAGGED
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