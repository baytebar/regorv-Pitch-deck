import { Globe, Sprout, TrendingUp, User, Menu, Bell, Search, Leaf, Store, Users, Tractor, UserCheck, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import regrovLogo from '../public/images/regrov.png';

const Hero = () => {
  return (
    <div className="hero-slide">
      <div className="container h-full">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <motion.div
              className="badge-capsule"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Globe size={14} />
              <span>Global Agri-Tech Ecosystem</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The <span className="text-accent">Super App</span> for <br />
              <span className="serif-italic">Modern Farmers.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Connecting 500M+ farmers to fair trade, advisory, and community in one unified digital ecosystem.
            </motion.p>

            <motion.div
              className="hero-stat-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="stat-item">
                <strong>$12T</strong>
                <span>Global Market</span>
              </div>
              <div className="divider"></div>
              <div className="stat-item">
                <strong>570M</strong>
                <span>Farmers</span>
              </div>
              <div className="divider"></div>
              <div className="stat-item">
                <strong className="text-accent">1 App</strong>
                <span>Solution</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Abstract Representation */}
          <motion.div
            className="phone-mockup"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="notch"></div>
            <div className="app-screen">
              <div className="brand-center">
                <motion.img
                  src={regrovLogo}
                  alt="Regrov Logo"
                  className="logo-img"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.9, scale: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </div>
            </div>

            <div className="floating-card c1">
              <div className="icon-box">
                <Sprout size={20} />
              </div>
              <div className="text-box">
                <div className="line l1"></div>
                <div className="line l2"></div>
              </div>
            </div>
            <div className="floating-card c2">
              <div className="icon-box">
                <TrendingUp size={20} />
              </div>
              <div className="text-box">
                <span>Market Rate</span>
                <strong>+15%</strong>
              </div>
            </div>
            <div className="floating-card c3">
              <div className="user-face-icon">
                <User size={18} />
              </div>
              <span>"Sold in 2hrs!"</span>
            </div>
            <div className="glow-effect"></div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-slide {
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 70% 30%, #1a4d2e 0%, var(--color-bg) 60%);
        }

        .h-full { 
          height: 100%; 
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          height: 100%;
          align-items: center;
          justify-items: center;
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.2fr 1fr;
            justify-items: center;
          }
        }

        .hero-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          margin: 1.5rem 0;
          line-height: 1.1;
          color: white;
        }

        .serif-italic {
           font-family: var(--font-heading);
           font-style: italic;
           font-weight: 400;
           color: rgba(255,255,255,0.9);
        }

        @media (min-width: 1200px) {
           .hero-content h1 {
              font-size: 5rem;
           }
        }

        .badge-capsule {
           display: inline-flex;
           align-items: center;
           gap: 8px;
           padding: 8px 16px;
           background: rgba(255,255,255,0.1);
           border-radius: 50px;
           color: var(--color-accent);
           font-size: 0.85rem;
           font-weight: 500;
           border: 1px solid rgba(255,255,255,0.1);
        }

        .hero-content p {
           font-size: 1.25rem;
           color: var(--color-text-muted);
           max-width: 500px;
           margin-bottom: 3rem;
        }

        .hero-stat-row {
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 2rem;
           padding-top: 2rem;
           border-top: 1px solid rgba(255,255,255,0.1);
        }

        .stat-item {
           display: flex;
           flex-direction: column;
        }

        .stat-item strong {
           font-size: 2rem;
           font-family: var(--font-heading);
           color: white;
           line-height: 1;
        }

        .stat-item span {
           font-size: 0.85rem;
           text-transform: uppercase;
           letter-spacing: 1px;
           margin-top: 5px;
           color: rgba(255,255,255,0.5);
        }

        .divider {
           width: 1px;
           height: 40px;
           background: rgba(255,255,255,0.1);
        }

        /* Phone Styles */
        .phone-mockup {
            width: 320px;
            height: 650px;
            background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
            border-radius: 45px;
            padding: 12px;
            box-shadow: 
                0 0 0 2px #0a0a0a,
                0 0 0 6px #3a3a3a,
                0 30px 60px -15px rgba(0, 0, 0, 0.7),
                inset 0 1px 2px rgba(255,255,255,0.1);
            position: relative;
            overflow: visible;
        }

        .phone-mockup::before {
            content: '';
            position: absolute;
            top: 80px;
            right: -3px;
            width: 3px;
            height: 50px;
            background: linear-gradient(180deg, #2a2a2a, #1a1a1a);
            border-radius: 0 2px 2px 0;
        }

        .phone-mockup::after {
            content: '';
            position: absolute;
            top: 150px;
            left: -3px;
            width: 3px;
            height: 80px;
            background: linear-gradient(180deg, #2a2a2a, #1a1a1a);
            border-radius: 2px 0 0 2px;
        }

        .notch {
            position: absolute;
            top: 12px;
            left: 50%;
            transform: translateX(-50%);
            width: 140px;
            height: 28px;
            background: #0a0a0a;
            border-radius: 0 0 18px 18px;
            z-index: 10;
            box-shadow: inset 0 -2px 4px rgba(0,0,0,0.3);
        }

        .notch::before {
            content: '';
            position: absolute;
            top: 8px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 6px;
            background: #1a1a1a;
            border-radius: 3px;
        }

        .notch::after {
            content: '';
            position: absolute;
            top: 8px;
            right: 20px;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, #1a3a2a, #0a1a0a);
            border-radius: 50%;
            box-shadow: 0 0 4px rgba(0,255,100,0.3);
        }

        .app-screen {
            height: 100%;
            width: 100%;
            background: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 35px;
            border-radius: 35px;
            overflow: visible;
            position: relative;
        }

        .brand-center {
          width: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .logo-img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
        
        .floating-card {
           position: absolute;
           background: var(--color-surface);
           border-radius: 20px;
           padding: 1.25rem;
           box-shadow: 0 10px 30px rgba(0,0,0,0.2);
           display: flex;
           align-items: center;
           gap: 16px;
           border: 1px solid rgba(255,255,255,0.1);
           animation: float 6s ease-in-out infinite;
           z-index: 21;
           color: rgba(255,255,255,1);

        }

        .floating-card strong {
          color: white;
          font-size: 1.25rem;
        }

        .floating-card span {
          color: white;
          font-weight: 500;
        }

        .c1 { top: 15%; left: -140px; width: 220px; animation-delay: 0s; }
        .c2 { top: 45%; right: -160px; width: 240px; animation-delay: 2.5s; }
        .c3 { bottom: 18%; left: -100px; width: 200px; animation-delay: 5s; }

        .icon-box {
           width: 44px;
           height: 44px;
           background: rgba(26, 77, 46, 0.08);
           border-radius: 12px;
           display: flex;
           align-items: center;
           justify-content: center;
           font-size: 1.4rem;
           color: #1a4d2e;
        }

        .text-box { display: flex; flex-direction: column; gap: 6px; width: 100%; }
        .line { height: 7px; background: rgba(0,0,0,0.05); border-radius: 4px; }
        .l1 { width: 85%; }
        .l2 { width: 60%; }

        .glow-effect {
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);
           width: 500px;
           height: 500px;
           background: var(--color-accent);
           filter: blur(140px);
           opacity: 0.15;
           z-index: -1; 
           border-radius: 50%;
           pointer-events: none;
        }

        .user-face-icon {
          width: 36px;
          height: 36px;
          background: rgba(26, 77, 46, 0.08);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1a4d2e;
          flex-shrink: 0;
        }
      
      // responsive 
      // upto 1400px
      @media (max-width: 1400px) {
        .phone-mockup {
          width: 280px;
          height: 580px;
          border-radius: 40px;
        }
      }
      
      // upto 1200px
      @media (max-width: 1200px) {
        
      }
      
      // upto 1024px
      @media (max-width: 1024px) {
        
      }
      
      // upto 768px
      @media (max-width: 768px) {
        
      }
      
      // upto 425px
      @media (max-width: 425px) {
        
      }
      
      // upto 375px
      @media (max-width: 375px) {
        
      }
      
      // upto 320px
      @media (max-width: 320px) {
        
      }
      
      `}</style>
    </div>
  );
};

export default Hero;
