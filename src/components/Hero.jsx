import { ArrowRight, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

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
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <div className="abstract-phone">
              <div className="screen-content">
                <div className="floating-card c1">
                  <div className="icon-box">🌾</div>
                  <div className="text-box">
                    <div className="line l1"></div>
                    <div className="line l2"></div>
                  </div>
                </div>
                <div className="floating-card c2">
                  <div className="icon-box">📈</div>
                  <div className="text-box">
                    <span>Market Rate</span>
                    <strong>+15%</strong>
                  </div>
                </div>
                <div className="floating-card c3">
                  <div className="user-face"></div>
                  <span>"Sold in 2hrs!"</span>
                </div>
              </div>
              <div className="glow-effect"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-slide {
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at 70% 30%, #1a4d2e 0%, var(--color-bg) 60%);
        }

        .h-full { height: 100%; }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          height: 100%;
          align-items: center;
          gap: 2rem;
        }

        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.2fr 1fr;
          }
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

        /* Abstract Visuals */
        .hero-visual {
           position: relative;
           height: 100%;
           display: flex;
           align-items: center;
           justify-content: center;
        }

        .abstract-phone {
           width: 320px;
           height: 600px;
           background: linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%);
           border-radius: 40px;
           border: 1px solid rgba(255,255,255,0.2);
           position: relative;
           backdrop-filter: blur(5px);
           transform: rotate(-10deg);
           box-shadow: 20px 20px 60px rgba(0,0,0,0.3);
        }

        .screen-content {
           position: relative;
           width: 100%;
           height: 100%;
        }

        .floating-card {
           position: absolute;
           background: var(--color-surface);
           border-radius: 16px;
           padding: 1rem;
           box-shadow: 0 10px 30px rgba(0,0,0,0.2);
           display: flex;
           align-items: center;
           gap: 12px;
           border: 1px solid rgba(255,255,255,0.1);
           animation: float 6s ease-in-out infinite;
        }

        .c1 { top: 15%; left: -40px; width: 180px; animation-delay: 0s; }
        .c2 { top: 45%; right: -50px; width: 200px; animation-delay: 2s; }
        .c3 { bottom: 20%; left: -20px; width: 160px; animation-delay: 4s; }

        .icon-box {
           width: 40px;
           height: 40px;
           background: rgba(255,255,255,0.1);
           border-radius: 10px;
           display: flex;
           align-items: center;
           justify-content: center;
           font-size: 1.2rem;
        }

        .text-box { display: flex; flex-direction: column; gap: 4px; width: 100%; }
        .line { height: 6px; background: rgba(255,255,255,0.2); border-radius: 4px; }
        .l1 { width: 80%; }
        .l2 { width: 50%; }

        .glow-effect {
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);
           width: 300px;
           height: 300px;
           background: var(--color-accent);
           filter: blur(80px);
           opacity: 0.15;
           z-index: -1;
           border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default Hero;
