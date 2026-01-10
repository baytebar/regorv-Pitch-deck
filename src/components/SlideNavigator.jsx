/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const SlideNavigator = ({ activeIndex, count, onSelect }) => {
  return (
    <div className="slide-navigator">
      <div className="nav-dots">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            className={`nav-dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => onSelect(i)}
            aria-label={`Go to slide ${i + 1}`}
          >
            {i === activeIndex && (
              <motion.div
                layoutId="active-dot"
                className="active-indicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <style>{`
        .slide-navigator {
          position: fixed;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          display: none;
        }

        @media (min-width: 1024px) {
          .slide-navigator {
            display: block;
          }
        }

        .nav-dots {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          padding: 0;
          position: relative;
          transition: background 0.3s;
        }

        .nav-dot:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .active-indicator {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 2px solid var(--color-accent);
          border-radius: 50%;
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default SlideNavigator;
