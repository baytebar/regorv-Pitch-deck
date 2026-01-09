import { Share2, Tractor, Store, Gavel, UserCheck, Bell, Search, Home, Users, Leaf, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Solution = () => {
    const features = [
        {
            icon: <Share2 size={24} />,
            title: "Social Graph",
            desc: "Connect & share tips.",
            color: "#FFC759"
        },
        {
            icon: <Store size={24} />,
            title: "Marketplace",
            desc: "Direct buyer access.",
            color: "#4ECDC4"
        },
        {
            icon: <Gavel size={24} />,
            title: "Bulk Bidding",
            desc: "Group buying power.",
            highlight: true,
            color: "#D4EE26"
        },
        {
            icon: <Tractor size={24} />,
            title: "Job Portal",
            desc: "Find labor & machinery.",
            color: "#FF6B6B"
        },
        {
            icon: <Bell size={24} />,
            title: "Mandi Alerts",
            desc: "Real-time prices.",
            color: "#A06CD5"
        },
        {
            icon: <UserCheck size={24} />,
            title: "Expert Advisory",
            desc: "1:1 Agronomist calls.",
            color: "#62B6CB"
        }
    ];

    return (
        <section className="solution-slide">
            <div className="container h-full">
                <div className="solution-split">
                    {/* Left: Phone Mockup */}
                    <div className="phone-container">
                        <motion.div
                            className="phone-mockup"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="notch"></div>
                            <div className="app-screen">
                                {/* App Header */}
                                <div className="app-header">
                                    <Menu size={20} color="#333" />
                                    <span className="app-logo">Regrov</span>
                                    <Bell size={20} color="#333" />
                                </div>

                                {/* App Search */}
                                <div className="app-search">
                                    <Search size={16} color="#999" />
                                    <span>Search crops, seeds...</span>
                                </div>

                                {/* Quick Actions Grid */}
                                <div className="app-grid">
                                    <div className="app-card highlight">
                                        <div className="card-icon" style={{ background: '#e8f5e9' }}><Leaf size={20} color="green" /></div>
                                        <span>My Crops</span>
                                    </div>
                                    <div className="app-card">
                                        <div className="card-icon" style={{ background: '#fff3e0' }}><Store size={20} color="orange" /></div>
                                        <span>Mandi</span>
                                    </div>
                                    <div className="app-card">
                                        <div className="card-icon" style={{ background: '#e3f2fd' }}><Users size={20} color="blue" /></div>
                                        <span>Community</span>
                                    </div>
                                    <div className="app-card">
                                        <div className="card-icon" style={{ background: '#fce4ec' }}><Tractor size={20} color="pink" /></div>
                                        <span>Rentals</span>
                                    </div>
                                </div>

                                {/* Feed Item */}
                                <div className="feed-item">
                                    <div className="feed-header">
                                        <div className="feed-avatar">RP</div>
                                        <div className="feed-meta">
                                            <strong>Ravi Patel</strong>
                                            <span>Just now</span>
                                        </div>
                                    </div>
                                    <p className="feed-text">Just harvested 5 tons of premium wheat! 🌾 Ready for buyers.</p>
                                    <div className="feed-img"></div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="bottom-nav">
                                    <div className="nav-item active"><Home size={22} /></div>
                                    <div className="nav-item"><Store size={22} /></div>
                                    <div className="nav-item"><Users size={22} /></div>
                                    <div className="nav-item"><UserCheck size={22} /></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Content & Features */}
                    <div className="solution-content">
                        <motion.div
                            className="text-block"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="tag">The Solution</span>
                            <h2>The Super App for <br /><span className="highlight-text">Smart Farming</span></h2>
                            <p className="description">One unified ecosystem replacing fragmented tools. Empowering farmers with data, access, and community.</p>
                        </motion.div>

                        <div className="features-grid">
                            {features.map((f, i) => (
                                <motion.div
                                    className="feature-card"
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="icon-badge" style={{ color: f.color }}>
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h4>{f.title}</h4>
                                        <p>{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .solution-slide {
                    height: 100vh;
                    width: 100%;
                    background: radial-gradient(circle at top right, #163B24 0%, #0D2818 100%);
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                }

                .solution-split {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    height: 100%;
                    align-items: center;
                }

                @media(min-width: 900px) {
                    .solution-split {
                        grid-template-columns: 1fr 1.2fr;
                        gap: 5rem;
                    }
                }

                /* Phone Styles */
                .phone-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                }

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
                    background: #F5F7FA;
                    display: flex;
                    flex-direction: column;
                    padding-top: 35px;
                    border-radius: 35px;
                    overflow: hidden;
                    position: relative;
                }

                .app-header {
                    padding: 0 1.5rem 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .app-logo {
                    font-family: var(--font-heading);
                    font-weight: bold;
                    font-size: 1.25rem;
                    color: #1a4d2e;
                }

                .app-search {
                    margin: 0 1.5rem 1.5rem;
                    background: white;
                    padding: 10px 15px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: #999;
                    font-size: 0.9rem;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                }

                .app-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                    padding: 0 1.5rem 1.5rem;
                }

                .app-card {
                    background: white;
                    padding: 15px;
                    border-radius: 16px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
                }

                .card-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .app-card span {
                    font-size: 0.8rem;
                    font-weight: 500;
                    color: #444;
                }

                .feed-item {
                    margin: 0 1.5rem;
                    background: white;
                    border-radius: 16px;
                    padding: 15px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
                }

                .feed-header {
                    display: flex;
                    gap: 10px;
                    margin-bottom: 10px;
                }
                
                .feed-avatar {
                    width: 35px; height: 35px;
                    background: #FFC759;
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 0.8rem; font-weight: bold; color: #333;
                }

                .feed-meta { display: flex; flex-direction: column; }
                .feed-meta strong { font-size: 0.9rem; color: #333; }
                .feed-meta span { font-size: 0.75rem; color: #888; }
                
                .feed-text { font-size: 0.85rem; color: #555; margin-bottom: 10px; }
                .feed-img { width: 100%; height: 80px; background: #e0e0e0; border-radius: 8px; }

                .bottom-nav {
                    margin-top: auto;
                    background: white;
                    padding: 15px 25px;
                    display: flex;
                    justify-content: space-between;
                    border-top: 1px solid #eee;
                }

                .nav-item { color: #ccc; }
                .nav-item.active { color: #1a4d2e; }


                /* Right Content */
                .solution-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .text-block { margin-bottom: 3rem; }
                
                .tag {
                    color: var(--color-accent);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 0.8rem;
                    display: block;
                    margin-bottom: 0.5rem;
                }

                h2 {
                    font-size: 3rem;
                    color: white;
                    line-height: 1.1;
                    margin-bottom: 1rem;
                }
                
                .highlight-text { color: var(--color-accent); font-style: italic; }
                
                .description {
                    color: #A3BCA9;
                    font-size: 1.1rem;
                    max-width: 500px;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }

                .feature-card {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                }

                .icon-badge {
                    background: rgba(255,255,255,0.05);
                    padding: 10px;
                    border-radius: 12px;
                }

                .feature-card h4 {
                    font-size: 1rem;
                    color: white;
                    margin-bottom: 0.2rem;
                }

                .feature-card p {
                    font-size: 0.85rem;
                    color: #888;
                }
            `}</style>
        </section>
    );
};

export default Solution;
