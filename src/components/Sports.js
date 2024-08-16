import React from 'react';
import '../Criminal.css'; // Import your CSS file for styling

const Sports = () => {
  const newsItems = [
    {
      id: 1,
      headline: 'Zheng Qinwen wins Chinas first Olympic tennis singles gold, inspired by Li Na and Liu Xiang',
      imageUrl: 'https://media.assettype.com/newindianexpress%2F2024-08%2F49ac6ad6-7632-4e06-a6df-b77d67b9f811%2FZheng%20Qinwen.jpg?w=1200&auto=format%2Ccompress&fit=max',
    },
    {
      id: 2,
      headline: 'Olympic golf has its golden moment as momentum builds from dazzling show in Paris',
      imageUrl: 'https://media.assettype.com/newindianexpress%2F2024-08%2F2ece15e8-72f8-4d14-9bbb-4c0dafa95140%2FAP24217601787218.jpg?w=1200&auto=format%2Ccompress&fit=max',
    },
    {
      id: 3,
      headline: 'Paris Olympics 2024: US Bobby Finke shatters 1500m world record as Sjoestroem dominates',
      imageUrl: 'https://media.assettype.com/newindianexpress%2F2024-08%2Fa4f94fe7-ec09-48dc-8fbc-e71b0c89b1a8%2FBobby%20Finke.jpg?w=1200&auto=format%2Ccompress&fit=max',
    },
    {
      id: 4,
      headline: 'Double Olympic medallist Manu Bhaker to be India flag bearer at closing ceremony in Paris',
      imageUrl: 'https://media.assettype.com/newindianexpress%2F2024-08%2F2df66286-77d8-4437-bd10-37604c740b6e%2FANI_20240803230000.jpg?rect=0%2C0%2C600%2C338&w=1200&auto=format%2Ccompress&fit=max',
    },
    {
      id: 5,
      headline: 'Rohidas gets one-match ban, set to miss Indias Olympic hockey semi-final; HI lodges appeal',
      imageUrl: 'https://media.assettype.com/newindianexpress%2F2024-08%2F02606ea1-8fbd-4fbb-908d-d147f312541c%2FAmit%20Rohidas.jpg?w=1200&auto=format%2Ccompress&fit=max',
    },
    {
      id: 6,
      headline: 'Germany wins Olympic team relay triathlon.The relay is a four-person sprint triathlon',
      imageUrl: 'https://media.assettype.com/newindianexpress%2F2024-08%2F4ba3e8ed-8908-4495-a1bd-b25148a68b52%2FTriathlon.jpg?w=1200&auto=format%2Ccompress&fit=max',
    },
    {
      id: 7,
      headline: 'lympic triathlon mixed relay gets underway with swims in the Seine amid water quality concerns',
      imageUrl: 'https://media.assettype.com/newindianexpress%2F2024-08%2F84f881b9-0348-4a63-9028-551b6e9f7daa%2FAP24218224028852.jpg?w=1200&auto=format%2Ccompress&fit=max',
    },
    {
      id: 8,
      headline: 'Hockey: Sree-best on an improbable day for Indian hockey It was the 36-year-old goalkeeper masterclass',
      imageUrl: 'https://media.assettype.com/newindianexpress%2F2024-08%2F68ed2737-5c21-4a83-baad-648267e93cdf%2FSreejeshAP.jpg?w=1200&auto=format%2Ccompress&fit=max',
    },
  ];

  return (
    <div className="criminal-grid">
      {newsItems.map(item => (
        <div key={item.id} className="news-item">
          <img src={item.imageUrl} alt={item.headline} className="news-image" />
          <div className="news-headline">
            {item.headline}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sports;