import React from 'react';
import './CSS/Button.css';

const DynamicButton = ({
  text = 'Button',
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  const handleClick = (e) => {
    
    if (onClick && !disabled) {
      onClick(e);
    }
  };

  const buttonClasses = [
    'dynamic-btn',
    `dynamic-btn--${variant}`,
    `dynamic-btn--${size}`,
    disabled ? 'dynamic-btn--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

export default DynamicButton;
