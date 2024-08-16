import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';
import './Weather.css'; // Import the CSS file

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('New York'); // Default city
    const [inputCity, setInputCity] = useState('');

    const fetchWeatherData = async (city) => {
        try {
            const response = await axios.get('https://api.weatherapi.com/v1/forecast.json', {
                params: {
                    key: '7bd28770db6e48578f5115829240508',
                    q: city,
                    days: 5,
                },
            });
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        fetchWeatherData(city);
    }, [city]);

    const handleCityChange = (e) => {
        setInputCity(e.target.value);
    };

    const handleCitySubmit = () => {
        setCity(inputCity);
        setInputCity('');
    };

    if (!weatherData) {
        return <Typography>Loading...</Typography>;
    }

    const { location, current, forecast } = weatherData;

    return (
        <Box className="weather-container">
            <Paper className="weather-paper" elevation={3}>
                <Typography variant="h5" gutterBottom>
                    {`${location.name}, ${location.region}, ${location.country}`}
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex" alignItems="center">
                        <img src={current.condition.icon} alt="weather icon" className="weather-icon" />
                        <Typography variant="h3" sx={{ ml: 2 }}>{`${current.temp_c}°C`}</Typography>
                    </Box>
                    <Typography variant="h6">{current.condition.text}</Typography>
                </Box>
                <Box className="weather-details">
                    <Typography variant="body1">Wind: {`${current.wind_kph} kph`}</Typography>
                    <Typography variant="body1">Precip: {`${current.precip_mm} mm`}</Typography>
                    <Typography variant="body1">Pressure: {`${current.pressure_mb} mb`}</Typography>
                </Box>
                <Box className="forecast">
                    {forecast.forecastday.map((day) => (
                        <Box key={day.date} className="forecast-item">
                            <Typography variant="body1">
                                {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                            </Typography>
                            <img src={day.day.condition.icon} alt="forecast icon" className="forecast-icon" />
                            <Typography variant="body1">{`${day.day.avgtemp_c}°C`}</Typography>
                        </Box>
                    ))}
                </Box>
                <Box mt={2}>
                    <TextField
                        label="Enter City"
                        variant="outlined"
                        value={inputCity}
                        onChange={handleCityChange}
                        fullWidth
                    />
                    <Button variant="contained" color="primary" onClick={handleCitySubmit} sx={{ mt: 2 }}>
                        Get Weather
                    </Button>
                </Box>
            </Paper>  
        </Box>
    );
};

export default Weather;
