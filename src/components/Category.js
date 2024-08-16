import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Category.css'; // Import the CSS file for styling

const Category = () => {
  const navigate = useNavigate();

  const handleCriminalsClick = () => {
    navigate('/criminals'); // Navigate to the Criminals page
  };

  const handleMedicalClick = () => {
    navigate('/medical'); // Navigate to the Medical page
  };

  const handleSportsClick = () => {
    navigate('/sports'); // Navigate to the Sports page
  };

  const handleEntClick = () => {
    navigate('/ent'); // Navigate to the Ent page (formerly Technology)
  };

  return (
    <div className="category-container">
      <h1>NEWS CATEGORIES</h1>
      <div className="button-container">
        <button onClick={handleCriminalsClick} className="category-button" style={{ backgroundImage: 'url(https://i.pinimg.com/236x/2f/9e/3f/2f9e3fa35b6bb120cb4d63945d2ec4db.jpg)' }}>
          Criminal News
        </button>
        <button onClick={handleMedicalClick} className="category-button" style={{ backgroundImage: 'url(https://i.pinimg.com/236x/fb/f2/67/fbf2678d93a5c857a078fdd8ceb30d6e.jpg)' }}>
          Medical & Health News
        </button>
        <button onClick={handleSportsClick} className="category-button" style={{ backgroundImage: 'url(https://i.pinimg.com/736x/c8/c0/21/c8c0216484f541ef691f5920490c480f.jpg)' }}>
          Sports News
        </button>
        <button onClick={handleEntClick} className="category-button" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/7c/b2/1e/7cb21e816d6df4e3b9ca3007099f0b7e.jpg)' }}>
          Entertainment News
        </button>
      </div>
    </div>
  );
};

export default Category;