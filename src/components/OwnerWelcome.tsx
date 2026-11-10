import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OwnerWelcomeProps {
  onOpenOrder: () => void;
}

export const OwnerWelcome: React.FC<OwnerWelcomeProps> = () => {
  const owner = RESTAURANT_INFO.owner;

  return (
    <section className="relative py-16 sm:py-20 bg-[#F2EBDD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Owner Real Photograph in Organic Frame */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[370px] shadow-2xl overflow-hidden rounded-[40px_16px_40px_16px] border-4 border-[#FAF6EE] bg-[#302820] group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={owner.image}
                  alt="Owner and Founder of New Highway Chef Dhaba Rangia"
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#302820]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-5 right-5 text-[#F2EBDD] pointer-events-none">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-[#98543D] text-[#F2EBDD] px-2.5 py-0.5 rounded-full mb-1">
                    {owner.title}
                  </span>
                  <p className="font-serif text-lg font-bold">New Highway Chef Dhaba</p>
                  <p className="text-xs text-[#D8CBB6]">NH-31 Rangia, Assam</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Founder's Personal Message */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#98543D] mb-3">
              <span className="w-6 h-[1.5px] bg-[#98543D]" />
              <span>A PERSONAL WELCOME</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#302820] leading-tight mb-5 [text-wrap:balance]">
              "We Cook With Heart, <br />
              <span className="font-normal italic text-[#424735]">And Serve With Respect."</span>
            </h2>

            {/* Owner Quote Statement */}
            <div className="p-6 rounded-[24px_8px_24px_8px] bg-[#FAF6EE] border border-[#D8CBB6] mb-6">
              <p className="font-serif italic text-base sm:text-lg text-[#302820]/90 leading-relaxed mb-4">
                "{owner.quote}"
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-[#D8CBB6]/60 text-xs">
                <span className="font-serif font-bold text-[#302820]">Proprietor & Founder</span>
                <span className="text-[#98543D] font-medium tracking-wide">NH-31 Rangia, Kamrup</span>
              </div>
            </div>

            {/* Values summary */}
            <p className="text-sm text-[#302820]/75 leading-relaxed mb-6">
              Whether you are stopping for a quick cup of chai, ordering fresh clay-tandoor parathas for breakfast, or sharing a family dinner in our thatched huts, our team is committed to genuine care and authentic flavours.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello,%20I%20would%20like%20to%20reserve%20a%20table%20or%20place%20an%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#424735] hover:bg-[#303426] text-[#F2EBDD] font-semibold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#D8CBB6]" />
                <span>Message On WhatsApp</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#302820]/40 text-[#302820] hover:bg-[#302820] hover:text-[#F2EBDD] font-semibold text-xs sm:text-sm tracking-wide uppercase transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#98543D]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
