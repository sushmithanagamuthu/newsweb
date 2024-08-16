import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const years = [
    2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015,
    2014, 2013, 2012, 2011, 2010
];

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

const newspapers = [
    { name: 'Hindu', url: 'https://drive.google.com/file/d/1_lG_0wZGMY5dhqkOJbsi-DZMykAdz9bS/view?usp=sharing' },
    { name: 'Indian Express', url: 'https://indianexpress.com/' },
    { name: 'Times of India', url: 'https://drive.google.com/file/d/17nReRitofqgKE6QZIe52oeb96EAUowxT/view?usp=sharing' }
];
const NewsArchive = () => {
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    const handleMonthClick = (year, month) => {
        setSelectedYear(year);
        setSelectedMonth(month);
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setOpenDialog(true);
    };

    const handleCloseDialog = (newspaper) => {
        setOpenDialog(false);
        if (newspaper) {
            const selectedDateStr = `${selectedYear}-${selectedMonth + 1}-${selectedDate}`;
            const url = `${newspaper.url}archive/${selectedDateStr}`;
            window.open(url, '_blank');
        }
    };

    const renderCalendar = (year, month) => {
        const days = daysInMonth(year, month + 1);
        const dateArray = Array.from({ length: days }, (_, i) => i + 1);

        return (
            <Grid container spacing={2} justifyContent="center">
                {dateArray.map(day => (
                    <Grid item xs={2} sm={1} key={day}>
                        <Box
                            sx={{
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    backgroundColor: '#f0f0f0',
                                    transform: 'scale(1.1)',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                            onClick={() => handleDateClick(day)}
                        >
                            <Typography variant="body1">{day}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        );
    };

    return (
        <Box sx={{ textAlign: 'center', padding: '20px', height: '100vh', overflowY: 'scroll' }}>
            <Typography variant="h2" sx={{ marginBottom: '20px', color: '#1976d2' }}>
                News Archive
            </Typography>
            <Grid container spacing={2}>
                {selectedYear === null && selectedMonth === null && years.map(year => (
                    <Grid item xs={12} key={year}>
                        <Typography variant="h5" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>{year}</Typography>
                        <Grid container spacing={1}>
                            {months.map((month, index) => (
                                <Grid item xs={1} key={month}>
                                    <Box
                                        sx={{
                                            padding: '10px',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease-in-out',
                                            '&:hover': {
                                                backgroundColor: '#f0f0f0',
                                                transform: 'scale(1.1)',
                                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                            },
                                        }}
                                        onClick={() => handleMonthClick(year, index)}
                                    >
                                        <Typography variant="body1">{month}</Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
            {selectedYear !== null && selectedMonth !== null && (
                <Box sx={{ marginTop: '20px' }}>
                    <Typography variant="h4" sx={{ marginBottom: '20px', color: '#1976d2' }}>
                        {months[selectedMonth]} {selectedYear}
                    </Typography>
                    {renderCalendar(selectedYear, selectedMonth)}
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            marginTop: '20px',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            },
                        }}
                        onClick={() => {
                            setSelectedYear(null);
                            setSelectedMonth(null);
                        }}
                    >
                        Back to Archive
                    </Button>
                </Box>
            )}

            <Dialog open={openDialog} onClose={() => handleCloseDialog(null)}>
                <DialogTitle>Select Newspaper</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please select the newspaper you want to view for {selectedYear}-{selectedMonth + 1}-{selectedDate}.
                    </DialogContentText>
                    <Grid container spacing={2} justifyContent="center">
                        {newspapers.map(newspaper => (
                            <Grid item key={newspaper.name}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleCloseDialog(newspaper)}
                                    sx={{
                                        marginTop: '10px',
                                        transition: 'all 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                        },
                                    }}
                                >
                                    {newspaper.name}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleCloseDialog(null)} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default NewsArchive;
