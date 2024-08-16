// src/components/VerticalNavbar.js
import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Menu, MenuItem, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import './VerticalNavbar.css';

const VerticalNavbar = ({ openHelplineModal }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="vertical-navbar">
            <List component="nav">
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>

                <ListItem button component={Link} to="/about">
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>

                <ListItem button component={Link} to="/newsfeed">
                    <ListItemIcon>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Newsfeed" />
                </ListItem>

                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <MoreVertIcon />
                    </ListItemIcon>
                    <ListItemText primary="More" />
                </ListItem>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem component={Link} to="/top-headlines" onClick={handleClose}>
                        Top Headlines
                    </MenuItem>
                    <MenuItem onClick={() => {
                        handleClose();
                        openHelplineModal();
                    }}>
                        Helpline
                    </MenuItem>
                    <MenuItem component={Link} to="/chatbot" onClick={handleClose}>
                        Bot
                    </MenuItem>
                    <MenuItem component={Link} to="/weather" onClick={handleClose}>
                        Weather
                    </MenuItem>
                </Menu>

                <Divider />
            </List>
        </div>
    );
};

export default VerticalNavbar;
