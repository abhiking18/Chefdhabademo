import React from 'react';
import { Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="relative py-16 sm:py-24 bg-[#FAF6EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Curated Editorial Reviews Lockup */}
        <div className="relative rounded-[36px_16px_36px_16px] overflow-hidden bg-[#302820] text-[#F2EBDD] shadow-2xl border border-[#D8CBB6]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Official Google Rating Metric */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#D8CBB6]/20">
              
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D8CBB6] mb-4">
                  <ShieldCheck className="w-4 h-4 text-[#98543D]" />
                  <span>GOOGLE VERIFIED RATING</span>
                </div>

                {/* Score */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif text-5xl sm:text-6xl font-bold text-[#F2EBDD] tracking-tight tabular-nums">
                    {RESTAURANT_INFO.rating}
                  </span>
                  <span className="text-xl text-[#D8CBB6]/70 font-serif">/ 5</span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1.5 text-[#98543D] mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#98543D] text-[#98543D]" />
                  ))}
                  <Star className="w-5 h-5 fill-[#98543D]/30 text-[#98543D]" />
                </div>

                <p className="font-serif text-base font-bold text-[#F2EBDD]">
                  {RESTAURANT_INFO.reviewCount} Highway Travelers
                </p>

                <p className="text-xs text-[#D8CBB6]/80 mt-1 mb-8 max-w-xs leading-relaxed">
                  Real feedback from families, commuters, and travelers along the NH-31 Guwahati-Rangia corridor.
                </p>
              </div>

              <div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    'New Highway Chef Dhaba Rangia Assam'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#98543D] text-[#F2EBDD] font-semibold text-xs tracking-wide uppercase hover:bg-[#7C422F] transition-all shadow-xs"
                >
                  <span>Read On Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Right Column: Customer Stories & Testimonials */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-[#F2EBDD] text-[#302820] flex flex-col justify-between">
              
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#98543D] mb-3">
                  <span className="w-5 h-[1.5px] bg-[#98543D]" />
                  <span>COMMUNITY PRAISE</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#302820] mb-4 leading-snug">
                  "Authentic taste, peaceful huts, and hot rotis straight from the tandoor."
                </h3>

                <p className="text-sm text-[#302820]/80 leading-relaxed mb-6">
                  Whether stopping at midday for our Veg or Chicken Thalis, or dropping by for a midnight dinner, guests appreciate our clean dining facilities, shaded outdoor cottages, and generous servings.
                </p>
              </div>

              {/* 2 Editorial Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#D8CBB6]">
                <div className="p-4 rounded-[16px] bg-[#FAF6EE] border border-[#D8CBB6]/80">
                  <h4 className="font-serif font-bold text-sm text-[#302820] mb-1">
                    Signature Thalis
                  </h4>
                  <p className="text-xs text-[#302820]/75 leading-relaxed">
                    Hearty thali spreads from ₹120 with yellow dal tadka, hot rotis, and fresh seasonal sabzi.
                  </p>
                </div>

                <div className="p-4 rounded-[16px] bg-[#FAF6EE] border border-[#D8CBB6]/80">
                  <h4 className="font-serif font-bold text-sm text-[#302820] mb-1">
                    Open Till 11:30 PM
                  </h4>
                  <p className="text-xs text-[#302820]/75 leading-relaxed">
                    Reliable late-night dining stop on NH-31 with spacious parking for cars and travel groups.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
