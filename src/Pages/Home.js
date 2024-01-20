import React,{useState,useEffect} from "react";
import Layout from '../components/Layout'
import MainBody from "../components/MainBody";

// media
import user from '../media/user.jpg'

const Home = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <Layout>
        <div className='body flex pt-7'>
              <div className='w-full flex justify-center'>
                <MainBody/>
              </div>
              <div className='w-[750px]'>
                <div className='w-[70%]'>
                  <div className='pl-6 pt-2 pb-5 flex justify-between items-center'>
                      <div className='flex items-center'>
                          <div className='rounded-full overflow-hidden w-[47px]'>
                              <img className='' src={user} alt="" />
                          </div>
                          <div className='text-sm leading-5 ml-4 text-white'>
                            <p className='font-semibold'> _taha_umer_ </p>
                            <p className="text-[#A6A6A6] text-[13px] tracking-tight">طحہ عمر</p>
                          </div>
                      </div>
                      <button className='text-[#0095F6] hover:text-white text-[12px]'>Switch </button>
                  </div>
                  <div className='flex justify-between mb-4'>
                    <h3 className='text-[#A6A6A6] text-[15px] font-semibold ml-6'>Suggested for you</h3>
                    <p className='text-white text-[13px] font-semibold'>See All</p>
                  </div>
                  <div className='pl-6 pb-2 flex justify-between items-center'>
                      <div className='flex items-center'>
                          <div className='rounded-full overflow-hidden w-[45px]'>
                              <img className='' src={user} alt="" />
                          </div>
                          <div className='text-sm leading-5 ml-4 text-white'>
                            <p className='font-semibold'>user_12 </p>
                            <p className='text-[#A6A6A6] text-[13px] tracking-tight'>New to instagram</p>
                          </div>
                      </div>
                      <button className='text-[#0095F6] hover:text-white text-[12px]'>Follow</button>
                  </div>
                  <div className='pl-6 pt-2 pb-2 flex justify-between items-center'>
                      <div className='flex items-center'>
                          <div className='rounded-full overflow-hidden w-[45px]'>
                              <img className='' src={user} alt="" />
                          </div>
                          <div className='text-sm leading-5 ml-4 text-white'>
                            <p className='font-semibold'> user1 </p>
                            <p className='text-[#A6A6A6] text-[13px] tracking-tight'>Suggested for you</p>
                          </div>
                      </div>
                      <button className='text-[#0095F6] hover:text-white text-[12px]'>Follow</button>
                  </div>
                  <div className='pl-6 pt-2 pb-2 flex justify-between items-center'>
                      <div className='flex items-center'>
                          <div className='rounded-full overflow-hidden w-[45px]'>
                              <img className='' src={user} alt="" />
                          </div>
                          <div className='text-sm leading-5 ml-4 text-white'>
                            <p className='font-semibold'> adwao_awdw </p>
                            <p className='text-[#A6A6A6] text-[13px] tracking-tight'>Followed by User_221</p>
                          </div>
                      </div>
                      <button className='text-[#0095F6] hover:text-white text-[12px]'>Follow</button>
                  </div>
                  <div className='pl-6 pt-2 pb-2 flex justify-between items-center'>
                      <div className='flex items-center'>
                          <div className='rounded-full overflow-hidden w-[45px]'>
                              <img className='' src={user} alt="" />
                          </div>
                          <div className='text-sm leading-5 ml-4 text-white'>
                            <p className='font-semibold'> user_0011 </p>
                            <p className='text-[#A6A6A6] text-[13px] tracking-tight'>New to instagram</p>
                          </div>
                      </div>
                      <button className='text-[#0095F6] hover:text-white text-[12px]'>Follow</button>
                  </div>
                  <div className='pl-6 pt-2 pb-10 flex justify-between items-center'>
                      <div className='flex items-center'>
                          <div className='rounded-full overflow-hidden w-[45px]'>
                              <img className='' src={user} alt="" />
                          </div>
                          <div className='text-sm leading-5 ml-4 text-white'>
                            <p className='font-semibold'> itx_dw2 </p>
                            <p className='text-[#A6A6A6] text-[13px] tracking-tight'>Suggested for you</p>
                          </div>
                      </div>
                      <button className='text-[#0095F6] hover:text-white text-[12px]'>Follow</button>
                  </div>
                  <ul className='flex text-[#585858] text-[12px] space-x-1 w-full flex-wrap ml-6 capitalize'>
                    <li className="hover:underline cursor-pointer">about .</li>
                    <li className="hover:underline cursor-pointer">blog  .</li>
                    <li className="hover:underline cursor-pointer">jobs  .</li>
                    <li className="hover:underline cursor-pointer">help  .</li>
                    <li className="hover:underline cursor-pointer">API  .</li>
                    <li className="hover:underline cursor-pointer">privacy  .</li>
                    <li className="hover:underline cursor-pointer">terms  .</li>
                    <li className="hover:underline cursor-pointer">locations  .</li>
                    <li className="hover:underline cursor-pointer">threads  .</li>
                    <li className="hover:underline cursor-pointer">meta verified  .</li>
                  </ul>
                  <ul className="text-[12px] ml-6 mt-6">
                    <li className="text-[#585858]">&copy; {currentYear} Instagram Clone From <span className="line-through text-[#444444]"> Meta</span> Taha</li>
                  </ul>
                </div>
              </div>
        </div>
    </Layout>
  )
}

export default Home