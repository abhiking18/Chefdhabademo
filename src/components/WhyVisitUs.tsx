import React from 'react';

export const WhyVisitUs: React.FC = () => {
  return (
    <section id="why-visit" className="relative py-14 sm:py-18 bg-[#F3ECE1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C4A38] mb-2">
            <span className="w-5 h-[2px] bg-[#C9822C]" />
            <span>WHY VISIT US</span>
            <span className="w-5 h-[2px] bg-[#C9822C]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#4F1824] mb-2 [text-wrap:balance]">
            The Highway Experience
          </h2>

          <p className="text-sm sm:text-base text-[#44332B]">
            Authentic taste, relaxing open air, and safe space for kids along NH-31 Rangia.
          </p>
        </div>

        {/* 3 Real Premises Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          
          {/* Card 1: Outdoor Thatched Cabins & Walkway */}
          <div className="bg-[#FAF6F0] rounded-2xl overflow-hidden border border-[#E5D9C8] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#241814]">
              <img
                src="/assets/aistudio/unnamed__8__f12eb660.jpg"
                alt="Garden walkway with cottages at New Highway Chef Dhaba"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 right-2.5 bg-[#4F1824] text-[#FAF6F0] text-[10px] font-bold px-2 py-0.5 rounded-full">
                01
              </div>
            </div>

            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C4A38] block mb-0.5">
                  Relaxing Ambience
                </span>
                <h3 className="font-serif text-lg font-bold text-[#4F1824] mb-1.5">
                  Thatched Cabins & Garden
                </h3>
                <p className="text-xs text-[#44332B] leading-relaxed">
                  Breezy open huts, palm garden pathways, and a two-story bamboo machan for highway dining.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Kids Playground with Swings */}
          <div className="bg-[#FAF6F0] rounded-2xl overflow-hidden border border-[#E5D9C8] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#241814]">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_3.23.01_PM__1__df40220a.jpeg"
                alt="Child playing on the swings at New Highway Chef Dhaba playground"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 right-2.5 bg-[#C9822C] text-[#241814] text-[10px] font-bold px-2 py-0.5 rounded-full">
                02
              </div>
            </div>

            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C4A38] block mb-0.5">
                  Family First
                </span>
                <h3 className="font-serif text-lg font-bold text-[#4F1824] mb-1.5">
                  Kids' Playground & Swings
                </h3>
                <p className="text-xs text-[#44332B] leading-relaxed">
                  Safe outdoor play area with swings and slides right in front of dining huts.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Real NH-31 Highway Location */}
          <div className="bg-[#FAF6F0] rounded-2xl overflow-hidden border border-[#E5D9C8] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#241814]">
              <img
                src="/assets/aistudio/unnamed__5__61968f81.jpg"
                alt="New Highway Chef Dhaba billboard on NH-31 Rangia"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 right-2.5 bg-[#4F1824] text-[#FAF6F0] text-[10px] font-bold px-2 py-0.5 rounded-full">
                03
              </div>
            </div>

            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C4A38] block mb-0.5">
                  Prime Highway Spot
                </span>
                <h3 className="font-serif text-lg font-bold text-[#4F1824] mb-1.5">
                  Directly on NH-31 Rangia
                </h3>
                <p className="text-xs text-[#44332B] leading-relaxed">
                  Spacious parking for cars and buses, open daily until 11:30 PM with hot tandoor meals.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
