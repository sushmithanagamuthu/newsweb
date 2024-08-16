import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const NewsItem = ({ article }) => {
    return (
        <Card sx={{ margin: '20px 0' }}>
            <CardContent>
                <Typography variant="h5">{article.title}</Typography>
                <Typography variant="body2">{article.description}</Typography>
            </CardContent>
        </Card>
    );
};

export default NewsItem;
