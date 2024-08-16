// src/components/Layout.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import VerticalNavbar from './VerticalNavbar';
import Footer from './Footer';
import Notes from './Notes';
import Helpline from './Helpline';
import Weather from './Weather';
import FloatingButton from './FloatingButton';
import { Modal, Box } from '@mui/material';
import '../styles.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/news-archive';

  const [isNotesModalOpen, setNotesModalOpen] = useState(false);
  const [isHelplineModalOpen, setHelplineModalOpen] = useState(false);
  const [isWeatherModalOpen, setWeatherModalOpen] = useState(false);

  const openNotesModal = () => setNotesModalOpen(true);
  const closeNotesModal = () => setNotesModalOpen(false);

  const openHelplineModal = () => setHelplineModalOpen(true);
  const closeHelplineModal = () => setHelplineModalOpen(false);

  const openWeatherPage = () => {
    window.location.href = '/weather';
  };

  return (
    <div className="layout-container">
      {!hideNavAndFooter && <VerticalNavbar openHelplineModal={openHelplineModal} />}
      <div className={!hideNavAndFooter ? "content-with-navbar" : ""}>
        <main>{children}</main>
      </div>
      {!hideNavAndFooter && <Footer />}
      {/* Modals */}
      <Modal open={isWeatherModalOpen} onClose={() => setWeatherModalOpen(false)}>
        <Box className="weather-modal">
          <Weather />
        </Box>
      </Modal>
      <Helpline isOpen={isHelplineModalOpen} onClose={closeHelplineModal} />
      <Notes isOpen={isNotesModalOpen} onClose={closeNotesModal} />
      {/* FloatingButton */}
      <FloatingButton />
    </div>
  );
};

export default Layout;
