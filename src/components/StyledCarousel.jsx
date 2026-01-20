import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StyledCarousel = ({
  items = [],
  autoPlay = true,
  autoPlayInterval = 4000,
  pauseOnHover = true,
  showDots = true,
  showArrows = true,
  infinite = true,
  variant = 'default', // 'default', 'fade', 'slide', 'scale'
  className = '',
  renderItem = null
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused || !infinite) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
      setDirection(1);
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
    setDirection(1);
    if (infinite) {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    } else {
      setCurrentIndex((prev) => Math.min(prev + 1, items.length - 1));
    }
  };

  const handlePrevious = () => {
    setDirection(-1);
    if (infinite) {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    slide: {
      initial: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
      animate: { x: 0, opacity: 1 },
      exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 })
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.8, opacity: 0 }
    },
    default: {
      initial: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0, scale: 0.9 }),
      animate: { x: 0, opacity: 1, scale: 1 },
      exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0, scale: 0.9 })
    }
  };

  const currentVariant = variants[variant] || variants.default;

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
        className="relative w-full overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Track with AnimatePresence */}
        <div className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={currentVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              {renderItem ? renderItem(items[currentIndex], currentIndex) : (
                <div className="bg-white/10 rounded-lg p-8 text-center text-white h-full flex items-center justify-center">
                  {typeof items[currentIndex] === 'string' 
                    ? items[currentIndex] 
                    : JSON.stringify(items[currentIndex])}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Gradient Overlays for better visibility */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#0B1E14] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#0B1E14] to-transparent z-10" />
        </div>
      </div>

      {/* Navigation Arrows - Enhanced Style */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-110 group"
            disabled={!infinite && currentIndex === 0}
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-(--color-accent) transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-110 group"
            disabled={!infinite && currentIndex === items.length - 1}
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-(--color-accent) transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Navigation Dots - Enhanced Style */}
      {showDots && items.length > 1 && (
        <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full relative ${
                currentIndex === index
                  ? 'bg-(--color-accent) w-10 h-2 md:w-12 md:h-2.5 shadow-lg shadow-(--color-accent)/50'
                  : 'bg-white/30 w-2 h-2 md:w-2.5 md:h-2.5 hover:bg-white/50 hover:scale-125'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {currentIndex === index && (
                <motion.div
                  className="absolute inset-0 bg-(--color-accent) rounded-full"
                  layoutId="activeDot"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Progress Indicator */}
      {autoPlay && !isPaused && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden rounded-b-2xl">
          <motion.div
            className="h-full bg-(--color-accent)"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: autoPlayInterval / 1000, ease: 'linear', repeat: Infinity }}
          />
        </div>
      )}
    </div>
  );
};

export default StyledCarousel;
