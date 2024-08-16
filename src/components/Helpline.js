import React from 'react';
import { Box, Typography, Link as MuiLink, Modal } from '@mui/material';
import './Helpline.css';

const Helpline = ({ isOpen, onClose }) => {
  const [helplineData, setHelplineData] = React.useState([]);

  React.useEffect(() => {
    fetch('/helpline.json')
      .then(response => response.json())
      .then(data => setHelplineData(data))
      .catch(error => console.error('Error loading helpline information:', error));
  }, []);

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box className="helpline-modal" sx={{ ...modalStyle }}>
        <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold', textAlign: 'center' }}>
          Helpline Information
        </Typography>
        {helplineData.map((item, index) => (
          <Box className="helpline-item" key={index} sx={{ marginBottom: '20px' }}>
            <img src={item.image} alt={item.title} className="helpline-image" />
            <Box className="helpline-content">
              <Typography variant="h6" className="helpline-title">{item.title}</Typography>
              {item.phone && <Typography variant="body1" className="helpline-phone">Phone: <MuiLink href={`tel:${item.phone}`} color="primary">{item.phone}</MuiLink></Typography>}
              {item.email && <Typography variant="body1" className="helpline-email">Email: <MuiLink href={`mailto:${item.email}`} color="primary">{item.email}</MuiLink></Typography>}
              {item.quote && <Typography variant="body2" className="helpline-quote">"{item.quote}"</Typography>}
            </Box>
          </Box>
        ))}
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw', // Use viewport width for responsiveness
  maxWidth: '1200px', // Maximum width for larger screens
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto', // Enable scrolling if content exceeds height
};

export default Helpline;
