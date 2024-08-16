import React, { useState, useEffect } from 'react';
import NewspaperSelector from '../components/NewspaperSelector';
import Feeds from '../components/Feeds';
import Reviews from '../components/Reviews';
import Notes from '../components/Notes';
import About from '../components/About';
import Category from '../components/Category';
import { Typography, Box, Button, IconButton, Menu, MenuItem, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    const newspapers = [
        { name: 'Times of India', url: 'https://timesofindia.indiatimes.com/' },
        { name: 'Hindu', url: 'https://www.thehindu.com/' },
        { name: 'Economic Times', url: 'https://economictimes.indiatimes.com/' }
    ];

    // Initialize user state
    const [user, setUser] = useState(null);

    // Retrieve the logged-in username from sessionStorage
    useEffect(() => {
        const loggedInUsername = sessionStorage.getItem("name");
        if (loggedInUsername) {
            setUser({
                username: loggedInUsername,
                fullName: loggedInUsername, // Assuming the username is also used as the full name, or you can fetch fullName if needed
            });
        }
    }, []);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        sessionStorage.removeItem("name"); // Remove user data from sessionStorage
        setUser(null); // Reset user state
        setAnchorEl(null);
    };

    return (
        <main className="home-main-content">
            <Box sx={{ padding: '20px' }}>
                {/* Top Right Corner: Login, Signup, and Profile */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '20px' }}>
                    {!user ? (
                        <>
                            <Link to="/login" style={{ marginRight: '15px', textDecoration: 'none' }}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                                    Login
                                </Typography>
                            </Link>
                            <Link to="/signup" style={{ textDecoration: 'none' }}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                                    Signup
                                </Typography>
                            </Link>
                        </>
                    ) : (
                        <Box sx={{ marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h6" sx={{ marginRight: '10px', color: '#1976d2' }}>
                                {user.username}
                            </Typography>
                            <IconButton onClick={handleProfileClick} sx={{ padding: '0' }}>
                                <Typography variant="h6" sx={{ backgroundColor: '#1976d2', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {user.username.charAt(0).toUpperCase()}
                                </Typography>
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleProfileClose}
                                PaperProps={{
                                    sx: {
                                        width: 200,
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    },
                                }}
                            >
                                <Box sx={{ padding: '10px', textAlign: 'center' }}>
                                    <Typography variant="subtitle1">{user.fullName}</Typography>
                                    <Divider sx={{ marginY: '10px' }} />
                                    <MenuItem onClick={handleLogout}>
                                        Logout
                                    </MenuItem>
                                </Box>
                            </Menu>
                        </Box>
                    )}
                </Box>

                {/* Introduction Section */}
                <Box
                    sx={{
                        textAlign: 'center',
                        marginBottom: '40px',
                        padding: '20px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#fff'
                    }}
                >
                    <Typography variant="h3" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
                        Welcome to the News Period
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: '20px' }}>
                        "Your daily dose of news from around the world"
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                        Our newspaper application brings you the latest news from the most trusted sources. Stay updated with the current events from around the world.
                    </Typography>
                    <Link to="/news-archive">
                        <Button variant="contained" color="primary" sx={{ marginTop: '20px', padding: '8px 16px' }}>
                            Go to News Archive
                        </Button>
                    </Link>
                </Box>

                {/* Feeds Section */}
                <Box sx={{ marginBottom: '40px' }}>
                    <Feeds />
                </Box>

                {/* Category Section */}
                <Box sx={{ marginBottom: '40px' }}>
                    <Category />
                </Box>

                {/* Newspaper Selector */}
                <Box sx={{ marginBottom: '40px' }}>
                    <NewspaperSelector newspapers={newspapers} />
                </Box>

                {/* Notes Section */}
                <Box sx={{ marginBottom: '40px' }}>
                    <Notes />
                </Box>

                {/* Reviews Section */}
                <Box sx={{ marginBottom: '40px' }}>
                    <Reviews />
                </Box>
            </Box>
        </main>
    );
};

export default Home;
