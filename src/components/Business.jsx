import { DollarSign, Megaphone, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const Business = () => {
    return (
        <div className="business-slide">
            <div className="container h-full">
                <div className="two-col-grid">
                    {/* Left: Revenue Model */}
                    <div className="revenue-section">
                        <span className="tag">Monetization</span>
                        <h2>How We Make Money</h2>

                        <div className="revenue-list">
                            <motion.div
                                className="rev-item primary"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="icon-box"><Megaphone /></div>
                                <div>
                                    <h3>Ads Platform</h3>
                                    <p>Hyper-local ads for fertilizers, tractors, & tools.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="rev-item"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="icon-box"><DollarSign /></div>
                                <div>
                                    <h3>Transaction Fees</h3>
                                    <p>Commission on marketplace sales & hiring.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="rev-item"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="icon-box"><Target /></div>
                                <div>
                                    <h3>Subscription</h3>
                                    <p>Premium advisory & advanced analytics.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: GTM Strategy */}
                    <motion.div
                        className="gtm-section"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Go-To-Market Strategy</h3>
                        <div className="gtm-timeline">
                            <div className="gtm-step">
                                <span className="step-count">01</span>
                                <h4>Grassroots</h4>
                                <p>Partner with 500+ FPOs (Farmer Organizations).</p>
                            </div>
                            <div className="line"></div>
                            <div className="gtm-step">
                                <span className="step-count">02</span>
                                <h4>Digital Viral</h4>
                                <p>Referral program: &quot;Invite a farmer, get free soil test&quot;.</p>
                            </div>
                            <div className="line"></div>
                            <div className="gtm-step">
                                <span className="step-count">03</span>
                                <h4>Govt Collab</h4>
                                <p>Integrate with state agriculture databases.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        .business-slide {
           min-height: 100vh;
           height: auto;
           width: 100%;
           background: #102A1E;
           display: flex;
           align-items: center;
           justify-content: center;
        }

        .two-col-grid {
           display: grid;
           grid-template-columns: 1fr;
           gap: 4rem;
           padding: 4rem 0;
           align-items: center;
           justify-items: center;
           width: 100%;
           max-width: 1200px;
           margin: 0 auto;
        }

        @media (min-width: 900px) {
           .two-col-grid {
              grid-template-columns: 1fr 1fr;
              justify-items: center;
           }
        }

        .tag {
           color: var(--color-accent);
           text-transform: uppercase;
           letter-spacing: 2px;
           font-size: 0.8rem;
           margin-bottom: 1rem;
           display: block;
        }

        .revenue-section {
           text-align: center;
           display: flex;
           flex-direction: column;
           align-items: center;
           width: 100%;
           max-width: 600px;
        }

        .revenue-section h2 {
           font-size: 3rem;
           color: white;
           margin-bottom: 3rem;
        }

        .revenue-list {
           display: flex;
           flex-direction: column;
           gap: 1.5rem;
        }

        .rev-item {
           background: rgba(255,255,255,0.05);
           padding: 1.5rem;
           border-radius: 16px;
           display: flex;
           align-items: center;
           gap: 1.5rem;
           border: 1px solid rgba(255,255,255,0.05);
           transition: transform 0.2s;
        }

        .rev-item:hover {
           transform: translateX(10px);
           background: rgba(255,255,255,0.08);
        }

        .rev-item.primary {
           border-color: var(--color-accent);
           background: linear-gradient(90deg, rgba(212, 238, 38, 0.1) 0%, rgba(255,255,255,0.05) 100%);
        }

        .icon-box {
           width: 50px;
           height: 50px;
           background: rgba(0,0,0,0.3);
           border-radius: 12px;
           display: flex;
           align-items: center;
           justify-content: center;
           color: var(--color-accent);
        }

        .rev-item h3 {
           color: white;
           font-size: 1.2rem;
           margin-bottom: 0.25rem;
        }

        .rev-item p {
           color: #A3BCA9;
           font-size: 0.9rem;
        }

        .gtm-section {
           background: #0A1F12;
           padding: 3rem;
           border-radius: 32px;
           border: 1px solid rgba(255,255,255,0.05);
           width: 100%;
           max-width: 600px;
        }

        .gtm-section h3 {
           color: white;
           font-size: 1.8rem;
           margin-bottom: 2.5rem;
           text-align: center;
        }

        .gtm-timeline {
           display: flex;
           flex-direction: column;
           gap: 0;
           position: relative;
        }

        .gtm-step {
           display: flex;
           flex-direction: column;
           gap: 0.5rem;
           padding-left: 2rem;
           position: relative;
           padding-bottom: 2rem;
        }

        .gtm-step:last-child { padding-bottom: 0; }

        .line {
           position: absolute;
           left: 15px; /* Adjust based on circle size */
           top: 0;
           bottom: 0;
           width: 2px;
           background: rgba(255,255,255,0.1);
        }

        /* Connecting lines logic is complex in CSS only, simplified approach: */
        .gtm-step::before {
           content: '';
           position: absolute;
           left: 0;
           top: 0;
           width: 12px;
           height: 12px;
           border-radius: 50%;
           background: var(--color-accent);
           box-shadow: 0 0 0 4px rgba(212, 238, 38, 0.2);
        }
        
        .gtm-step::after {
            content: '';
            position: absolute;
            left: 5px;
            top: 12px;
            bottom: -12px;
            width: 2px;
            background: rgba(255,255,255,0.1);
        }

        .gtm-step:last-child::after {
            display: none;
        }

        .step-count {
           font-family: var(--font-heading);
           font-size: 2rem;
           color: rgba(255,255,255,0.1);
           position: absolute;
           right: 0;
           top: 0;
        }

        .gtm-step h4 {
           color: white;
           font-size: 1.2rem;
        }

        .gtm-step p {
           color: #888;
           font-size: 0.95rem;
        }
      `}</style>
        </div>
    );
};

export default Business;
