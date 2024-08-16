import React from 'react';
import '../Criminal.css'; // Import your CSS file for styling

const Ent = () => {
  const newsItems = [
    {
      id: 1,
      headline: 'Shankar-Kamal Haasan’s Indian 2 gets OTT release date, fans ask for date of film’s Hindi version',
      imageUrl: 'https://images.indianexpress.com/2024/08/Indian-2-OTT-release-on-Netflix.png?w=640',
    },
    {
      id: 2,
      headline: 'Wayanad Landslide: Kamal Haasan and Vijay expresses grief over calamity, requests govt ‘to provide relief on war-footing’',
      imageUrl: 'https://images.indianexpress.com/2024/07/Vijay-and-Kamal-Haasan-express-concern-about-Wayanad-landslide.png?w=640',
    },
    {
      id: 3,
      headline: 'Dhanush on audience’s response to Raayan: ‘This is the best blockbuster birthday gift’',
      imageUrl: 'https://images.indianexpress.com/2024/07/Dhanush.png?w=640',
    },
    {
      id: 4,
      headline: 'Vignesh Shivan gifts Pradeep Ranganathan the first look of Love Insurance Kompany, see here',
      imageUrl: 'https://images.indianexpress.com/2024/07/Love-Insurance-Kompany-First-Look.jpg?w=640',
    },
    {
      id: 5,
      headline: 'Taylor Swift’s ‘Tortured Poets Department’ Back at No. 1 on Billboard 200 for 13th Week',
      imageUrl: 'https://www.usmagazine.com/wp-content/uploads/2024/07/Taylor-Swift-Announces-Next-Single-is-i-Can-do-It-With-Broken-Heart-2.jpg?w=1200&quality=86&strip=all',
    },
    {
      id: 6,
      headline: '2024 Olympics: BTS Jin Was "Nervous" About Surprise Role in the Paris Olympics',
      imageUrl: 'https://i.pinimg.com/474x/ec/76/a9/ec76a9d1f36b2aa0cc9a0a337d8f7925.jpg',
    },
    {
      id: 7,
      headline: 'Bella Hadid Just Brought Capri Leggings Back — We Found a Similar Style for $10 on Amazon',
      imageUrl: 'https://www.usmagazine.com/wp-content/uploads/2024/07/capri-leggings.jpg?crop=0px%2C31px%2C2000px%2C1131px&resize=1200%2C675&quality=86&strip=all',
    },
    {
      id: 8,
      headline: 'Jimin searches for ‘true love’ in new track Who, BTS ARMY calls ‘song of the year’ relatable.',
      imageUrl: 'https://i.pinimg.com/474x/38/fd/bb/38fdbbc8a4e36a467094d373fc415faa.jpg',
    },
  ];

  return (
    <div className="criminal-grid"> {/* Updated class name to match CSS */}
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

export default Ent;
