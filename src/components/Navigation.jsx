import { useState, useEffect } from 'react';

const Navigation = () => {
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <nav className={`navbar \${scrolled ? 'scrolled' : ''}`}>
         <div className="container nav-container">
            <div className="logo">Regrov</div>
            <div className="nav-links">
               <a href="#solution">Features</a>
               <a href="#roadmap">Roadmap</a>
               <a href="#ask">Invest</a>
               <button className="nav-btn">Get App</button>
            </div>
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
           transition: all 0.2s;
        }
        
        .nav-links a:hover {
           opacity: 1;
           color: var(--color-accent);
           text-decoration: none;
        }

        .nav-btn {
           background: var(--color-accent);
           border: none;
           padding: 0.6rem 1.5rem;
           border-radius: 50px;
           font-weight: 700;
           cursor: pointer;
           color: var(--color-color-bg); /* Dark text on bright button */
           transition: transform 0.2s;
        }

        .nav-btn:hover {
           transform: scale(1.05);
           background: var(--color-white);
        }
      `}</style>
      </nav>
   );
};

export default Navigation;
