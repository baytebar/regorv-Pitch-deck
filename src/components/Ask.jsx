import { Mail } from 'lucide-react';
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
                        <p className="vision-text">&quot;To become the world’s most trusted digital ecosystem for farmers.&quot;</p>
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
