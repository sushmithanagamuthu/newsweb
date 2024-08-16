import React, { useState } from 'react';
import './NewsFeed.css';

const initialNewsItems = [
  { id: 1, title: "", description: "AIMIM to organize job fair in Hyderabad - Register online", detailedReview: "Hyderabad: The All India Majlis-e-Ittehadul Muslimeen (AIMIM) is organizing a job fair in Hyderabad on Saturday.Both freshers and experienced candidates are eligible to participate in the fair.It will also provide work-from-home jobs for female candidates.100 companies to participate", imageUrl: "https://assets-news-bcdn.dailyhunt.in/cmd/resize/1200x900_90/fetchdata20/images/17/1a/8f/171a8f25ab1a636e5ce562aedeb6b5c979d3131d97ce3e60c8c3383085851494.webp", time: "1hr", shares: 5, likes: 20 },
  { id: 2, title: "", description: "IndiGo to offer business class 'IndiGoStretch', fares starting at Rs 18,000",detailedReview: "Hyderabad: The All India Majlis-e-Ittehadul Muslimeen (AIMIM) is organizing a job fair in Hyderabad on Saturday.Both freshers and experienced candidates are eligible to participate in the fair.It will also provide work-from-home jobs for female candidates.100 companies to participate", imageUrl: "https://assets-news-bcdn.dailyhunt.in/cmd/resize/359x202_90/fetchdata20/images/d6/3d/85/d63d85bef2caf6369d89747dfaf02378350537bf3217bad2184f6b9d12cfe837.webp", time: "2hr", shares: 3, likes: 30 },
  { id: 3, title: "", description: " Supreme Court Talks Tough Delhi Coaching Centre Tragedy", detailedReview: "Hyderabad: The All India Majlis-e-Ittehadul Muslimeen (AIMIM) is organizing a job fair in Hyderabad on Saturday.Both freshers and experienced candidates are eligible to participate in the fair.It will also provide work-from-home jobs for female candidates.100 companies to participate", imageUrl: "https://assets-news-bcdn.dailyhunt.in/cmd/resize/700x400_90/fetchdata20/images/ff/26/db/ff26dbdbf34f0a4ebccfc43bd322011aa4dd5f726213aa618d0df48aeda18cc1.webp", time: "3hr", shares: 7, likes: 25 },
  { id: 4, title: "", description: "Imran Khan's party forms 3-member committee to monitor corruption in Khyber Pakhtunkhwa amid allegations", detailedReview:"Hyderabad: The All India Majlis-e-Ittehadul Muslimeen (AIMIM) is organizing a job fair in Hyderabad on Saturday.Both freshers and experienced candidates are eligible to participate in the fair.It will also provide work-from-home jobs for female candidates.100 companies to participate",imageUrl: "https://assets-news-bcdn.dailyhunt.in/cmd/resize/600x450_90/fetchdata20/images/39/09/3f/39093f393d587c49c3bc8d9d11cec4e45fb606d17d5b064d7af5aca6f3feeb48.webp", time: "4hr", shares: 1, likes: 10 },
  { id: 5, title: "", description: "Jaishankar thanks outgoing Israel envoy Gilon for contribution in strengthening ties",detailedReview: "Hyderabad: The All India Majlis-e-Ittehadul Muslimeen (AIMIM) is organizing a job fair in Hyderabad on Saturday.Both freshers and experienced candidates are eligible to participate in the fair.It will also provide work-from-home jobs for female candidates.100 companies to participate", imageUrl: "https://assets-news-bcdn.dailyhunt.in/cmd/resize/600x450_90/fetchdata20/images/d5/13/c2/d513c26582cf6f11aef858ea4e8902d4fea560ff96637a54c202f1df6b5a4722.webp", time: "5hr", shares: 4, likes: 15 },
  { id: 6, title: "", description: "Paris Olympics 2024 Day 10 Live: India vs Romania in Table Tennis Women's Team Round of 16 Clash",detailedReview: "Hyderabad: The All India Majlis-e-Ittehadul Muslimeen (AIMIM) is organizing a job fair in Hyderabad on Saturday.Both freshers and experienced candidates are eligible to participate in the fair.It will also provide work-from-home jobs for female candidates.100 companies to participate", imageUrl: "https://assets-news-bcdn.dailyhunt.in/cmd/resize/640x360_90/fetchdata20/images/01/d3/34/01d334b47618e60b12103403f9c69222eb3747c13df426510a24b18f11d6ab35.webp", time: "6hr", shares: 2, likes: 12 },
  { id: 7, title: "", description: "Asha Kiran shelter home deaths: Delhi HC directs water testing, seeks report from authorities", detailedReview: "Hyderabad: The All India Majlis-e-Ittehadul Muslimeen (AIMIM) is organizing a job fair in Hyderabad on Saturday.Both freshers and experienced candidates are eligible to participate in the fair.It will also provide work-from-home jobs for female candidates.100 companies to participate", imageUrl: "https://assets-news-bcdn.dailyhunt.in/cmd/resize/5256x2956_90/fetchdata20/images/64/58/e5/6458e5a500681df548cebb856089f2e7ba1b6a11eddf7a6a421454d377ae0976.webp", time: "7hr", shares: 6, likes: 18 },
  { id: 8, title: "", description: "IndiGo to offer business class 'IndiGoStretch', fares starting at Rs 18,000", detailedReview: "Detailed review about News Title 8...", imageUrl: "https://assets-news-bcdn.dailyhunt.in/cmd/resize/359x202_90/fetchdata20/images/d6/3d/85/d63d85bef2caf6369d89747dfaf02378350537bf3217bad2184f6b9d12cfe837.webp", time: "8hr", shares: 8, likes: 22 },
  { id: 9, title: "", description: "Travel Spots For Bibliophiles: Top Destinations For Bookworms", detailedReview: "Detailed review about News Title 9...", imageUrl: "https://assets-news-bcdn.dailyhunt.in/cmd/resize/760x427_90/fetchdata20/images/56/76/4c/56764c5ecc476025efa8d595f6c89b1416debfbd983231dc4ae8c9d01e7b02e0.webp", time: "9hr", shares: 9, likes: 28 },
  { id: 10, title: "", description: "Berths for babies on trains: Railways Minister says experiment held to facilitate ease of travel for mothers", detailedReview: "Detailed review about News Title 10...", imageUrl: "https://assets-news-bcdn.dailyhunt.in/cmd/resize/1280x720_90/fetchdata20/images/29/98/f5/2998f51d912cd2aaf3a2fff4cfb310994c4816b833477f9606e06a2f1149ab1b.webp", time: "10hr", shares: 10, likes: 35 },
];

const NewsFeed = () => {
  const [newsItems, setNewsItems] = useState(initialNewsItems);
  const [expandedItemId, setExpandedItemId] = useState(null);

  const handleReadMore = (id) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  const handleLike = (id) => {
    setNewsItems(prevNewsItems =>
      prevNewsItems.map(item =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  return (
    <div className="news-feed">
      {newsItems.map(item => (
        <div key={item.id} className="news-item">
          <img src={item.imageUrl} alt={item.title} className="news-image" />
          <div className="news-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {expandedItemId === item.id && (
              <p className="news-detailed-review">{item.detailedReview}</p>
            )}
            <button className="read-more-button" onClick={() => handleReadMore(item.id)}>
              {expandedItemId === item.id ? 'Read Less' : 'Read More'}
            </button>
          </div>
          <div className="news-footer">
            <span className="news-time">{item.time}</span>
            <div className="news-actions">
              <div className="likes" onClick={() => handleLike(item.id)}>
                <span className="like-symbol">👍</span> {item.likes}
              </div>
              <div className="shares">
                <span className="share-symbol">🔗</span> {item.shares}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;