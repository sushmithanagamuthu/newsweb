import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import '../styles.css';

const reviews = [
    {
        user: 'John Doe',
        review: 'Great app! The news selection is very comprehensive and easy to navigate.',
    },
    {
        user: 'Jane Smith',
        review: 'I love the clean design and the variety of newspapers available. Highly recommend!',
    },
    {
        user: 'Samuel Lee',
        review: 'Very user-friendly and informative. The search functionality could be improved though.',
    }
];

const Reviews = () => {
    return (
        <Box className="review-container">
            <Box className="review-image-container">
                <img src="https://i.pinimg.com/564x/27/94/ec/2794ec61b8c48905037557a168bd8057.jpg" alt="Your image" className="review-image" />
            </Box>
            <Box className="review-content">
                <Typography variant="h4" className="review-header">
                    Reviews
                </Typography>
                {reviews.map((review, index) => (
                    <Box key={index} className="review-item">
                        <Typography variant="h6" className="review-user">
                            {review.user}
                        </Typography>
                        <Typography variant="body1" className="review-text">
                            "{review.review}"
                        </Typography>
                        {index < reviews.length - 1 && <Divider className="review-divider" />}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Reviews;
