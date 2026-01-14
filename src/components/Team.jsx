import { motion } from 'framer-motion';
import TeamCarousel from './TeamCarousel';

import jacobImg from '../assets/images/jacob.png';
import thomasImg from '../assets/images/thomas.jpeg';
import karthikImg from '../assets/images/karthik.jpg';
import shijuImg from '../assets/images/shiju.jpg';
import surajImg from '../assets/images/suraj.jpg';
import jonoImg from '../assets/images/jono.jpg';
import alanImg from '../assets/images/alan.jpg';
import joyesImg from '../assets/images/joyes.jpg';
import christoImg from '../assets/images/christo.jpg';
import gritoImg from '../assets/images/grito.webp';

const Team = () => {
  const teamMembers = [
    { name: 'Jacob', role: 'Founder, CEO', image: jacobImg },
    { name: 'Thomas', role: 'Co-founder, COO', image: thomasImg },
    { name: 'Karthik', role: 'CFO', image: karthikImg },
    { name: 'Shiju', role: 'CTO', image: shijuImg },
    { name: 'Sooraj', role: 'Team Lead, IT', image: surajImg },
    { name: 'Jono', role: 'CMO', image: jonoImg },
    { name: 'Alan', role: 'Marketing Member', image: alanImg },
    { name: 'Joyes', role: 'Human Resource', image: joyesImg },
    { name: 'Christo', role: 'Financial Advisor', image: christoImg },
    { name: 'Grito', role: 'AI/ML', image: gritoImg }
  ];

  return (
    <div className="snap-section min-h-screen w-full flex items-center justify-center bg-[#0B1E14] py-8 md:py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-(--color-accent)/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-(--color-accent)/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center w-full">
          <motion.div
            className="w-full mb-8 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-(--color-accent) uppercase tracking-[2px] text-xs mb-2 block text-center font-semibold">
              Our Team
            </span>
            <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-white text-center font-serif">
              Leadership & Visionaries
            </h2>
          </motion.div>

          {/* Team Carousel */}
          <div className="w-full">
            <TeamCarousel teamMembers={teamMembers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
