import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Wallet,
  Navigation,
  MessageCircle
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface LocationContactProps {
  onOpenOrder: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = () => {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'New Highway Chef Dhaba, Rangia, Assam 781354'
  )}`;

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
    RESTAURANT_INFO.whatsappPrefilledMessage
  )}`;

  return (
    <section id="location" className="relative py-14 sm:py-18 bg-[#FAF6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C4A38] mb-2">
            <span className="w-5 h-[2px] bg-[#C9822C]" />
            <span>FIND US ON NH-31</span>
            <span className="w-5 h-[2px] bg-[#C9822C]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#4F1824] mb-2 [text-wrap:balance]">
            Location & Hours
          </h2>

          <p className="text-sm sm:text-base text-[#44332B]">
            Convenient highway parking for cars, bikes & buses right on NH-31 in Rangia, Assam.
          </p>
        </div>

        {/* Real Entrance Signboard Card Preview */}
        <div className="mb-10 relative rounded-2xl overflow-hidden border border-[#E5D9C8] shadow-md bg-[#241814]">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-7 relative aspect-[16/9] md:aspect-auto md:h-72 overflow-hidden">
              <img
                src="/assets/aistudio/unnamed_98627df7.jpg"
                alt="New Highway Chef Dhaba illuminated signboard and entrance at night"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/75 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-[#C9822C] text-[#241814] font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow">
                Entrance View
              </div>
            </div>

            <div className="md:col-span-5 p-6 bg-[#4F1824] text-[#FAF6F0] flex flex-col justify-center h-full">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#C9822C] mb-1">
                Highway Landmark
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF6F0] mb-2">
                A Complete Family Dhaba
              </h3>
              <p className="text-xs text-[#E5D9C8] leading-relaxed mb-4">
                Spot our glowing signage right along the road. Features ample parking, live tandoor, and quick service.
              </p>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#381119] border border-[#C9822C]/30 text-[10px] text-[#C9822C] font-semibold">
                  Veg & Non-Veg
                </span>
                <span className="text-xs text-[#E5D9C8]">Open till 11:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Split: Info Card & Curved Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Contact & Essential Facts */}
          <div className="lg:col-span-5 bg-[#F3ECE1] rounded-2xl p-6 sm:p-7 border border-[#E5D9C8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-4 pb-4 border-b border-[#E5D9C8]">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C4A38]">
                  Address
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4F1824] mt-0.5">
                  {RESTAURANT_INFO.name}
                </h3>
                <div className="flex items-start gap-2 mt-2 text-xs sm:text-sm text-[#44332B]">
                  <MapPin className="w-4 h-4 text-[#C9822C] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{RESTAURANT_INFO.location}</p>
                    <p className="text-[11px] text-[#8C4A38] mt-0.5">Assam, India</p>
                  </div>
                </div>
              </div>

              {/* Essential Details */}
              <div className="space-y-3 mb-6">
                
                {/* Phone */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF6F0] border border-[#E5D9C8]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#4F1824] text-[#C9822C] flex items-center justify-center">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#8C4A38] uppercase font-bold">Call Us</p>
                      <p className="text-xs sm:text-sm font-bold text-[#241814]">{RESTAURANT_INFO.phone}</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="px-3 py-1 rounded-full bg-[#4F1824] text-[#FAF6F0] text-xs font-semibold hover:bg-[#381119] transition-colors"
                  >
                    Call
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF6F0] border border-[#E5D9C8]">
                  <div className="w-8 h-8 rounded-full bg-[#4F1824] text-[#C9822C] flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8C4A38] uppercase font-bold">Timings</p>
                    <p className="text-xs sm:text-sm font-bold text-[#241814]">{RESTAURANT_INFO.closingTime}</p>
                    <p className="text-[11px] text-[#8C4A38] mt-0.5">Open daily for breakfast, lunch & dinner</p>
                  </div>
                </div>

                {/* Price Range */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF6F0] border border-[#E5D9C8]">
                  <div className="w-8 h-8 rounded-full bg-[#4F1824] text-[#C9822C] flex items-center justify-center shrink-0">
                    <Wallet className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8C4A38] uppercase font-bold">Billing</p>
                    <p className="text-xs sm:text-sm font-bold text-[#241814]">{RESTAURANT_INFO.priceRange}</p>
                    <span className="inline-block mt-1 text-[11px] px-2 py-0.5 rounded-full bg-[#4F1824] text-[#FAF6F0] font-semibold">
                      Cash Only
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2.5 pt-4 border-t border-[#E5D9C8]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm shadow hover:bg-[#20ba5a] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#4F1824] text-[#FAF6F0] font-semibold text-xs sm:text-sm shadow hover:bg-[#381119] transition-all"
              >
                <Navigation className="w-4 h-4 text-[#C9822C]" />
                <span>Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Embedded Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[360px] lg:h-full min-h-[360px] rounded-2xl overflow-hidden border border-[#E5D9C8] shadow-sm bg-[#241814]">
              <iframe
                title="New Highway Chef Dhaba Rangia Map Location"
                src="https://maps.google.com/maps?q=New%20Highway%20Chef%20Dhaba%20Rangia%20Assam&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
