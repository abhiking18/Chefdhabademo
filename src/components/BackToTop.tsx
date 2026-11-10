import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

interface BackToTopProps {
  onOpenOrder: () => void;
}

export const BackToTop: React.FC<BackToTopProps> = ({ onOpenOrder }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show after scrolling 300px
      setIsVisible(scrollY > 300);

      // Detect if user has reached the bottom footer area (within 350px of bottom)
      // When near footer, lift higher so it NEVER blocks the footer or admin portal
      const nearBottom = scrollY + windowHeight >= documentHeight - 350;
      setIsNearFooter(nearBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    // Moved upwards (bottom-28 by default, bottom-36 when near bottom footer)
    <div
      className={`fixed right-5 sm:right-6 z-40 transition-all duration-300 pointer-events-auto ${
        isNearFooter ? 'bottom-36' : 'bottom-24 sm:bottom-28'
      }`}
    >
      {/* Floating Order Online Button */}
      <button
        onClick={onOpenOrder}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#424735] hover:bg-[#303426] text-[#F2EBDD] font-semibold text-xs sm:text-sm shadow-xl transition-all border border-[#D8CBB6]/30 cursor-pointer"
        title="Order Online"
        aria-label="Order Online"
      >
        <MessageCircle className="w-4 h-4 text-[#D8CBB6]" />
        <span>Order Online</span>
      </button>
    </div>
  );
};
