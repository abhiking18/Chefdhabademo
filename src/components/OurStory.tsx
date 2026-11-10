import React from 'react';
import { Flame, Trees, Clock } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="relative py-16 sm:py-20 bg-[#FAF6EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetrical Photo Arrangement of Real Architecture */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            
            {/* Main Organic Photo: Thatched Cabins */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] shadow-xl overflow-hidden rounded-[36px_16px_36px_16px] border-4 border-[#FFFFFF] bg-[#302820]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/assets/aistudio/unnamed__1__39c05000.jpg"
                  alt="Outdoor thatched dining cabins at New Highway Chef Dhaba Rangia"
                  className="w-full h-full object-cover object-center hover:scale-104 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-[#424735] text-[#F2EBDD]">
                <p className="font-serif text-sm font-semibold tracking-wide">Thatched Dining Cabins</p>
                <p className="text-xs text-[#D8CBB6] mt-0.5">Open courtyard & palm breeze in Rangia</p>
              </div>
            </div>

            {/* Overlapping Curved Secondary Photo: Two-Story Bamboo Machan */}
            <div className="absolute -bottom-8 -right-2 sm:-bottom-10 sm:right-2 z-20 w-44 h-44 sm:w-52 sm:h-52 rounded-[28px_12px_28px_12px] overflow-hidden shadow-2xl border-4 border-[#FFFFFF] bg-[#302820] group">
              <img
                src="/assets/aistudio/unnamed__2__57eaae68.jpg"
                alt="Two-story bamboo machan treehouse at New Highway Chef Dhaba"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#302820]/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-[10px] font-semibold text-[#F2EBDD] tracking-wider uppercase bg-[#98543D] px-2.5 py-0.5 rounded-full">
                  Bamboo Machan
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Typography & Heritage */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#98543D] mb-3">
              <span className="w-6 h-[1.5px] bg-[#98543D]" />
              <span>THE HIGHWAY TRADITION</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#302820] leading-tight mb-5 [text-wrap:balance]">
              Built For Travellers. <br />
              <span className="font-normal italic text-[#424735]">Cooked With Care.</span>
            </h2>

            <p className="text-base text-[#302820]/85 leading-relaxed mb-4">
              On the long stretches of NH-31 through Rangia, a good meal is more than food — it is a moment to rest, breathe, and feel looked after.
            </p>

            <p className="text-sm text-[#302820]/75 leading-relaxed mb-8">
              At New Highway Chef Dhaba, we slow-simmer our dals in traditional handis, toss garden-fresh paneer on roaring cast-iron tawas, and bake our tandoori rotis on glowing charcoal embers. Guests dine under open-air thatched huts or in our signature two-story bamboo machan treehouse, surrounded by evergreen pine trees and quiet garden paths.
            </p>

            {/* Three Minimalist Editorial Points (No Card Soup) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#D8CBB6]">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Flame className="w-4 h-4 text-[#98543D]" />
                  <h3 className="font-serif text-sm font-bold text-[#302820]">Live Clay Tandoor</h3>
                </div>
                <p className="text-xs text-[#302820]/70 leading-relaxed">
                  Rotis (₹30) & Naan (₹70) rolled by hand and baked to order.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Trees className="w-4 h-4 text-[#424735]" />
                  <h3 className="font-serif text-sm font-bold text-[#302820]">Open-Air Cabins</h3>
                </div>
                <p className="text-xs text-[#302820]/70 leading-relaxed">
                  Thatched huts & bamboo machan with cool garden shade.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Clock className="w-4 h-4 text-[#98543D]" />
                  <h3 className="font-serif text-sm font-bold text-[#302820]">Till 11:30 PM</h3>
                </div>
                <p className="text-xs text-[#302820]/70 leading-relaxed">
                  Open every single day for breakfast, lunch, and late night.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
