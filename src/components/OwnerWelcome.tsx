import React from 'react';
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OwnerWelcomeProps {
  onOpenOrder: () => void;
}

export const OwnerWelcome: React.FC<OwnerWelcomeProps> = () => {
  const owner = RESTAURANT_INFO.owner;

  return (
    <section className="relative py-14 sm:py-18 bg-[#FAF6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Owner Real Photograph in Clean Arched Frame */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            
            <div className="relative z-10 w-full max-w-[320px] sm:max-w-[350px] shadow-xl overflow-hidden rounded-t-[200px] rounded-b-[28px] border-4 border-[#FFFFFF] bg-[#241814] group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={owner.image}
                  alt="Owner and Founder of New Highway Chef Dhaba Rangia"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#241814]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3.5 left-4 right-4 text-[#FAF6F0] pointer-events-none">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-[#C9822C] text-[#241814] px-2.5 py-0.5 rounded-full mb-1">
                    {owner.title}
                  </span>
                  <p className="font-serif text-base font-bold">New Highway Chef Dhaba</p>
                  <p className="text-[11px] text-[#E5D9C8]">Rangia Highway, NH-31, Assam</p>
                </div>
              </div>
            </div>

            {/* Small Clean Verified Badge */}
            <div className="absolute -bottom-4 right-2 sm:-bottom-5 sm:right-4 z-20 bg-[#FAF6F0] text-[#4F1824] px-3.5 py-2 rounded-xl shadow-lg border border-[#E5D9C8] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C9822C]" />
              <div>
                <p className="text-xs font-bold leading-none">Founder & Owner</p>
                <p className="text-[10px] text-[#8C4A38] mt-0.5">Rangia, Assam</p>
              </div>
            </div>

          </div>

          {/* Right Column: Founder's Welcome Note */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C4A38] mb-2">
              <span className="w-5 h-[2px] bg-[#C9822C]" />
              <span>A PERSONAL WELCOME</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#4F1824] leading-tight mb-4 [text-wrap:balance]">
              "We Cook With Heart, <br />
              <span className="text-[#241814] font-normal italic">And Serve With Respect."</span>
            </h2>

            {/* Owner Quote Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F3ECE1] border border-[#E5D9C8] mb-5">
              <p className="font-serif italic text-base sm:text-lg text-[#44332B] leading-relaxed mb-3">
                "{owner.quote}"
              </p>
              <div className="flex items-center justify-between pt-2.5 border-t border-[#E5D9C8]/80 text-xs text-[#8C4A38]">
                <span className="font-semibold text-[#4F1824]">Proprietor, New Highway Chef Dhaba</span>
                <span className="font-mono text-[#4F1824]">NH-31 Rangia</span>
              </div>
            </div>

            {/* 3 Commitment Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 text-xs text-[#44332B]">
              <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E5D9C8]">
                <p className="font-bold text-[#4F1824] mb-0.5">Fresh Tandoor</p>
                <p className="text-[11px] text-[#44332B]">Rotis (₹30) baked fresh on live embers.</p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E5D9C8]">
                <p className="font-bold text-[#4F1824] mb-0.5">Family & Kids</p>
                <p className="text-[11px] text-[#44332B]">Outdoor swings & thatched huts.</p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E5D9C8]">
                <p className="font-bold text-[#4F1824] mb-0.5">Honest Prices</p>
                <p className="text-[11px] text-[#44332B]">Generous portions, verified menu.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello,%20I%20would%20like%20to%20reserve%20a%20table%20or%20place%20an%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs sm:text-sm shadow transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#4F1824] text-[#4F1824] hover:bg-[#4F1824] hover:text-[#FAF6F0] font-semibold text-xs sm:text-sm transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9822C]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
