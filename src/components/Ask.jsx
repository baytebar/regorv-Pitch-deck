import { Mail, CheckCircle, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';

const Ask = () => {
    return (
        <div className="ask-slide">
            <div className="container h-full">
                <div className="ask-content">
                    <motion.div
                        className="header-block"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="tag">The Investment</span>
                        <h2>Join the Revolution</h2>
                        <p className="subtitle">Fueling the next green revolution with technology.</p>
                    </motion.div>

                    <div className="split-layout">
                        {/* Left: Key Metrcs / Ask */}
                        <motion.div
                            className="ask-details"
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="amount-card">
                                <span className="label">Raising</span>
                                <div className="big-amt">$500,000</div>
                                <span className="round-badge">Pre-Seed Limited Round</span>
                            </div>

                            <ul className="milestones-list">
                                <li><CheckCircle size={20} className="check" /> 18 Months Runway</li>
                                <li><CheckCircle size={20} className="check" /> Reach 50,000 Farmers</li>
                                <li><CheckCircle size={20} className="check" /> $2M GMV Target</li>
                            </ul>
                        </motion.div>

                        {/* Right: Use of Funds */}
                        <motion.div
                            className="funds-viz"
                            initial={{ x: 30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3>Use of Funds</h3>
                            <div className="bars-container">
                                <div className="fund-bar" style={{ '--width': '50%' }}>
                                    <span className="bar-label">Product Development</span>
                                    <span className="bar-val">50%</span>
                                    <div className="bar-fill"></div>
                                </div>
                                <div className="fund-bar" style={{ '--width': '30%' }}>
                                    <span className="bar-label">Growth & Marketing</span>
                                    <span className="bar-val">30%</span>
                                    <div className="bar-fill fill-2"></div>
                                </div>
                                <div className="fund-bar" style={{ '--width': '20%' }}>
                                    <span className="bar-label">Operations & Legal</span>
                                    <span className="bar-val">20%</span>
                                    <div className="bar-fill fill-3"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="final-cta"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <button className="contact-btn">
                            <Mail size={20} /> Contact Founder
                        </button>
                        <p className="vision-text">"To become the world’s most trusted digital ecosystem for farmers."</p>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .ask-slide {
                    height: 100vh;
                    width: 100%;
                    background: radial-gradient(circle at bottom left, #1a4d2e 0%, #0D2818 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }

                .ask-content {
                    width: 100%;
                    max-width: 1000px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .header-block {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .tag {
                    color: var(--color-accent);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 0.9rem;
                    display: block;
                    margin-bottom: 0.5rem;
                }

                .header-block h2 {
                    font-size: 3.5rem;
                    margin-bottom: 0.5rem;
                }

                .subtitle {
                    color: #A3BCA9;
                    font-size: 1.2rem;
                }

                .split-layout {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    width: 100%;
                    margin-bottom: 4rem;
                }

                @media(min-width: 900px) {
                    .split-layout {
                         grid-template-columns: 1fr 1fr;
                         align-items: center;
                    }
                }

                .ask-details {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .amount-card {
                    background: rgba(255,255,255,0.05);
                    padding: 2rem 3rem;
                    border-radius: 20px;
                    border: 1px solid rgba(255,255,255,0.1);
                    text-align: center;
                    margin-bottom: 2rem;
                    display: inline-block;
                }

                .label {
                    color: #888;
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                }

                .big-amt {
                    font-size: 4rem;
                    font-weight: 700;
                    color: var(--color-accent);
                    line-height: 1.1;
                    font-family: var(--font-heading);
                    margin: 0.5rem 0 1rem;
                }

                .round-badge {
                    background: #2D6A4F;
                    padding: 5px 15px;
                    border-radius: 50px;
                    font-size: 0.85rem;
                }

                .milestones-list {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    width: 100%;
                    align-items: center;
                }

                .milestones-list li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    font-size: 1.1rem;
                    color: #e0e0e0;
                }

                .check {
                    color: var(--color-accent);
                }

                .funds-viz {
                    text-align: center;
                }

                .funds-viz h3 {
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    padding-bottom: 0.5rem;
                    display: inline-block;
                }

                .bars-container {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    text-align: left; /* Keep bars left text aligned for readability */
                }

                .fund-bar {
                    width: 100%;
                }

                .bar-label {
                    display: block;
                    margin-bottom: 0.3rem;
                    font-size: 0.95rem;
                    color: #ccc;
                }
                
                .bar-val {
                    float: right;
                    color: var(--color-accent);
                    font-weight: bold;
                }

                .bar-fill {
                    height: 12px;
                    background: var(--color-accent);
                    width: var(--width);
                    border-radius: 6px;
                    position: relative;
                }

                .fill-2 { background: #4ECDC4; }
                .fill-3 { background: #FF6B6B; }

                .final-cta {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                }
                
                .contact-btn {
                    background: white;
                    color: #0A1F12;
                    border: none;
                    padding: 1rem 2.5rem;
                    border-radius: 50px;
                    font-size: 1.1rem;
                    font-weight: 700;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: transform 0.2s;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                }

                .contact-btn:hover {
                    transform: scale(1.05);
                    background: var(--color-accent);
                }

                .vision-text {
                    font-style: italic;
                    color: #666;
                    font-size: 1rem;
                }
            `}</style>
        </div>
    );
};

export default Ask;
