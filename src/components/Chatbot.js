import React, { useState } from 'react';
import './Chatbot.css'; // Ensure you have a Chatbot.css file for styling

const responses = {
  "What is NewsPeriod?": "NewsPeriod is an application where you can access a variety of newspapers from around the world, including past years' editions and the latest news.",
  "How can I access past years' newspapers?": "You can access past years' newspapers through our 'Explor Now' section in the app, where you can browse and search for newspapers from specific dates.",
  "Where can I find the latest news?": "The latest news can be found in the 'UPDATES' section of the app, which provides up-to-date news from around the world.",
  "How do I check the weather?": "To check the weather, visit the 'SUN' icon in the app, where you can get the latest weather updates for your location.",
  "Can I take notes in NewsPulse?": "Yes, you can take notes in the 'Notes' section of the app. You can write and save your notes directly within the app.",
  "Is there a way to save my notes?": "Absolutely! You can save your notes in the 'Notes' section, and they will be stored within the app for future reference.",
  "How can I contact support?": "For support, please visit the 'Contact Us' section of the app, where you'll find information on how to get in touch with our support team.",
  "Can I customize my news feed?": "Currently, NewsPERIOD does not offer customizable news feeds. However, you can browse various sections to find news that interests you.",
  "How often is the news updated?": "The news in the 'Latest News' section is updated regularly to ensure you have access to the most current information.",
  "What should I do if I encounter a bug?": "If you encounter a bug, please report it through the 'Contact Us' section, and our team will work on resolving the issue as quickly as possible.",
  "Do I need to create an account to use NewsPeriod?" : "No account is required to browse news and weather, but creating an account will allow you to save notes and access more personalized features.",
  "Does NewsPeriod work offline?" : "Some features, such as accessing saved notes, are available offline, but accessing live news and weather requires an internet connection."
};

const Bot = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const getResponse = () => {
    setResponse(responses[query] || "Sorry, I don't understand that question.");
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-container">
        <div className="chatbot-header">Chatbot</div>
        <div className="chatbot-body">
          <input
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Ask me a question..."
          />
          <button onClick={getResponse}>Send</button>
          <div className="chatbot-response">{response}</div>
        </div>
      </div>
    </div>
  );
};

export default Bot;