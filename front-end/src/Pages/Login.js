import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

// components
import Footer from '../components/Footer'

// media
import homePhones from "../media/login-page/home-phones.png"
import ss1 from "../media/login-page/screenshot1.png"
import ss2 from "../media/login-page/screenshot2.png"
import ss3 from "../media/login-page/screenshot3.png"
import ss4 from "../media/login-page/screenshot4.png"
import { InstaNameBlack } from '../media/svg'
import googleplay from "../media/login-page/googleplay.png"
import microsoft from "../media/login-page/microsoft.png"

const Login = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeTransition, setFadeTransition] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const [loading, setLoading] = useState(false); 

    const images = [ss1, ss2, ss3, ss4];

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeTransition(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFadeTransition(false);
            }, 1000);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        if (!username || !password) {
            setError('Username and password are required');
            return;
        }
        setLoading(true);
        let email = username; 
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, username, password })
            });
            if (!response.ok) throw new Error('Login failed');
            const data = await response.json();
            localStorage.setItem('token', data.token);
            window.location.href = '/';
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='flex justify-center items-center mt-3 bg-white'>
                <div className='mt-10 relative'>
                    <img src={homePhones} alt='phone' />
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`slide-${index}`} className={`image-fade ${index === currentImageIndex ? 'image-fade-active' : ''}`} />
                    ))}
                </div>
                <div className='flex items-center flex-col'>
                    <div className='border border-borderLight rounded-sm w-[350px] flex justify-center items-center flex-col pt-10'>
                        <InstaNameBlack />

                        <form onSubmit={handleLogin} className='w-full flex justify-center items-center flex-col mt-3'>
                            <div className='input-container'>
                                <input type='text' placeholder='' value={username} onChange={(e) => setUsername(e.target.value)}
                                    className='bg-[#FAFAFA] rounded-sm outline-none border border-borderLight'
                                />
                                <label>Phone number, username, or email</label>
                            </div>
                            <div className='input-container'>
                                <input type='password' placeholder='' value={password} onChange={(e) => setPassword(e.target.value)}
                                    className='bg-[#FAFAFA] rounded-sm outline-none border border-borderLight'
                                />
                                <label>Password</label>
                            </div>
                            {error && <p className='text-red-600 text-[12px] text-center -mt-1 mb-2'>{error}</p>}
                            <button disabled={loading} type='submit' className='mx-auto w-[259px] bg-primary hover:bg-primaryDark transition-all ease-in-out text-white py-1 rounded-lg'>
                                {loading ? (
                                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                    </svg>
                                ) : 'Log In'}
                            </button>

                            <div className='flex items-center w-full justify-center my-7'><span className='h-[0.7px] w-1/4 bg-borderLight block'></span><p className='mx-5 text-[12px] text-gray-500 font-semibold'>OR</p><span className='h-[0.7px] w-1/4 bg-borderLight block'></span></div>
                            <div className='flex flex-col items-center'>
                                <Link to="" className='text-sm text-[#385185] font-semibold'>Log in with Facebook</Link>
                                <Link to="" className='text-[12px] text-[#385185] my-4'>Forgot Password?</Link>
                            </div>
                        </form>
                    </div>
                    <div className='border border-borderLight w-[350px] flex justify-center items-center mt-4 p-6'>
                        <p className='text-sm'>Don't have an account? <Link to="/sign-up" className='text-primaryDark font-medium'>Sign Up</Link> </p>
                    </div>
                    <p className='text-sm my-4'> Get the app.</p>
                    <div className='flex space-x-3'>
                        <img className='w-36 h-12 hover:opacity-85 cursor-pointer' src={googleplay} alt='' />
                        <img className='w-36 h-12 hover:opacity-85 cursor-pointer' src={microsoft} alt='' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login