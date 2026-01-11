import { AlertTriangle, TrendingDown, Users, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Problem = () => {
  const problems = [
    {
      icon: <Users size={32} />,
      title: "Fragmentation",
      desc: "Farmers disjointed from markets & advice."
    },
    {
      icon: <AlertTriangle size={32} />,
      title: "Middlemen",
      desc: "Losing 40-60% margin to intermediaries."
    },
    {
      icon: <TrendingDown size={32} />,
      title: "Price Opacity",
      desc: "No real-time data leads to underselling."
    },
    {
      icon: <Layers size={32} />,
      title: "Tool Fatigue",
      desc: "Forced to use 5+ apps for basic needs."
    }
  ];

  return (
    <div className="problem-slide">
      <div className="container h-full">
        <div className="problem-grid">

          <motion.div
            className="text-side"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="overline">The Reality</span>
            <h2>Agriculture is <span className="highlight-red">Broken.</span></h2>
            <p className="lead">
              Despite feeding the world, farmers are trapped in an analog ecosystem that eats away their profits.
            </p>
            <div className="stat-highlight">
              <strong>60%</strong>
              <span>Income lost to inefficiencies</span>
            </div>
          </motion.div>

          <div className="cards-side">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                className="problem-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="icon-wrapper">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .problem-slide {
          min-height: 100vh;
          height: auto;
          width: 100%;
          background: #0A0F0D; /* Almost black */
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .problem-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          min-height: 100%;
          padding: 4rem 0;
          align-items: center;
          justify-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 900px) {
          .problem-grid {
            grid-template-columns: 1fr 1fr;
            justify-items: center;
          }
        }

        .overline {
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #ff6b6b;
          font-weight: 700;
          margin-bottom: 1rem;
          display: block;
        }

        .text-side {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .text-side h2 {
          font-size: 4rem;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .text-side h2 {
             font-size: 2.5rem;
          }
        }

        .highlight-red {
          color: #ff6b6b;
          font-style: italic;
        }

        .lead {
          font-size: 1.25rem;
          color: #888;
          margin-bottom: 3rem;
          max-width: 450px;
        }

        .stat-highlight {
          border-left: 4px solid #ff6b6b;
          padding-left: 1.5rem;
          text-align: left;
          align-self: center;
        }

        .stat-highlight strong {
          display: block;
          font-size: 3rem;
          color: white;
          font-family: var(--font-heading);
          line-height: 1;
        }

        .stat-highlight span {
          color: #888;
        }

        .cards-side {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          justify-items: center;
        }

        @media (max-width: 768px) {
            .cards-side {
               grid-template-columns: 1fr;
            }
        }

        .problem-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 2rem;
          border-radius: 20px;
          transition: background 0.3s;
        }

        .problem-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.1);
        }

        .icon-wrapper {
          color: #ff6b6b;
          margin-bottom: 1rem;
        }

        .problem-card h3 {
          color: white;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .problem-card p {
          color: #888;
          font-size: 0.9rem;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
};

export default Problem;
