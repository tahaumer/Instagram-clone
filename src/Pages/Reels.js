import React, { useRef, useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";

//media
import reelvideo from "../media/63f92669-0aff-4fdb-b1ed-8f2d9aea0114.mp4";
import reelvideo2 from "../media/reel2.mp4";
import playIcon from "../media/play-solid.svg";
import user from '../media/user.jpg'
import audioIcon from '../media/Audio image.svg'
import audioPlayingIcon from '../media/Audio is playing.svg'
import audioMutedIcon from '../media/Audio is muted.svg'

const Reels = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const updateProgress = () => {
        setProgress((videoRef.current.currentTime / videoTime) * 100);
        requestAnimationFrame(updateProgress);
      };

      updateProgress();
    }
  }, [videoRef.current, videoTime]);

  const videoHandler = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
      var vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };
  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <Layout>
      <div className="body flex justify-center items-center h-[100vh] pl-36">
        <Swiper slidesPerView={1} direction={"vertical"} centeredSlides={true} keyboard={true} mousewheel={true} modules={[Mousewheel, Keyboard]} className="w-full h-[100vh]">
          <SwiperSlide>
            <div className="w-[400px] ml-60 h-[85%] mt-10 reel rounded-lg relative">
              <video id="video1" ref={videoRef} autoPlay loop onClick={videoHandler} className="video object-center object-cover">
                <source src={reelvideo2} />
              </video>
              <div onClick={toggleMute} className="bg-[#82757281] hover:bg-[#8d817f88] p-2 rounded-full w-fit cursor-pointer absolute top-2 right-2">
                <img src={isMuted ? audioMutedIcon : audioPlayingIcon} alt="" />
              </div>
              {!playing ? (<img onClick={() => videoHandler("play")} className="w-[40px] absolute top-1/2 left-[45%]" alt="" src={playIcon}/>) : ("") }
              <div className="timecontrols">
                <div className="time_progressbarContainer">
                  <div
                    style={{ width: `${progress}%` }}
                    className="time_progressBar"
                  ></div>
                </div>
              </div>
                <div className='flex items-center relative -top-24 left-3'>
                    <div className='rounded-full overflow-hidden w-[47px]'>
                        <img className='' src={user} alt="" />
                    </div>
                    <div className=' leading-5 ml-4 text-white'>
                        <p className='font-semibold cursor-pointer'> _taha_umer_ • Follow </p>
                    </div>
                </div>
                <span className="text-white relative -top-20 left-3 text-sm flex"><img className="pr-2" src={audioIcon} alt="" /> Music - Original audio</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Layout>
  );
};

export default Reels;
