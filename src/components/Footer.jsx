import { Mail, Instagram, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
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
    <footer className="snap-section footer-section w-full bg-linear-to-b from-[#0D2818] to-[#0A1F12] border-t border-white/5 py-20 pb-8 relative overflow-hidden ">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-(--color-accent) to-transparent opacity-30"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1.5fr_1.5fr] gap-12">
          {/* Brand Section */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/images/logo.svg" 
              alt="Regrov" 
              className="footer-logo w-auto mb-4"
              loading="lazy"
              width="120"
              height="48"
            />
            <p className="text-(--color-text-muted) text-sm italic leading-relaxed max-w-[300px]">
              &quot;To become the world&apos;s most trusted digital ecosystem for farmers.&quot;
            </p>
            <div className="flex gap-4 mt-2">
              <a 
                href="https://www.instagram.com/regrov_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-(--color-text-muted) transition-all duration-300 hover:bg-(--color-accent) hover:text-(--color-text-dark) hover:border-(--color-accent) hover:-translate-y-1"
              >
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white text-lg mb-6 font-semibold">Quick Links</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="bg-transparent border-none text-(--color-text-muted) text-sm cursor-pointer text-left p-0 transition-all duration-200 font-body hover:text-(--color-accent) hover:translate-x-1"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('problem')}
                  className="bg-transparent border-none text-(--color-text-muted) text-sm cursor-pointer text-left p-0 transition-all duration-200 font-body hover:text-(--color-accent) hover:translate-x-1"
                >
                  The Problem
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solution')}
                  className="bg-transparent border-none text-(--color-text-muted) text-sm cursor-pointer text-left p-0 transition-all duration-200 font-body hover:text-(--color-accent) hover:translate-x-1"
                >
                  Solution
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white text-lg mb-6 font-semibold">Get in Touch</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-(--color-text-muted) text-sm">
                <Mail size={18} className="text-(--color-accent) shrink-0" />
                <span>info@baytebar.com</span>
              </div>
              <div className="flex items-center gap-3 text-(--color-text-muted) text-sm">
                <Phone size={18} className="text-(--color-accent) shrink-0" />
                <span>+91 8848187268</span>
              </div>
              <div className="flex items-center gap-3 text-(--color-text-muted) text-sm">
                <MapPin size={18} className="text-(--color-accent) shrink-0" />
                <span>Idukki</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar - Copyright */}
        <motion.div
          className="border-t border-white/5 pt-8 mt-12 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col items-center justify-center text-(--color-text-muted) text-xs text-center">
            <p className="m-0">&copy; 2026 Regrov. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
