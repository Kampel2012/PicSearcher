import React from 'react';
import Card from '../Card/Card';
import './index.css';

const Gallery = ({ cards, resErr }) => {
  const err = resErr;

  return (
    <div className="Gallery">
      {cards.length ? (
        <div className="Gallery__container">
          {' '}
          {cards.map((card, i) => (
            <Card
              key={card.id}
              author={card.author}
              src={card.url.thumb}
              alt={card.alt}
              id={card.id}
            />
          ))}{' '}
        </div>
      ) : (
        <span className="Gallery__span">{err}</span>
      )}
    </div>
  );
};

export default Gallery;
