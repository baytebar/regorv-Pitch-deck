import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Team = () => {
    return (
        <div className="team-slide">
            <div className="container h-full">
                <div className="content-wrapper">
                    <motion.div
                        className="team-block"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="tag">Our Team</span>
                        <h2>Leadership & Visionaries</h2>
                        <div className="team-grid">
                            <div className="member-card">
                                <div className="avatar-lg" style={{ background: '#FFC759' }}>JS</div>
                                <div>
                                    <h3>Jacob Sunny</h3>
                                    <span className="role">Founder & CEO</span>
                                    <div className="socials">
                                        <Linkedin size={18} />
                                        <Twitter size={18} />
                                    </div>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="avatar-lg" style={{ background: '#4ECDC4' }}>AT</div>
                                <div>
                                    <h3>Agri Techies</h3>
                                    <span className="role">Engineering</span>
                                    <div className="socials">
                                        <Github size={18} />
                                    </div>
                                </div>
                            </div>
                            <div className="member-card">
                                <div className="avatar-lg" style={{ background: '#FF6B6B' }}>DT</div>
                                <div>
                                    <h3>Design Team</h3>
                                    <span className="role">Product Design</span>
                                    <div className="socials">
                                        <Twitter size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .team-slide {
                    height: 100vh;
                    width: 100%;
                    background: #0B1E14;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }

                .content-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    max-width: 1000px;
                }

                .tag {
                    color: var(--color-accent);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 0.8rem;
                    margin-bottom: 0.5rem;
                    display: block;
                    text-align: center;
                }

                .team-block h2 {
                    color: white;
                    font-size: 3rem;
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .team-grid {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    flex-wrap: wrap;
                    width: 100%;
                }

                .member-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    background: rgba(255,255,255,0.03);
                    padding: 2rem;
                    border-radius: 24px;
                    border: 1px solid rgba(255,255,255,0.05);
                    transition: transform 0.3s;
                    text-align: center;
                    min-width: 200px;
                }
                
                .member-card:hover {
                    transform: translateY(-5px);
                    background: rgba(255,255,255,0.06);
                    border-color: rgba(255,255,255,0.1);
                }

                .avatar-lg {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    color: #1a1a1a;
                    font-size: 1.5rem;
                    flex-shrink: 0;
                    margin-bottom: 0.5rem;
                }

                .member-card h3 {
                    color: white;
                    font-size: 1.25rem;
                    margin-bottom: 0.25rem;
                }

                .role {
                    color: #888;
                    font-size: 0.9rem;
                    display: block;
                    margin-bottom: 1rem;
                }

                .socials {
                    display: flex;
                    justify-content: center;
                    gap: 0.75rem;
                    color: #666;
                    width: 100%;
                }
                
                .socials svg:hover {
                    color: var(--color-accent);
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default Team;
