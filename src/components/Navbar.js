import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, TextField, Container, Button, IconButton, Menu, MenuItem, Tooltip, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [username, setUsername] = useState('');
    const [anchorEl, setAnchorEl] = useState(null); // State for dropdown menu anchor
    const open = Boolean(anchorEl);

    useEffect(() => {
        const name = sessionStorage.getItem('name');
        if (name) {
            setUsername(name);
        }
    }, []);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('name');
        setUsername('');
        handleMenuClose();
        window.location.href = '/login';
    };

    const getFirstLetter = (name) => name.charAt(0).toUpperCase();

    return (
        <>
            <AppBar 
                position="sticky" 
                sx={{ 
                    backgroundColor: 'blue', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    padding: '10px 0'
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography 
                            variant="h6" 
                            component={Link} 
                            to="/" 
                            sx={{ 
                                color: '#fff',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '28px'
                            }}
                        >
                            NewsApp
                        </Typography>
                        <TextField
                            variant="outlined"
                            placeholder="Search..."
                            size="small"
                            sx={{ 
                                borderRadius: '20px',
                                padding: '5px 15px',
                                border: 'none',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                backgroundColor: '#fff',
                                margin: '0 20px',
                                flexShrink: 0
                            }}
                        />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Button 
                                component={Link} 
                                to="/" 
                                sx={{ 
                                    color: '#fff', 
                                    textTransform: 'none', 
                                    fontSize: '16px',
                                    whiteSpace: 'nowrap',
                                    marginRight: '0.3in',
                                    '&:hover': { color: '#ffccbc' }
                                }}
                            >
                                Home
                            </Button>
                            <Button 
                                component={Link} 
                                to="/newsfeed" 
                                sx={{ 
                                    color: '#fff', 
                                    textTransform: 'none', 
                                    fontSize: '16px',
                                    whiteSpace: 'nowrap',
                                    marginRight: '0.6in',
                                    '&:hover': { color: '#ffccbc' }
                                }}
                            >
                                NewsFeed
                            </Button>
                            <Button 
                                component={Link} 
                                to="/top-headlines" 
                                sx={{ 
                                    color: '#fff', 
                                    textTransform: 'none', 
                                    fontSize: '16px',
                                    whiteSpace: 'nowrap',
                                    marginRight: '0.3in',
                                    '&:hover': { color: '#ffccbc' }
                                }}
                            >
                                Top Headlines
                            </Button>
                            <MuiLink 
                                component={Link} 
                                to="/helpline" 
                                sx={{ 
                                    color: '#fff', 
                                    textTransform: 'none', 
                                    fontSize: '16px',
                                    whiteSpace: 'nowrap',
                                    marginRight: '0.3in',
                                    '&:hover': { color: '#ffccbc' }
                                }}
                            >
                                Helpline
                            </MuiLink>
                            {!username ? (
                                <>
                                    <Button 
                                        component={Link} 
                                        to="/login" 
                                        sx={{ 
                                            color: '#fff', 
                                            textTransform: 'none', 
                                            fontSize: '16px',
                                            whiteSpace: 'nowrap',
                                            marginRight: '0.3in',
                                            '&:hover': { color: '#ffccbc' }
                                        }}
                                    >
                                        Login
                                    </Button>
                                    <Button 
                                        component={Link} 
                                        to="/signup" 
                                        sx={{ 
                                            color: '#fff', 
                                            textTransform: 'none', 
                                            fontSize: '16px',
                                            whiteSpace: 'nowrap',
                                            '&:hover': { color: '#ffccbc' }
                                        }}
                                    >
                                        Signup
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Tooltip title={username}>
                                        <IconButton
                                            onClick={handleMenuOpen}
                                            sx={{ 
                                                color: '#fff', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center', 
                                                borderRadius: '50%', 
                                                width: '40px', 
                                                height: '40px',
                                                fontSize: '20px',
                                                backgroundColor: '#3d52ba',
                                                '&:hover': { backgroundColor: '#2a3b8f' }
                                            }}
                                        >
                                            {getFirstLetter(username)}
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleMenuClose}
                                        PaperProps={{ sx: { width: 200 } }}
                                    >
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                    </Menu>
                                </>
                            )}
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbar;