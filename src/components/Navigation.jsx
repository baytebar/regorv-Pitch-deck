import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../public/images/logo.svg';

const Navigation = () => {
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const container = document.querySelector('.snap-container');
         if (container) {
            setScrolled(container.scrollTop > 50);
         }
      };

      const container = document.querySelector('.snap-container');
      if (container) {
         container.addEventListener('scroll', handleScroll);
         return () => container.removeEventListener('scroll', handleScroll);
      }
   }, []);

   const scrollToSection = (sectionId) => {
      const container = document.querySelector('.snap-container');
      if (container) {
         const section = document.getElementById(sectionId);
         if (section) {
            const sectionTop = section.offsetTop;
            container.scrollTo({
               top: sectionTop,
               behavior: 'smooth'
            });
         }
      }
   };

   const scrollToTop = () => {
      const container = document.querySelector('.snap-container');
      if (container) {
         container.scrollTo({
            top: 0,
            behavior: 'smooth'
         });
      }
   };

   return (
      <motion.nav
         className={`navbar ${scrolled ? 'scrolled' : ''}`}
         initial={{ y: -100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6, ease: 'easeOut' }}
      >
         <div className="container nav-container">
            <motion.div
               className="logo"
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               onClick={scrollToTop}
               style={{ cursor: 'pointer' }}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
            >
               <img src={logo} alt="Regrov" style={{ height: '40px', width: 'auto' }} />
            </motion.div>
            <motion.div
               className="nav-links"
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
            >
               <a
                  href="#solution"
                  onClick={(e) => {
                     e.preventDefault();
                     scrollToSection('solution');
                  }}
               >
                  Features
               </a>
               <a
                  href="#roadmap"
                  onClick={(e) => {
                     e.preventDefault();
                     scrollToSection('roadmap');
                  }}
               >
                  Roadmap
               </a>
               <a
                  href="#team"
                  onClick={(e) => {
                     e.preventDefault();
                     scrollToSection('team');
                  }}
               >
                  Team
               </a>
               <motion.button
                  className="nav-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
               >
                  Get App
               </motion.button>
            </motion.div>
         </div>

         <style>{`
        .navbar {
           position: fixed;
           top: 0;
           left: 0;
           right: 0;
           z-index: 1000;
           padding: 1rem 0;
           transition: all 0.3s ease;
           background: transparent;
        }

        .navbar.scrolled {
           background: rgba(13, 40, 24, 0.85); /* Dark Green Glass */
           box-shadow: 0 4px 20px rgba(0,0,0,0.2);
           backdrop-filter: blur(12px);
           padding: 0.75rem 0;
           border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        
        .navbar.scrolled .logo {
           color: var(--color-accent);
        }

        .nav-container {
           display: flex;
           justify-content: space-between;
           align-items: center;
        }

        .logo {
           font-size: 1.5rem;
           font-weight: 800;
           color: var(--color-text-main);
           font-family: var(--font-heading);
           letter-spacing: -0.5px;
        }
        
        .nav-links {
           display: none;
           align-items: center;
           gap: 2rem;
        }

        @media (min-width: 768px) {
           .nav-links {
              display: flex;
           }
        }

        .nav-links a {
           font-weight: 500;
           color: var(--color-text-main);
           opacity: 0.8;
           transition: all 0.3s ease;
           text-decoration: none;
           position: relative;
        }
        
        .nav-links a::after {
           content: '';
           position: absolute;
           bottom: -5px;
           left: 0;
           width: 0;
           height: 2px;
           background: var(--color-accent);
           transition: width 0.3s ease;
        }
        
        .nav-links a:hover {
           opacity: 1;
           color: var(--color-accent);
           text-decoration: none;
        }
        
        .nav-links a:hover::after {
           width: 100%;
        }

        .nav-btn {
           background: var(--color-accent);
           border: none;
           padding: 0.6rem 1.5rem;
           border-radius: 50px;
           font-weight: 700;
           cursor: pointer;
           color: var(--color-text-dark);
           transition: all 0.3s ease;
           font-family: var(--font-body);
        }

        .nav-btn:hover {
           background: white;
           box-shadow: 0 4px 15px rgba(212, 238, 38, 0.4);
        }
      `}</style>
      </motion.nav>
   );
};

export default Navigation;
