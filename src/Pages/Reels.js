import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";

//media
import reelvideo from "../media/reel1.mp4";
import reelvideo2 from "../media/reel2.mp4";
import reelvideo3 from "../media/reel3.mp4"
import playIcon from "../media/play-solid.svg";
import user from "../media/user.jpg";
import audioIcon from "../media/Audio image.svg";
import audioPlayingIcon from "../media/Audio is playing.svg";
import audioMutedIcon from "../media/Audio is muted.svg";
import notificationIcon from '../media/Notifications.svg'
import commentIcon from '../media/Comment.svg'
import ShareIcon from '../media/Share Post-1.svg'
import saveIcon from '../media/Save.svg'
import moreIcon from '../media/MoreDots.svg'
import closeIcon from '../media/close.svg'

const Reels = () => {
  const [videos, setVideos] = useState([
    {
      userName: "user1",
      description: "lorem nedue awjdn waid hd awhudwajd w",
      commentCount : 12,
      heartCount: 20,
      source: reelvideo,
      playing: false,
      isMuted: true,
      progress: 0,
      videoTime: 0,
    },
    {
      userName: "user2",
      description: "lorem nedue awjdn waid hd awhudwajd w",
      commentCount : 1,
      heartCount: 2,
      source: reelvideo2,
      playing: false,
      isMuted: false,
      progress: 0,
      videoTime: 0,
    },
    {
      userName: "user3",
      description: "lorem nedue awjdn waid hd awhudwajd w",
      commentCount : 120,
      heartCount: 200,
      source: reelvideo3,
      playing: false,
      isMuted: false,
      progress: 0,
      videoTime: 0,
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef(videos.map(() => React.createRef()));

  const togglePlay = (index) => {
    const newVideos = videos.map((video, i) => {
      if (index === i) {
        const playing = !video.playing;
        const videoElem = videoRefs.current[i].current;
        if (playing) {
          videoElem.play();
        } else {
          videoElem.pause();
        }
        return { ...video, playing };
      }
      return video;
    });
    setVideos(newVideos);
  };

  const toggleMute = (index) => {
    const newVideos = videos.map((video, i) => {
      if (index === i) {
        const isMuted = !video.isMuted;
        videoRefs.current[i].current.muted = isMuted;
        return { ...video, isMuted };
      }
      return video;
    });
    setVideos(newVideos);
  };

  useEffect(() => {
    videos.forEach((_, index) => {
      const videoElem = videoRefs.current[index].current;
      if (videoElem) {
        const setVideoDuration = () => {
          setVideos((videos) =>
            videos.map((video, i) => {
              if (i === index) {
                return { ...video, videoTime: videoElem.duration };
              }
              return video;
            })
          );
        };
        videoElem.addEventListener("loadedmetadata", setVideoDuration);
      }
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      videos.forEach((_, index) => {
        const videoElem = videoRefs.current[index].current;
        if (videoElem) {
          setVideos((videos) =>
            videos.map((video, i) => {
              if (i === index) {
                const progress =
                  (videoElem.currentTime / video.videoTime) * 100;
                return { ...video, progress };
              }
              return video;
            })
          );
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [videos]);

  const onSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  
    videos.forEach((_, index) => {
      const videoElem = videoRefs.current[index].current;
  
      if (index === swiper.activeIndex) {
        // Play the video if it is paused
        if (videoElem && videoElem.paused) {
          videoElem.play();
          setVideos((videos) =>
            videos.map((video, i) => {
              if (i === index) {
                return { ...video, playing: true };
              }
              return video;
            })
          );
        }
      } else {
        // Pause all other videos
        if (videoElem && !videoElem.paused) {
          videoElem.pause();
          setVideos((videos) =>
            videos.map((video, i) => {
              if (i === index) {
                return { ...video, playing: false };
              }
              return video;
            })
          );
        }
      }
    });
  };
  const [isCommentSectionOpen, setIsCommentSectionOpen] = useState(false);
  const commentSectionRef = useRef(null);
  const toggleCommentSection = () => {
    setIsCommentSectionOpen(!isCommentSectionOpen);
  };
  const handleClickOutside = (event) => {
    if (commentSectionRef.current && !commentSectionRef.current.contains(event.target)) {
      setIsCommentSectionOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

const showComment = (index) => {
  const commentSection = document.getElementById(`commentSection-${index}`);
  if (commentSection) {
    commentSection.classList.toggle("hidden");
  }
};

  return (
    <Layout>
      <div className="body h-[100vh] flex justify-center items-center ">
        <Swiper
          slidesPerView={1}
          onSlideChange={onSlideChange}
          direction={"vertical"}
          centeredSlides={true}
          keyboard={true}
          mousewheel={true}
          modules={[Mousewheel, Keyboard]}
          className="h-[100vh] w-full swipercustom"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="md:w-[600px] mx-auto h-[85%] relative">
                <div className="md:w-[400px] mx-auto h-[100%] md:mt-10 my-6 reel rounded-lg ">
                  <video ref={videoRefs.current[index]} loop muted={video.isMuted} onClick={() => togglePlay(index)} className="video object-center object-cover">
                    <source src={video.source} />
                  </video>
                  <div onClick={() => toggleMute(index)} className="bg-[#82757281] hover:bg-[#8d817f88] p-2 rounded-full w-fit cursor-pointer absolute top-3 right-2 md:right-28">
                    <img src={video.isMuted ? audioMutedIcon : audioPlayingIcon} alt="Mute/Unmute"/>
                  </div>
                  {!video.playing && (
                    <div onClick={() => togglePlay(index)} className="bg-[#0000009f] w-[70px] flex justify-center items-center py-5 px-2 absolute top-1/2 left-[45%] rounded-full">
                      <img className="z-20 w-[40%] relative" alt="Play" src={playIcon}/>
                    </div>
                  )}
                  <div className="timecontrols">
                    <div className="time_progressbarContainer">
                      <div style={{ width: `${video.progress}%` }} className="time_progressBar"></div>
                    </div>
                  </div>
                  <div className="flex items-center relative -top-28 left-3">
                    <div className="rounded-full overflow-hidden w-[47px]">
                      <img className="" src={user} alt="User" />
                    </div>
                    <div className="leading-5 ml-4 text-white">
                      <p className="font-semibold cursor-pointer">
                      {video.userName} • <span className="px-[6px] pb-2 pt-1 text-[.875rem] border border-[#ffffff34] rounded-lg">Follow</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-white relative -top-[100px] left-3 text-sm line-clamp-1">{video.description}</p>
                  <span className="text-white relative -top-24 left-3 text-sm flex">
                    <img className="pr-2" src={audioIcon} alt="Audio" /> Music -
                    Original audio
                  </span>
                </div>
                <div className="absolute right-2 bottom-3 md:right-10 md:bottom-0 text-white flex flex-col justify-center items-center text-center font-light text-sm space-y-5">
                  <div className="cursor-pointer hover:brightness-75">
                    <img src={notificationIcon} alt="" />
                    <p className="pt-1">{video.heartCount}</p>
                  </div>
                  <div onClick={() => showComment(index)} className="cursor-pointer group relative">
                    <img src={commentIcon} alt="" />
                    <p className="pt-1 group-hover:brightness-75">{video.commentCount}</p>
                  </div>
                  <div id={`commentSection-${index}`} className="absolute z-50 bg-[#262626] w-[300px] pl-4 pr-2 py-3 rounded-lg left-12 -top-28 hidden">
                      <div className="flex mb-3">
                        <img onClick={() => showComment(index)} className="mr-20 cursor-pointer" src={closeIcon} alt="" />
                        <h3 className="font-bold tracking-wider">Comments</h3>
                      </div>
                      <div className="h-[200px] overflow-y-scroll">
                        <div className="flex">
                          <div className="rounded-full mt-5 overflow-hidden w-[30px]">
                            <img className="rounded-full" src={user} alt="User" />
                          </div>
                          <div className="text-left ml-2 group">
                            <h3 className="font-semibold mt-4">User_121 <span className="text-[#A3A3A3]">1d</span></h3>
                            <p className="w-[190px]"> di enind dej d oe di di enind dej d oe di di enind dej d oe di </p>
                            <span className="text-[#A3A3A3] text-[12px] font-semibold mr-3">513 likes</span>
                            <span className="text-[#A3A3A3] text-[12px] font-semibold mr-3">Reply</span>
                            <img className="group-hover:inline hidden" src={moreIcon} alt="" />
                          </div>
                        </div>
                        <div className="flex">
                          <div className="rounded-full mt-5 overflow-hidden w-[30px]">
                            <img className="rounded-full" src={user} alt="User" />
                          </div>
                          <div className="text-left ml-2 group">
                            <h3 className="font-semibold mt-4">User_121 <span className="text-[#A3A3A3]">1d</span></h3>
                            <p className="w-[180px]"> di enind dej d oe di di enind dej d oe di di enind dej d oe di </p>
                            <span className="text-[#A3A3A3] text-[12px] font-semibold mr-3">513 likes</span>
                            <span className="text-[#A3A3A3] text-[12px] font-semibold mr-3">Reply</span>
                            <img className="group-hover:inline hidden" src={moreIcon} alt="" />
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  <img className="cursor-pointer hover:brightness-75" src={ShareIcon} alt="" />
                  <img className="cursor-pointer hover:brightness-75" src={saveIcon} alt="" />
                  <img className="cursor-pointer hover:brightness-75" src={moreIcon} alt="" />
                  <div className="h-[30px] w-[30px] rounded-lg overflow-hidden cursor-pointer hover:brightness-75">
                    <img src={user} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  );
};

export default Reels;
