import { Globe, TrendingUp, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Market = () => {
  return (
    <section className="snap-section min-h-screen w-full flex items-center justify-center bg-[radial-gradient(circle_at_center,#1E4D36_0%,#0D2818_100%)] text-white">
      <div className="container h-full">
        <div className="flex flex-col py-16 items-center w-full max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-(--color-accent) uppercase tracking-[2px] text-xs mb-2 block">
              The Opportunity
            </span>
            <h2 className="text-[2.5rem] md:text-[3rem] text-white/90">
              A massive, untapped ecosystem.
            </h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
            {/* Card 1 - Total Addressable Market */}
            <motion.div
              className="bg-white/5 border border-white/10 rounded-[20px] p-8 md:p-12 text-center flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/8 hover:-translate-y-1"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Globe size={40} className="text-(--color-accent-2) mb-6 opacity-80" />
              <div className="uppercase tracking-wide text-xs mb-4 text-white/60">
                Total Addressable Market
              </div>
              <div className="text-[2.5rem] md:text-[3rem] font-bold font-serif mb-2 text-white leading-none">
                $12–15 Trillion
              </div>
              <div className="text-white/70 text-[0.95rem]">
                Global agriculture market value (annual output & services)
              </div>
            </motion.div>

            {/* Card 2 - Farmer Count (Featured - Larger) */}
            <motion.div
              className="bg-white/5 border border-white/10 rounded-[24px] p-10 md:p-14 text-center flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1 hover:bg-white/8"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1.05, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <UserCheck size={48} className="text-(--color-accent-2) mb-6 opacity-80" />
              <div className="uppercase tracking-wide text-xs mb-4 text-white/60">
                Farmer Count
              </div>
              <div className="text-[2.5rem] md:text-[3.5rem] font-bold font-serif mb-2 leading-none">
                <span className="text-(--color-accent)">90–150</span> <span className="text-white">Million</span>
              </div>
              <div className="text-white/80 text-[0.95rem] font-medium">
                Active farmers in target markets.
              </div>
            </motion.div>

            {/* Card 3 - Target Market (India) */}
            <motion.div
              className="bg-white/5 border border-white/10 rounded-[20px] p-8 md:p-12 text-center flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/8 hover:-translate-y-1"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <TrendingUp size={40} className="text-(--color-accent-2) mb-6 opacity-80" />
              <div className="uppercase tracking-wide text-xs mb-4 text-white/60">
                Target Market (India)
              </div>
              <div className="text-[2.5rem] md:text-[3rem] font-bold font-serif mb-2 text-white leading-none">
                $450 Billion
              </div>
              <div className="text-white/70 text-[0.95rem]">
                Immediate Agri-Tech opportunity (2024–2025).
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            className="mt-16 bg-white/5 py-3 px-8 rounded-[50px] text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <p>
              Market growing at <strong className="text-(--color-accent)">12% CAGR</strong> due to smartphone adoption.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Market;
