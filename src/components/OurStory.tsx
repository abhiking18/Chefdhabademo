import React from 'react';
import { Flame, Trees, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="relative py-20 sm:py-28 bg-[#F8F0E9] text-[#633C38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real Grounds Photos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative flex justify-center lg:justify-start"
          >
            {/* Main Photo Card: Thatched Cabins */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] shadow-xl overflow-hidden rounded-3xl border border-[#E8C5BE] bg-[#FFFDFC]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/aistudio/unnamed__1__39c05000.jpg"
                  alt="Outdoor thatched dining cabins at New Highway Chef Dhaba Rangia"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-[#FFFDFC] border-t border-[#E8C5BE] text-[#633C38]">
                <p className="font-bold text-sm text-[#633C38]">Thatched Dining Cabins</p>
                <p className="text-xs text-[#8C5752] mt-0.5">Open courtyard & fresh garden breezes in Rangia</p>
              </div>
            </div>

            {/* Overlapping Secondary Photo: Two-Story Bamboo Machan */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="absolute -bottom-8 -right-2 sm:-bottom-10 sm:right-2 z-20 w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-xl border border-[#E8C5BE] bg-[#FFFDFC] group cursor-pointer"
            >
              <img
                src="/assets/aistudio/unnamed__2__57eaae68.jpg"
                alt="Two-story bamboo machan treehouse at New Highway Chef Dhaba"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#633C38] via-transparent to-transparent flex items-end p-3">
                <span className="text-[10px] font-bold text-[#FFFDFC] tracking-wider uppercase bg-[#C97870] px-3 py-1 rounded-full">
                  Bamboo Machan
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8C5BE]/50 border border-[#E8C5BE] text-[#C97870] text-xs font-bold tracking-widest uppercase mb-4 self-start">
              <Sparkles className="w-3.5 h-3.5 text-[#C97870]" />
              <span>THE HIGHWAY TRADITION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#633C38] leading-tight mb-5">
              Built For Travelers. <br />
              <span className="text-[#C97870]">Cooked With Real Heart.</span>
            </h2>

            <p className="text-base text-[#8C5752] font-medium leading-relaxed mb-4">
              On the open stretches of NH-31 through Rangia, a good meal is more than nourishment — it is an oasis of comfort, laughter, and genuine Assamese hospitality.
            </p>

            <p className="text-sm text-[#8C5752] leading-relaxed mb-8">
              At New Highway Chef Dhaba, we slow-simmer our handi curries with whole spices, toss garden-fresh paneer on roaring tawas, and bake our tandoori rotis over live charcoal. Dine under our open-air thatched cabins or climb into our iconic two-story bamboo machan treehouse surrounded by evergreen pines.
            </p>

            {/* Three Cards with Light Surfaces */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8C5BE]">
              <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#E8C5BE] shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <Flame className="w-4 h-4 text-[#C97870]" />
                  <h3 className="text-sm font-bold text-[#633C38]">Clay Tandoor</h3>
                </div>
                <p className="text-xs text-[#8C5752] leading-relaxed">
                  Rotis (₹30) & Naan (₹70) baked fresh on live embers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#E8C5BE] shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <Trees className="w-4 h-4 text-[#C97870]" />
                  <h3 className="text-sm font-bold text-[#633C38]">Bamboo Cabins</h3>
                </div>
                <p className="text-xs text-[#8C5752] leading-relaxed">
                  Open thatched huts & cool garden courtyard shade.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFDFC] border border-[#E8C5BE] shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <Clock className="w-4 h-4 text-[#C97870]" />
                  <h3 className="text-sm font-bold text-[#633C38]">Till 11:30 PM</h3>
                </div>
                <p className="text-xs text-[#8C5752] leading-relaxed">
                  Open daily on NH-31 for breakfast, lunch, and late dinner.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
