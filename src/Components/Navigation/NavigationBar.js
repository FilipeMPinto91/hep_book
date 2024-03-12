import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavigationBar.css'

function NavigationBar() {

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const isAuthenticated = userData && userData.token;
    const navigate = useNavigate();
    
    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            sessionStorage.clear();
        }
        
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

    const handleSelectChange = (event) => {
        const selectedRoute = event.target.value;
        navigate(selectedRoute);
    };

    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li className='log-button'>{renderLogButton()}</li>
                <li><Link to='/register'>Register</Link></li>
                <li>
                    <select onChange={handleSelectChange}>
                        <option value="/books">Books</option>
                        <option value="/addbook">Add book</option>
                        {/* <option value="/updatebook">Update book</option> */}
                    </select>
                </li>
                <li><Link to='/user'>User</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationBar;