import React from 'react';
import '../Criminal.css'; // Import your CSS file for styling

const Criminal = () => {
  const newsItems = [
    {
      id: 1,
      headline: 'UP girl kidnapped from village, raped for 2 months; rescued',
      imageUrl: 'https://i.pinimg.com/236x/41/19/d9/4119d9b525b1b32000c79bacce7d9176.jpg',
    },
    {
      id: 2,
      headline: 'Bihar: Mans intestines bulge out after GRP beat up railway passengers',
      imageUrl: 'https://c.ndtvimg.com/2018-10/2j46hlug_police-generic_625x300_27_October_18.jpg',
    },
    {
      id: 3,
      headline: 'Tamil Nadu Woman Attempts Suicide After Killing Husband: Police',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtoqIiupzVIZBFKhbSg8pd2wtKs34WG4Fog&s',
    },
    {
      id: 4,
      headline: 'UP woman kills sisters, 7 and 4, after they find her in objectionable position',
      imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/elder-sister-murder-103601720-16x9.png?VersionId=huKkgfLwDQaoBqWvZeeMmHkyB_2ZkAVL&size=690:388',
    },
    {
      id: 5,
      headline: 'Odisha Man Who Married 5, Dated 49 Women for Money, Arrested',
      imageUrl: 'https://www.deccanchronicle.com/h-upload/2024/08/03/1828521-satyajitmanagovindsamal.webp',
    },
    {
      id: 6,
      headline: 'Tamil Nadu: 4 cops sexually assault girl, suspended',
      imageUrl: 'https://images.unsplash.com/photo-1606323518213-ba20fcddec0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    },
    {
      id: 7,
      headline: 'Delhi: African man shot dead by two armed assailants in Nihal Vihar, investigation underway',
      imageUrl: 'https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2024/07/shot-dead-1720357505.jpg',
    },
    {
      id: 8,
      headline: 'Rajasthan: In honour killing, woman charred to death by father, brother over inter-caste marriage',
      imageUrl: 'https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2024/07/rajasthan-crime-1720182965.jpg',
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

export default Criminal;
