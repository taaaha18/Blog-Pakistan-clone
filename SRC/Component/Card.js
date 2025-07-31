
import React from 'react';
import './CSS/Card.css';

const Card = ({ 
  image, 
  title, 
  description, 
  width = '300px', 
  height = '400px', 
  overlay = true,
  className = '',
  onClick = () => {}
}) => {
  return (
    <div 
      className={`card ${className}`} 
      style={{ width, height }}
      onClick={onClick}
    >
      <div className="card-image-container">
        <img 
          src={image} 
          alt={title} 
          className="card-image"
        />
        {overlay && <div className="card-overlay"></div>}
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && (
          <p className="card-description">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
