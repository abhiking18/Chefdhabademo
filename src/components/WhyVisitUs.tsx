import React from 'react';
import { Sparkles, MapPin, Smile, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyVisitUs: React.FC = () => {
  return (
    <section id="why-visit" className="relative py-20 sm:py-28 bg-[#F8F0E9] text-[#633C38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8C5BE]/50 border border-[#E8C5BE] text-[#C97870] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C97870]" />
            <span>WHY VISIT US</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#633C38] mb-3">
            The <span className="text-[#C97870]">Highway</span> Experience
          </h2>

          <p className="text-sm sm:text-base text-[#8C5752]">
            Homestyle flavours, breezy thatched huts, and safe playground swings along NH-31 Rangia.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Garden Walkway & Cottages */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0 }}
            className="flex flex-col justify-between group bg-[#FFFDFC] border border-[#E8C5BE] hover:border-[#C97870] p-4 rounded-3xl transition-colors shadow-sm"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8C5BE] mb-4">
              <img
                src="/assets/aistudio/unnamed__8__f12eb660.jpg"
                alt="Garden walkway with cottages at New Highway Chef Dhaba"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3 right-3 bg-[#FFFDFC]/90 backdrop-blur-md text-[#C97870] font-bold text-xs px-3 py-1 rounded-full border border-[#E8C5BE]">
                01.
              </span>
            </div>

            <div className="text-left p-2 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#C97870] mb-1 flex items-center gap-1">
                  <Compass className="w-3 h-3 text-[#C97870]" />
                  <span>Relaxing Ambience</span>
                </span>
                <h3 className="text-xl font-bold text-[#633C38] mb-2">
                  Thatched Cabins & Greenery
                </h3>
                <p className="text-xs text-[#8C5752] leading-relaxed">
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
            className="flex flex-col justify-between group bg-[#FFFDFC] border border-[#E8C5BE] hover:border-[#C97870] p-4 rounded-3xl transition-colors shadow-sm"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8C5BE] mb-4">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_3.23.01_PM__1__df40220a.jpeg"
                alt="Child playing on the swings at New Highway Chef Dhaba playground"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3 right-3 bg-[#FFFDFC]/90 backdrop-blur-md text-[#C97870] font-bold text-xs px-3 py-1 rounded-full border border-[#E8C5BE]">
                02.
              </span>
            </div>

            <div className="text-left p-2 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#C97870] mb-1 flex items-center gap-1">
                  <Smile className="w-3 h-3 text-[#C97870]" />
                  <span>Family Dedicated</span>
                </span>
                <h3 className="text-xl font-bold text-[#633C38] mb-2">
                  Kids' Playground & Swings
                </h3>
                <p className="text-xs text-[#8C5752] leading-relaxed">
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
            className="flex flex-col justify-between group bg-[#FFFDFC] border border-[#E8C5BE] hover:border-[#C97870] p-4 rounded-3xl transition-colors shadow-sm"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8C5BE] mb-4">
              <img
                src="/assets/aistudio/unnamed__5__61968f81.jpg"
                alt="New Highway Chef Dhaba billboard on NH-31 Rangia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3 right-3 bg-[#FFFDFC]/90 backdrop-blur-md text-[#C97870] font-bold text-xs px-3 py-1 rounded-full border border-[#E8C5BE]">
                03.
              </span>
            </div>

            <div className="text-left p-2 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#C97870] mb-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#C97870]" />
                  <span>Highway Landmark</span>
                </span>
                <h3 className="text-xl font-bold text-[#633C38] mb-2">
                  Direct Roadside NH-31 Parking
                </h3>
                <p className="text-xs text-[#8C5752] leading-relaxed">
                  Located directly on NH-31 in Rangia with extensive parking space for cars, tourist vans, and buses.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
