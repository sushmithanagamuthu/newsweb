import React, { useEffect, useState } from 'react';

const NewsComponent = () => {
    const [news, setNews] = useState([]);
    const apiKey = 'KB3CbF9bVAHHv78qhPXX1JoW';
    const query = 'latest';
    const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${encodeURIComponent(query)}&count=10`;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
                        'X-RapidAPI-Key': apiKey
                    }
                });
                const data = await response.json();
                setNews(data.value || []); // Handle cases where data.value might be undefined
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchNews();
    }, [url, apiKey]);

    console.log('News:', news); // Add this to check if news is being fetched

    return (
        <div>
            <h1>News</h1>
            <ul>
                {news.length > 0 ? (
                    news.map((item, index) => (
                        <li key={index}>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                {item.title}
                            </a>
                            <p>{item.description}</p>
                        </li>
                    ))
                ) : (
                    <p>No news available.</p>
                )}
            </ul>
        </div>
    );
};

export default NewsComponent;
