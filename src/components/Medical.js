import React from 'react';
import '../Criminal.css'; // Import the same CSS file for styling

const Medical = () => {
  const newsItems = [
    {
      id: 1,
      headline: 'IVF research: What are the latest advances, and what obstacles stand in the way?',
      imageUrl: 'https://i.pinimg.com/236x/c6/c7/0a/c6c70a0c0ce9f057a4a3683b3c475870.jpg',
    },
    {
      id: 2,
      headline: 'Can tattoos cause blood or skin cancer?Some research has found a link between tattoos and an increased risk of cancer',
      imageUrl: 'https://i.pinimg.com/236x/06/54/91/065491bb7bb6b000c33d26976390ceab.jpg',
    },
    {
      id: 3,
      headline: 'Research in mice shows how aging brain blood vessels may affect brain health',
      imageUrl: 'https://i.pinimg.com/236x/7e/6a/1d/7e6a1de3240340d3a3d3d297b1f34d97.jpg',
    },
    {
      id: 4,
      headline: 'GLP-1 drug liraglutide may protect against Alzheimers disease, early trials say',
      imageUrl: 'https://i.pinimg.com/236x/25/8a/92/258a92da35025efbf71a16ed242a063a.jpg',
    },
    {
      id: 5,
      headline: 'Organic chocolate is contaminated with toxic metals: How dangerous is it?',
      imageUrl: 'https://i.pinimg.com/236x/11/d0/6b/11d06b6f71ae9b587999fe6710159b6d.jpg',
    },
    {
      id: 6,
      headline: 'Cannabigerol shows promise in reducing anxiety and stress, study finds',
      imageUrl: 'https://i.pinimg.com/236x/90/39/4c/90394cc80cf637412e0326fcc229d111.jpg',
    },
    {
      id: 7,
      headline: 'Aspirin May Reduce Colorectal Cancer in High-Risk Adults',
      imageUrl: 'https://i.pinimg.com/236x/5a/72/11/5a721188a42003979f97874f126e0f45.jpg',
    },
    {
      id: 8,
      headline: 'Chronic and new onset anxiety may increase dementia risk in older adults',
      imageUrl: 'https://i.pinimg.com/236x/1f/36/01/1f3601d3e24057fb1773e26b205776fb.jpg',
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

export default Medical;