import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import '../styles.css';  // Import the CSS file

const newspapers = [
    {
        name: 'Times of India',
        url: 'https://timesofindia.indiatimes.com',
        imageUrl: "https://i.pinimg.com/236x/9b/ed/db/9beddb821990d25231948cd76687e1e6.jpg"
    },
    {
        name: 'The Hindu',
        url: 'https://www.thehindu.com',
        imageUrl: "https://i.pinimg.com/236x/0c/9a/96/0c9a967bbfc55f80982663326a3f55ac.jpg"
    },
    {
        name: 'The Indian Express',
        url: 'https://indianexpress.com/',
        imageUrl: "https://i.pinimg.com/236x/e6/2d/69/e62d69e322502d275e87472bbdfaa6d8.jpg"
    }
];

const NewspaperSelector = () => {
    return (
        <Box className="newspaper-selector-container">
            <Grid container className="newspaper-selector-grid" spacing={3}>
                {newspapers.map((newspaper, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Box 
                            className="newspaper-grid-item"
                            onClick={() => window.open(newspaper.url, '_blank')}
                        >
                            <Typography variant="h6" className="newspaper-title">
                                {newspaper.name}
                            </Typography>
                            <img 
                                src={newspaper.imageUrl} 
                                alt={newspaper.name} 
                                className="newspaper-image" 
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default NewspaperSelector;
