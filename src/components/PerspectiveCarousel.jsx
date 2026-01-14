import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const PerspectiveCarousel = ({
  items = [],
  autoPlay = true,
  autoPlayInterval = 3000,
  pauseOnHover = true,
  showDots = true,
  className = '',
  renderItem = null
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, isPaused, autoPlayInterval, items.length]);

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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Calculate visible items (center + 2 on each side)
  const getVisibleItems = () => {
    const visible = [];
    const total = items.length;
    
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + total) % total;
      visible.push({ index, offset: i });
    }
    
    return visible;
  };

  if (!items || items.length === 0) {
    return null;
  }

  const visibleItems = getVisibleItems();

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Perspective Container */}
      <div className="relative w-full h-[500px] md:h-[600px] perspective-1000">
        <div className="relative w-full h-full flex items-center justify-center">
          {visibleItems.map(({ index, offset }) => {
            const absOffset = Math.abs(offset);
            const isActive = offset === 0;
            
            return (
              <motion.div
                key={`perspective-item-${index}-${offset}`}
                className="absolute"
                initial={false}
                animate={{
                  x: offset * 200,
                  z: -absOffset * 100,
                  scale: 1 - absOffset * 0.15,
                  opacity: 1 - absOffset * 0.3,
                  rotateY: offset * 25
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{
                  transformStyle: 'preserve-3d',
                  zIndex: 5 - absOffset
                }}
              >
                <div
                  className={`transition-all duration-300 ${
                    isActive ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'
                  }`}
                  style={{
                    transform: `perspective(1000px) rotateY(${offset * 25}deg)`,
                    width: '280px',
                    maxWidth: '90vw'
                  }}
                >
                  {renderItem ? renderItem(items[index], index, isActive) : (
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white shadow-2xl border border-white/20">
                      {typeof items[index] === 'string' 
                        ? items[index] 
                        : JSON.stringify(items[index])}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Dots */}
      {showDots && items.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'bg-(--color-accent) w-10 h-2 shadow-lg'
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

export default PerspectiveCarousel;
