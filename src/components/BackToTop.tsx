import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface BackToTopProps {
  onOpenOrder: () => void;
}

export const BackToTop: React.FC<BackToTopProps> = ({ onOpenOrder }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Floating WhatsApp Quick Action Button */}
      <button
        onClick={onOpenOrder}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-xs shadow-xl hover:bg-[#20ba5a] transition-all transform hover:scale-105"
        title="Order via WhatsApp"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">Order Online</span>
      </button>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="w-11 h-11 rounded-full bg-[#541E29] text-[#F5E9D5] hover:bg-[#D99035] hover:text-[#34251F] shadow-xl flex items-center justify-center transition-all transform hover:scale-110 border border-[#E7D5BB]"
        aria-label="Scroll back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};
