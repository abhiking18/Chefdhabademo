import React from 'react';
import { Flame, Trees, Utensils, Moon } from 'lucide-react';
import { motion } from 'motion/react';

interface FoodExperienceProps {
  onOpenOrder: () => void;
}

export const FoodExperience: React.FC<FoodExperienceProps> = ({ onOpenOrder }) => {
  return (
    <section id="experience" className="relative py-20 sm:py-28 bg-[#633C38] text-[#F8F0E9] overflow-hidden">
      
      {/* Organic Curved Light Blur */}
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#E8C5BE]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Highway Nights Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F0E9]/15 text-[#E8C5BE] text-xs font-semibold tracking-widest uppercase mb-4 self-start border border-[#E8C5BE]/30">
              <Moon className="w-3.5 h-3.5" />
              <span>THE EVENING ATMOSPHERE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F0E9] leading-tight mb-4 [text-wrap:balance]">
              Dhaba Nights <br />
              <span className="italic font-normal text-[#E8C5BE]">Under Open Sky</span>
            </h2>

            <p className="text-base text-[#F8F0E9]/85 leading-relaxed mb-8 max-w-lg">
              As night falls across NH-31, the dhaba grounds glow with warm lanterns, sizzling tandoor sparks, and families dining under open thatched huts while children enjoy the illuminated swings.
            </p>

            {/* Two Ground Highlights in Curvy Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-[20px_8px_20px_8px] bg-[#4F2F2C]/80 border border-[#E8C5BE]/30">
                <div className="w-9 h-9 rounded-full bg-[#C97870] text-[#F8F0E9] flex items-center justify-center shrink-0 shadow-xs border border-[#C97870]">
                  <Flame className="w-4 h-4 text-[#F8F0E9]" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#F8F0E9]">Clay Oven Embers</h3>
                  <p className="text-xs text-[#F8F0E9]/80 mt-0.5 leading-relaxed">
                    Live charcoal tandoors baking hot rotis (₹30) and butter naan (₹70) straight to your table until 11:30 PM.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-[8px_20px_8px_20px] bg-[#4F2F2C]/80 border border-[#E8C5BE]/30">
                <div className="w-9 h-9 rounded-full bg-[#E8C5BE] text-[#633C38] flex items-center justify-center shrink-0 shadow-xs font-bold">
                  <Trees className="w-4 h-4 text-[#633C38]" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#F8F0E9]">Kids' Playground & Swings</h3>
                  <p className="text-xs text-[#F8F0E9]/80 mt-0.5 leading-relaxed">
                    Dedicated swings and slides right next to shaded huts so parents can relax over hot tea and dinner.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenOrder}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#C97870] hover:bg-[#B5675F] text-[#F8F0E9] font-semibold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-lg shadow-[#C97870]/30 cursor-pointer border border-[#C97870]"
              >
                <span>Order For Dinner</span>
                <Utensils className="w-4 h-4 text-[#F8F0E9]" />
              </motion.button>
            </div>

          </motion.div>

          {/* Right Side: Real Night Playground Courtyard Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            {/* Halo shape */}
            <div className="absolute -inset-4 bg-[#E8C5BE]/20 rounded-[60px_24px_70px_24px] transform rotate-2 pointer-events-none" />

            <div className="relative z-10 w-full max-w-[480px] rounded-[50px_20px_60px_20px] overflow-hidden border-4 border-[#F8F0E9]/40 shadow-2xl bg-[#633C38] group">
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src="/assets/aistudio/unnamed__6__d17fa9e5.jpg"
                  alt="Evening courtyard with fairy lights, slides and swings at New Highway Chef Dhaba Rangia"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 bg-[#4F2F2C] border-t border-[#E8C5BE]/30 flex items-center justify-between">
                <div>
                  <p className="font-serif text-base font-bold text-[#F8F0E9]">Night Courtyard & Swings</p>
                  <p className="text-xs text-[#F8F0E9]/80">Playground swings & open-air thatched cabins</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#C97870] text-[#F8F0E9] text-xs font-semibold border border-[#C97870] shadow-xs">
                  Rangia, NH-31
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Wavy Divider to Next Section */}
      <div className="w-full overflow-hidden leading-none mt-16 -mb-1 text-[#F8F0E9]">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-8 md:h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,70 1080,70 1440,0 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
};
