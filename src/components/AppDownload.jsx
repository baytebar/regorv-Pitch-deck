import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Check,
  Mail,
  ArrowLeft,
  Bell,
  Search,
  MapPin,
  ShoppingCart,
  Coins,
  Clock,
  Store,
  Users,
  Briefcase,
  Sprout,
  Tractor,
  Home,
  Settings,
  User,
  Star,
  Share2,
  Package
} from 'lucide-react';

const AppDownload = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <style>{`
        @media (max-width: 637px) {
          .download-button-responsive {
            max-width: 240px !important;
          }
        }
        @media (max-width: 639px) {
          .sunflower-seeds-responsive {
            display:none;
            margin-bottom: 4rem !important;
          }
          .social-feed-responsive {
            max-height: 220px !important;
            margin-bottom: 4rem !important;
          }
        }
        @media (min-width: 640px) and (max-width: 767px) {
          .product-listing-responsive {
          }
          .social-feed-responsive {
            max-height: 280px !important;
          }
        }
        @media (min-width: 768px) {
          .product-listing-responsive {
            max-height: 280px !important;
          }
          .social-feed-responsive {
            max-height: 330px !important;
          }
        }
      `}</style>
      <div className="snap-section min-h-screen w-full flex items-center justify-center bg-white py-8 md:py-12 lg:py-16 relative overflow-x-hidden">
        <div className="container h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center h-full">
            {/* Left Content */}
            <motion.div
              className="flex flex-col justify-center space-y-6 md:space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Headline */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1a4d2e] leading-tight">
                  Connect, Trade & Grow with{' '}
                  <span className="text-[#2D6A4F]">REGROV App!</span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4">
                  The all-in-one platform for farmers. Connect with fellow farmers, sell your produce, find jobs, and grow your agricultural business.
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-4 mt-8">
                {[
                  'Connect with farmers through dedicated social media platform',
                  'Sell your products directly to buyers in the marketplace',
                  'Find agricultural jobs and post job listings',
                  'Secure and convenient online payment options'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="shrink-0 w-6 h-6 rounded-full bg-[#2D6A4F] flex items-center justify-center mt-0.5">
                      <Check size={16} className="text-white" />
                    </div>
                    <p className="text-base md:text-lg text-gray-700 flex-1">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                <motion.div
                  className="download-button-responsive relative inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gray-300 text-gray-500 rounded-lg shadow-lg cursor-not-allowed opacity-75 text-sm sm:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.75, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-xs">GET IT ON</span>
                    <span className="text-lg font-semibold">Google Play</span>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-[#2D6A4F] text-white text-xs font-bold px-2 py-1 rounded-full">
                    Soon
                  </div>
                </motion.div>

                <motion.div
                  className="download-button-responsive relative inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gray-300 text-gray-500 rounded-lg shadow-lg cursor-not-allowed opacity-75 text-sm sm:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.75, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Download on the</span>
                    <span className="text-lg font-semibold">App Store</span>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-[#2D6A4F] text-white text-xs font-bold px-2 py-1 rounded-full">
                    Soon
                  </div>
                </motion.div>
              </div>

              {/* Contact Info */}
              <motion.div
                className="flex items-center gap-3 mt-8 text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Mail size={20} className="text-[#2D6A4F]" />
                <span className="text-base md:text-lg">
                  Feel free to reach us at:{' '}
                  <a href="mailto:info@baytebar.com" className="text-[#2D6A4F] hover:underline font-semibold">
                    info@baytebar.com
                  </a>
                </span>
              </motion.div>
            </motion.div>

            {/* Right Content - Phone Mockups */}
            <motion.div
              className="relative flex items-center justify-center h-[500px] sm:h-[550px] md:h-[650px] lg:h-[700px] min-h-[500px] w-full max-w-full overflow-visible"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Background Phone (Light UI) */}
              <motion.div
                className="absolute left-[10%] sm:left-[15%] md:left-[20%] lg:left-0 top-1/2 -translate-y-1/2 w-[200px] h-[400px] sm:w-[220px] sm:h-[440px] md:w-[240px] md:h-[480px] lg:w-[240px] lg:h-[480px] z-10"
                initial={{ opacity: 0, scale: 0.8, rotate: -5, y: 0, x: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -8, 0, -6, 0, -8, 0],
                  x: [0, 2, 0, -2, 0, 2, 0],
                  rotate: [-3, -5, -3, -6, -3, -5, -3],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.4 },
                  scale: { duration: 0.8, delay: 0.4 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                  rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
                }}
              >
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-linear-to-br from-slate-100 via-slate-50 to-slate-200 rounded-[40px] p-[3px] shadow-[0_0_0_2px_rgba(0,0,0,0.1),0_20px_40px_-10px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.8)]">
                  {/* Side Button - Volume Up */}
                  <div className="absolute top-24 -left-[2px] w-[2px] h-8 bg-linear-to-b from-gray-300 to-gray-400 rounded-l-sm"></div>
                  {/* Side Button - Volume Down */}
                  <div className="absolute top-36 -left-[2px] w-[2px] h-8 bg-linear-to-b from-gray-300 to-gray-400 rounded-l-sm"></div>
                  {/* Side Button - Power */}
                  <div className="absolute top-20 -right-[2px] w-[2px] h-12 bg-linear-to-b from-gray-300 to-gray-400 rounded-r-sm"></div>

                  {/* Inner Screen */}
                  <div className="h-full w-full bg-white rounded-[37px] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-white rounded-b-xl z-20 shadow-sm">
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-900/20 rounded-full"></div>
                      <div className="absolute top-2 right-3 w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    </div>

                    {/* Screen Content - Light Theme */}
                    <div className="h-full w-full bg-linear-to-b from-gray-50 to-white overflow-hidden pt-8 px-2">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center mb-3 px-1 pt-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold text-gray-900">1:18</span>
                          <div className="flex gap-0.5">
                            <div className="w-0.5 h-0.5 bg-gray-900 rounded-full"></div>
                            <div className="w-0.5 h-0.5 bg-gray-900 rounded-full"></div>
                            <div className="w-0.5 h-0.5 bg-gray-900 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-gray-900">
                            <path d="M15.67 4H14V2c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>

                      {/* Header with Back Button */}
                      <div className="flex items-center justify-between mb-3 px-1">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                            <ArrowLeft size={12} className="text-gray-600" strokeWidth={2.5} />
                          </div>
                          <div>
                            <h3 className="text-xs font-bold text-gray-900 leading-tight">Marketplace</h3>
                            <p className="text-[10px] text-gray-500">Buy & Sell Products</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bell size={12} className="text-gray-600" strokeWidth={2} />
                          <ShoppingCart size={12} className="text-gray-600" strokeWidth={2} />
                        </div>
                      </div>

                      {/* Search Bar */}
                      <div className="bg-gray-100 rounded-lg px-2 py-2 mb-3 mx-1">
                        <div className="flex items-center gap-2">
                          <Search size={11} className="text-gray-500" strokeWidth={2} />
                          <p className="text-[10px] text-gray-500">Search for crops, seeds...</p>
                        </div>
                      </div>

                      {/* Category Filters */}
                      <div className="mb-3 px-1">
                        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
                          <div className="px-2.5 py-1.5 bg-[#2D6A4F] text-white rounded-lg text-[9px] font-bold shadow-sm whitespace-nowrap">All</div>
                          <div className="px-2.5 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-[9px] font-semibold whitespace-nowrap">Crops</div>
                          <div className="px-2.5 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-[9px] font-semibold whitespace-nowrap">Seeds</div>
                          <div className="px-2.5 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-[9px] font-semibold whitespace-nowrap">Tools</div>
                        </div>
                      </div>

                      {/* Product Listing */}
                      <div className="product-listing-responsive space-y-2 mt-3 mb-16 sm:mb-18 md:mb-20 overflow-y-auto">
                        <div className="bg-white border border-gray-200 rounded-lg p-2.5 shadow-sm">
                          <div className="flex gap-2 mb-2">
                            <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                              <img
                                src="/images/organic_wheat.jpg"
                                alt="Organic Wheat"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[10px] font-bold text-gray-900 mb-0.5">Organic Wheat</p>
                              <p className="text-[9px] text-gray-600 mb-1.5">Premium quality • 100kg</p>
                              <div className="flex items-center gap-1.5 mb-1">
                                <MapPin size={8} className="text-gray-500" strokeWidth={2} />
                                <span className="text-[9px] text-gray-500">Punjab, India</span>
                              </div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-bold text-gray-900">₹2,500</span>
                                <span className="text-[9px] text-gray-400 line-through">₹2,800</span>
                              </div>
                            </div>
                          </div>
                          <button className="w-full bg-[#2D6A4F] text-white text-[10px] font-bold py-1.5 rounded-lg mt-2">Buy Now</button>
                        </div>

                        <div className="bg-white border sunflower-seeds-responsive border-gray-200 rounded-lg p-2.5 shadow-sm">
                          <div className="flex gap-2 mb-2">
                            <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                              <img
                                src="/images/sunflower_seeds.jpg"
                                alt="Sunflower Seeds"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[10px] font-bold text-gray-900 mb-0.5">Sunflower Seeds</p>
                              <p className="text-[9px] text-gray-600 mb-1.5">High yield variety • 50kg</p>
                              <div className="flex items-center gap-1.5 mb-1">
                                <MapPin size={8} className="text-gray-500" strokeWidth={2} />
                                <span className="text-[9px] text-gray-500">Haryana, India</span>
                              </div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-bold text-gray-900">₹3,200</span>
                                <span className="text-[9px] text-gray-400 line-through">₹3,500</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="absolute bottom-2 left-2 right-2 flex justify-around items-center bg-white border border-gray-200 rounded-full p-2 shadow-lg">
                        {[
                          { icon: Home, label: 'Feed' },
                          { icon: Briefcase, label: 'Jobs' },
                          { icon: Store, label: 'Market', active: true },
                          { icon: User, label: 'Profile' }
                        ].map((item, idx) => {
                          const IconComponent = item.icon;
                          return (
                            <div key={idx} className="flex flex-col items-center gap-0.5">
                              <IconComponent size={18} className={item.active ? "text-[#2D6A4F]" : "text-gray-400"} strokeWidth={2} />
                              {item.active && <div className="w-1 h-1 bg-[#2D6A4F] rounded-full"></div>}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Foreground Phone (Dark UI) */}
              <motion.div
                className="absolute right-[10%] sm:right-[15%] md:right-[20%] lg:right-0 top-1/2 -translate-y-1/2 w-[220px] h-[440px] sm:w-[240px] sm:h-[480px] md:w-[260px] md:h-[520px] lg:w-[260px] lg:h-[520px] z-20"
                initial={{ opacity: 0, scale: 0.8, rotate: 5, y: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, 6, -3, 6, 0],
                  rotate: [3, 5, 2, 5, 3],
                  scale: [1, 1.01, 0.995, 1.01, 1],
                  x: [0, -2, 2, -2, 0],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.5 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.1 },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.2 },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.3 },
                }}
              >
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-gray-950 rounded-[45px] p-[3px] shadow-[0_0_0_2px_rgba(0,0,0,0.5),0_25px_50px_-12px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)]">
                  {/* Side Button - Volume Up */}
                  <div className="absolute top-28 -left-[2px] w-[2px] h-10 bg-linear-to-b from-gray-700 to-gray-800 rounded-l-sm shadow-sm"></div>
                  {/* Side Button - Volume Down */}
                  <div className="absolute top-42 -left-[2px] w-[2px] h-10 bg-linear-to-b from-gray-700 to-gray-800 rounded-l-sm shadow-sm"></div>
                  {/* Side Button - Power */}
                  <div className="absolute top-24 -right-[2px] w-[2px] h-14 bg-linear-to-b from-gray-700 to-gray-800 rounded-r-sm shadow-sm"></div>

                  {/* Inner Screen */}
                  <div className="h-full w-full bg-gray-950 rounded-[42px] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-950 rounded-b-xl z-20 shadow-lg">
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-1 bg-gray-900 rounded-full"></div>
                      <div className="absolute top-2 right-4 w-2 h-2 bg-gray-700 rounded-full"></div>
                      <div className="absolute top-2.5 right-2 w-1 h-1 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* Screen Content - Dark Theme */}
                    <div className="h-full w-full bg-gray-900 rounded-[39px] overflow-hidden pt-8 px-2">
                      {/* Header */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#2D6A4F] to-[#1e4d35] flex items-center justify-center">
                              <Sprout size={16} className="text-white" strokeWidth={2} />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white leading-tight">REGROV</p>
                              <p className="text-[9px] text-gray-400">Farmer Community</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Bell size={14} className="text-gray-400" strokeWidth={2} />
                            <Users size={14} className="text-gray-400" strokeWidth={2} />
                          </div>
                        </div>
                      </div>

                      {/* Tabs */}
                      <div className="flex gap-2 mb-3">
                        <div className="px-3 py-1.5 bg-[#2D6A4F] text-white rounded-lg text-[10px] font-bold shadow-sm">Feed</div>
                        <div className="px-3 py-1.5 bg-gray-800 text-gray-400 rounded-lg text-[10px] font-semibold">Jobs</div>
                        <div className="px-3 py-1.5 bg-gray-800 text-gray-400 rounded-lg text-[10px] font-semibold">Market</div>
                      </div>

                      {/* Social Feed Posts */}
                      <div className="flex flex-col gap-1 md:gap-2 mb-16 sm:mb-18 md:mb-20 overflow-y-auto ">
                        {/* Post 1 */}
                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-2.5">
                          <div className="flex items-start gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-gray-600 bg-gray-700 flex items-center justify-center relative">
                              {!imageError ? (
                                <img
                                  src="https://randomuser.me/api/portraits/men/32.jpg"
                                  alt="Rajesh Kumar"
                                  className="w-full h-full object-cover"
                                  onError={() => setImageError(true)}
                                />
                              ) : (
                                <User size={14} className="text-gray-300" strokeWidth={2} />
                              )}
                            </div>
                            <div className="flex-1 min-w-10">
                              <div className="flex items-center gap-1.5 mb-1">
                                <p className="text-[10px] font-bold text-white">Rajesh Kumar</p>
                                <p className="text-[8px] text-gray-500">• Farmer</p>
                              </div>
                              <p className="text-[10px] text-gray-300 mb-1.5 leading-tight">
                                Just harvested 2 tons of organic rice! Best season yet 🎉 #OrganicFarming #Harvest
                              </p>
                              <div className="w-full h-20 rounded-lg bg-gray-700 mb-2 flex items-center justify-center">
                                <Sprout size={24} className="text-gray-500" strokeWidth={2} />
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1">
                                  <Share2 size={10} className="text-gray-400" strokeWidth={2} />
                                  <span className="text-[8px] text-gray-400">24</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users size={10} className="text-gray-400" strokeWidth={2} />
                                  <span className="text-[8px] text-gray-400">12</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Post 2 - Job Listing */}
                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-2.5">
                          <div className="flex items-start gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-linear-to-br from-amber-600 to-amber-700 flex items-center justify-center shrink-0">
                              <Briefcase size={14} className="text-white" strokeWidth={2} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 mb-1">
                                <p className="text-[10px] font-bold text-white">Harvest Worker Needed</p>
                                <span className="text-[8px] bg-green-600 text-white px-1.5 py-0.5 rounded">Urgent</span>
                              </div>
                              <p className="text-[9px] text-gray-400 mb-1">Punjab, India • Full-time</p>
                              <p className="text-[9px] text-gray-300 mb-2 leading-tight">
                                Looking for experienced farm workers for wheat harvest. ₹500/day
                              </p>
                              <button className="w-full bg-[#2D6A4F] text-white text-[9px] font-bold py-1.5 rounded-lg">Apply Now</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="absolute bottom-2 left-2 right-2 flex justify-around items-center bg-gray-800 border border-gray-700 rounded-full p-2 shadow-xl">
                        {[
                          { icon: Home, label: 'Feed', active: true },
                          { icon: Briefcase, label: 'Jobs' },
                          { icon: Store, label: 'Market' },
                          { icon: User, label: 'Profile' }
                        ].map((item, idx) => {
                          const IconComponent = item.icon;
                          return (
                            <div key={idx} className="flex flex-col items-center gap-0.5">
                              <IconComponent size={18} className={item.active ? "text-[#2D6A4F]" : "text-gray-400"} strokeWidth={2} />
                              {item.active && <div className="w-1 h-1 bg-[#2D6A4F] rounded-full"></div>}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownload;
