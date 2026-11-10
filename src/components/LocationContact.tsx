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
    <section id="location" className="relative py-16 sm:py-24 bg-[#F2EBDD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#98543D] mb-3">
            <span className="w-6 h-[1.5px] bg-[#98543D]" />
            <span>FIND US ON NH-31</span>
            <span className="w-6 h-[1.5px] bg-[#98543D]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#302820] mb-3 [text-wrap:balance]">
            Location & Roadside Hospitality
          </h2>

          <p className="text-sm sm:text-base text-[#302820]/75">
            Convenient highway access, expansive parking, and fresh meals right on NH-31 in Rangia, Assam.
          </p>
        </div>

        {/* Real Entrance Signboard Feature */}
        <div className="mb-12 relative rounded-[36px_16px_36px_16px] overflow-hidden border-2 border-[#FFFFFF] shadow-xl bg-[#302820]">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            <div className="md:col-span-7 relative aspect-[16/9] md:aspect-auto md:h-80 overflow-hidden">
              <img
                src="/assets/aistudio/unnamed_98627df7.jpg"
                alt="New Highway Chef Dhaba illuminated signboard and entrance at night"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#302820]/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-[#98543D] text-[#F2EBDD] font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                Highway Entrance
              </div>
            </div>

            <div className="md:col-span-5 p-8 bg-[#302820] text-[#F2EBDD] flex flex-col justify-center h-full">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#D8CBB6] mb-1">
                Landmark on NH-31
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#F2EBDD] mb-3">
                Your Roadside Oasis
              </h3>
              <p className="text-xs sm:text-sm text-[#D8CBB6] leading-relaxed mb-6">
                Easy to spot with our glowing red neon board along Rangia Highway. Safe parking, clean washrooms, and open huts for travelers.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#424735] text-[11px] text-[#F2EBDD] font-semibold">
                  Pure Veg & Non-Veg
                </span>
                <span className="text-xs text-[#D8CBB6]">Open Daily till 11:30 PM</span>
              </div>
            </div>

          </div>
        </div>

        {/* 2-Column Split: Essential Information & Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 bg-[#FAF6EE] rounded-[28px_12px_28px_12px] p-6 sm:p-8 border border-[#D8CBB6] shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-6 pb-6 border-b border-[#D8CBB6]">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#98543D]">
                  Address
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#302820] mt-1">
                  {RESTAURANT_INFO.name}
                </h3>
                <div className="flex items-start gap-2.5 mt-3 text-xs sm:text-sm text-[#302820]/80">
                  <MapPin className="w-4 h-4 text-[#98543D] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#302820]">{RESTAURANT_INFO.location}</p>
                    <p className="text-xs text-[#302820]/60 mt-0.5">{RESTAURANT_INFO.addressNotes}</p>
                  </div>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-4 mb-8">
                
                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-[16px] bg-[#F2EBDD] border border-[#D8CBB6]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#302820] text-[#F2EBDD] flex items-center justify-center">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#98543D] uppercase font-bold">Call For Inquiries</p>
                      <p className="text-xs sm:text-sm font-bold text-[#302820]">{RESTAURANT_INFO.phone}</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="px-3.5 py-1.5 rounded-full bg-[#302820] text-[#F2EBDD] text-xs font-semibold hover:bg-[#211A14] transition-colors"
                  >
                    Call
                  </a>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3 p-3.5 rounded-[16px] bg-[#F2EBDD] border border-[#D8CBB6]">
                  <div className="w-8 h-8 rounded-full bg-[#424735] text-[#F2EBDD] flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#424735] uppercase font-bold">Service Hours</p>
                    <p className="text-xs sm:text-sm font-bold text-[#302820]">{RESTAURANT_INFO.closingTime}</p>
                    <p className="text-xs text-[#302820]/60 mt-0.5">Serving breakfast, lunch, tea, and dinner daily.</p>
                  </div>
                </div>

                {/* Payment */}
                <div className="flex items-start gap-3 p-3.5 rounded-[16px] bg-[#F2EBDD] border border-[#D8CBB6]">
                  <div className="w-8 h-8 rounded-full bg-[#98543D] text-[#F2EBDD] flex items-center justify-center shrink-0">
                    <Wallet className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#98543D] uppercase font-bold">Billing & Price</p>
                    <p className="text-xs sm:text-sm font-bold text-[#302820]">{RESTAURANT_INFO.priceRange}</p>
                    <span className="inline-block mt-1 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#302820] text-[#F2EBDD]">
                      Cash Only
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-[#D8CBB6]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#424735] hover:bg-[#303426] text-[#F2EBDD] font-semibold text-xs uppercase tracking-wider shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#D8CBB6]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#98543D] hover:bg-[#7C422F] text-[#F2EBDD] font-semibold text-xs uppercase tracking-wider shadow-xs transition-all"
              >
                <Navigation className="w-4 h-4 text-[#F2EBDD]" />
                <span>Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Iframe in Organic Curved Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[400px] lg:h-full min-h-[400px] rounded-[16px_36px_16px_36px] overflow-hidden border-2 border-[#FFFFFF] shadow-xl bg-[#302820]">
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
