import { motion } from 'framer-motion';

// Import images
import jacobImg from '../public/images/jacob.png';
import thomasImg from '../public/images/thomas.jpeg';
import karthikImg from '../public/images/karthik.jpg';
import shijuImg from '../public/images/shiju.jpg';
import surajImg from '../public/images/suraj.jpg';
import jonoImg from '../public/images/jono.jpg';
import alanImg from '../public/images/alan.jpg';
import joyesImg from '../public/images/joyes.jpg';
import christoImg from '../public/images/christo.jpg';

const Team = () => {
    const teamMembers = [
        { name: 'Jacob', role: 'Founder, CEO', image: jacobImg },
        { name: 'Thomas', role: 'Co-founder, COO', image: thomasImg },
        { name: 'Karthik', role: 'CFO', image: karthikImg },
        { name: 'Shiju', role: 'CTO', image: shijuImg },
        { name: 'Sooraj', role: 'Team Lead, IT', image: surajImg },
        { name: 'Jono', role: 'CMO', image: jonoImg },
        { name: 'Alan', role: 'Marketing Member', image: alanImg },
        { name: 'Joyes', role: 'Human Resource', image: joyesImg },
        { name: 'Christo', role: 'Financial Advisor', image: christoImg }
    ];


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

                        <div className="carousel-container">
                            <div className="carousel-wrapper">
                                <div className="team-group">
                                    {teamMembers.map((member, index) => (
                                        <motion.div
                                            key={`${member.name}-first-${index}`}
                                            className="member-card"
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <div className="avatar-lg">
                                                {member.image ? (
                                                    <img
                                                        src={member.image}
                                                        alt={member.name}
                                                        onError={(e) => {
                                                            const img = e.target;
                                                            const fallback = img.nextElementSibling;
                                                            if (img) img.style.display = 'none';
                                                            if (fallback) fallback.style.display = 'flex';
                                                        }}
                                                    />
                                                ) : null}
                                                <div className="avatar-fallback" style={{ display: member.image ? 'none' : 'flex' }}>
                                                    {member.name.charAt(0)}
                                                </div>
                                            </div>
                                            <div>
                                                <h3>{member.name}</h3>
                                                <span className="role">{member.role}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="team-group" aria-hidden="true">
                                    {teamMembers.map((member, index) => (
                                        <motion.div
                                            key={`${member.name}-second-${index}`}
                                            className="member-card"
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <div className="avatar-lg">
                                                {member.image ? (
                                                    <img
                                                        src={member.image}
                                                        alt={member.name}
                                                        onError={(e) => {
                                                            const img = e.target;
                                                            const fallback = img.nextElementSibling;
                                                            if (img) img.style.display = 'none';
                                                            if (fallback) fallback.style.display = 'flex';
                                                        }}
                                                    />
                                                ) : null}
                                                <div className="avatar-fallback" style={{ display: member.image ? 'none' : 'flex' }}>
                                                    {member.name.charAt(0)}
                                                </div>
                                            </div>
                                            <div>
                                                <h3>{member.name}</h3>
                                                <span className="role">{member.role}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .team-slide {
                    min-height: 100vh;
                    height: auto;
                    width: 100%;
                    background: #0B1E14;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    padding: 4rem 0;
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

                @media (max-width: 768px) {
                    .team-block h2 {
                        font-size: 2rem;
                        padding: 0 1rem;
                    }
                }

                .carousel-container {
                    position: relative;
                    width: 100%;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 1rem 0;
                }

                .carousel-wrapper {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    display: flex;
                }

                .team-group {
                    display: flex;
                    gap: 2rem;
                    padding-right: 2rem;
                    will-change: transform;
                    animation: scrolling 20s linear infinite;
                }

                .carousel-container:hover .team-group {
                    animation-play-state: paused;
                }

                @keyframes scrolling {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                .member-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                    background: rgba(255,255,255,0.03);
                    padding: 2rem 1.5rem;
                    border-radius: 24px;
                    border: 1px solid rgba(255,255,255,0.05);
                    text-align: center;
                    min-width: 250px;
                    max-width: 250px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    flex-shrink: 0;
                }

                .member-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.4);
                    background: rgba(255,255,255,0.05);
                }


                .avatar-lg {
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    flex-shrink: 0;
                    margin-bottom: 0.5rem;
                    border: 3px solid rgba(255,255,255,0.1);
                    background: rgba(255,255,255,0.05);
                }

                .avatar-lg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                }

                .avatar-fallback {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    color: var(--color-accent);
                    font-size: 2rem;
                    background: rgba(255,255,255,0.1);
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
                }
            `}</style>
        </div>
    );
};

export default Team;
