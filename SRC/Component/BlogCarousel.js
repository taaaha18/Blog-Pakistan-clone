import React, { useState, useEffect, useCallback } from 'react';
import ArrowButton from './ArrowButton';
import BlogCard from './BlogCard';
import './CSS/BlogCarousel.css';

const BlogCarousel = ({
  blogData = [],
  cardsPerView = { desktop: 3, tablet: 2, mobile: 1 },
  onCardClick,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(cardsPerView.desktop);

  const blogs = blogData;
  const maxIndex = Math.max(0, blogs.length - cardsToShow);

  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setCardsToShow(cardsPerView.mobile);
      } else if (width <= 768) {
        setCardsToShow(cardsPerView.tablet);
      } else {
        setCardsToShow(cardsPerView.desktop);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, [cardsPerView]);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const getTransformValue = () => (currentIndex * (100 / cardsToShow));

  if (blogs.length === 0) {
    return (
      <div className={`blog-carousel ${className}`}>
        <p>No blog posts available.</p>
      </div>
    );
  }

  return (
    <div
      className={`blog-carousel ${className}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
      }}
    >
      <div className="carousel-container">
        <ArrowButton
          direction="left"
          onClick={prevSlide}
          ariaLabel="Previous blog posts"
        />

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${getTransformValue()}%)` }}
          >
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="carousel-slide"
                style={{ flex: `0 0 ${100 / cardsToShow}%` }}
              >
                <BlogCard {...blog} onClick={() => onCardClick?.(blog, index)} />
              </div>
            ))}
          </div>
        </div>

        <ArrowButton
          direction="right"
          onClick={nextSlide}
          ariaLabel="Next blog posts"
        />
      </div>
    </div>
  );
};

export default BlogCarousel;
