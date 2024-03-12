import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UpdateUser() {
    const [userData, setUserData] = useState({
        email: '',
        name: '',
        profile_picture: ''
    });
    const token = sessionStorage.getItem('token');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://5.22.217.225:8081/api/v1/user/profile', userData, {
                headers: {
                    Authorization: `${token}`
                }
            });
            console.log('User information updated successfully');
            navigate('/user')
        } catch (error) {
            console.error('Failed to update user information:', error);
        }
    };

    return (
        <>
            <h1>Update User Information</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="text"
                    name="profile_picture"
                    value={userData.profile_picture}
                    onChange={handleChange}
                    placeholder="Profile Picture URL"
                />
                <button type="submit" className='submit-button'>Update User</button>
            </form>
        </>
    );
}

export default UpdateUser;