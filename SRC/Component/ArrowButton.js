import React from 'react';
import './CSS/ArrowButton.css';

const ArrowButton = ({ 
  direction = 'right', 
  size = 'medium', 
  variant = 'primary', 
  onClick,
  disabled = false,
  className = '',
  ariaLabel,
  ...props
}) => {
  
  const buttonClasses = [
    'arrow-button',
    `arrow-button--${direction}`,
    `arrow-button--${size}`,
    `arrow-button--${variant}`,
    disabled ? 'arrow-button--disabled' : '',
    className
  ].filter(Boolean).join(' ');


  const defaultAriaLabel = {
    left: 'Previous',
    right: 'Next',
    up: 'Up',
    down: 'Down'
  };

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || defaultAriaLabel[direction]}
      {...props}
    >
      <svg 
        className="arrow-button__icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {direction === 'right' && <polyline points="9,18 15,12 9,6"></polyline>}
        {direction === 'left' && <polyline points="15,18 9,12 15,6"></polyline>}
        {direction === 'up' && <polyline points="18,15 12,9 6,15"></polyline>}
        {direction === 'down' && <polyline points="6,9 12,15 18,9"></polyline>}
      </svg>
    </button>
  );
};

export default ArrowButton;