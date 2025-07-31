import React from 'react';
import './CSS/SmallCard.css';

const HorizontalCard = ({ 
  image, 
  title, 
  description = '',
  width = '100%',
  height = 'auto',
  imageWidth = '80px',
  imageHeight = '80px',
  className = '',
  onClick = () => {},
  borderRadius = '8px',
  gap = '15px'
}) => {
  return (
    <div 
      className={`horizontal-card ${className}`}
      style={{ width, height }}
      onClick={onClick}
    >
      <div 
        className="horizontal-card-image"
        style={{ 
          width: imageWidth, 
          height: imageHeight,
          borderRadius: borderRadius
        }}
      >
        <img 
          src={image} 
          alt={title}
          className="horizontal-card-img"
        />
      </div>
      
      <div 
        className="horizontal-card-content"
        style={{ marginLeft: gap }}
      >
        <h3 className="horizontal-card-title">{title}</h3>
        {description && (
          <p className="horizontal-card-description">{description}</p>
        )}
      </div>
    </div>
  );
};


const HorizontalCardGrid = ({ 
  cards = [], 
  columns = 3, 
  gap = '20px',
  className = ''
}) => {
  return (
    <div 
      className={`horizontal-card-grid ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: gap,
        width: '100%'
      }}
    >
      {cards.map((card, index) => (
        <HorizontalCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          onClick={card.onClick}
          {...card.props}
        />
      ))}
    </div>
  );
};


export { HorizontalCard, HorizontalCardGrid };
export default HorizontalCard;