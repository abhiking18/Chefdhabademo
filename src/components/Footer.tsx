import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  ArrowUp,
  Instagram,
  Facebook,
  Share2,
  Heart
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <footer className="relative bg-[#541E29] text-[#F5E9D5] pt-20 pb-12 overflow-hidden">
      
      {/* Flowing Curved Top Edge SVG Wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none -translate-y-[98%]">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14 sm:h-20 text-[#541E29]"
        >
          <path
            d="M0,40 C320,95 720,10 1080,60 C1240,82 1360,65 1440,50 L1440,90 L0,90 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Subtle Decorative Saffron Circle */}
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#D99035]/15 blur-2xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-20 w-64 h-64 rounded-full bg-[#3E161E] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#D99035]/20">
          
          {/* Col 1: Wordmark & Description (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#D99035] text-[#34251F] flex items-center justify-center font-serif text-xl font-bold shadow">
                  N
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-[#F5E9D5]">
                    NEW HIGHWAY CHEF DHABA
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#D99035] font-semibold">
                    Rangia · Assam · India
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#E7D5BB] leading-relaxed max-w-sm mb-6">
                Good Food. The Dhaba Way. Bringing people together over delicious traditional thalis, hearty curries, hot tandoori breads and the warmth of Indian roadside hospitality.
              </p>

              {/* Client Demo Attribution Notice */}
              <div className="p-3.5 rounded-2xl bg-[#3E161E] border border-[#D99035]/30 text-xs text-[#E7D5BB]">
                <p className="font-semibold text-[#D99035] mb-0.5">Professional Client Demo</p>
                <p className="text-[11px] text-[#E7D5BB]/90">
                  Carefully engineered by <strong>TAREX</strong> for the restaurant owners of New Highway Chef Dhaba.
                </p>
              </div>
            </div>

            {/* Social Media Links with Editable Placeholders */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3E161E] text-[#F5E9D5] hover:bg-[#D99035] hover:text-[#34251F] flex items-center justify-center transition-colors border border-[#D99035]/30"
                aria-label="Facebook Page (Editable)"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3E161E] text-[#F5E9D5] hover:bg-[#D99035] hover:text-[#34251F] flex items-center justify-center transition-colors border border-[#D99035]/30"
                aria-label="Instagram Profile (Editable)"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#3E161E] text-[#F5E9D5] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors border border-[#D99035]/30"
                aria-label="WhatsApp Channel"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-[#F5E9D5] mb-5 pb-2 border-b border-[#D99035]/20 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#E7D5BB]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#D99035] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D99035]" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Highway Location (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-lg font-bold text-[#F5E9D5] mb-5 pb-2 border-b border-[#D99035]/20 inline-block">
              Visit & Contact
            </h4>
            
            <div className="space-y-4 text-sm text-[#E7D5BB]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D99035] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#F5E9D5]">{RESTAURANT_INFO.name}</p>
                  <p className="text-xs text-[#E7D5BB]/80">{RESTAURANT_INFO.location}</p>
                  <p className="text-xs text-[#E7D5BB]/70 mt-0.5">Assam, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D99035] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="hover:text-[#D99035] transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D99035] shrink-0 mt-0.5" />
                <div>
                  <p>{RESTAURANT_INFO.closingTime}</p>
                  <p className="text-xs text-[#E7D5BB]/70">Outdoor seating · Cash only</p>
                </div>
              </div>
            </div>

            {/* Back to top button */}
            <div className="mt-8">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3E161E] hover:bg-[#D99035] hover:text-[#34251F] text-[#F5E9D5] text-xs font-semibold border border-[#D99035]/30 transition-all cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E7D5BB]/70">
          <p>© {new Date().getFullYear()} New Highway Chef Dhaba. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Client demo developed with pride by</span>
            <strong className="text-[#D99035] font-bold">TAREX</strong>
          </p>
        </div>

      </div>

    </footer>
  );
};
