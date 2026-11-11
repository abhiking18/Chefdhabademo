import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Wallet,
  Navigation,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { motion } from 'motion/react';

interface LocationContactProps {
  onOpenOrder: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = () => {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'New Highway Chef Dhaba, Rangia, Assam 781354'
  )}`;

  const whatsappUrl = `https://wa.me/91${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(
    RESTAURANT_INFO.whatsappPrefilledMessage
  )}`;

  return (
    <section id="location" className="relative py-20 sm:py-28 bg-[#F8F0E9] text-[#633C38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8C5BE]/50 border border-[#E8C5BE] text-[#C97870] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C97870]" />
            <span>FIND US ON NH-31</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#633C38] mb-3">
            Location & <span className="text-[#C97870]">Highway</span> Hospitality
          </h2>

          <p className="text-sm sm:text-base text-[#8C5752]">
            Convenient highway access, expansive parking, and hot fresh meals right on NH-31 in Rangia, Assam.
          </p>
        </div>

        {/* Real Entrance Signboard Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 relative rounded-3xl overflow-hidden border border-[#E8C5BE] shadow-md bg-[#FFFDFC]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            <div className="md:col-span-7 relative aspect-[16/9] md:aspect-auto md:h-80 overflow-hidden">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_3.23.05_PM_35c9305f.jpeg"
                alt="New Highway Chef Dhaba illuminated signboard and entrance at night"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#FFFDFC] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-[#633C38]/80 backdrop-blur-md text-[#FFFDFC] font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                Highway Entrance View
              </div>
            </div>

            <div className="md:col-span-5 p-8 bg-[#FFFDFC] text-[#633C38] flex flex-col justify-center h-full">
              <span className="text-xs uppercase tracking-widest font-bold text-[#C97870] mb-1">
                Landmark on NH-31
              </span>
              <h3 className="text-2xl font-bold text-[#633C38] mb-3">
                Your Highway Oasis
              </h3>
              <p className="text-xs sm:text-sm text-[#8C5752] leading-relaxed mb-6">
                Easy to spot with our glowing illuminated board along the road. Features extensive parking, live clay tandoor, clean washrooms, and quick service.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#C97870] text-[11px] text-[#FFFDFC] font-bold">
                  Veg & Non-Veg
                </span>
                <span className="text-xs font-bold text-[#633C38]">Open Daily till 11:30 PM</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 2-Column Split: Info Card & Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 bg-[#FFFDFC] rounded-3xl p-6 sm:p-8 border border-[#E8C5BE] shadow-md flex flex-col justify-between">
            <div>
              <div className="mb-6 pb-6 border-b border-[#E8C5BE]">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C97870]">
                  Address
                </span>
                <h3 className="text-2xl font-bold text-[#633C38] mt-1">
                  {RESTAURANT_INFO.name}
                </h3>
                <div className="flex items-start gap-2.5 mt-3 text-xs sm:text-sm text-[#8C5752]">
                  <MapPin className="w-4 h-4 text-[#C97870] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#633C38]">{RESTAURANT_INFO.location}</p>
                    <p className="text-xs text-[#8C5752] mt-0.5">{RESTAURANT_INFO.addressNotes}</p>
                  </div>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-4 mb-8">
                
                {/* Phone */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#E8C5BE]/60 text-[#C97870] flex items-center justify-center border border-[#E8C5BE]">
                      <Phone className="w-4 h-4 text-[#C97870]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#8C5752] uppercase font-bold">Call For Inquiries</p>
                      <p className="text-xs sm:text-sm font-bold text-[#633C38]">{RESTAURANT_INFO.phone}</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="px-3.5 py-1.5 rounded-full bg-[#C97870] text-[#FFFDFC] text-xs font-bold hover:bg-[#b5655d] transition-colors"
                  >
                    Call
                  </a>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE]">
                  <div className="w-9 h-9 rounded-xl bg-[#E8C5BE]/60 text-[#C97870] flex items-center justify-center shrink-0 border border-[#E8C5BE]">
                    <Clock className="w-4 h-4 text-[#C97870]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8C5752] uppercase font-bold">Timings</p>
                    <p className="text-xs sm:text-sm font-bold text-[#633C38]">{RESTAURANT_INFO.closingTime}</p>
                    <p className="text-xs text-[#8C5752] mt-0.5">Breakfast, lunch, tea, and dinner served daily.</p>
                  </div>
                </div>

                {/* Payment */}
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE]">
                  <div className="w-9 h-9 rounded-xl bg-[#E8C5BE]/60 text-[#C97870] flex items-center justify-center shrink-0 border border-[#E8C5BE]">
                    <Wallet className="w-4 h-4 text-[#C97870]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8C5752] uppercase font-bold">Billing</p>
                    <p className="text-xs sm:text-sm font-bold text-[#633C38]">{RESTAURANT_INFO.priceRange}</p>
                    <span className="inline-block mt-1 text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#E8C5BE] text-[#633C38]">
                      Cash Only
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-[#E8C5BE]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#FFFDFC] border border-[#E8C5BE] hover:bg-[#F8F0E9] text-[#633C38] font-bold text-xs uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#C97870] hover:bg-[#b5655d] text-[#FFFDFC] font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Iframe */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-[#E8C5BE] shadow-md bg-[#FFFDFC]">
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
