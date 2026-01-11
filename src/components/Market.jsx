import { Globe, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Market = () => {
   return (
      <section className="market-section">
         <div className="container h-full">
            <div className="market-content">
               <motion.div
                  className="market-header"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
               >
                  <span className="tag">The Opportunity</span>
                  <h2>A massive, untapped ecosystem.</h2>
               </motion.div>

               <div className="stats-grid">
                  <motion.div
                     className="stat-card"
                     initial={{ scale: 0.9, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                  >
                     <Globe size={40} className="stat-icon" />
                     <div className="stat-label">Total Addressable Market</div>
                     <div className="stat-value">$12 Trillion</div>
                     <div className="stat-desc">Global Agriculture Output</div>
                  </motion.div>

                  <motion.div
                     className="stat-card featured"
                     initial={{ scale: 0.9, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.4 }}
                  >
                     <Users size={48} className="stat-icon" />
                     <div className="stat-label">Serviceable Market</div>
                     <div className="stat-value highlight">570 Million</div>
                     <div className="stat-desc">Farms family-owned globally.</div>
                  </motion.div>

                  <motion.div
                     className="stat-card"
                     initial={{ scale: 0.9, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.6 }}
                  >
                     <TrendingUp size={40} className="stat-icon" />
                     <div className="stat-label">Target Market (India)</div>
                     <div className="stat-value">$300 Billion</div>
                     <div className="stat-desc">Immediate Agri-Tech opportunity.</div>
                  </motion.div>
               </div>

               <motion.div
                  className="market-footer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
               >
                  <p>Market growing at <strong>12% CAGR</strong> due to smartphone adoption.</p>
               </motion.div>
            </div>
         </div>

         <style>{`
        .market-section {
           min-height: 100vh;
           height: auto;
           width: 100%;
           background: radial-gradient(circle at center, #1E4D36 0%, #0D2818 100%);
           display: flex;
           align-items: center;
           justify-content: center;
           color: white;
        }

        .market-content {
           display: flex;
           flex-direction: column;
           padding: 4rem 0;
           align-items: center;
           width: 100%;
           max-width: 1200px;
        }

        .market-header {
           text-align: center;
           margin-bottom: 4rem;
        }

        .tag {
           color: var(--color-accent);
           text-transform: uppercase;
           letter-spacing: 2px;
           font-size: 0.8rem;
           margin-bottom: 0.5rem;
           display: block;
        }

        .market-header h2 {
           font-size: 3rem;
           color: rgba(255,255,255,0.9);
        }

        .stats-grid {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
           gap: 2rem;
           width: 100%;
        }

        .stat-card {
           background: rgba(255,255,255,0.05); /* Slightly lighter background */
           border: 1px solid rgba(255,255,255,0.1);
           border-radius: 20px;
           padding: 3rem 2rem;
           text-align: center;
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           transition: transform 0.3s;
        }
        
        .stat-card:hover {
           background: rgba(255,255,255,0.08);
           transform: translateY(-5px);
        }

        .stat-card.featured {
           background: rgba(255,255,255,0.08); /* Even lighter for featured */
           border-color: rgba(255,255,255,0.2);
           transform: scale(1.05);
           box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        
        .stat-card.featured:hover {
            transform: scale(1.05) translateY(-5px);
        }

        .stat-icon {
           color: var(--color-accent-2); /* Goldenrod for icons */
           margin-bottom: 1.5rem;
           opacity: 0.8;
        }
        
        .featured .stat-icon {
            color: var(--color-accent); /* Neon for featured icon */
            opacity: 1;
        }

        .stat-label {
           text-transform: uppercase;
           letter-spacing: 1px;
           font-size: 0.85rem;
           margin-bottom: 1rem;
           color: rgba(255,255,255,0.6); /* Brighter gray */
        }

        .stat-value {
           font-size: 3rem;
           font-weight: 700;
           font-family: var(--font-heading);
           margin-bottom: 0.5rem;
           color: white;
           line-height: 1;
        }
        
        .stat-value.highlight {
            color: var(--color-accent);
        }

        .stat-desc {
           color: rgba(255,255,255,0.7); /* Brighter description */
           font-size: 0.95rem;
        }

        .market-footer {
           margin-top: 4rem;
           background: rgba(255,255,255,0.05);
           padding: 0.75rem 2rem;
           border-radius: 50px;
           color: rgba(255,255,255,0.8);
        }
        
        .market-footer strong {
            color: var(--color-accent);
        }

        @media (max-width: 900px) {
           .stats-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
           }
           
           .stat-card.featured {
              transform: scale(1);
           }
           
           .stat-card.featured:hover {
              transform: translateY(-5px);
           }
        }
      `}</style>
      </section>
   );
};

export default Market;
