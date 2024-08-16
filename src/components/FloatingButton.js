import React from 'react';
import { Fab } from '@mui/material';
import { NoteAdd } from '@mui/icons-material'; // You can use other icons as needed
import { useNavigate } from 'react-router-dom';

const FloatingButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/notes'); // Navigates to the Notes page
  };

  return (
    <Fab
      color="primary"
      aria-label="notes"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
      onClick={handleClick}
    >
      <NoteAdd />
    </Fab>
  );
};

export default FloatingButton;
