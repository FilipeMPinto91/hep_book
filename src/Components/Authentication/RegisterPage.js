import React, { useState } from 'react';

function RegisterPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://5.22.217.225:8081/api/v1/auth/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }); 
            
            if (response.ok) {
                console.log('Registration sucessfull');
            } else {
                console.log('Registration failed');
            }
        } catch (error) {
            console.error('Error registering: ', error);
        }
    };

    return (
        <div>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <button type="submit" className='submit-button'>Register</button>
          </form>
        </div>
    );
}

export default RegisterPage;