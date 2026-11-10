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
      setIsScrolled(window.scrollY > 30);
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
            ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-sm py-2.5 border-b border-[#E5D9C8]'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Brand Title */}
            <a
              href="#hero"
              className="group flex items-center gap-2.5 text-left whitespace-nowrap shrink-0"
            >
              <div className="w-8 h-8 rounded-full bg-[#4F1824] text-[#FAF6F0] flex items-center justify-center font-serif text-base font-bold shadow-xs">
                N
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#4F1824] group-hover:text-[#C9822C] transition-colors leading-none">
                  NEW HIGHWAY CHEF DHABA
                </span>
                <span className="text-[9px] tracking-widest uppercase font-semibold text-[#8C4A38] mt-0.5">
                  Rangia · Assam
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#241814]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="py-1 hover:text-[#4F1824] font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-[#4F1824] hover:text-[#C9822C] transition-colors px-3 py-1.5 rounded-full border border-[#4F1824]/20"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9822C]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>

              <button
                onClick={() => onOpenOrder()}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#FAF6F0] bg-[#4F1824] hover:bg-[#381119] rounded-full shadow-sm transition-all cursor-pointer"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#C9822C]" />
                <span>Order Now</span>
                {cartCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-[#C9822C] text-[#241814] text-[10px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenOrder()}
                className="p-1.5 rounded-full bg-[#4F1824] text-[#FAF6F0] relative sm:hidden"
                aria-label="Order food"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#C9822C]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#C9822C] text-[#241814] text-[9px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg text-[#4F1824] hover:bg-[#F3ECE1] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF6F0] border-b border-[#E5D9C8] shadow-lg px-5 py-5 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between text-sm font-medium text-[#241814] hover:text-[#4F1824] py-1.5 border-b border-[#E5D9C8]/40"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#C9822C]" />
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrder();
                  }}
                  className="w-full py-2.5 px-4 rounded-full bg-[#4F1824] text-[#FAF6F0] text-xs font-semibold flex items-center justify-center gap-2 shadow"
                >
                  <UtensilsCrossed className="w-3.5 h-3.5 text-[#C9822C]" />
                  <span>Order Now {cartCount > 0 ? `(${cartCount})` : ''}</span>
                </button>

                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="w-full py-2 px-4 rounded-full border border-[#4F1824]/30 text-[#4F1824] font-medium text-center text-xs flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C9822C]" />
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
