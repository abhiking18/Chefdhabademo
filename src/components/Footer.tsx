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
    { label: 'Specialties', href: '#specialties' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <footer className="relative bg-[#633C38] text-[#FFFDFC] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E8C5BE]/30">
          
          {/* Col 1: Wordmark & Summary (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FFFDFC] p-1 flex items-center justify-center border border-[#E8C5BE] overflow-hidden">
                  <img
                    src="/assets/aistudio/Gemini_Generated_Image_ngrixhngrixhngri_593f6bfe.png"
                    alt="New Highway Chef Dhaba Official Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold tracking-tight text-[#FFFDFC]">
                    NEW HIGHWAY CHEF DHABA
                  </h3>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#E8C5BE]">
                    NH-31 · Rangia, Assam
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#E8C5BE] leading-relaxed max-w-sm mb-6">
                Taste that lingers. Hospitality that welcomes. Fresh thalis, live charcoal tandoor, and authentic Indian roadside dining for families and travelers.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#FFFDFC]/10 text-[#FFFDFC] hover:bg-[#C97870] flex items-center justify-center transition-colors border border-[#E8C5BE]/20"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#FFFDFC]/10 text-[#FFFDFC] hover:bg-[#C97870] flex items-center justify-center transition-colors border border-[#E8C5BE]/20"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://wa.me/91${RESTAURANT_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#FFFDFC]/10 text-[#FFFDFC] hover:bg-[#25D366] flex items-center justify-center transition-colors border border-[#E8C5BE]/20"
                aria-label="WhatsApp"
              >
                <Share2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-[#FFFDFC] mb-4 pb-1 border-b border-[#E8C5BE]/30 inline-block uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8C5BE]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#FFFDFC] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-[#FFFDFC] mb-4 pb-1 border-b border-[#E8C5BE]/30 inline-block uppercase tracking-wider">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-xs text-[#E8C5BE]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C97870] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#FFFDFC]">{RESTAURANT_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C97870] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="hover:text-[#FFFDFC] transition-colors font-bold text-[#FFFDFC]"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C97870] shrink-0 mt-0.5" />
                <p className="font-semibold">{RESTAURANT_INFO.closingTime} · Cash Only</p>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDFC]/10 hover:bg-[#C97870] text-[#FFFDFC] text-xs font-bold tracking-wider border border-[#E8C5BE]/30 transition-all cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8C5BE]">
          <p>© {new Date().getFullYear()} New Highway Chef Dhaba. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <p>Proprietor: <strong className="text-[#FFFDFC] font-bold">Nayan Jyoti Sarma</strong></p>

            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFDFC]/10 hover:bg-[#C97870] text-[#FFFDFC] text-xs font-bold border border-[#E8C5BE]/30 transition-all cursor-pointer"
                title="Admin Portal"
              >
                <Lock className="w-3 h-3 text-[#FFFDFC]" />
                <span>Admin Portal</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
