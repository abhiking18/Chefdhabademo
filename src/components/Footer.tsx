import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  ArrowUp,
  Instagram,
  Facebook,
  Share2,
  Lock
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Specialties', href: '#specialties' },
    { label: 'Menu', href: '#menu' },
    { label: 'The Grounds', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <footer className="relative bg-[#302820] text-[#F2EBDD] pt-16 pb-10 overflow-hidden border-t border-[#D8CBB6]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D8CBB6]/20">
          
          {/* Col 1: Wordmark & Summary (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#98543D] text-[#F2EBDD] flex items-center justify-center font-serif text-lg font-bold shadow-xs">
                  N
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-tight text-[#F2EBDD]">
                    NEW HIGHWAY CHEF DHABA
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#D8CBB6] font-semibold">
                    NH-31 · Rangia, Assam
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#D8CBB6] leading-relaxed max-w-sm mb-6">
                Pure flavours. Roadside soul. Fresh thalis, live charcoal tandoor, and genuine hospitality for families and travelers on NH-31.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#211A14] text-[#D8CBB6] hover:bg-[#98543D] hover:text-[#F2EBDD] flex items-center justify-center transition-colors border border-[#D8CBB6]/20"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#211A14] text-[#D8CBB6] hover:bg-[#98543D] hover:text-[#F2EBDD] flex items-center justify-center transition-colors border border-[#D8CBB6]/20"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#211A14] text-[#D8CBB6] hover:bg-[#424735] hover:text-[#F2EBDD] flex items-center justify-center transition-colors border border-[#D8CBB6]/20"
                aria-label="WhatsApp"
              >
                <Share2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold text-[#F2EBDD] mb-4 pb-1 border-b border-[#D8CBB6]/20 inline-block uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8CBB6]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F2EBDD] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-sm font-bold text-[#F2EBDD] mb-4 pb-1 border-b border-[#D8CBB6]/20 inline-block uppercase tracking-wider">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-xs text-[#D8CBB6]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#98543D] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#F2EBDD]">{RESTAURANT_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#98543D] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="hover:text-[#F2EBDD] transition-colors font-semibold"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#98543D] shrink-0 mt-0.5" />
                <p>{RESTAURANT_INFO.closingTime} · Cash Only</p>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#211A14] hover:bg-[#98543D] text-[#D8CBB6] hover:text-[#F2EBDD] text-xs font-semibold uppercase tracking-wider border border-[#D8CBB6]/20 transition-all cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Admin Portal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8CBB6]/70">
          <p>© {new Date().getFullYear()} New Highway Chef Dhaba. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <p>Designed by <strong className="text-[#F2EBDD] font-semibold">TAREX</strong></p>

            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#211A14] hover:bg-[#98543D] text-[#D8CBB6] hover:text-[#F2EBDD] text-xs font-medium border border-[#D8CBB6]/20 transition-all cursor-pointer"
                title="Superbase Admin Portal"
              >
                <Lock className="w-3 h-3 text-[#98543D]" />
                <span>Admin Portal</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
