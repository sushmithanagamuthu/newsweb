import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import newes from "./pexels-photo-599982.jpeg";
import tec from "./pexels-photo-256381.jpeg";
import spo from "./pexels-photo-248547.jpeg";

// Styled components for better visuals
const Image = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    marginTop: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
});

const About = () => {
    return (
        <Box className="about-container" sx={{ padding: '20px' }}>
            <Typography variant="h3" className="about-title" sx={{ paddingBottom: '10px' }}>
                About Us
            </Typography>
            <Typography variant="body1" className="about-intro" sx={{ marginBottom: '20px' }}>
                Welcome to our newspaper application! Our platform provides a comprehensive source of news from around the world. Our mission is to keep you informed and updated with the latest developments in various fields, including politics, technology, sports, and entertainment.
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper className="mission-paper" elevation={3} sx={{ padding: '20px' }}>
                        <Typography variant="h6" className="mission-title" sx={{ marginBottom: '10px' }}>
                            Our Mission
                        </Typography>
                        <Typography variant="body2" className="mission-content">
                            Our team is dedicated to delivering accurate and timely information to enhance your knowledge and keep you connected with current events. We strive to offer diverse perspectives and in-depth analysis to help you stay informed and make well-rounded decisions.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Image src={newes} alt="News" />
                </Grid>
            </Grid>

            <Typography variant="h5" className="about-unique" sx={{ marginTop: '30px', marginBottom: '10px' }}>
                What Sets Us Apart
            </Typography>
            <Typography variant="body1" className="about-unique-content" sx={{ marginBottom: '20px' }}>
                Unlike other news platforms, our application focuses on delivering a user-friendly experience with customizable options to suit your preferences. Whether you want to browse the latest headlines or dive deep into specific topics, our intuitive interface and advanced features are designed to make your news reading experience seamless and enjoyable.
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Image src={tec} alt="Technology" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Image src={spo} alt="Sports" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;