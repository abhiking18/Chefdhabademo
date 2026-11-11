import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenOrder: (selectedDish?: string) => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder, cartCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Specialties', href: '#specialties' },
    { label: 'Experience', href: '#experience' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
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
    <header className="sticky top-0 z-50 w-full max-w-[100vw] box-border bg-[#FAF4EC] border-b-[1.5px] border-[#E2D5C4] shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
      <div className="w-full max-w-7xl mx-auto px-4 py-2.5 sm:px-8 sm:py-3.5 box-border">
        <div className="flex items-center justify-between gap-2 sm:gap-4 w-full">
          
          {/* BRAND MARK & LOGO (LEFT SIDE) */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-left min-w-0 shrink"
          >
            {/* Sharper Circular Logo Badge */}
            <div className="w-[42px] h-[42px] rounded-full border-2 border-[#D95326] bg-white p-[2px] shrink-0 flex items-center justify-center overflow-hidden shadow-sm">
              <img
                src="/assets/aistudio/Gemini_Generated_Image_ngrixhngrixhngri_593f6bfe.png"
                alt="New Highway Chef Dhaba Logo"
                className="w-full h-full object-cover scale-[1.15]"
              />
            </div>

            {/* Brand Title & Subtitle */}
            <div className="flex flex-col min-w-0">
              <span
                className="font-extrabold text-[14px] sm:text-[18px] text-[#2A1810] leading-[1.15] tracking-[0.02em] group-hover:text-[#B85038] transition-colors truncate"
                style={{ fontFamily: "'Cinzel', 'Playfair Display', serif" }}
              >
                NEW HIGHWAY CHEF DHABA
              </span>
              <span
                className="text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase text-[#B85038] mt-0.5 leading-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                NH-31 RANGIA, ASSAM
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION LINKS (CENTER) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-semibold text-[#2A1810]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative py-1 transition-colors hover:text-[#B85038] whitespace-nowrap shrink-0 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B85038] rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* RIGHT ACTION BUTTONS & HAMBURGER MENU (RIGHT SIDE) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Phone Link (Desktop XL) */}
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-[#2A1810] hover:text-[#B85038] transition-colors px-3 py-1.5 rounded-full border border-[#E2D5C4] bg-white shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#B85038]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            {/* High-Converting Pill Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenOrder()}
              className="inline-flex items-center gap-1.5 bg-[#C84B31] hover:bg-[#b33e26] text-white font-bold text-[11px] sm:text-xs px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-[0_2px_8px_rgba(200,75,49,0.3)] transition-all cursor-pointer uppercase tracking-wider shrink-0"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-white" />
              <span className="inline sm:hidden">ORDER</span>
              <span className="hidden sm:inline">ORDER ONLINE</span>
              {cartCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#2A1810] text-white text-[9px] font-bold flex items-center justify-center ml-0.5">
                  {cartCount}
                </span>
              )}
            </motion.button>

            {/* Hamburger Menu Tap Button (Mobile & Tablet) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-[38px] h-[38px] rounded-lg border border-[#DFD3C3] bg-white text-[#2A1810] hover:bg-[#FAF4EC] flex items-center justify-center cursor-pointer shadow-sm transition-colors shrink-0 lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#2A1810]" /> : <Menu className="w-5 h-5 text-[#2A1810]" />}
            </button>

          </div>

        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-3 pt-3 border-t border-[#E2D5C4] overflow-hidden"
            >
              <nav className="flex flex-col gap-2 pb-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs font-bold uppercase tracking-wider text-[#2A1810] hover:text-[#B85038] py-2 border-b border-[#E2D5C4]/50 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31]" />
                  </a>
                ))}

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenOrder();
                    }}
                    className="w-full py-2.5 px-4 rounded-full bg-[#C84B31] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-white" />
                    <span>Order Online {cartCount > 0 ? `(${cartCount})` : ''}</span>
                  </button>

                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="w-full py-2 px-4 rounded-full border border-[#E2D5C4] bg-white text-[#2A1810] text-center text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B85038]" />
                    <span>Call {RESTAURANT_INFO.phone}</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};
