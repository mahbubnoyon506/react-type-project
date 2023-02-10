import React, { useState } from 'react';

const LoginState = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handlelogin = () => {
        setIsLoggedIn(true)
    }
    const handlelogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handlelogin}>Login</button>
            <button onClick={handlelogout}>LogOut</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    );
};

export default LoginState;