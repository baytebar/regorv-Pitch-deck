import { DollarSign, Megaphone, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const Business = () => {
  return (
    <div className="snap-section min-h-screen w-full flex items-center justify-center bg-[#102A1E]">
      <div className="container h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 items-center justify-items-center w-full max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Left: Revenue Model */}
          <div className="text-center flex flex-col items-center w-full max-w-[600px]">
            <span className="text-(--color-accent) uppercase tracking-[2px] text-xs mb-4 block">
              Monetization
            </span>
            <h2 className="text-[2.5rem] md:text-[3rem] text-white mb-12">
              How We Make Money
            </h2>

            <div className="flex flex-col gap-6 w-full">
              <motion.div
                className="bg-white/5 p-6 rounded-2xl flex items-center gap-6 border border-(--color-accent) bg-gradient-to-r from-[rgba(212,238,38,0.1)] to-[rgba(255,255,255,0.05)] transition-all duration-200 hover:translate-x-2.5 hover:bg-white/8"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="w-[50px] h-[50px] bg-black/30 rounded-xl flex items-center justify-center text-(--color-accent) flex-shrink-0">
                  <Megaphone size={24} />
                </div>
                <div>
                  <h3 className="text-white text-xl mb-1">Ads Platform</h3>
                  <p className="text-[#A3BCA9] text-sm">Hyper-local ads for fertilizers, tractors, & tools.</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/5 p-6 rounded-2xl flex items-center gap-6 border border-white/5 transition-all duration-200 hover:translate-x-2.5 hover:bg-white/8"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-[50px] h-[50px] bg-black/30 rounded-xl flex items-center justify-center text-(--color-accent) flex-shrink-0">
                  <DollarSign size={24} />
                </div>
                <div>
                  <h3 className="text-white text-xl mb-1">Transaction Fees</h3>
                  <p className="text-[#A3BCA9] text-sm">Commission on marketplace sales & hiring.</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/5 p-6 rounded-2xl flex items-center gap-6 border border-white/5 transition-all duration-200 hover:translate-x-2.5 hover:bg-white/8"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-[50px] h-[50px] bg-black/30 rounded-xl flex items-center justify-center text-(--color-accent) flex-shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-white text-xl mb-1">Subscription</h3>
                  <p className="text-[#A3BCA9] text-sm">Premium advisory & advanced analytics.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: GTM Strategy */}
          <motion.div
            className="bg-[#0A1F12] p-8 md:p-12 rounded-[32px] border border-white/5 w-full max-w-[600px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-white text-[1.8rem] mb-10 text-center">
              Go-To-Market Strategy
            </h3>
            <div className="flex flex-col gap-0 relative">
              {/* Step 1 */}
              <div className="flex flex-col gap-2 pl-8 pb-8 relative">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-(--color-accent) shadow-[0_0_0_4px_rgba(212,238,38,0.2)]"></div>
                <div className="absolute left-[5px] top-3 bottom-[-2rem] w-0.5 bg-white/10"></div>
                <div className="font-serif text-2xl text-white/10 absolute right-0 top-0">01</div>
                <h4 className="text-white text-xl">Grassroots</h4>
                <p className="text-[#888] text-[0.95rem]">Partner with 500+ FPOs (Farmer Organizations).</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-2 pl-8 pb-8 relative">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-(--color-accent) shadow-[0_0_0_4px_rgba(212,238,38,0.2)]"></div>
                <div className="absolute left-[5px] top-3 bottom-[-2rem] w-0.5 bg-white/10"></div>
                <div className="font-serif text-2xl text-white/10 absolute right-0 top-0">02</div>
                <h4 className="text-white text-xl">Digital Viral</h4>
                <p className="text-[#888] text-[0.95rem]">Referral program: &quot;Invite a farmer, get free soil test&quot;.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col gap-2 pl-8 relative">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-(--color-accent) shadow-[0_0_0_4px_rgba(212,238,38,0.2)]"></div>
                <div className="font-serif text-2xl text-white/10 absolute right-0 top-0">03</div>
                <h4 className="text-white text-xl">Govt Collab</h4>
                <p className="text-[#888] text-[0.95rem]">Integrate with state agriculture databases.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Business;
