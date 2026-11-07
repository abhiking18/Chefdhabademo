import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UtensilsCrossed, ChevronRight } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5E9D5]/95 backdrop-blur-md shadow-md py-3 border-b border-[#E7D5BB]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Brand Title (Zone 1 - Strict Top Bar Contract) */}
            <a
              href="#hero"
              className="group flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#541E29] rounded"
            >
              <div className="w-9 h-9 rounded-full bg-[#541E29] text-[#F5E9D5] flex items-center justify-center font-serif text-lg font-bold shadow-sm transition-transform duration-300 group-hover:scale-105">
                N
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#541E29] group-hover:text-[#D99035] transition-colors leading-none">
                  NEW HIGHWAY CHEF DHABA
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C4A38] mt-0.5">
                  Rangia · Assam
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Zone 2) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#34251F]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#541E29] font-medium transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D99035] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Primary Action Button (Zone 3) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-[#541E29] hover:text-[#D99035] transition-colors px-3 py-2 rounded-full border border-[#541E29]/20 hover:border-[#D99035]"
                title="Call Restaurant Directly"
              >
                <Phone className="w-3.5 h-3.5 text-[#D99035]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>

              <button
                onClick={() => onOpenOrder()}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#F5E9D5] bg-[#541E29] hover:bg-[#3E161E] rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#D99035]" />
                <span>Order Now</span>
                {cartCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#D99035] text-[#34251F] text-xs font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenOrder()}
                className="p-2 rounded-full bg-[#541E29] text-[#F5E9D5] shadow-sm relative sm:hidden"
                aria-label="Order food"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#D99035]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#D99035] text-[#34251F] text-[10px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#541E29] hover:bg-[#E7D5BB]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#541E29]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F5E9D5] border-b border-[#E7D5BB] shadow-xl px-5 py-6 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between text-base font-medium text-[#34251F] hover:text-[#541E29] py-2 border-b border-[#E7D5BB]/50"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#D99035]" />
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrder();
                  }}
                  className="w-full py-3 px-4 rounded-full bg-[#541E29] text-[#F5E9D5] font-semibold flex items-center justify-center gap-2 shadow hover:bg-[#3E161E] transition-colors"
                >
                  <UtensilsCrossed className="w-4 h-4 text-[#D99035]" />
                  <span>Order Now {cartCount > 0 ? `(${cartCount} items)` : ''}</span>
                </button>

                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="w-full py-2.5 px-4 rounded-full border border-[#541E29] text-[#541E29] font-medium text-center text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#D99035]" />
                  <span>Call {RESTAURANT_INFO.phone}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
