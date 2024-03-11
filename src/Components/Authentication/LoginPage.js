import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://5.22.217.225:8081/api/v1/auth/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }); 
            
            if (response.ok) {
                const data = await response.json();
                sessionStorage.setItem('userData', JSON.stringify(data.data));
                sessionStorage.setItem('token', data.data.token);

                console.log('Login sucessfull');
                navigate('/books');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error login in: ', error);
        }
    };

    return (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
    );
}


export default LoginPage;