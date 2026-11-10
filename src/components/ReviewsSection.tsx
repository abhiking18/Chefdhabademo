import React from 'react';
import { Star, ExternalLink, ShieldCheck, ThumbsUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="relative py-14 sm:py-18 bg-[#F3ECE1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Curved Banner Lockup */}
        <div className="relative rounded-[36px_16px_36px_16px] overflow-hidden bg-[#4F1824] text-[#FAF6F0] shadow-xl border border-[#E5D9C8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Side: Rating & Google Link */}
            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-center items-center text-center lg:items-start lg:text-left border-b lg:border-b-0 lg:border-r border-[#C9822C]/20">
              
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#C9822C] mb-3">
                <ShieldCheck className="w-4 h-4 text-[#C9822C]" />
                <span>GOOGLE RATINGS</span>
              </div>

              {/* Big 3.8 / 5 Rating Display */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-serif text-5xl sm:text-6xl font-bold text-[#FAF6F0] tracking-tight tabular-nums">
                  {RESTAURANT_INFO.rating}
                </span>
                <span className="text-xl text-[#E5D9C8]/70 font-serif">/ 5</span>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1.5 text-[#C9822C] mb-3">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9822C] text-[#C9822C]" />
                ))}
                <Star className="w-5 h-5 fill-[#C9822C]/40 text-[#C9822C]" />
              </div>

              <p className="font-serif text-base font-bold text-[#FAF6F0]">
                {RESTAURANT_INFO.reviewCount} Verified Reviews
              </p>

              <p className="text-xs text-[#E5D9C8]/80 mt-1 mb-6 max-w-xs">
                Customer reviews from visitors and highway travelers on Google Maps.
              </p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  'New Highway Chef Dhaba Rangia Assam'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C9822C] text-[#241814] font-semibold text-xs sm:text-sm hover:bg-[#E09439] transition-all shadow"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>

            {/* Right Side: What Customers Love */}
            <div className="lg:col-span-7 p-7 sm:p-10 bg-[#FAF6F0] text-[#241814] flex flex-col justify-center h-full">
              
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#8C4A38] mb-2">
                <span className="w-4 h-[2px] bg-[#C9822C]" />
                <span>CUSTOMER PRAISE</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4F1824] mb-3 leading-snug">
                Trusted by travelers across the Northeast highway.
              </h3>

              <p className="text-sm text-[#44332B] leading-relaxed mb-5">
                Visitors regularly highlight our generous portions, live charcoal tandoor rotis, and peaceful open-air thatched huts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#F3ECE1] border border-[#E5D9C8]">
                  <div className="flex items-center gap-2 text-[#4F1824] font-bold text-xs sm:text-sm mb-1">
                    <ThumbsUp className="w-3.5 h-3.5 text-[#C9822C]" />
                    <span>Popular for Thalis</span>
                  </div>
                  <p className="text-xs text-[#44332B]">
                    Hearty veg, paneer, and local chicken thalis served with yellow dal and hot rotis.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F3ECE1] border border-[#E5D9C8]">
                  <div className="flex items-center gap-2 text-[#4F1824] font-bold text-xs sm:text-sm mb-1">
                    <ThumbsUp className="w-3.5 h-3.5 text-[#C9822C]" />
                    <span>Late-Night Highway Stop</span>
                  </div>
                  <p className="text-xs text-[#44332B]">
                    Open daily until 11:30 PM for fresh dinner, chai, and relaxing road breaks.
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
