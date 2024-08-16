import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import '../Auth'; // Add your CSS file for styling

const AuthPage = () => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="auth-container">
            <div className="auth-toggle">
                <button
                    className={`toggle-button ${showLogin ? 'active' : ''}`}
                    onClick={() => setShowLogin(true)}
                >
                    Login
                </button>
                <button
                    className={`toggle-button ${!showLogin ? 'active' : ''}`}
                    onClick={() => setShowLogin(false)}
                >
                    Sign Up
                </button>
            </div>
            <div className="auth-form">
                {showLogin ? <Login /> : <SignUp />}
            </div>
        </div>
    );
};

export default AuthPage;
