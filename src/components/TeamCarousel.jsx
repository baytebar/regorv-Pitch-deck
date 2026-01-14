import { useState } from 'react';
import { motion } from 'framer-motion';

const TeamCarousel = ({ teamMembers = [] }) => {
  const [isPaused, setIsPaused] = useState(false);

  if (!teamMembers || teamMembers.length === 0) {
    return null;
  }

  // Duplicate items for seamless infinite loop
  const duplicatedItems = [...teamMembers, ...teamMembers];

  return (
    <>
      <style>{`
        @keyframes team-carousel-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .team-carousel-animate {
          animation: team-carousel-scroll 45s linear infinite;
        }
        @media (min-width: 641px) and (max-width: 763px) {
          .team-carousel-animate {
            animation: team-carousel-scroll 48s linear infinite;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .team-carousel-animate {
            animation: team-carousel-scroll 48s linear infinite;
          }
        }
        @media (min-width: 1025px) {
          .team-carousel-animate {
            animation: team-carousel-scroll 50s linear infinite;
          }
        }
        .team-carousel-paused {
          animation-play-state: paused !important;
        }
        /* Override container constraints for carousel */
        .team-carousel-wrapper {
          width: auto !important;
          max-width: none !important;
          overflow-x: visible !important;
        }
        @media (max-width: 768px) {
          .team-carousel-wrapper {
            width: auto !important;
            max-width: none !important;
            overflow-x: visible !important;
          }
        }
      `}</style>
      <div
        className="team-carousel-wrapper relative py-8"
        style={{ 
          width: '100%',
          overflow: 'hidden'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-32 lg:w-40 bg-linear-to-r from-[#0B1E14] via-[#0B1E14]/90 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-32 lg:w-40 bg-linear-to-l from-[#0B1E14] via-[#0B1E14]/90 to-transparent pointer-events-none z-10" />

        <div
          className={`flex will-change-transform team-carousel-animate ${isPaused ? 'team-carousel-paused' : ''}`}
          style={{
            gap: 'clamp(1.5rem, 4vw, 2.5rem)',
            paddingLeft: 'clamp(1rem, 3vw, 2rem)',
            paddingRight: 'clamp(1rem, 3vw, 2rem)',
            width: 'max-content',
            minWidth: '200%'
          }}
        >
          {/* First set of items */}
          {duplicatedItems.map((member, index) => (
            <TeamMemberCard key={`carousel-item-1-${index}`} member={member} index={index} />
          ))}
          
          {/* Second set of items (for seamless loop) */}
          {duplicatedItems.map((member, index) => (
            <TeamMemberCard key={`carousel-item-2-${index}`} member={member} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

// Team Member Card Component
const TeamMemberCard = ({ member, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center bg-linear-to-br from-white/5 via-white/3 to-white/2 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group shrink-0"
      whileHover={{
        y: -8,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      style={{
        width: 'clamp(140px, 35vw, 320px)',
        minWidth: 'clamp(140px, 35vw, 320px)'
      }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-(--color-accent)/10 via-transparent to-transparent opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.5 }}
      />

      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-(--color-accent)/30 transition-all duration-500" />

      {/* Profile Image */}
      <motion.div
        className="relative mb-4 sm:mb-6"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      >
        <div
          className="relative rounded-full overflow-hidden border-3 border-white/20 bg-linear-to-br from-white/10 to-white/5 group-hover:border-(--color-accent)/60 transition-all duration-500 shadow-xl group-hover:shadow-(--color-accent)/40"
          style={{
            width: 'clamp(80px, 12vw, 140px)',
            height: 'clamp(80px, 12vw, 140px)'
          }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute -inset-4 bg-(--color-accent)/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.5 }}
          />

          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-full relative z-10"
              loading="lazy"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center font-bold text-(--color-accent) bg-linear-to-br from-white/15 to-white/5 relative z-10 rounded-full"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)'
              }}
            >
              {member.name.charAt(0)}
            </div>
          )}
        </div>
      </motion.div>

      {/* Name and Role */}
      <div className="text-center relative z-10 w-full">
        <h3
          className="text-white mb-2 font-bold group-hover:text-(--color-accent) transition-colors duration-300"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}
        >
          {member.name}
        </h3>
        <span
          className="text-[#A3BCA9] block font-medium group-hover:text-white/90 transition-colors duration-300"
          style={{
            fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)'
          }}
        >
          {member.role}
        </span>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-(--color-accent) rounded-full"
        initial={{ width: 0, opacity: 0 }}
        whileHover={{ width: '60%', opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default TeamCarousel;
