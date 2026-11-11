import React from 'react';
import { Flame, Trees, Utensils, Moon } from 'lucide-react';
import { motion } from 'motion/react';

interface FoodExperienceProps {
  onOpenOrder: () => void;
}

export const FoodExperience: React.FC<FoodExperienceProps> = ({ onOpenOrder }) => {
  return (
    <section id="experience" className="relative py-20 sm:py-28 bg-[#F8F0E9] text-[#633C38] overflow-hidden">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8C5BE]/50 border border-[#E8C5BE] text-[#C97870] text-xs font-bold tracking-widest uppercase mb-4 self-start">
              <Moon className="w-3.5 h-3.5 text-[#C97870]" />
              <span>THE EVENING ATMOSPHERE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#633C38] leading-tight mb-4">
              Dhaba Nights <br />
              <span className="text-[#C97870]">Under Open Sky</span>
            </h2>

            <p className="text-base text-[#8C5752] leading-relaxed mb-8 max-w-lg">
              As night falls across NH-31, the dhaba grounds glow with warm lanterns, sizzling tandoor sparks, and families dining under open thatched huts while children enjoy the illuminated swings.
            </p>

            {/* Two Ground Highlights in Light Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FFFDFC] border border-[#E8C5BE] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#E8C5BE]/60 text-[#C97870] flex items-center justify-center shrink-0 border border-[#E8C5BE]">
                  <Flame className="w-5 h-5 text-[#C97870]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#633C38]">Clay Oven Embers</h3>
                  <p className="text-xs text-[#8C5752] mt-0.5 leading-relaxed">
                    Live charcoal tandoors baking hot rotis (₹30) and butter naan (₹70) straight to your table until 11:30 PM.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FFFDFC] border border-[#E8C5BE] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#E8C5BE]/60 text-[#C97870] flex items-center justify-center shrink-0 border border-[#E8C5BE]">
                  <Trees className="w-5 h-5 text-[#C97870]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#633C38]">Kids' Playground & Swings</h3>
                  <p className="text-xs text-[#8C5752] mt-0.5 leading-relaxed">
                    Dedicated swings and slides right next to shaded huts so parents can relax over hot tea and dinner.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenOrder}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#C97870] hover:bg-[#b5655d] text-[#FFFDFC] font-bold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-md cursor-pointer"
              >
                <span>Order For Dinner</span>
                <Utensils className="w-4 h-4 text-[#FFFDFC]" />
              </button>
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
            <div className="relative z-10 w-full max-w-[480px] rounded-3xl overflow-hidden border border-[#E8C5BE] shadow-xl bg-[#FFFDFC] group">
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src="/assets/aistudio/unnamed__6__d17fa9e5.jpg"
                  alt="Evening courtyard with fairy lights, slides and swings at New Highway Chef Dhaba Rangia"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 bg-[#FFFDFC] border-t border-[#E8C5BE] flex items-center justify-between">
                <div>
                  <p className="text-base font-bold text-[#633C38]">Night Courtyard & Swings</p>
                  <p className="text-xs text-[#8C5752]">Playground swings & open-air thatched cabins</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#C97870] text-[#FFFDFC] text-xs font-bold">
                  Rangia, NH-31
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
