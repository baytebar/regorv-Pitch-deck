import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    { name: 'Jacob', role: 'Founder, CEO', image: '/images/jacob.png' },
    { name: 'Thomas', role: 'Co-founder, COO', image: '/images/thomas.jpeg' },
    { name: 'Karthik', role: 'CFO', image: '/images/karthik.jpg' },
    { name: 'Shiju', role: 'CTO', image: '/images/shiju.jpg' },
    { name: 'Sooraj', role: 'Team Lead, IT', image: '/images/suraj.jpg' },
    { name: 'Jono', role: 'CMO', image: '/images/jono.jpg' },
    { name: 'Alan', role: 'Marketing Member', image: '/images/alan.jpg' },
    { name: 'Joyes', role: 'Human Resource', image: '/images/joyes.jpg' },
    { name: 'Christo', role: 'Financial Advisor', image: '/images/christo.jpg' }
  ];

  return (
    <div className="snap-section min-h-screen w-full flex items-center justify-center bg-[#0B1E14] py-16 relative">
      <div className="container h-full">
        <div className="flex flex-col items-center w-full max-w-[1800px] mx-auto">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-(--color-accent) uppercase tracking-[2px] text-xs mb-2 block text-center">
              Our Team
            </span>
            <h2 className="text-[2rem] md:text-[3rem] text-white text-center mb-12 px-4">
              Leadership & Visionaries
            </h2>

            {/* Carousel Container */}
            <div className="relative w-full max-w-[2000px] mx-auto py-4 group overflow-hidden">
              <div className="flex w-full">
                {/* First Group */}
                <div className="flex gap-8 pr-8 will-change-transform animate-scrolling shrink-0">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={`${member.name}-first-${index}`}
                      className="flex flex-col items-center gap-6 bg-white/3 p-8 rounded-3xl border border-white/5 text-center min-w-[250px] max-w-[250px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:bg-white/5 shrink-0"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center overflow-hidden shrink-0 mb-2 border-[3px] border-white/10 bg-white/5">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => {
                              const img = e.target;
                              const fallback = img.nextElementSibling;
                              if (img) img.style.display = 'none';
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className="w-full h-full hidden items-center justify-center font-bold text-(--color-accent) text-2xl bg-white/10" style={{ display: member.image ? 'none' : 'flex' }}>
                          {member.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white text-xl mb-1">{member.name}</h3>
                        <span className="text-[#888] text-sm block">{member.role}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Second Group (for seamless loop) */}
                <div className="flex gap-8 pr-8 will-change-transform animate-scrolling shrink-0" aria-hidden="true">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={`${member.name}-second-${index}`}
                      className="flex flex-col items-center gap-6 bg-white/3 p-8 rounded-3xl border border-white/5 text-center min-w-[250px] max-w-[250px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:bg-white/5 shrink-0"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center overflow-hidden shrink-0 mb-2 border-[3px] border-white/10 bg-white/5">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => {
                              const img = e.target;
                              const fallback = img.nextElementSibling;
                              if (img) img.style.display = 'none';
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className="w-full h-full hidden items-center justify-center font-bold text-(--color-accent) text-2xl bg-white/10" style={{ display: member.image ? 'none' : 'flex' }}>
                          {member.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white text-xl mb-1">{member.name}</h3>
                        <span className="text-[#888] text-sm block">{member.role}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
