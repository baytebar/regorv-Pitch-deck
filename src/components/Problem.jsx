import { AlertTriangle, TrendingDown, Users, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Problem = () => {
  const problems = [
    {
      icon: <Users size={32} />,
      title: "Fragmentation",
      desc: "Farmers disjointed from markets & advice."
    },
    {
      icon: <AlertTriangle size={32} />,
      title: "Middlemen",
      desc: "Losing 40-60% margin to intermediaries."
    },
    {
      icon: <TrendingDown size={32} />,
      title: "Price Opacity",
      desc: "No real-time data leads to underselling."
    },
    {
      icon: <Layers size={32} />,
      title: "Tool Fatigue",
      desc: "Forced to use 5+ apps for basic needs."
    }
  ];

  return (
    <div className="snap-section min-h-screen w-full flex items-center justify-center bg-[#0A0F0D] relative">
      <div className="container h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 min-h-full py-16 items-center justify-items-center w-full max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Left Side - Text Content */}
          <motion.div
            className="text-center flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[3px] text-[#ff6b6b] font-bold mb-4 block">
              The Reality
            </span>
            <h2 className="text-[2.5rem] md:text-[4rem] text-white mb-6 leading-none">
              Agriculture is <span className="text-[#ff6b6b] italic">Broken.</span>
            </h2>
            <p className="text-xl text-[#888] mb-12 max-w-[450px]">
              Despite feeding the world, farmers are trapped in an analog ecosystem that eats away their profits.
            </p>
            <div className="border-l-4 border-[#ff6b6b] pl-6 text-left self-center">
              <strong className="block text-[3rem] text-white font-serif leading-none">
                60%
              </strong>
              <span className="text-[#888]">Income lost to inefficiencies</span>
            </div>
          </motion.div>

          {/* Right Side - Problem Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                className="bg-white/3 border border-white/5 p-8 rounded-[20px] transition-all duration-300 hover:bg-white/6 hover:border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-[#ff6b6b] mb-4">
                  {p.icon}
                </div>
                <h3 className="text-white text-xl mb-2">
                  {p.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
