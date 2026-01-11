import { Flag, Map, Cpu, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

const Roadmap = () => {
   const phases = [
      {
         year: "Phase 0",
         title: "Building Prototype",
         desc: "Developing MVP with core social & marketplace features.",
         icon: <Hammer size={24} />,
         status: "active"
      },
      {
         year: "Phase 1",
         title: "South India Pilot",
         desc: "Onboard 50k farmers & 200 FPOs.",
         icon: <Flag size={24} />,
         status: "future"
      },
      {
         year: "Phase 2",
         title: "Pan-India Expansion",
         desc: "Scale to 10M users. Launch Marketplace.",
         icon: <Map size={24} />,
         status: "future"
      },
      {
         year: "Phase 3",
         title: "AI Integration",
         desc: "Deploy crop disease AI & price prediction.",
         icon: <Cpu size={24} />,
         status: "future"
      },
   ];

   return (
      <div className="roadmap-slide">
         <div className="container h-full">
            <div className="center-content">
               <div className="header-block">
                  <span className="tag">The Vision</span>
                  <h2>Strategic Roadmap</h2>
               </div>

               <div className="roadmap-path">
                  {phases.map((p, i) => (
                     <div key={i} className={`milestone ${p.status}`}>
                        <motion.div
                           className="marker-container"
                           initial={{ scale: 0 }}
                           whileInView={{ scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.2 }}
                        >
                           <div className="marker-ring">
                              <div className="icon">{p.icon}</div>
                           </div>
                           {i !== phases.length - 1 && <div className="connector"></div>}
                        </motion.div>

                        <motion.div
                           className="milestone-content"
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.2 + 0.1 }}
                        >
                           <span className="phase-badge">{p.year}</span>
                           <h3>{p.title}</h3>
                           <p>{p.desc}</p>
                        </motion.div>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <style>{`
        .roadmap-slide {
           min-height: 100vh;
           height: auto;
           width: 100%;
           background: #0D2818;
           display: flex;
           align-items: center;
           justify-content: center;
           padding: 4rem 0;
        }

        .center-content {
           display: flex;
           flex-direction: column;
           align-items: center;
           width: 100%;
        }

        .header-block {
           text-align: center;
           margin-bottom: 4rem;
        }

        .tag {
           color: var(--color-accent);
           text-transform: uppercase;
           letter-spacing: 2px;
           font-size: 0.8rem;
           margin-bottom: 1rem;
           display: block;
        }

        .header-block h2 {
           font-size: 3rem;
           color: white;
        }

        .roadmap-path {
           display: flex;
           gap: 2rem;
           width: 100%;
           max-width: 1200px;
           justify-content: center;
        }

        .milestone {
           display: flex;
           flex-direction: column;
           align-items: center;
           flex: 1;
           position: relative;
        }

        .marker-container {
           position: relative;
           display: flex;
           justify-content: center;
           width: 100%;
           height: 80px;
        }

        .marker-ring {
           width: 60px;
           height: 60px;
           border-radius: 50%;
           background: #163B24;
           border: 2px solid #2D6A4F;
           display: flex;
           align-items: center;
           justify-content: center;
           z-index: 2;
           color: #888;
           transition: all 0.3s;
        }

        .milestone.complete .marker-ring, .milestone.active .marker-ring {
           background: var(--color-accent);
           border-color: var(--color-accent);
           color: #0D2818;
           box-shadow: 0 0 20px rgba(212, 238, 38, 0.4);
        }

        .connector {
           position: absolute;
           top: 30px;
           left: 50%;
           right: -50%;
           height: 2px;
           background: #2D6A4F;
           z-index: 1;
        }

        .milestone.complete .connector {
           background: var(--color-accent);
        }

        .milestone-content {
           text-align: center;
           background: rgba(255,255,255,0.03);
           padding: 1.5rem;
           border-radius: 16px;
           border: 1px solid rgba(255,255,255,0.05);
           width: 100%;
           margin-top: 1rem;
        }

        .phase-badge {
           display: inline-block;
           font-size: 0.75rem;
           text-transform: uppercase;
           letter-spacing: 1px;
           margin-bottom: 0.5rem;
           color: #888;
        }

        .milestone.active .phase-badge {
           color: var(--color-accent);
        }

        .milestone h3 {
           color: white;
           font-size: 1.1rem;
           margin-bottom: 0.5rem;
        }

        .milestone p {
           color: #A3BCA9;
           font-size: 0.85rem;
           line-height: 1.4;
        }

        @media (max-width: 900px) {
           .roadmap-path {
              flex-direction: column;
              align-items: flex-start;
              gap: 0;
           }

           .milestone {
              flex-direction: row;
              align-items: flex-start;
              width: 100%;
              gap: 1.5rem;
              padding-bottom: 2rem;
           }

           .marker-container {
              width: 60px;
              justify-content: flex-start;
              height: auto;
           }

           .connector {
              top: 60px;
              left: 30px;
              right: auto;
              width: 2px;
              height: 100%;
           }
           
           .milestone-content {
              margin-top: 0;
              text-align: left;
           }
        }
      `}</style>
      </div>
   );
};

export default Roadmap;
