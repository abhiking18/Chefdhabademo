import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UtensilsCrossed, ShoppingBag, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenOrder: (selectedDish?: string) => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Specialties', href: '#specialties' },
    { label: 'Menu', href: '#menu' },
    { label: 'The Grounds', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit', href: '#location' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F0E9]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E8C5BE]/50 text-[#633C38]'
          : 'bg-[#633C38]/90 backdrop-blur-md py-4 border-b border-white/10 text-[#F8F0E9]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Brand Wordmark with Uploaded Official Chef Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-left whitespace-nowrap shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-[#FFFDFC] p-1 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-[#E8C5BE]/60 overflow-hidden">
              <img
                src="/assets/aistudio/Gemini_Generated_Image_ngrixhngrixhngri_593f6bfe.png"
                alt="New Highway Chef Dhaba Official Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-base sm:text-lg font-bold tracking-tight transition-colors leading-none ${
                isScrolled ? 'text-[#633C38] group-hover:text-[#C97870]' : 'text-[#F8F0E9] group-hover:text-[#E8C5BE]'
              }`}>
                NEW HIGHWAY CHEF DHABA
              </span>
              <span className="text-[9px] tracking-widest uppercase font-semibold text-[#C97870] mt-1 flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-[#C97870]" />
                <span>NH-31 · Rangia, Assam</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-semibold ${
            isScrolled ? 'text-[#633C38]/85' : 'text-[#F8F0E9]/90'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative py-1 transition-colors group ${
                  isScrolled ? 'hover:text-[#C97870]' : 'hover:text-[#E8C5BE]'
                }`}
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C97870] rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className={`hidden xl:flex items-center gap-2 text-xs font-semibold transition-colors px-3.5 py-2 rounded-full border ${
                isScrolled
                  ? 'text-[#633C38] hover:text-[#C97870] border-[#633C38]/20 hover:border-[#C97870]/40'
                  : 'text-[#F8F0E9] hover:text-[#E8C5BE] border-white/20 hover:border-[#E8C5BE]/40'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C97870]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenOrder()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FFFDFC] bg-[#C97870] hover:bg-[#A65A52] rounded-full shadow-md shadow-[#C97870]/30 transition-all cursor-pointer border border-[#E8C5BE]/40"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#FFFDFC]" />
              <span>Order Online</span>
              {cartCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#633C38] text-[#FFFDFC] text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.button>
          </div>

          {/* Mobile Hamburger & Quick Order */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenOrder()}
              className="p-2 rounded-full bg-[#C97870] text-[#FFFDFC] relative sm:hidden border border-white/20 shadow-md"
              aria-label="Order food"
            >
              <UtensilsCrossed className="w-4 h-4 text-[#FFFDFC]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#633C38] text-[#FFFDFC] text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isScrolled ? 'text-[#633C38] hover:bg-[#E8C5BE]/30' : 'text-[#F8F0E9] hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F8F0E9] text-[#633C38] border-b border-[#E8C5BE]/40 shadow-xl px-6 py-5 overflow-hidden"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs uppercase tracking-widest font-semibold text-[#633C38] hover:text-[#C97870] py-2 border-b border-[#633C38]/10 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C97870]" />
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrder();
                  }}
                  className="w-full py-3 px-4 rounded-full bg-[#C97870] text-[#FFFDFC] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#FFFDFC]" />
                  <span>Order Online {cartCount > 0 ? `(${cartCount})` : ''}</span>
                </button>

                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="w-full py-2.5 px-4 rounded-full border border-[#633C38]/30 text-[#633C38] font-semibold text-center text-xs flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C97870]" />
                  <span>Call {RESTAURANT_INFO.phone}</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
