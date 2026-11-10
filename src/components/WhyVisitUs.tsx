import React from 'react';
import { Sparkles, MapPin, Smile, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyVisitUs: React.FC = () => {
  return (
    <section id="why-visit" className="relative py-16 sm:py-24 bg-[#F8F0E9] overflow-hidden">
      
      {/* Background Organic Blurs */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#E8C5BE]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8C5BE]/40 text-[#C97870] text-xs font-semibold tracking-widest uppercase mb-3 border border-[#E8C5BE]">
            <Sparkles className="w-3.5 h-3.5 text-[#C97870]" />
            <span>WHY VISIT US</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#633C38] mb-3 [text-wrap:balance]">
            The Highway Experience
          </h2>

          <p className="text-sm sm:text-base text-[#633C38]/75">
            Homestyle flavours, breezy thatched huts, and safe playground swings along NH-31 Rangia.
          </p>
        </div>

        {/* 3 Asymmetrical Curvy Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Garden Walkway & Cottages */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0 }}
            className="flex flex-col justify-between group"
          >
            <div className="relative aspect-[4/3] rounded-[40px_16px_40px_16px] overflow-hidden border-2 border-[#E8C5BE] shadow-lg bg-[#633C38] mb-4">
              <img
                src="/assets/aistudio/unnamed__8__f12eb660.jpg"
                alt="Garden walkway with cottages at New Highway Chef Dhaba"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3 right-3 bg-[#633C38]/90 text-[#F8F0E9] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#E8C5BE]/40">
                01
              </span>
            </div>

            <div className="text-left flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C97870] block mb-1 flex items-center gap-1">
                  <Compass className="w-3 h-3 text-[#C97870]" />
                  <span>Relaxing Ambience</span>
                </span>
                <h3 className="font-serif text-xl font-bold text-[#633C38] mb-2">
                  Thatched Cabins & Greenery
                </h3>
                <p className="text-xs text-[#633C38]/75 leading-relaxed">
                  Stone pathways bordered by flowers, private dining cottages, and cool natural breezes away from highway noise.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Kids Playground with Swings */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between group"
          >
            <div className="relative aspect-[4/3] rounded-[16px_40px_16px_40px] overflow-hidden border-2 border-[#E8C5BE] shadow-lg bg-[#633C38] mb-4">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_3.23.01_PM__1__df40220a.jpeg"
                alt="Child playing on the swings at New Highway Chef Dhaba playground"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3 right-3 bg-[#C97870] text-[#F8F0E9] text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                02
              </span>
            </div>

            <div className="text-left flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C97870] block mb-1 flex items-center gap-1">
                  <Smile className="w-3 h-3" />
                  <span>Family Dedicated</span>
                </span>
                <h3 className="font-serif text-xl font-bold text-[#633C38] mb-2">
                  Kids' Playground & Swings
                </h3>
                <p className="text-xs text-[#633C38]/75 leading-relaxed">
                  Dedicated playground with swings and slides right in front of dining huts so parents can relax and enjoy their meal.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Real NH-31 Highway Location */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between group"
          >
            <div className="relative aspect-[4/3] rounded-[40px_16px_40px_16px] overflow-hidden border-2 border-[#E8C5BE] shadow-lg bg-[#633C38] mb-4">
              <img
                src="/assets/aistudio/unnamed__5__61968f81.jpg"
                alt="New Highway Chef Dhaba billboard on NH-31 Rangia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3 right-3 bg-[#633C38] text-[#F8F0E9] text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                03
              </span>
            </div>

            <div className="text-left flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C97870] block mb-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#C97870]" />
                  <span>Highway Landmark</span>
                </span>
                <h3 className="font-serif text-xl font-bold text-[#633C38] mb-2">
                  Direct Roadside NH-31 Parking
                </h3>
                <p className="text-xs text-[#633C38]/75 leading-relaxed">
                  Located directly on NH-31 in Rangia with extensive parking space for cars, tourist vans, and buses.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Wavy Section Divider */}
      <div className="w-full overflow-hidden leading-none mt-16 -mb-1 text-[#E8C5BE]/40">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-8 md:h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C320,0 720,100 1080,30 C1260,0 1380,60 1440,70 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
};
