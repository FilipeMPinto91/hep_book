import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function User() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (!token) {
            console.error('No token found');
            navigate('/login');
        }

        fetchUserProfile(token);
    }, []);

    const fetchUserProfile = async (token) => {
        try {
            const response = await axios.get('http://5.22.217.225:8081/api/v1/user/profile', {
                headers: {
                    Authorization: `${token}`
                }
            });

            if (response.status === 200) {
                setUserData(response.data);
                // console.log('User profile data:', userData);
            } else {
                console.error('Failed to fetch user profile:', response.status);
            } 
        } catch (error) {
            console.error('Error fetching user profile', error);
        }
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            <h2>User Information</h2>
            {userData.data.profile_picture && <img src={userData.data.profile_picture} alt='Profile' />}
            <p><strong>Name:</strong> {userData.data.name} </p>
            <p><strong>Email:</strong> {userData.data.email} </p>
        </div>
    )
}

export default User;