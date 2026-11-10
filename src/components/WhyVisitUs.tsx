import React from 'react';

export const WhyVisitUs: React.FC = () => {
  return (
    <section id="why-visit" className="relative py-16 sm:py-24 bg-[#FAF6EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#98543D] mb-3">
            <span className="w-6 h-[1.5px] bg-[#98543D]" />
            <span>THE HIGHWAY STOPOVER</span>
            <span className="w-6 h-[1.5px] bg-[#98543D]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#302820] mb-3 [text-wrap:balance]">
            Why Travelers Choose Us
          </h2>

          <p className="text-sm sm:text-base text-[#302820]/75">
            Designed for highway drivers, weary families, and local food lovers seeking good honest hospitality.
          </p>
        </div>

        {/* 3 Asymmetrical Editorial Photo Columns with Organic Curves */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Feature 1: Garden Walkway & Cottages */}
          <div className="flex flex-col justify-between group">
            <div className="relative aspect-[4/3] rounded-[32px_12px_32px_12px] overflow-hidden border-2 border-[#FFFFFF] shadow-lg bg-[#302820] mb-4">
              <img
                src="/assets/aistudio/unnamed__8__f12eb660.jpg"
                alt="Garden walkway with cottages at New Highway Chef Dhaba"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3 right-3 bg-[#302820]/90 text-[#F2EBDD] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                01
              </span>
            </div>

            <div className="text-left flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#98543D] block mb-1">
                  Space To Unwind
                </span>
                <h3 className="font-serif text-xl font-bold text-[#302820] mb-2">
                  Thatched Cottages & Garden
                </h3>
                <p className="text-xs text-[#302820]/75 leading-relaxed">
                  Stone-lined pathways bordered by fresh flowers, private green dining cottages, and cool natural breezes away from traffic fumes.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2: Kids Swings & Play Area */}
          <div className="flex flex-col justify-between group">
            <div className="relative aspect-[4/3] rounded-[12px_32px_12px_32px] overflow-hidden border-2 border-[#FFFFFF] shadow-lg bg-[#302820] mb-4">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_3.23.01_PM__1__df40220a.jpeg"
                alt="Child playing on the swings at New Highway Chef Dhaba playground"
                className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3 right-3 bg-[#98543D] text-[#F2EBDD] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                02
              </span>
            </div>

            <div className="text-left flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#424735] block mb-1">
                  Family Friendly
                </span>
                <h3 className="font-serif text-xl font-bold text-[#302820] mb-2">
                  Outdoor Swings & Play Area
                </h3>
                <p className="text-xs text-[#302820]/75 leading-relaxed">
                  A safe, dedicated playground with traditional swings and slides directly adjoining family dining huts so parents can relax.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3: NH-31 Highway Location */}
          <div className="flex flex-col justify-between group">
            <div className="relative aspect-[4/3] rounded-[32px_12px_32px_12px] overflow-hidden border-2 border-[#FFFFFF] shadow-lg bg-[#302820] mb-4">
              <img
                src="/assets/aistudio/unnamed__5__61968f81.jpg"
                alt="New Highway Chef Dhaba billboard on NH-31 Rangia"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3 right-3 bg-[#302820]/90 text-[#F2EBDD] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                03
              </span>
            </div>

            <div className="text-left flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#98543D] block mb-1">
                  Effortless Access
                </span>
                <h3 className="font-serif text-xl font-bold text-[#302820] mb-2">
                  Direct Roadside Parking on NH-31
                </h3>
                <p className="text-xs text-[#302820]/75 leading-relaxed">
                  Located right on the main highway in Rangia, Assam with extensive parking space for cars, traveler vans, and buses.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
