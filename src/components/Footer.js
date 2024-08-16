import React from 'react';
import { Box, Grid, Typography, Link, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink for routing
import '../styles.css';  // Import the CSS file

const Footer = () => (
    <Box className="footer-container">
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                        <img src="path-to-your-logo.png" alt="Logo" className="footer-logo" />
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        Stay updated with the latest news from around the world.
                    </Typography>
                    <Box className="footer-social-links">
                        <Link href="https://www.linkedin.com" color="inherit" underline="none" className="footer-social-link">
                            <img src="https://up.yimg.com/ib/th?id=OIP.w_zDkEJ9aLiWR-g0rff8hwHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121" alt="LinkedIn" />
                        </Link>
                        <Link href="https://www.facebook.com" color="inherit" underline="none" className="footer-social-link">
                            <img src="https://s.yimg.com/fz/api/res/1.2/bfhuQx02Fd0qgLXZbH1dww--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/ff6c2336-05c2-34bf-8d42-c8eb48fbacf1/t_500x300" alt="Facebook" />
                        </Link>
                        <Link href="https://www.instagram.com" color="inherit" underline="none" className="footer-social-link">
                            <img src="https://up.yimg.com/ib/th?id=OIP.A_QLZ7Y9nBwaWnkhCbvGmQHaHZ&pid=Api&rs=1&c=1&qlt=95&w=105&h=105" alt="Instagram" />
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom className="footer-heading">
                        Sections
                    </Typography>
                    <Link component={RouterLink} to="/" color="inherit" underline="none" className="footer-link">
                        Home
                    </Link>
                    <Link component={RouterLink} to="/trending" color="inherit" underline="none" className="footer-link">
                        Trending
                    </Link>
                    <Link component={RouterLink} to="/top-headlines" color="inherit" underline="none" className="footer-link">
                        Top Headlines
                    </Link>
                    <Link component={RouterLink} to="/newscomponent" color="inherit" underline="none" className="footer-link">
                        NewsComponent
                    </Link>
                    <Link href="#" color="inherit" underline="none" className="footer-link">
                        Sports
                    </Link>
                    <Link href="#" color="inherit" underline="none" className="footer-link">
                        Entertainment
                    </Link>
                    <Link href="#" color="inherit" underline="none" className="footer-link">
                        Technology
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom className="footer-heading">
                        Quick Links
                    </Typography>
                    <Link component={RouterLink} to="/about" color="inherit" underline="none" className="footer-link">
                        About Us
                    </Link>
                    <Link component={RouterLink} to="/contact" color="inherit" underline="none" className="footer-link">
                        Contact Us
                    </Link>
                    <Link component={RouterLink} to="/privacy-policy" color="inherit" underline="none" className="footer-link">
                        Privacy Policy
                    </Link>
                    <Link component={RouterLink} to="/terms" color="inherit" underline="none" className="footer-link">
                        Terms of Service
                    </Link>
                    <Link component={RouterLink} to="/advertise" color="inherit" underline="none" className="footer-link">
                        Advertise
                    </Link>
                    <Link component={RouterLink} to="/weather" color="inherit" underline="none" className="footer-link">
                        Weather
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom className="footer-heading">
                        Contact
                    </Typography>
                    <Typography variant="body2" className="footer-contact-info">
                        Email: <Link href="mailto:info@newspaper.com" color="inherit" underline="none">info@newspaper.com</Link>
                    </Typography>
                    <Typography variant="body2" className="footer-contact-info">
                        Phone: <Link href="tel:+1234567890" color="inherit" underline="none">+1 234 567 890</Link>
                    </Typography>
                    <Typography variant="body2" className="footer-contact-info">
                        Address: 123 News Street, City, Country
                    </Typography>
                    <Link component={RouterLink} to="/feedback" color="inherit" underline="none" className="footer-link">
                        Feedback
                    </Link>
                </Grid>
            </Grid>
            <Box className="footer-copy">
                <Typography variant="body2">
                    © 2024 Newspaper Inc.
                </Typography>
            </Box>
        </Container>
    </Box>
);

export default Footer;
