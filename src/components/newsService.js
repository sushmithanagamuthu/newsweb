import axios from 'axios';

const API_KEY = 'b87dbdf8d5714be48594b781212eef7f';
const BASE_URL = 'https://newsapi.org/v2';

export const getTopHeadlines = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
            params: {
                country: 'us',
                apiKey: API_KEY,
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching top headlines:', error);
        throw error;
    }
};
