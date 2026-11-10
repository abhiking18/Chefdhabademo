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
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <footer className="relative bg-[#4F1824] text-[#FAF6F0] pt-12 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#C9822C]/20">
          
          {/* Col 1: Wordmark & Summary (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#C9822C] text-[#241814] flex items-center justify-center font-serif text-lg font-bold shadow-sm">
                  N
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-tight text-[#FAF6F0]">
                    NEW HIGHWAY CHEF DHABA
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#C9822C] font-semibold">
                    Rangia · Assam · India
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#E5D9C8] leading-relaxed max-w-sm mb-4">
                Good Food. The Dhaba Way. Fresh thalis, live charcoal tandoor, and authentic Indian roadside hospitality on NH-31.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#381119] text-[#FAF6F0] hover:bg-[#C9822C] hover:text-[#241814] flex items-center justify-center transition-colors border border-[#C9822C]/30"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#381119] text-[#FAF6F0] hover:bg-[#C9822C] hover:text-[#241814] flex items-center justify-center transition-colors border border-[#C9822C]/30"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#381119] text-[#FAF6F0] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors border border-[#C9822C]/30"
                aria-label="WhatsApp"
              >
                <Share2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold text-[#FAF6F0] mb-3 pb-1 border-b border-[#C9822C]/20 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#E5D9C8]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#C9822C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-sm font-bold text-[#FAF6F0] mb-3 pb-1 border-b border-[#C9822C]/20 inline-block">
              Contact & Location
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#E5D9C8]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9822C] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#FAF6F0]">{RESTAURANT_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9822C] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="hover:text-[#C9822C] transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C9822C] shrink-0 mt-0.5" />
                <p>{RESTAURANT_INFO.closingTime} · Cash Only</p>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#381119] hover:bg-[#C9822C] hover:text-[#241814] text-[#FAF6F0] text-xs font-semibold border border-[#C9822C]/30 transition-all cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Admin Portal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#E5D9C8]/70">
          <p>© {new Date().getFullYear()} New Highway Chef Dhaba. All rights reserved.</p>
          
          <div className="flex items-center gap-3">
            <p>Designed by <strong className="text-[#C9822C] font-semibold">TAREX</strong></p>

            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#381119] hover:bg-[#C9822C] text-[#FAF6F0] hover:text-[#241814] text-xs font-medium border border-[#C9822C]/30 transition-all cursor-pointer ml-1"
                title="Admin Portal"
              >
                <Lock className="w-3 h-3 text-[#C9822C]" />
                <span>Admin</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
