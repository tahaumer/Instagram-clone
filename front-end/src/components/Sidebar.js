import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeSwitch from "../components/ThemeSwitch"
import { useNavigate } from 'react-router-dom';

// media's
import { InstaIcon, HomeIcon, SearchIcon, ExploreIcon, ReelIcon, MessageIcon, NotificationIcon, CreateIcon, ThreadIcon, MoreIcon, InstaName, SettingIcon, SavedIcon, ThemeIcon, ReportIcon, ActivityIcon } from '../media/svg'
import profileImage from '../media/profileImage.jpg'
import user from '../media/profileImage.jpg'


const Sidebar = () => {
    const navigate = useNavigate();

    const showSearchbar = () => {
        const searchbar = document.getElementById('searchbar');
        const notificationbar = document.getElementById('notificationbar');
        const navItems = document.querySelectorAll('.navItems, .navhead');
        const navlogo = document.getElementById('navlogo');
        const sidebar = document.getElementById('sidebar');
        const search = document.getElementById('search');
        const notification = document.getElementById('notification');

        // Toggle searchbar visibility
        searchbar.classList.toggle('hidden');

        // If notificationbar is open, close it
        if (!notificationbar.classList.contains('hidden')) {
            notificationbar.classList.add('hidden');
            notification.classList.remove('border');
        }

        // Toggle other elements based on searchbar's state
        const isSearchbarOpen = !searchbar.classList.contains('hidden');
        navItems.forEach(item => item.classList.toggle('hidden', isSearchbarOpen));
        navlogo.classList.toggle('hidden', !isSearchbarOpen);
        sidebar.classList.toggle('deactive', isSearchbarOpen);
        search.classList.toggle('border', isSearchbarOpen);
    };

    const showNotification = () => {
        const searchbar = document.getElementById('searchbar');
        const notificationbar = document.getElementById('notificationbar');
        const navItems = document.querySelectorAll('.navItems, .navhead');
        const navlogo = document.getElementById('navlogo');
        const sidebar = document.getElementById('sidebar');
        const notification = document.getElementById('notification');
        const search = document.getElementById('search');

        // Toggle notificationbar visibility
        notificationbar.classList.toggle('hidden');

        // If searchbar is open, close it
        if (!searchbar.classList.contains('hidden')) {
            searchbar.classList.add('hidden');
            search.classList.remove('border');
        }

        // Toggle other elements based on notificationbar's state
        const isNotificationbarOpen = !notificationbar.classList.contains('hidden');
        navItems.forEach(item => item.classList.toggle('hidden', isNotificationbarOpen));
        navlogo.classList.toggle('hidden', !isNotificationbarOpen);
        sidebar.classList.toggle('deactive', isNotificationbarOpen);
        notification.classList.toggle('border', isNotificationbarOpen);
    };
    useEffect(() => {
        const closeMenuOnOutsideClick = (event) => {
            const settingbar = document.getElementById('settingbar');
            const menuButton = document.getElementById('menuButton');

            if (settingbar && !settingbar.contains(event.target) && !menuButton.contains(event.target)) {
                settingbar.classList.add('hidden');
            }
        };

        document.addEventListener('click', closeMenuOnOutsideClick);

        return () => {
            document.removeEventListener('click', closeMenuOnOutsideClick);
        };
    }, []);

    const showMenu = () => {
        const settingbar = document.getElementById('settingbar');
        if (settingbar) {
            settingbar.classList.toggle('hidden');
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };


    return (
        <div id='sidebar' className={`fixed left-0 right-0 md:top-0 h-[100vh] border-r border-[#d5d5d5] dark:border-[#262626] dark:bg-black bg-white dark:text-white text-black pt-9 pl-3 pr-3 sidebar z-50 `}>
            <Link to="/">
                {/* <img className='w-[140px] navhead' src={instagramIcon} alt="icon" /> */}
                <span className='navhead '><InstaName /></span>
            </Link>
            <a href="/" className='ml-[12px] block'><p id='navlogo' className="hidden"><InstaIcon /></p></a>
            <Link to="/" className='group flex mt-7 items-end pl-3 hover:bg-[#F2F2F2] dark:hover:bg-[#1A1A1A] transitionCs py-3 rounded-lg'>
                <HomeIcon />
                <h2 className='ml-4 font-semibold navItems'> Home</h2>
            </Link>
            <div id='search' onClick={showSearchbar} className=' border-white group flex mt-2 items-end pl-3 hover:bg-[#F2F2F2] dark:hover:bg-[#1A1A1A] transitionCs py-3 rounded-lg cursor-pointer  '>
                <SearchIcon />
                <h2 className='ml-4 font-semibold navItems'>Search</h2>
            </div>
            <div id='searchbar' className=' dark:divide-[#262626] divide-[#d5d5d5] hidden w-[400px] dark:bg-black bg-white h-full fixed left-[75px] top-0  rounded--r-lg border-r dark:border-[#262626] border-[#d5d5d5]'>
                <h2 className='px-4 mt-9 text-2xl font-semibold'>Search</h2>
                <div className='mt-9 mx-4 mb-5 flex justify-center items-center px-2 dark:bg-[#262626] bg-[#EFEFEF]'>
                    <input type="text" className='w-full dark:bg-[#262626] bg-[#EFEFEF] p-2 text-white placeholder:text-[#8A8A8A] outline-0 rounded-lg' placeholder='Search' />
                </div>
                <hr />
                <div className='flex px-4 mt-4 justify-between'>
                    <p className='text-sm font-semibold tracking-wide'>Recent</p>
                    <p className='text-[#0095F6] text-sm font-medium'>Clear all</p>
                </div>
            </div>
            <NavLink to="/explore"
                className={({ isActive }) =>
                    isActive ? "group flex mt-2 items-end pl-3 hover:bg-[#F2F2F2] dark:hover:bg-[#1A1A1A] transitionCs py-3 rounded-lg font-bold" : "group hover:bg-[#F2F2F2] dark:hover:bg-[#1A1A1A] flex mt-2 items-end pl-3 transitionCs py-3 rounded-lg"
                }>
                <ExploreIcon />
                <h2 className='ml-4 navItems'> Explore</h2>
            </NavLink>
            <NavLink to="/reels" className={({ isActive }) =>
                isActive ? "group flex mt-2 items-end pl-3 hover:bg-[#F2F2F2] dark:hover:bg-[#1A1A1A] transitionCs py-3 rounded-lg font-bold" : "group flex mt-2 hover:bg-[#F2F2F2] dark:hover:bg-[#1A1A1A] items-end pl-3 transitionCs py-3 rounded-lg"
            }>
                <ReelIcon />
                <h2 className='ml-4 navItems'> Reels</h2>
            </NavLink>
            <NavLink to="/messages" className={({ isActive }) =>
                isActive ? "group flex mt-2 items-end pl-3 hover:bg-[#F2F2F2] dark:hover:bg-[#1A1A1A] transitionCs py-3 rounded-lg font-bold" : "group flex mt-2 hover:bg-[#F2F2F2] dark:hover:bg-[#1A1A1A] items-end pl-3 transitionCs py-3 rounded-lg"
            }>
                <MessageIcon />
                <h2 className='ml-4 navItems'> Messages</h2>
            </NavLink>
            <div id='notification' onClick={showNotification} className='border-white group flex mt-2 items-end pl-3 transitionCs py-3 rounded-lg cursor-pointer hover:bg-[#F2F2F2] dark:hover:bg-[#1A1A1A]'>
                <NotificationIcon />
                <h2 className='ml-4  navItems'> Notifications</h2>
            </div>
            <div id='notificationbar' className='hidden w-[400px] z-50 overflow-y-scroll bg-white dark:bg-black h-full fixed left-[75px] top-0 rounded--r-lg border-r dark:border-[#262626] border-[#d5d5d5]'>
                <h2 className='px-4 mt-3 text-2xl font-bold'>Notifications</h2>
                <div className=' dark:divide-[#262626] divide-[#d5d5d5]'>
                    <p className='px-5 text-sm font-bold tracking-wider my-5'>Today</p>
                    <div className='px-5 flex justify-between items-center'>
                        <div className='rounded-full overflow-hidden w-[45px]'>
                            <img className='' src={profileImage} alt="" />
                        </div>
                        <p className='text-sm leading-5 ml-4'> <span className='font-bold'>User_abc</span> started following you.<span className='text-[#A8A8A8] '> 14h</span> </p>
                        <button className='bg-[#0095F6] text-white hover:bg-[#1877F2] rounded-lg px-[23px] py-[6px] font-semibold text-sm  ml-4'>Follow</button>
                    </div>
                    <hr className='my-5' />
                </div>
                <div className=' dark:divide-[#262626] divide-[#d5d5d5]'>
                    <p className='px-5 text-sm font-bold tracking-wider my-5'>This Month</p>
                    <div className='px-5 py-3 flex justify-between items-center hover:bg-[#FAFAFA] dark:hover:bg-[#121212] '>
                        <div className='flex'>
                            <div className='rounded-full overflow-hidden w-[57px]'>
                                <img className='' src={user} alt="" />
                            </div>
                            <p className='text-sm leading-5 ml-4'> <span className='font-bold'>User_12.guest</span> started following you.<span className='text-[#A8A8A8] '> 14h</span> </p>
                        </div>
                        <button className='dark:bg-[#363636] bg-[#EFEFEF] hover:bg-[#DBDBDB] dark:hover:bg-[#262626] rounded-lg px-[23px] py-[6px] font-semibold text-sm ml-2'>Following</button>
                    </div>
                    <div className='px-5 py-3 flex justify-between items-center hover:bg-[#FAFAFA] dark:hover:bg-[#121212]'>
                        <div className='flex'>
                            <div className='rounded-full overflow-hidden w-[45px]'>
                                <img className='' src={user} alt="" />
                            </div>
                            <p className='text-sm leading-5 ml-4'> <span className='font-bold'>User_12.guest</span> tagged you in a reel.<span className='text-[#A8A8A8] '> 2w</span> </p>
                        </div>
                        <div className='w-[45px] h-[45px] ml-4'>
                            <img className='' src={user} alt="" />
                        </div>
                    </div>
                    <hr className='my-5' />
                </div>
                <div className=' divide-[#262626]'>
                    <p className='px-5 text-sm font-bold tracking-wider my-5'>Earlier</p>
                    <div className='px-5 py-3 flex justify-between items-center hover:bg-[#FAFAFA] dark:hover:bg-[#121212]'>
                        <div className='flex'>
                            <div className='rounded-full overflow-hidden w-[57px]'>
                                <img className='' src={user} alt="" />
                            </div>
                            <p className='text-sm leading-5 ml-4'> <span className='font-bold'>User_12.guest</span> started following you.<span className='text-[#A8A8A8] '> 14h</span> </p>
                        </div>
                        <button className='bg-[#0095F6] text-white hover:bg-[#1877F2] rounded-lg px-[23px] py-[6px] font-semibold text-sm ml-2'>Follow</button>
                    </div>
                    <div className='px-5 py-3 flex justify-between items-center hover:bg-[#FAFAFA] dark:hover:bg-[#121212]'>
                        <div className='flex'>
                            <div className='rounded-full overflow-hidden w-[45px]'>
                                <img className='' src={user} alt="" />
                            </div>
                            <p className='text-sm leading-5 ml-4'> <span className='font-bold'>User_12.guest</span> tagged you in a reel.<span className='text-[#A8A8A8] '> 2w</span> </p>
                        </div>
                        <div className='w-[45px] h-[45px] ml-4'>
                            <img className='' src={user} alt="" />
                        </div>
                    </div>
                    <div className='px-5 py-3 flex justify-between items-center hover:bg-[#FAFAFA] dark:hover:bg-[#121212]'>
                        <div className='flex'>
                            <div className='rounded-full overflow-hidden w-[57px]'>
                                <img className='' src={user} alt="" />
                            </div>
                            <p className='text-sm leading-5 ml-4'> <span className='font-bold'>User_12.guest</span> started following you.<span className='text-[#A8A8A8] '> 14h</span> </p>
                        </div>
                        <button className='dark:bg-[#363636] bg-[#EFEFEF] hover:bg-[#DBDBDB] dark:hover:bg-[#262626] rounded-lg px-[23px] py-[6px] font-semibold text-sm ml-2'>Following</button>
                    </div>
                    <div className='px-5 py-3 flex justify-between items-center hover:bg-[#FAFAFA] dark:hover:bg-[#121212]'>
                        <div className='flex'>
                            <div className='rounded-full overflow-hidden w-[57px]'>
                                <img className='' src={user} alt="" />
                            </div>
                            <p className='text-sm leading-5 ml-4'> <span className='font-bold'>User_12.guest</span> started following you.<span className='text-[#A8A8A8] '> 14h</span> </p>
                        </div>
                        <button className='bg-[#0095F6] text-white hover:bg-[#1877F2] rounded-lg px-[23px] py-[6px] font-semibold text-sm ml-2'>Follow</button>
                    </div>
                    <div className='px-5 py-3 flex justify-between items-center hover:bg-[#FAFAFA] dark:hover:bg-[#121212]'>
                        <div className='flex'>
                            <div className='rounded-full overflow-hidden w-[45px]'>
                                <img className='' src={user} alt="" />
                            </div>
                            <p className='text-sm leading-5 ml-4'> <span className='font-bold'>User_12.guest</span> tagged you in a reel.<span className='text-[#A8A8A8] '> 2w</span> </p>
                        </div>
                        <div className='w-[45px] h-[45px] ml-4'>
                            <img className='' src={user} alt="" />
                        </div>
                    </div>
                    <div className='px-5 py-3 flex justify-between items-center hover:bg-[#FAFAFA] dark:hover:bg-[#121212]'>
                        <div className='flex'>
                            <div className='rounded-full overflow-hidden w-[57px]'>
                                <img className='' src={user} alt="" />
                            </div>
                            <p className='text-sm leading-5 ml-4'> <span className='font-bold'>User_12.guest</span> started following you.<span className='text-[#A8A8A8] '> 14h</span> </p>
                        </div>
                        <button className='dark:bg-[#363636] bg-[#EFEFEF] hover:bg-[#DBDBDB] dark:hover:bg-[#262626] rounded-lg px-[23px] py-[6px] font-semibold text-sm ml-2'>Following</button>
                    </div>
                    <div className='px-5 py-3 flex justify-between items-center hover:bg-[#FAFAFA] dark:hover:bg-[#121212]'>
                        <div className='flex'>
                            <div className='rounded-full overflow-hidden w-[45px]'>
                                <img className='' src={user} alt="" />
                            </div>
                            <p className='text-sm leading-5 ml-4'> <span className='font-bold'>User_12.guest</span> tagged you in a reel.<span className='text-[#A8A8A8] '> 2w</span> </p>
                        </div>
                        <div className='w-[45px] h-[45px] ml-4'>
                            <img className='' src={user} alt="" />
                        </div>
                    </div>
                    <div className='px-5 py-3 flex justify-between items-center hover:bg-[#FAFAFA] dark:hover:bg-[#121212]'>
                        <div className='flex'>
                            <div className='rounded-full overflow-hidden w-[45px]'>
                                <img className='' src={user} alt="" />
                            </div>
                            <p className='text-sm leading-5 ml-4'> <span className='font-bold'>User_12.guest</span> tagged you in a reel.<span className='text-[#A8A8A8] '> 2w</span> </p>
                        </div>
                        <div className='w-[45px] h-[45px] ml-4'>
                            <img className='' src={user} alt="" />
                        </div>
                    </div>
                    <div className='px-5 py-3 flex justify-between items-center hover:bg-[#FAFAFA] dark:hover:bg-[#121212]'>
                        <div className='flex'>
                            <div className='rounded-full overflow-hidden w-[57px]'>
                                <img className='' src={user} alt="" />
                            </div>
                            <p className='text-sm leading-5 ml-4'> <span className='font-bold'>User_12.guest</span> started following you.<span className='text-[#A8A8A8] '> 14h</span> </p>
                        </div>
                        <button className='bg-[#0095F6] text-white hover:bg-[#1877F2] rounded-lg px-[23px] py-[6px] font-semibold text-sm ml-2'>Follow</button>
                    </div>
                    <div className='px-5 py-3 flex justify-between items-center hover:bg-[#FAFAFA] dark:hover:bg-[#121212]'>
                        <div className='flex'>
                            <div className='rounded-full overflow-hidden w-[57px]'>
                                <img className='' src={user} alt="" />
                            </div>
                            <p className='text-sm leading-5 ml-4'> <span className='font-bold'>User_12.guest</span> started following you.<span className='text-[#A8A8A8] '> 14h</span> </p>
                        </div>
                        <button className='dark:bg-[#363636] bg-[#EFEFEF] hover:bg-[#DBDBDB] dark:hover:bg-[#262626] rounded-lg px-[23px] py-[6px] font-semibold text-sm ml-2'>Following</button>
                    </div>
                </div>
            </div>
            <div className='group flex mt-2 items-end pl-3 hover:bg-[#F2F2F2] dark:hover:bg-[#1A1A1A] cursor-pointer transitionCs py-3 rounded-lg'>
                <CreateIcon />
                <h2 className='ml-4 navItems'> Create</h2>
            </div>
            <NavLink to="/profile" className={({ isActive }) =>
                isActive ? "group flex mt-2 items-end pl-3 hover:bg-[#F2F2F2] dark:hover:bg-[#1A1A1A] transitionCs py-3 rounded-lg font-bold" : "group flex mt-2 items-end pl-3 hover:bg-[#F2F2F2] dark:hover:bg-[#1A1A1A] transitionCs py-3 rounded-lg"
            }>
                <div className='rounded-full overflow-hidden w-[25px]'>
                    <img className='group-hover:scale-105' src={profileImage} alt="" />
                </div>
                <h2 className='ml-4  navItems'> Profile</h2>
            </NavLink>
            <Link to="#" className='group flex relative mt-[8vh] items-end pl-3 hover:bg-[#F2F2F2] dark:hover:bg-[#1A1A1A] transitionCs py-3 rounded-lg'>
                <ThreadIcon />
                <h2 className='ml-4 navItems'> Threads</h2>
            </Link>
            <div className='group mt-2 items-end transitionCs relative mb-2'>
                <div onClick={showMenu} id='menuButton' className='flex hover:bg-[#F2F2F2] dark:hover:bg-[#1A1A1A] pl-3 py-3 w-full rounded-lg cursor-pointer'>
                    <MoreIcon />
                    <h2 className='ml-4 navItems'> More</h2>
                </div>
                <div id='settingbar' className='absolute text-black dark:text-white dark:bg-[#262626] shadow-xl bg-white bottom-10 rounded-2xl py-2 z-50 hidden'>
                    <ul className='w-[250px] dark:divide-[#353535] divide-[#F4F4F4]'>
                        <li className='transitionCs hover:bg-[#F2F2F2] dark:hover:bg-[#3C3C3C] flex pl-3 py-4 mx-2 rounded-xl cursor-pointer'>
                            <SettingIcon />
                            <p className='ml-4 text-sm'>Settings</p>
                        </li>
                        <li className='transitionCs hover:bg-[#F2F2F2] dark:hover:bg-[#3C3C3C] flex pl-3 py-4 mx-2 rounded-xl cursor-pointer'>
                            <ActivityIcon />
                            <p className='ml-4 text-sm'>Your Activity</p>
                        </li>
                        <li className='transitionCs hover:bg-[#F2F2F2] dark:hover:bg-[#3C3C3C] flex pl-3 py-4 mx-2 rounded-xl cursor-pointer'>
                            <SavedIcon />
                            <p className='ml-4 text-sm'>Saved</p>
                        </li>
                        <li className='transitionCs hover:bg-[#F2F2F2] dark:hover:bg-[#3C3C3C] flex pl-3 py-4 mx-2 rounded-xl relative group/item cursor-default'>
                            <ThemeIcon />
                            <p className='ml-4 mr-5 text-sm'>Switch appearance</p>
                            <ThemeSwitch />
                        </li>
                        <li className='transitionCs hover:bg-[#F2F2F2] dark:hover:bg-[#3C3C3C] flex pl-3 py-4 mx-2 rounded-xl cursor-pointer mb-2'>
                            <ReportIcon />
                            <p className='ml-4 text-sm'>Report a problem</p>
                        </li>
                        <span className='bg-[#F4F4F4] dark:bg-[#353535] h-1 w-full block ' />
                        <li className='transitionCs hover:bg-[#F2F2F2] dark:hover:bg-[#3C3C3C] flex pl-3 py-4 mx-2 rounded-xl cursor-pointer my-2'>
                            <p className='ml-4 text-sm'>Switch accounts</p>
                        </li>
                        <hr />
                        <li onClick={handleLogout} className='transitionCs hover:bg-[#F2F2F2] dark:hover:bg-[#3C3C3C] flex pl-3 py-4 mx-2 rounded-xl cursor-pointer mt-2'>
                            <p className='ml-4 text-sm'>log out</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar