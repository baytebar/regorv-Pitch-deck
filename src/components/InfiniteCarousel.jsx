import { useState } from 'react';
import { motion } from 'framer-motion';

const InfiniteCarousel = ({
  items = [],
  autoPlay = true,
  pauseOnHover = true,
  speed = {
    mobile: 35,
    tablet: 30,
    desktop: 20
  },
  className = '',
  containerClassName = '',
  renderItem = null
}) => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items for seamless infinite loop
  const duplicatedItems = [...items, ...items];

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      className={`relative w-full overflow-x-hidden overflow-y-visible ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Gradient Overlays for depth effect - Responsive */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-[#0B1E14] via-[#0B1E14]/80 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-[#0B1E14] via-[#0B1E14]/80 to-transparent" />
      </div>

      <div className={`flex w-full relative ${containerClassName}`}>
        {/* First Group */}
        <div
          className={`flex will-change-transform shrink-0 infinite-carousel-group ${
            isPaused ? 'animate-scrolling-paused' : 'animate-scrolling'
          }`}
          style={{
            gap: 'clamp(64px, 8vw, 100px)',
            paddingRight: 'clamp(32px, 4vw, 50px)',
            paddingLeft: 'clamp(32px, 4vw, 50px)'
          }}
        >
          {duplicatedItems.map((item, index) => (
            <motion.div
              key={`carousel-item-first-${index}`}
              className="shrink-0 relative group"

              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-(--color-accent)/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              {renderItem ? renderItem(item, index) : (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white min-w-[200px] border border-white/10 shadow-xl">
                  {typeof item === 'string' ? item : JSON.stringify(item)}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Second Group (for seamless loop) */}
        <div
          className={`flex will-change-transform shrink-0 infinite-carousel-group ${
            isPaused ? 'animate-scrolling-paused' : 'animate-scrolling'
          }`}
          aria-hidden="true"
          style={{
            gap: 'clamp(64px, 8vw, 100px)',
            paddingRight: 'clamp(32px, 4vw, 50px)',
            paddingLeft: 'clamp(32px, 4vw, 50px)'
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`carousel-item-second-${index}`}
              className="shrink-0 relative"
            >
              {renderItem ? renderItem(item, index) : (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white min-w-[200px] border border-white/10 shadow-xl">
                  {typeof item === 'string' ? item : JSON.stringify(item)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      {!isPaused && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            className="w-16 h-1 bg-(--color-accent)/50 rounded-full"
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default InfiniteCarousel;
