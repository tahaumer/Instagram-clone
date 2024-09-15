import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import Layout from '../components/Layout';
import defaultImage from '../media/user.jpg'
import Loading from '../components/Loading'

const ProfileEdit = () => {
    const { user, userInfo, loading } = useAuth();
    const [loadingUpload, setLoadingUpload] = useState(false);
    const [profile, setProfile] = useState({
        username: '',
        description: '',
        profileImageUrl: '',
        gender: '',
    });
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        if (!loading && userInfo) {
            setProfile({
                username: user.username || '',
                description: userInfo.description || '',
                profileImageUrl: userInfo.profileImageUrl || '',
                gender: userInfo.gender || '',
            });
        }
    }, [user, userInfo, loading]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const imageUrl = URL.createObjectURL(file);
            setImageFile(file);
            setProfile((prevProfile) => ({
                ...prevProfile,
                profileImageUrl: imageUrl,
            }));
        } else {
            console.error('Selected file is not an image');
        }
    };
    useEffect(() => {
        return () => {
            if (profile.profileImageUrl.startsWith('blob:')) {
                URL.revokeObjectURL(profile.profileImageUrl);
            }
        };
    }, [profile.profileImageUrl]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingUpload(true);

        try {
            let profileImageUrl = profile.profileImageUrl;

            // If a new image file is selected, upload it first
            if (imageFile) {
                const formData = new FormData();
                formData.append('profileImage', imageFile);

                const uploadResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'x-auth-token': localStorage.getItem('token'),
                    },
                });
                profileImageUrl = uploadResponse.data.profileImageUrl;
            }

            // Update profile with the new image URL if it was uploaded
            const profileData = { ...profile, profileImageUrl };
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/update`, profileData);
            console.log('Profile updated:', response.data);
            window.location.href = '/profile';
        } catch (error) {
            console.error('Error updating profile:', error);
        } finally {
            setLoadingUpload(false);
        }
    };

    if (loading) return <Loading/>;

    return (
        <Layout>
            <div className="body text-black dark:text-white">
                <div className='w-[70%] py-10 px-20'>
                    <h3 className='text-2xl font-bold'>Edit Profile</h3>
                    <div className='dark:bg-[#262626] p-6 mt-6 rounded-3xl flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div className='h-[56px] w-[56px] overflow-hidden rounded-full'>
                                <img className='w-full h-full object-cover object-center' src={`${process.env.REACT_APP_BACKEND_URL}${profile.profileImageUrl}` || defaultImage} alt='Profile' />
                            </div>
                            <div className='text-sm ml-4'>
                                <h4>{profile.username || 'User Name'}</h4>
                                <h4>{user.name || 'Full Name'}</h4>
                            </div>
                        </div>
                        <label htmlFor='upload' className="bg-primary hover:bg-primaryDark ml-4 w-[120px] rounded-lg text-sm h-[32px] font-semibold tracking-wide flex justify-center items-center cursor-pointer">
                            Change Photo
                            <input type="file" id='upload' hidden accept="image/*" onChange={handleImageChange} />
                        </label>
                    </div>

                    <h3 className='text-xl font-semibold mt-6'>Website</h3>
                    <input type='text' placeholder='website' disabled className='dark:bg-[#262626] p-3 mt-3 rounded-lg w-full cursor-not-allowed text-sm' />
                    <p className='text-secondaryTextColor text-[12px] mt-2'>Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.</p>

                    <h3 className='text-xl font-semibold mt-6'>Bio</h3>
                    <textarea name='description' value={profile.description} onChange={handleChange} placeholder='description' className='dark:bg-[#262626] p-3 mt-3 rounded-lg w-full outline-none text-sm' />

                    <h3 className='text-xl font-semibold mt-6'>Gender</h3>
                    <select name='gender' value={profile.gender} onChange={handleChange} className='dark:bg-[#262626] p-3 mt-3 rounded-lg w-full outline-none' >
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                    <div className='flex w-full justify-end mt-6'>
                        <button disabled={loadingUpload} onClick={handleSubmit} className='bg-primary hover:bg-primaryDark ml-4 w-[220px] rounded-lg text-sm h-[52px] font-semibold tracking-wide'>
                            {loadingUpload ? (
                                <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                            ) : 'Submit'}
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProfileEdit;
