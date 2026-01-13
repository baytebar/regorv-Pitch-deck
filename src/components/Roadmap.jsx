import { Flag, Map, Cpu, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

const Roadmap = () => {
  const phases = [
    {
      year: "Phase 0",
      title: "Building Prototype",
      desc: "Developing MVP with core social & marketplace features.",
      icon: <Hammer size={24} />,
      status: "active"
    },
    {
      year: "Phase 1",
      title: "South India Pilot",
      desc: "Onboard 50k farmers & 200 FPOs.",
      icon: <Flag size={24} />,
      status: "future"
    },
    {
      year: "Phase 2",
      title: "Pan-India Expansion",
      desc: "Scale to 10M users. Launch Marketplace.",
      icon: <Map size={24} />,
      status: "future"
    },
    {
      year: "Phase 3",
      title: "AI Integration",
      desc: "Deploy crop disease AI & price prediction.",
      icon: <Cpu size={24} />,
      status: "future"
    },
  ];

  return (
    <div className="snap-section min-h-screen w-full flex items-center justify-center bg-[#0D2818] py-16">
      <div className="container h-full">
        <div className="flex flex-col items-center w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-(--color-accent) uppercase tracking-[2px] text-xs mb-4 block">
              The Vision
            </span>
            <h2 className="text-[2.5rem] md:text-[3rem] text-white">
              Strategic Roadmap
            </h2>
          </div>

          {/* Roadmap Path */}
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-8 w-full max-w-[1200px] justify-center">
            {phases.map((p, i) => (
              <div key={i} className={`flex flex-col lg:flex-col items-center flex-1 relative pb-8 lg:pb-0 ${p.status === 'active' ? 'active' : ''}`}>
                {/* Marker Container */}
                <motion.div
                  className="relative flex justify-center lg:justify-center w-full lg:w-full h-20 lg:h-20 pl-0 lg:pl-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  {/* Mobile Connector */}
                  <div className={`absolute top-[60px] left-1/2 -translate-x-1/2 w-0.5 -bottom-8 z-0 lg:hidden ${
                      p.status === 'active' ? 'bg-(--color-accent)' : 'bg-[#2D6A4F]'
                    }`}></div>
                  <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center z-10 transition-all duration-300 ${
                    p.status === 'active' 
                      ? 'bg-(--color-accent) border-2 border-(--color-accent) text-[#0D2818] shadow-[0_0_20px_rgba(212,238,38,0.4)]' 
                      : 'bg-[#163B24] border-2 border-[#2D6A4F] text-[#888]'
                  }`}>
                    {p.icon}
                  </div>
                  {/* Desktop Connector Line */}
                  {i !== phases.length - 1 && (
                    <div className={`absolute top-[30px] left-[60px] -right-full h-0.5 z-0 hidden lg:block ${
                      p.status === 'active' ? 'bg-(--color-accent)' : 'bg-[#2D6A4F]'
                    }`}></div>
                  )}
                </motion.div>

                {/* Milestone Content */}
                <motion.div
                  className={`bg-white/3 p-6 rounded-2xl border border-white/5 w-full mt-4 lg:mt-4 text-center lg:text-center ${
                    p.status === 'active' ? '' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.1 }}
                >
                  <span className={`inline-block text-xs uppercase tracking-wide mb-2 ${
                    p.status === 'active' ? 'text-(--color-accent)' : 'text-[#888]'
                  }`}>
                    {p.year}
                  </span>
                  <h3 className="text-white text-lg mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[#A3BCA9] text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
