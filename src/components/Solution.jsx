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
    <section className="snap-section min-h-screen w-full flex items-center justify-center bg-[radial-gradient(circle_at_top_right,#163B24_0%,#0D2818_100%)] overflow-hidden">
      <div className="container h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 min-h-full py-16 items-center justify-items-center w-full max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Left: Phone Mockup */}
          <div className="flex justify-center items-center h-full">
            <motion.div
              className="w-[280px] h-[550px] bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-[45px] p-3 shadow-[0_0_0_2px_#0a0a0a,0_0_0_6px_#3a3a3a,0_30px_60px_-15px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.1)] relative overflow-visible"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Phone side buttons */}
              <div className="absolute top-20 -right-[3px] w-[3px] h-[50px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-r-sm"></div>
              <div className="absolute top-[150px] -left-[3px] w-[3px] h-20 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-l-sm"></div>

              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[140px] h-7 bg-[#0a0a0a] rounded-b-[18px] z-10 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[60px] h-1.5 bg-[#1a1a1a] rounded-sm"></div>
                <div className="absolute top-2 right-5 w-2.5 h-2.5 bg-[radial-gradient(circle,#1a3a2a,#0a1a0a)] rounded-full shadow-[0_0_4px_rgba(0,255,100,0.3)]"></div>
              </div>

              {/* App Screen */}
              <div className="h-full w-full bg-[#F5F7FA] flex flex-col pt-9 rounded-[35px] overflow-hidden relative">
                {/* App Header */}
                <div className="px-6 pb-4 flex justify-between items-center">
                  <Menu size={20} color="#333" />
                  <span className="font-serif font-bold text-xl text-[#1a4d2e]">Regrov</span>
                  <Bell size={20} color="#333" />
                </div>

                {/* App Search */}
                <div className="mx-6 mb-6 bg-white py-2.5 px-4 rounded-xl flex items-center gap-2.5 text-[#999] text-sm shadow-[0_2px_5px_rgba(0,0,0,0.05)]">
                  <Search size={16} color="#999" />
                  <span>Search crops, seeds...</span>
                </div>

                {/* Quick Actions Grid */}
                <div className="grid grid-cols-2 gap-4 px-6 mb-6">
                  <div className="bg-white p-4 rounded-2xl flex flex-col items-center gap-2 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                    <div className="w-10 h-10 bg-[#e8f5e9] rounded-[10px] flex items-center justify-center">
                      <Leaf size={20} color="green" />
                    </div>
                    <span className="text-xs font-medium text-[#444]">My Crops</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex flex-col items-center gap-2 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                    <div className="w-10 h-10 bg-[#fff3e0] rounded-[10px] flex items-center justify-center">
                      <Store size={20} color="orange" />
                    </div>
                    <span className="text-xs font-medium text-[#444]">Mandi</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex flex-col items-center gap-2 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                    <div className="w-10 h-10 bg-[#e3f2fd] rounded-[10px] flex items-center justify-center">
                      <Users size={20} color="blue" />
                    </div>
                    <span className="text-xs font-medium text-[#444]">Community</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl flex flex-col items-center gap-2 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                    <div className="w-10 h-10 bg-[#fce4ec] rounded-[10px] flex items-center justify-center">
                      <Tractor size={20} color="pink" />
                    </div>
                    <span className="text-xs font-medium text-[#444]">Rentals</span>
                  </div>
                </div>

                {/* Feed Item */}
                <div className="mx-6 mb-6 bg-white rounded-2xl p-4 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                  <div className="flex gap-2.5 mb-2.5">
                    <div className="w-9 h-9 bg-[#FFC759] rounded-full flex items-center justify-center text-xs font-bold text-[#333]">
                      RP
                    </div>
                    <div className="flex flex-col">
                      <strong className="text-sm text-[#333]">Ravi Patel</strong>
                      <span className="text-xs text-[#888]">Just now</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#555] mb-2.5">Just harvested 5 tons of premium wheat! 🌾 Ready for buyers.</p>
                  <div className="w-full h-20 bg-[#e0e0e0] rounded-lg"></div>
                </div>

                {/* Bottom Nav */}
                <div className="mt-auto bg-white py-4 px-6 flex justify-between border-t border-[#eee]">
                  <div className="text-[#1a4d2e]"><Home size={22} /></div>
                  <div className="text-[#ccc]"><Store size={22} /></div>
                  <div className="text-[#ccc]"><Users size={22} /></div>
                  <div className="text-[#ccc]"><UserCheck size={22} /></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content & Features */}
          <div className="flex flex-col justify-center items-center text-center">
            <motion.div
              className="mb-12 text-center flex flex-col items-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-(--color-accent) uppercase tracking-[2px] text-xs block mb-2">
                The Solution
              </span>
              <h2 className="text-[2.5rem] md:text-[3rem] text-white leading-[1.1] mb-4">
                The Super App for <br />
                <span className="text-(--color-accent) italic">Smart Farming</span>
              </h2>
              <p className="text-[#A3BCA9] text-lg max-w-[500px]">
                One unified ecosystem replacing fragmented tools. Empowering farmers with data, access, and community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center w-full">
              {features.map((f, i) => (
                <motion.div
                  className="flex items-start gap-4"
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/5 p-2.5 rounded-xl" style={{ color: f.color }}>
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-base text-white mb-1">{f.title}</h4>
                    <p className="text-sm text-[#888]">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
