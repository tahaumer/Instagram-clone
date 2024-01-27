import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//media
import user from "../media/user.jpg";
import {NotificationIcon, ShareIcon, SavedIcon,CommentIcon} from '../media/svg'


const MainBody = () => {
  const userData = [
    { username: "User_name", imageUrl: user },
    { username: "User_name", imageUrl: user },
    { username: "User_name", imageUrl: user },
    { username: "User_name", imageUrl: user },
    { username: "User_name", imageUrl: user },
    { username: "User_name", imageUrl: user },
    { username: "User_name", imageUrl: user },
    { username: "User_name", imageUrl: user },
    { username: "User_name", imageUrl: user },
    { username: "User_name", imageUrl: user },
    { username: "User_name", imageUrl: user },
  ];
  const postData = [
    {
      username: "User_name",
      imageUrl: user,
      postLikes: "3,028",
      postComments: "164",
    },
    { username: "user212", imageUrl: user, postLikes: "3", postComments: "16" },
    {
      username: "its_user",
      imageUrl: user,
      postLikes: "22",
      postComments: "12",
    },
    {
      username: "testing12",
      imageUrl: user,
      postLikes: "46,281",
      postComments: "1920",
    },
    {
      username: "1212_abc",
      imageUrl: user,
      postLikes: "2,123",
      postComments: "264",
    },
    {
      username: "abc_def",
      imageUrl: user,
      postLikes: "30",
      postComments: "114",
    },
    {
      username: "Users_121",
      imageUrl: user,
      postLikes: "28",
      postComments: "12",
    },
  ];
  return (
    <div className="z-0 relative w-full">
      <Swiper
        slidesPerView={8}
        breakpoints={{
          327: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 8,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
        className="w-full md:w-[650px] mb-10 "
      >
        {userData.map((user, index) => (
          <SwiperSlide key={index} className="text-black dark:text-white">
            <div className="px-6 flex flex-col items-center cursor-pointer">
              <div className="w-[62px] rounded-full overflow-hidden instaGradient p-[2px] ">
                <img
                  src={user.imageUrl}
                  alt=""
                  className="rounded-full border-[3px] border-white dark:border-black "
                />
              </div>
              <h2 className="text-[11px]">{user.username}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {postData.map((post, index) => (
        <div
          key={index}
          className="w-[466px] mx-auto divide-[#737373]"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="w-[40px] rounded-full overflow-hidden instaGradient pl-[1px] pb-[1.2px] p-[2px] cursor-pointer">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="rounded-full border-[3px] border-white dark:border-black"
                />
              </div>
              <h2 className="text-sm ml-3 dark:text-white text-black font-semibold cursor-pointer">
                {post.username} <span className="text-[#737373]">• 4h</span>
              </h2>
            </div>
            <div className="flex cursor-pointer py-1">
              <span className="h-[3px] w-[3px] block dark:bg-white bg-black rounded-full mx-[2px]"></span>
              <span className="h-[3px] w-[3px] block dark:bg-white bg-black rounded-full mx-[2px]"></span>
              <span className="h-[3px] w-[3px] block dark:bg-white bg-black rounded-full mx-[2px]"></span>
            </div>
          </div>
          <div className="h-[450px] w-full text-center mb-2 bg-[#383838] text-[#ffffff86]">
            -- image here --
          </div>
          <div className="flex justify-between mb-2">
            <div className="flex gap-4">
             <NotificationIcon/>
              <CommentIcon/>
              <ShareIcon/>
            </div>
            <div>
              <SavedIcon/>
            </div>
          </div>
          <h3 className="font-semibold text-sm mb-1 dark:text-white text-black">{post.postLikes} likes</h3>
          <h3 className="font-medium text-[14px] text-[#737373] cursor-pointer">
            View all {post.postComments} comments
          </h3>
          <input
            type="text"
            placeholder="Add a comment..."
            className="bg-transparent text-[14px] w-full outline-0 placeholder:text-[#737373]"
          />
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default MainBody;
