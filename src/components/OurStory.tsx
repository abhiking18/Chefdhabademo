import React from 'react';
import { Flame, Clock, Trees } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="relative py-14 sm:py-18 bg-[#F3ECE1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Real Architecture Photographs */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            
            {/* Main Arched Real Photograph: Thatched Cabins */}
            <div className="relative z-10 w-full max-w-[320px] sm:max-w-[360px] shadow-lg overflow-hidden rounded-t-[160px] rounded-b-[24px] border-4 border-[#FFFFFF] bg-[#241814]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/aistudio/unnamed__1__39c05000.jpg"
                  alt="Outdoor thatched dining cabins at New Highway Chef Dhaba Rangia"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3.5 bg-[#4F1824] text-[#FAF6F0] text-center">
                <p className="font-serif text-sm font-semibold">Thatched Dining Cabins</p>
                <p className="text-[11px] text-[#E5D9C8]">Open-air courtyard & palm garden in Rangia</p>
              </div>
            </div>

            {/* Overlapping Circular Image: Bamboo Machan */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:right-4 z-20 w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-xl border-4 border-[#FFFFFF] bg-[#241814] group">
              <img
                src="/assets/aistudio/unnamed__2__57eaae68.jpg"
                alt="Two-story bamboo machan dining hut at New Highway Chef Dhaba"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-2.5">
                <span className="text-[10px] font-semibold text-[#FAF6F0] tracking-wider uppercase bg-[#4F1824]/90 px-2.5 py-0.5 rounded-full">
                  Bamboo Machan
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Text & Values */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C4A38] mb-2">
              <span className="w-5 h-[2px] bg-[#C9822C]" />
              <span>OUR TRADITION</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#4F1824] leading-tight mb-4 [text-wrap:balance]">
              More Than A Meal. <br />
              <span className="text-[#241814] font-normal italic">It's Real Hospitality.</span>
            </h2>

            <p className="text-base text-[#44332B] leading-relaxed mb-3">
              At New Highway Chef Dhaba on NH-31, we combine fresh ingredients, hot charcoal tandoors, and genuine roadside warmth.
            </p>

            <p className="text-sm text-[#44332B]/90 leading-relaxed mb-6">
              Nestled on the highway in Rangia, Assam, our establishment features open-air thatched dining huts and a two-story bamboo treehouse machan. Whether stopping for our famed Thalis (₹120–₹340), authentic Duck Curry, or piping hot Tandoori Rotis (₹30), you are always welcomed like family.
            </p>

            {/* Three Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E5D9C8]">
              <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E5D9C8]">
                <div className="w-8 h-8 rounded-lg bg-[#4F1824] text-[#FAF6F0] flex items-center justify-center mb-2 shadow-sm">
                  <Flame className="w-4 h-4 text-[#C9822C]" />
                </div>
                <h3 className="font-serif text-sm font-bold text-[#4F1824]">Clay Tandoor</h3>
                <p className="text-[11px] text-[#44332B] mt-0.5">
                  Hot Rotis (₹30) & Naan (₹70) straight from live charcoal.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E5D9C8]">
                <div className="w-8 h-8 rounded-lg bg-[#4F1824] text-[#FAF6F0] flex items-center justify-center mb-2 shadow-sm">
                  <Trees className="w-4 h-4 text-[#C9822C]" />
                </div>
                <h3 className="font-serif text-sm font-bold text-[#4F1824]">Thatched Cabins</h3>
                <p className="text-[11px] text-[#44332B] mt-0.5">
                  Open huts, bamboo machan & garden breezes.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E5D9C8]">
                <div className="w-8 h-8 rounded-lg bg-[#4F1824] text-[#FAF6F0] flex items-center justify-center mb-2 shadow-sm">
                  <Clock className="w-4 h-4 text-[#C9822C]" />
                </div>
                <h3 className="font-serif text-sm font-bold text-[#4F1824]">Till 11:30 PM</h3>
                <p className="text-[11px] text-[#44332B] mt-0.5">
                  Open daily on NH-31 for highway travelers & families.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
