import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import TopHeadlines from './components/TopHeadlines';
import NewsArchive from './components/NewsArchive';
import Notes from './components/Notes';
import NewsFeed from './components/NewsFeed';
import Helpline from './components/Helpline';
import WeatherPage from './components/Weather';
import Criminal from './components/Criminal';
import Medical from './components/Medical';
import Sports from './components/Sports';
import Ent from './components/Ent';
import Category from './components/Category';
import About from './components/About';
import ChatbotPage from './components/Chatbot'; // Import the new page

import './styles.css';

const App = () => {
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const toggleNotes = () => {
    setIsNotesOpen(!isNotesOpen);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
              <button className="floating-button" onClick={toggleNotes}>
                ✏️
              </button>
              <Notes isOpen={isNotesOpen} onClose={toggleNotes} />
            </Layout>
          }
        />
        <Route
          path="/newsfeed"
          element={
            <Layout>
              <NewsFeed />
            </Layout>
          }
        />
        <Route
          path="/notes"
          element={
            <Layout>
              <Notes isOpen={true} onClose={toggleNotes} />
            </Layout>
          }
        />
        <Route
          path="/weather"
          element={
            <Layout>
              <WeatherPage />
            </Layout>
          }
        />
                <Route path="/notes" element={<Layout><Notes /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/helpline" element={<Helpline />} />
        <Route path="/top-headlines" element={<TopHeadlines />} />
        <Route path="/news-archive" element={<NewsArchive />} />
        <Route path="/criminals" element={<Criminal />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/ent" element={<Ent />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/chatbot" element={<ChatbotPage />} /> {/* Add route */}
      </Routes>
    </Router>
  );
};

export default App;
