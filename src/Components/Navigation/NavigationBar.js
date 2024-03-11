import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavigationBar.css'


function NavigationBar() {

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const isAuthenticated = userData && userData.token;
    const navigate = useNavigate();
    
    const handleLogout = () => {
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('token')
        
        console.log ('Logged out');
        
        navigate('/');
    }

    const renderLogButton = () => {
        if (isAuthenticated) {
            return <button onClick={handleLogout}>Logout</button>;
        } else {
            return <Link to='/login'>Login</Link>
        }
    }

    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>{renderLogButton()}</li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/books'>Book List</Link></li>
                <li><Link to='/addbook'>Add book</Link></li>
                <li><Link to='/user'>User</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationBar;