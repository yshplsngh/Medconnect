import React from 'react';
import card_img1 from '../faq/images/card_img1.svg';
import card_img2 from '../faq/images/card_img2.svg';
import card_img3 from '../faq/images/card_img3.svg';
import card_img4 from '../faq/images/card_img4.svg';

const cardsData = [
  {
    imageSrc: card_img1,
    title: 'Unlimited Free Consultations',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imageSrc: card_img2,
    title: 'Unlimited Free Consultations',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imageSrc: card_img3,
    title: 'Unlimited Free Consultations',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imageSrc: card_img4,
    title: 'Unlimited Free Consultations',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Card = ({ imageSrc, title, description }) => (
  <div className="rounded-lg shadow-lg p-6 text-center max-w-xs mx-auto transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
    <img src={imageSrc} alt="Consultation" className="max-w-full h-auto rounded-md" />
    <h2 className="text-xl font-semibold my-4">{title}</h2>
    <p className="text-gray-700 opacity-0 transform translate-y-16 transition-opacity duration-500 hover:opacity-100 hover:translate-y-0">
      {description}
    </p>
  </div>
);

function Cards() {
  return (
    <div className="container text-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {cardsData.map((card, index) => (
          <div key={index}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;