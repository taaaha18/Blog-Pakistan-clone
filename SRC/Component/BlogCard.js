import React from 'react';
import './CSS/BlogCard.css';

const BlogCard = ({ 
  title, 
  description, 
  image, 
  imageAlt = "Blog post image",
  link = "#",
  author,
  date,
  category,
  readTime
}) => {
  return (
    <div className="blog-card">
      <div className="blog-card__image-container">
        <img 
          src={image} 
          alt={imageAlt}
          className="blog-card__image"
        />
        {category && (
          <div className="blog-card__category">
            {category}
          </div>
        )}
      </div>
      
      <div className="blog-card__content">
        <h3 className="blog-card__title">
          <a href={link} className="blog-card__title-link">
            {title}
          </a>
        </h3>
        
        <p className="blog-card__description">
          {description}
        </p>
        
        <div className="blog-card__meta">
          {author && (
            <span className="blog-card__author">{author}</span>
          )}
          {date && (
            <span className="blog-card__date">{date}</span>
          )}
          {readTime && (
            <span className="blog-card__read-time">{readTime}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;