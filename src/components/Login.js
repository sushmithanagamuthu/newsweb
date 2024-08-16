import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; 
import '../login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await axios.get(`http://localhost:8080/api/users/${username}`);
                const user = response.data;

                if (!user) {
                    setError("User not found");
                } else if (user.password === password) {
                    sessionStorage.setItem("name", username);
                    navigate("/");
                } else {
                    setError("Incorrect password");
                }
            } catch (err) {
                setError('Login failed. Please try again.');
                console.error("Login failed due to: ", err.message);
            }
        } else {
            setError("Please fill in all fields.");
        }
    };

    const validate = () => username && password;

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p className="signup-link">
                Don't have an account? <Link to="/signup">Create New Account</Link>
            </p>
        </div>
    );
};

export default Login;
