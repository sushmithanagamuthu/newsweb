import React from 'react';
import { Box, Typography, Card, CardContent, Divider, CardMedia, Grid } from '@mui/material';
import '../styles.css';

// Sample feeds data
const feeds = [
    {
        title: 'Breaking News: Market Updates',
        content: 'The stock market is experiencing unprecedented fluctuations due to recent geopolitical events...',
        imageUrl: 'https://tse2.mm.bing.net/th?id=OIP._uHRs4LE9j-HKYfWHWq38AHaDa&pid=Api&P=0&h=180',
    },
    {
        title: 'Sports Highlights',
        content: 'In an exciting match yesterday, the local team won the championship with a last-minute goal...',
        imageUrl: 'https://images.pexels.com/photos/5247137/pexels-photo-5247137.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        title: 'Technology Advances',
        content: 'New advancements in AI technology are changing the way we interact with our devices...',
        imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
    }
];

const Feeds = () => {
    return (
        <Box className="feeds-container">
            <Typography variant="h4" className="feeds-header">
                Latest Feeds
            </Typography>
            <Grid container spacing={3}>
                {feeds.map((feed, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="feed-card">
                            <CardMedia
                                component="img"
                                height="200"
                                image={feed.imageUrl}
                                alt={feed.title}
                                className="feed-card-image"
                            />
                            <CardContent>
                                <Typography variant="h6" component="div" className="feed-card-title">
                                    {feed.title}
                                </Typography>
                                <Divider className="feed-card-divider" />
                                <Typography variant="body1" className="feed-card-content">
                                    {feed.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Feeds;
