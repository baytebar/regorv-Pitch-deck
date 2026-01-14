import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Carousel = ({
  items = [],
  autoPlay = true,
  autoPlayInterval = 3000,
  pauseOnHover = true,
  showDots = true,
  showArrows = true,
  infinite = true,
  className = '',
  renderItem = null
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused || !infinite) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, isPaused, autoPlayInterval, items.length, infinite]);

  // Touch/Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }
  };

  // Navigation handlers
  const handleNext = () => {
    if (infinite) {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    } else {
      setCurrentIndex((prev) => Math.min(prev + 1, items.length - 1));
    }
  };

  const handlePrevious = () => {
    if (infinite) {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Carousel Container */}
      <div
        className="relative w-full overflow-hidden rounded-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out will-change-transform"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {items.map((item, index) => (
            <div
              key={`carousel-item-${index}`}
              className="min-w-full shrink-0"
            >
              {renderItem ? renderItem(item, index) : (
                <div className="bg-white/10 rounded-lg p-8 text-center text-white">
                  {typeof item === 'string' ? item : JSON.stringify(item)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!infinite && currentIndex === 0}
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!infinite && currentIndex === items.length - 1}
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Navigation Dots */}
      {showDots && items.length > 1 && (
        <div className="flex justify-center gap-2 mt-4 md:mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'bg-(--color-accent) w-8 h-2'
                  : 'bg-white/30 w-2 h-2 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
