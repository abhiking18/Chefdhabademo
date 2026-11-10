import React from 'react';
import { Phone, MessageCircle, HeartHandshake } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { motion } from 'motion/react';

interface OwnerWelcomeProps {
  onOpenOrder: () => void;
}

export const OwnerWelcome: React.FC<OwnerWelcomeProps> = () => {
  const owner = RESTAURANT_INFO.owner;

  return (
    <section className="relative py-16 sm:py-24 bg-[#F8F0E9] overflow-hidden">
      
      {/* Organic Curved Background Elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#E8C5BE]/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Owner Real Photograph in Curvy Organic Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-start"
          >
            {/* Background Organic Color Halo */}
            <div className="absolute -inset-4 bg-[#E8C5BE]/30 rounded-[60px_24px_60px_24px] transform rotate-2 pointer-events-none" />

            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[370px] shadow-2xl overflow-hidden rounded-[50px_20px_60px_20px] border-4 border-[#FFFDFC] bg-[#633C38] group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={owner.image}
                  alt="Owner and Founder of New Highway Chef Dhaba Rangia"
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#633C38]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-5 right-5 text-[#F8F0E9] pointer-events-none">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-[#C97870] text-[#FFFDFC] px-3 py-0.5 rounded-full mb-1 border border-[#E8C5BE]/40 shadow-xs">
                    {owner.title}
                  </span>
                  <p className="font-serif text-lg font-bold">New Highway Chef Dhaba</p>
                  <p className="text-xs text-[#E8C5BE]">NH-31 Rangia, Assam</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Founder's Personal Welcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8C5BE]/40 text-[#633C38] text-xs font-semibold tracking-widest uppercase mb-4 self-start border border-[#C97870]/30">
              <HeartHandshake className="w-3.5 h-3.5 text-[#C97870]" />
              <span>A PERSONAL WELCOME</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#633C38] leading-tight mb-5 [text-wrap:balance]">
              "We Cook With Heart, <br />
              <span className="font-normal italic text-[#C97870]">And Serve With Dignity."</span>
            </h2>

            {/* Owner Quote Statement Card with Organic Curves */}
            <div className="p-6 sm:p-7 rounded-[32px_12px_32px_12px] bg-[#FFFDFC] border border-[#E8C5BE] shadow-xs mb-6">
              <p className="font-serif italic text-base sm:text-lg text-[#633C38]/90 leading-relaxed mb-4">
                "{owner.quote}"
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-[#633C38]/10 text-xs">
                <span className="font-serif font-bold text-[#633C38]">{owner.name} · Proprietor</span>
                <span className="text-[#C97870] font-semibold tracking-wide">Rangia Highway, Assam</span>
              </div>
            </div>

            <p className="text-sm text-[#633C38]/75 leading-relaxed mb-7">
              Whether you are stopping for a quick glass of hot masala chai, fresh clay-tandoor parathas for breakfast, or sharing an evening thali dinner with your family, our hearth is always warm and welcoming.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello,%20I%20would%20like%20to%20reserve%20a%20table%20or%20place%20an%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#C97870] hover:bg-[#A65A52] text-[#FFFDFC] font-semibold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-md border border-[#E8C5BE]/40"
              >
                <MessageCircle className="w-4 h-4 text-[#FFFDFC]" />
                <span>Message On WhatsApp</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#633C38]/30 text-[#633C38] hover:bg-[#633C38] hover:text-[#FFFDFC] font-semibold text-xs sm:text-sm tracking-wide uppercase transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#C97870]" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </motion.a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
