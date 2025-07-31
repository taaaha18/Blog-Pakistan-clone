import React from 'react';
import { DollarSign, Euro, Coins } from 'lucide-react';
import './CSS/Price_card.css';

const PriceCard = ({ 
  title = "USD TO PKR",
  mainText = "1 USD =",
  price = "281.96",
  currency = "PKR",
  priceColor = "#e74c3c",
  icon = "dollar",
  backgroundColor = "#ffffff",
  textColor = "#333",
  width = "300px",
  height = "120px",
  className = "",
  onClick = () => {}
}) => {
  
  const getIcon = (iconType) => {
    const iconProps = { size: 28, color: "#2d8659" };
    
    switch (iconType.toLowerCase()) {
      case 'pound':
      case 'gbp':
        return <span style={{...iconProps, fontSize: '28px', fontWeight: 'bold'}}>£</span>;
      case 'euro':
      case 'eur':
        return <Euro {...iconProps} />;
      case 'gold':
      case 'coins':
        return <Coins {...iconProps} />;
      case 'dollar':
      case 'usd':
      default:
        return <DollarSign {...iconProps} />;
    }
  };

  return (
    <div 
      className={`price-card ${className}`}
      style={{ 
        backgroundColor, 
        width, 
        height,
        color: textColor
      }}
      onClick={onClick}
    >
      <div className="price-card-header">
        <div className="price-card-icon">
          {getIcon(icon)}
        </div>
        <h3 className="price-card-title">{title}</h3>
      </div>
      
      <div className="price-card-content">
        <span className="price-card-main-text">{mainText}</span>
        <span className="price-card-price" style={{ color: priceColor }}>
          {price}
        </span>
        <span className="price-card-currency">{currency}</span>
      </div>
    </div>
  );
};


const PriceCardContainer = ({ 
  cards = [], 
  gap = "20px",
  backgroundColor = "#f5f5f5",
  padding = "40px 20px",
  className = ""
}) => {
  return (
    <div 
      className={`price-card-container ${className}`}
      style={{
        backgroundColor,
        padding,
        display: 'flex',
        flexWrap: 'wrap',
        gap: gap,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {cards.map((card, index) => (
        <PriceCard
          key={index}
          {...card}
        />
      ))}
    </div>
  );
};

export { PriceCard, PriceCardContainer };
export default PriceCard;