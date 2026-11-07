import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Wallet,
  Navigation,
  MessageCircle,
  Sparkles,
  Users,
  UtensilsCrossed
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface LocationContactProps {
  onOpenOrder: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({ onOpenOrder }) => {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'New Highway Chef Dhaba, Rangia, Assam 781354'
  )}`;

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
    RESTAURANT_INFO.whatsappPrefilledMessage
  )}`;

  return (
    <section id="location" className="relative py-24 sm:py-32 bg-[#FAF4EB] overflow-hidden">
      
      {/* Decorative Organic Backdrop Circles */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#E7D5BB]/50 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#D99035]/15 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-[#541E29] mb-3">
            <MapPin className="w-4 h-4 text-[#D99035]" />
            <span>FIND US ON THE HIGHWAY</span>
            <MapPin className="w-4 h-4 text-[#D99035]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#541E29] mb-4 [text-wrap:balance]">
            Come Hungry. <br />
            <span className="italic font-normal text-[#34251F]">Leave Happy.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4A362D]">
            Visit us in Rangia, Assam for fresh rotis, hearty gravies, and authentic Indian hospitality.
          </p>
        </div>

        {/* 2-Column Split: Info Card & Curved Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact & Essential Restaurant Facts (5 cols) */}
          <div className="lg:col-span-5 bg-[#F5E9D5] rounded-[48px_20px_48px_20px] p-8 sm:p-10 border-2 border-[#E7D5BB] shadow-xl flex flex-col justify-between">
            
            <div>
              <div className="mb-6 pb-6 border-b border-[#E7D5BB]">
                <span className="text-xs font-bold uppercase tracking-widest text-[#8C4A38]">
                  Restaurant Address
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#541E29] mt-1">
                  {RESTAURANT_INFO.name}
                </h3>
                <div className="flex items-start gap-2.5 mt-3 text-sm text-[#4A362D]">
                  <MapPin className="w-5 h-5 text-[#D99035] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{RESTAURANT_INFO.location}</p>
                    <p className="text-xs text-[#8C4A38] mt-0.5">Kamrup district, Assam, India</p>
                  </div>
                </div>
              </div>

              {/* Essential Verified Details Grid */}
              <div className="space-y-4 mb-8">
                
                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF4EB] border border-[#E7D5BB]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#541E29] text-[#D99035] flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#8C4A38] uppercase font-bold">Call Us</p>
                      <p className="text-sm font-bold text-[#34251F]">{RESTAURANT_INFO.phone}</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="px-3 py-1.5 rounded-full bg-[#541E29] text-[#F5E9D5] text-xs font-semibold hover:bg-[#3E161E] transition-colors"
                  >
                    Call
                  </a>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF4EB] border border-[#E7D5BB]">
                  <div className="w-9 h-9 rounded-full bg-[#541E29] text-[#D99035] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#8C4A38] uppercase font-bold">Timings</p>
                    <p className="text-sm font-bold text-[#34251F]">{RESTAURANT_INFO.closingTime}</p>
                    <p className="text-[11px] text-[#8C4A38] mt-0.5">
                      {RESTAURANT_INFO.hoursDisclaimer}
                    </p>
                  </div>
                </div>

                {/* Reported Price Range */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAF4EB] border border-[#E7D5BB]">
                  <div className="w-9 h-9 rounded-full bg-[#541E29] text-[#D99035] flex items-center justify-center shrink-0">
                    <Wallet className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#8C4A38] uppercase font-bold">Price Range & Payment</p>
                    <p className="text-sm font-bold text-[#34251F]">{RESTAURANT_INFO.priceRange}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#541E29] text-[#F5E9D5] font-semibold">
                        Cash Only
                      </span>
                      <span className="text-xs text-[#8C4A38]">Counter checkout</span>
                    </div>
                  </div>
                </div>

                {/* Key Amenities */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-full bg-[#FAF4EB] border border-[#E7D5BB] text-xs font-semibold text-[#541E29] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D99035]" />
                    Outdoor Seating
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FAF4EB] border border-[#E7D5BB] text-xs font-semibold text-[#541E29] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D99035]" />
                    Kids' Menu
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FAF4EB] border border-[#E7D5BB] text-xs font-semibold text-[#541E29] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D99035]" />
                    Clay Tandoor
                  </span>
                </div>

              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[#E7D5BB]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow hover:bg-[#20ba5a] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#541E29] text-[#F5E9D5] font-semibold text-sm shadow hover:bg-[#3E161E] transition-all"
              >
                <Navigation className="w-4 h-4 text-[#D99035]" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Curved Interactive Map Container (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[450px] lg:h-full min-h-[420px] rounded-[24px_60px_24px_60px] overflow-hidden border-4 border-[#E7D5BB] shadow-2xl bg-[#34251F]">
              
              {/* Embedded Google Maps iframe targeted directly to Rangia, Assam */}
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

              {/* Floating Map Label Card */}
              <div className="absolute top-4 left-4 z-10 bg-[#FAF4EB]/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#E7D5BB] max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-[#D99035] animate-ping" />
                  <span className="font-serif font-bold text-sm text-[#541E29]">New Highway Chef Dhaba</span>
                </div>
                <p className="text-xs text-[#4A362D]">Rangia, Assam 781354</p>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-xs font-semibold text-[#541E29] hover:text-[#D99035] inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <Navigation className="w-3 h-3 text-[#D99035]" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
