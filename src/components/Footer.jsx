import { Mail, Instagram, ArrowUp, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../public/images/logo.svg';

const Footer = () => {
    const scrollToTop = () => {
        const container = document.querySelector('.snap-container');
        if (container) {
            container.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    const scrollToSection = (sectionId) => {
        const container = document.querySelector('.snap-container');
        if (container) {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                container.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    {/* Brand Section */}
                    <motion.div
                        className="footer-brand"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={logo} alt="Regrov" style={{ height: '50px', width: 'auto', marginBottom: '1rem' }} />
                        <p className="footer-tagline">
                            "To become the world's most trusted digital ecosystem for farmers."
                        </p>
                        <div className="social-links">
                            <a href="https://www.instagram.com/regrov_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="footer-links"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <button onClick={() => scrollToSection('hero')}>Home</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('problem')}>The Problem</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('solution')}>Solution</button>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="footer-contact"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4>Get in Touch</h4>
                        <div className="contact-item">
                            <Mail size={18} className="contact-icon" />
                            <span>info@baytebar.com</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} className="contact-icon" />
                            <span>+91 8848187268</span>
                        </div>
                        <div className="contact-item">
                            <MapPin size={18} className="contact-icon" />
                            <span>Idukki</span>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Bar - Copyright */}
                <motion.div
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="footer-bottom-content">
                        <p>&copy; 2026 Regrov. All rights reserved.</p>
                    </div>
                </motion.div>

                {/* Scroll to Top Button */}
                <motion.button
                    className="scroll-to-top"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                >
                    <ArrowUp size={24} />
                </motion.button>
            </div>

            <style>{`
                .footer {
                    width: 100%;
                    background: linear-gradient(180deg, #0D2818 0%, #0A1F12 100%);
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 4rem 0 2rem;
                    position: relative;
                    overflow: hidden;
                }

                .footer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
                    opacity: 0.3;
                }

                .footer-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                }

                .footer-content {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                }

                @media (min-width: 768px) {
                    .footer-content {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (min-width: 1024px) {
                    .footer-content {
                        grid-template-columns: 2fr 1.5fr 1.5fr;
                    }
                }

                .footer-brand {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .footer-logo {
                    font-family: var(--font-heading);
                    font-size: 2rem;
                    color: var(--color-accent);
                    margin: 0;
                    font-weight: 700;
                }

                .footer-tagline {
                    color: var(--color-text-muted);
                    font-size: 0.95rem;
                    font-style: italic;
                    line-height: 1.6;
                    max-width: 300px;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 0.5rem;
                }

                .social-link {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    color: var(--color-text-muted);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .social-link:hover {
                    background: var(--color-accent);
                    color: var(--color-text-dark);
                    border-color: var(--color-accent);
                    transform: translateY(-3px);
                }

                .footer-links h4,
                .footer-contact h4 {
                    color: white;
                    font-size: 1.1rem;
                    margin-bottom: 1.5rem;
                    font-weight: 600;
                }

                .footer-links ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .footer-links button {
                    background: none;
                    border: none;
                    color: var(--color-text-muted);
                    font-size: 0.95rem;
                    cursor: pointer;
                    text-align: left;
                    padding: 0;
                    transition: all 0.2s ease;
                    font-family: var(--font-body);
                }

                .footer-links button:hover {
                    color: var(--color-accent);
                    transform: translateX(5px);
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                    color: var(--color-text-muted);
                    font-size: 0.95rem;
                }

                .contact-icon {
                    color: var(--color-accent);
                    flex-shrink: 0;
                }

                .footer-bottom {
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    padding-top: 2rem;
                    margin-top: 3rem;
                    width: 100%;
                    grid-column: 1 / -1;
                }

                .footer-bottom-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-text-muted);
                    font-size: 0.85rem;
                    text-align: center;
                }

                .footer-bottom-content p {
                    margin: 0;
                }

                .scroll-to-top {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    width: 50px;
                    height: 50px;
                    background: var(--color-accent);
                    color: var(--color-text-dark);
                    border: none;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 4px 15px rgba(212, 238, 38, 0.4);
                    z-index: 999;
                    transition: all 0.3s ease;
                }

                .scroll-to-top:hover {
                    background: white;
                    box-shadow: 0 6px 20px rgba(212, 238, 38, 0.5);
                }

                @media (max-width: 768px) {
                    .scroll-to-top {
                        bottom: 1rem;
                        right: 1rem;
                        width: 45px;
                        height: 45px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
