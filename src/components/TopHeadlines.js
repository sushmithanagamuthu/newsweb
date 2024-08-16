import React, { useEffect, useState } from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { getTopHeadlines } from '../components/newsService';

const TopHeadlines = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newsArticles = await getTopHeadlines();
                setArticles(newsArticles);
            } catch (error) {
                console.error('Error fetching top headlines:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f4f4f9' }}>
            <Typography 
                variant="h4" 
                sx={{ 
                    marginBottom: '20px', 
                    fontWeight: 'bold', 
                    textAlign: 'center', 
                    color: '#333' 
                }}
            >
                Top Headlines
            </Typography>
            <Grid container spacing={3}>
                {articles.map((article, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card 
                            sx={{ 
                                maxWidth: 345, 
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                                transition: 'transform 0.2s',
                                height: '100%', 
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    height: 140,
                                    background: `url(${article.urlToImage}) no-repeat center center`,
                                    backgroundSize: 'cover',
                                    borderRadius: '4px 4px 0 0'
                                }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography 
                                    variant="h6" 
                                    sx={{ 
                                        fontWeight: 'bold', 
                                        marginBottom: '10px',
                                        color: '#1976d2'
                                    }}
                                >
                                    {article.title}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        color: '#555',
                                        marginBottom: '10px'
                                    }}
                                >
                                    {article.description}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    sx={{ 
                                        color: '#777' 
                                    }}
                                >
                                    {new Date(article.publishedAt).toLocaleDateString()}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TopHeadlines;
