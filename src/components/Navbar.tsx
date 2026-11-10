import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenOrder: (selectedDish?: string) => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
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
          ? 'bg-[#F2EBDD]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#D8CBB6]'
          : 'bg-[#F2EBDD]/80 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Brand Wordmark */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-left whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 rounded-full bg-[#302820] text-[#F2EBDD] flex items-center justify-center font-serif text-sm font-bold shadow-xs">
              N
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#302820] group-hover:text-[#98543D] transition-colors leading-none">
                NEW HIGHWAY CHEF DHABA
              </span>
              <span className="text-[9px] tracking-widest uppercase font-semibold text-[#98543D] mt-1">
                NH-31 · Rangia, Assam
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-semibold text-[#302820]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-1 hover:text-[#98543D] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-[#302820] hover:text-[#98543D] transition-colors px-3 py-1.5 rounded-full border border-[#D8CBB6]"
            >
              <Phone className="w-3.5 h-3.5 text-[#98543D]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenOrder()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F2EBDD] bg-[#98543D] hover:bg-[#7C422F] rounded-full shadow-xs transition-all cursor-pointer"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>Order Online</span>
              {cartCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#F2EBDD] text-[#302820] text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Hamburger & Quick Order */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenOrder()}
              className="p-2 rounded-full bg-[#98543D] text-[#F2EBDD] relative sm:hidden"
              aria-label="Order food"
            >
              <UtensilsCrossed className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#302820] text-[#F2EBDD] text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#302820] hover:bg-[#D8CBB6]/50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F2EBDD] border-b border-[#D8CBB6] shadow-md px-5 py-5 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-widest font-semibold text-[#302820] hover:text-[#98543D] py-1.5 border-b border-[#D8CBB6]/60"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full py-2.5 px-4 rounded-full bg-[#98543D] text-[#F2EBDD] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Order Online {cartCount > 0 ? `(${cartCount})` : ''}</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full py-2 px-4 rounded-full border border-[#302820]/30 text-[#302820] font-semibold text-center text-xs flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#98543D]" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
