import React from 'react';
import { Flame, Trees, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="relative py-16 sm:py-24 bg-[#F8F0E9] overflow-hidden">
      
      {/* Decorative Organic Flowing Circles */}
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-[#E8C5BE]/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-[#E8C5BE]/40 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Curvy Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Organic Overlapping Photos of Real Grounds */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative flex justify-center lg:justify-start"
          >
            {/* Soft Organic Backdrop Shape */}
            <div className="absolute -inset-3 bg-[#E8C5BE]/40 rounded-[50px_20px_60px_20px] transform -rotate-2 pointer-events-none" />

            {/* Main Organic Photo: Thatched Cabins */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] shadow-2xl overflow-hidden rounded-[50px_16px_50px_16px] border-4 border-[#FFFDFC] bg-[#633C38]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/aistudio/unnamed__1__39c05000.jpg"
                  alt="Outdoor thatched dining cabins at New Highway Chef Dhaba Rangia"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-[#633C38] text-[#F8F0E9]">
                <p className="font-serif text-sm font-semibold tracking-wide text-[#F8F0E9]">Thatched Dining Cabins</p>
                <p className="text-xs text-[#E8C5BE] mt-0.5">Open courtyard & fresh garden breezes in Rangia</p>
              </div>
            </div>

            {/* Overlapping Curved Secondary Photo: Two-Story Bamboo Machan */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="absolute -bottom-8 -right-2 sm:-bottom-10 sm:right-2 z-20 w-44 h-44 sm:w-52 sm:h-52 rounded-[24px_50px_24px_50px] overflow-hidden shadow-2xl border-4 border-[#FFFDFC] bg-[#633C38] group cursor-pointer"
            >
              <img
                src="/assets/aistudio/unnamed__2__57eaae68.jpg"
                alt="Two-story bamboo machan treehouse at New Highway Chef Dhaba"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#633C38]/90 via-transparent to-transparent flex items-end p-3">
                <span className="text-[10px] font-semibold text-[#FFFDFC] tracking-wider uppercase bg-[#C97870] px-3 py-0.5 rounded-full border border-[#E8C5BE]/40 shadow-xs">
                  Bamboo Machan
                </span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Editorial Heritage Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8C5BE]/40 text-[#633C38] text-xs font-semibold tracking-widest uppercase mb-4 self-start border border-[#C97870]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#C97870]" />
              <span>THE HIGHWAY TRADITION</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#633C38] leading-tight mb-5 [text-wrap:balance]">
              Built For Travelers. <br />
              <span className="font-normal italic text-[#C97870]">Cooked With Real Heart.</span>
            </h2>

            <p className="text-base text-[#633C38]/85 leading-relaxed mb-4">
              On the open stretches of NH-31 through Rangia, a good meal is more than nourishment — it is an oasis of comfort, laughter, and genuine Assamese hospitality.
            </p>

            <p className="text-sm text-[#633C38]/75 leading-relaxed mb-8">
              At New Highway Chef Dhaba, we slow-simmer our handi curries with whole spices, toss garden-fresh paneer on roaring tawas, and bake our tandoori rotis over live charcoal. Dine under our open-air thatched cabins or climb into our iconic two-story bamboo machan treehouse surrounded by evergreen pines.
            </p>

            {/* Three Minimal Highlights with Organic Curves */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#633C38]/15">
              <div className="p-3.5 rounded-[18px_6px_18px_6px] bg-[#FFFDFC] border border-[#E8C5BE] shadow-xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <Flame className="w-4 h-4 text-[#C97870]" />
                  <h3 className="font-serif text-sm font-bold text-[#633C38]">Clay Tandoor</h3>
                </div>
                <p className="text-xs text-[#633C38]/70 leading-relaxed">
                  Rotis (₹30) & Naan (₹70) baked fresh on live embers.
                </p>
              </div>

              <div className="p-3.5 rounded-[6px_18px_6px_18px] bg-[#FFFDFC] border border-[#E8C5BE] shadow-xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <Trees className="w-4 h-4 text-[#C97870]" />
                  <h3 className="font-serif text-sm font-bold text-[#633C38]">Bamboo Cabins</h3>
                </div>
                <p className="text-xs text-[#633C38]/70 leading-relaxed">
                  Open thatched huts & cool garden courtyard shade.
                </p>
              </div>

              <div className="p-3.5 rounded-[18px_6px_18px_6px] bg-[#FFFDFC] border border-[#E8C5BE] shadow-xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <Clock className="w-4 h-4 text-[#C97870]" />
                  <h3 className="font-serif text-sm font-bold text-[#633C38]">Till 11:30 PM</h3>
                </div>
                <p className="text-xs text-[#633C38]/70 leading-relaxed">
                  Open daily on NH-31 for breakfast, lunch, and dinner.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Organic Curved Bottom Divider */}
      <div className="w-full overflow-hidden leading-none mt-14 -mb-1 text-[#E8C5BE]">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-8 md:h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,80 1080,80 1440,0 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
};
