import React from 'react';
import './CSS/Heading.css';

const SectionHeading = ({ 
  primaryText = "Recent", 
  highlightText = "Blogs",
  fontSize = "48px",
  primaryColor = "#333",
  highlightColor = "#2d8659",
  fontWeight = "700",
  textAlign = "left",
  margin = "40px 0",
  className = "",
  animation = true
}) => {
  return (
    <div 
      className={`section-heading-container ${className}`}
      style={{ 
        textAlign, 
        margin,
        fontSize,
        fontWeight
      }}
    >
      <h2 className={`section-heading ${animation ? 'animate' : ''}`}>
        <span 
          className="primary-text"
          style={{ color: primaryColor }}
        >
          {primaryText}
        </span>
        {highlightText && (
          <>
            <span className="space"> </span>
            <span 
              className="highlight-text"
              style={{ color: highlightColor }}
            >
              {highlightText}
            </span>
          </>
        )}
      </h2>
      <div 
        className="underline"
        style={{ backgroundColor: highlightColor }}
      ></div>
    </div>
  );
};


  

export default SectionHeading;