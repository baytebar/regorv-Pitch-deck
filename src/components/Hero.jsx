import { Globe, Sprout, TrendingUp, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="snap-section overflow-visible min-h-screen w-full flex items-center justify-center bg-[radial-gradient(circle_at_70%_30%,#1a4d2e_0%,var(--color-bg)_60%)] relative">
      <div className="h-full w-full flex items-center justify-center overflow-visible relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] h-full items-center justify-items-center gap-8 w-full max-w-[1200px] mx-auto overflow-visible relative">
          {/* Left Content */}
          <div className="hero-content text-center flex flex-col items-center mt-20 lg:mt-0">
            <motion.div
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-linear-to-br from-[rgba(26,77,46,0.25)] to-[rgba(76,175,80,0.15)] backdrop-blur-[10px] rounded-[50px] text-(--color-accent) text-sm md:text-base font-semibold tracking-wide border-[1.5px] border-transparent relative overflow-hidden shadow-[0_4px_15px_rgba(76,175,80,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(76,175,80,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-linear-to-br hover:from-[rgba(26,77,46,0.35)] hover:to-[rgba(76,175,80,0.25)] group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Animated border */}
              <div className="absolute inset-0 rounded-[50px] p-[1.5px] bg-linear-to-r from-[rgba(168,230,163,0.6)] via-[rgba(26,77,46,0.3)] to-[rgba(168,230,163,0.6)] bg-size-[200%_100%] animate-border-rotate opacity-80 -z-10" 
                   style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
              
              {/* Glow effect on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(168,230,163,0.15)_0%,transparent_70%)] rounded-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              
              <Globe size={14} className="drop-shadow-[0_0_4px_rgba(168,230,163,0.4)] animate-globe-spin" />
              <span>Global Agri-Tech Ecosystem</span>
            </motion.div>

            <motion.h1
              className="text-[3.5rem] xl:text-[5rem] my-6 leading-[1.1] text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The <span className="text-accent">Super App</span> for <br />
              <span className="font-serif italic font-normal text-white/90">Modern Farmers.</span>
            </motion.h1>

            <motion.p
              className="text-xl max-w-[500px] mb-12"
              style={{ color: 'var(--color-text-muted)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Connecting 500M+ farmers to fair trade, advisory, and community in one unified digital ecosystem.
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex flex-col">
                <strong className="text-[2rem] font-serif text-white leading-none">$12T</strong>
                <span className="text-sm uppercase tracking-wide mt-1.5 text-white/50">Global Market</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <strong className="text-[2rem] font-serif text-white leading-none">570M</strong>
                <span className="text-sm uppercase tracking-wide mt-1.5 text-white/50">Farmers</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                 <strong className="text-[2rem] font-serif text-accent leading-none">1 App</strong>
                <span className="text-sm uppercase tracking-wide mt-1.5 text-white/50">Solution</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Phone Mockup */}
          <div className="-rotate-12 scale-[0.55] min-[320px]:scale-[0.55] min-[375px]:scale-[0.6] min-[425px]:scale-[0.65] md:scale-[0.75] lg:scale-[0.85] xl:scale-[0.8] min-[1200px]:scale-[0.8] min-[1400px]:scale-[0.85] min-[1600px]:scale-95 flex justify-center items-center w-full h-full relative overflow-visible">
            <motion.div
              className="w-72 h-[585px] bg-linear-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-[45px] p-3 shadow-[0_0_0_2px_#0a0a0a,0_0_0_6px_#3a3a3a,0_30px_60px_-15px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.1)] relative overflow-visible"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Phone side buttons */}
              <div className="absolute top-20 -right-[3px] w-[3px] h-[50px] bg-linear-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-r-sm"></div>
              <div className="absolute top-[150px] -left-[3px] w-[3px] h-20 bg-linear-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-l-sm"></div>

              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[140px] h-7 bg-[#0a0a0a] rounded-b-[18px] z-10 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[60px] h-1.5 bg-[#1a1a1a] rounded-sm"></div>
                <div className="absolute top-2 right-5 w-2.5 h-2.5 bg-[radial-gradient(circle,#1a3a2a,#0a1a0a)] rounded-full shadow-[0_0_4px_rgba(0,255,100,0.3)]"></div>
              </div>

              {/* App Screen */}
              <div className="h-full w-full bg-white flex items-center justify-center pt-9 rounded-[35px] overflow-visible relative">
                <div className="w-[100px] flex items-center justify-center z-10">
                  <motion.img
                    src="/images/regrov-icon.png"
                    alt="Regrov Logo"
                    className="w-full h-auto object-contain"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.9, scale: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </div>
              </div>

              {/* Floating Card 1 - Top Left */}
              <div className="absolute top-[15%] -left-[140px] w-[220px] bg-(--color-surface) rounded-[20px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center gap-4 border border-white/10 animate-float z-50 text-white pointer-events-auto">
                <div className="w-11 h-11 bg-[rgba(10,31,18,0.6)] rounded-xl flex items-center justify-center text-[1.4rem] text-(--color-accent)">
                  <Sprout size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium">Crop Growth</span>
                  <strong className="text-white text-xl">+25%</strong>
                </div>
              </div>

              {/* Floating Card 2 - Middle Right */}
              <div className="absolute top-[45%] -right-[160px] w-[240px] bg-(--color-surface) rounded-[20px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center gap-4 border border-white/10 animate-float-delayed z-50 text-white pointer-events-auto">
                <div className="w-11 h-11 bg-[rgba(10,31,18,0.6)] rounded-xl flex items-center justify-center text-[1.4rem] text-(--color-accent)">
                  <TrendingUp size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-medium">Market Rate</span>
                  <strong className="text-white text-xl">+15%</strong>
                </div>
              </div>

              {/* Floating Card 3 - Bottom Left */}
              <div className="absolute bottom-[18%] -left-[100px] w-[200px] bg-(--color-surface) rounded-[20px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center gap-4 border border-white/10 animate-float-slow z-50 text-white pointer-events-auto">
                <div className="w-9 h-9 bg-[rgba(10,31,18,0.6)] rounded-full flex items-center justify-center text-(--color-accent) shrink-0">
                  <User size={18} />
                </div>
                <span className="text-white font-medium">"Sold in 2hrs!"</span>
              </div>

              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-(--color-accent) blur-[140px] opacity-15 -z-10 rounded-full pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

