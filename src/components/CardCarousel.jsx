import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CardCarousel = ({
  items = [],
  autoPlay = true,
  pauseOnHover = true,
  speed = {
    mobile: 40,
    tablet: 35,
    desktop: 25
  },
  itemsToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    large: 4
  },
  className = '',
  renderItem = null
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  // Duplicate items for seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items];

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      ref={carouselRef}
      className={`relative w-full overflow-x-hidden overflow-y-visible ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div className="flex w-full">
        {/* First Group */}
        <div
          className={`flex will-change-transform shrink-0 ${
            isPaused ? 'animate-scrolling-paused' : 'animate-scrolling'
          }`}
          style={{
            gap: 'clamp(16px, 3vw, 40px)',
            paddingRight: 'clamp(16px, 3vw, 40px)',
            paddingLeft: 'clamp(16px, 3vw, 40px)'
          }}
        >
          {duplicatedItems.map((item, index) => (
            <motion.div
              key={`card-carousel-item-first-${index}`}
              className="shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              style={{
                minWidth: `calc((100% - ${itemsToShow.mobile * 16}px) / ${itemsToShow.mobile})`,
                maxWidth: `calc((100% - ${itemsToShow.mobile * 16}px) / ${itemsToShow.mobile})`,
                width: `calc((100% - ${itemsToShow.mobile * 16}px) / ${itemsToShow.mobile})`
              }}
            >
              {renderItem ? renderItem(item, index) : (
                <div className="bg-white/10 rounded-xl p-6 text-center text-white min-h-[300px] flex items-center justify-center">
                  {typeof item === 'string' ? item : JSON.stringify(item)}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Second Group (for seamless loop) */}
        <div
          className={`flex will-change-transform shrink-0 ${
            isPaused ? 'animate-scrolling-paused' : 'animate-scrolling'
          }`}
          aria-hidden="true"
          style={{
            gap: 'clamp(16px, 3vw, 40px)',
            paddingRight: 'clamp(16px, 3vw, 40px)'
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`card-carousel-item-second-${index}`}
              className="shrink-0"
              style={{
                minWidth: `calc((100% - ${itemsToShow.mobile * 16}px) / ${itemsToShow.mobile})`,
                maxWidth: `calc((100% - ${itemsToShow.mobile * 16}px) / ${itemsToShow.mobile})`,
                width: `calc((100% - ${itemsToShow.mobile * 16}px) / ${itemsToShow.mobile})`
              }}
            >
              {renderItem ? renderItem(item, index) : (
                <div className="bg-white/10 rounded-xl p-6 text-center text-white min-h-[300px] flex items-center justify-center">
                  {typeof item === 'string' ? item : JSON.stringify(item)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles for items to show */}
      <style>{`
        @media (min-width: 640px) {
          .shrink-0 {
            min-width: calc((100% - ${itemsToShow.tablet * 24}px) / ${itemsToShow.tablet}) !important;
            max-width: calc((100% - ${itemsToShow.tablet * 24}px) / ${itemsToShow.tablet}) !important;
            width: calc((100% - ${itemsToShow.tablet * 24}px) / ${itemsToShow.tablet}) !important;
          }
        }
        @media (min-width: 1024px) {
          .shrink-0 {
            min-width: calc((100% - ${itemsToShow.desktop * 40}px) / ${itemsToShow.desktop}) !important;
            max-width: calc((100% - ${itemsToShow.desktop * 40}px) / ${itemsToShow.desktop}) !important;
            width: calc((100% - ${itemsToShow.desktop * 40}px) / ${itemsToShow.desktop}) !important;
          }
        }
        @media (min-width: 1280px) {
          .shrink-0 {
            min-width: calc((100% - ${itemsToShow.large * 40}px) / ${itemsToShow.large}) !important;
            max-width: calc((100% - ${itemsToShow.large * 40}px) / ${itemsToShow.large}) !important;
            width: calc((100% - ${itemsToShow.large * 40}px) / ${itemsToShow.large}) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CardCarousel;
