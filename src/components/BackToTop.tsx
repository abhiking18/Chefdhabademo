import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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

      // Show after scrolling 250px
      setIsVisible(scrollY > 250);

      // Detect if user has reached bottom footer area so it never blocks footer or admin portal
      const nearBottom = scrollY + windowHeight >= documentHeight - 350;
      setIsNearFooter(nearBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className={`fixed right-5 sm:right-6 z-40 transition-all duration-300 pointer-events-auto ${
            isNearFooter ? 'bottom-36' : 'bottom-20 sm:bottom-24'
          }`}
        >
          {/* Floating Order Online Button with Curvy Shape & Soft Brick Red */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenOrder}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#C97870] text-[#F8F0E9] font-bold text-xs sm:text-sm shadow-2xl hover:bg-[#B5675F] transition-all border border-[#F8F0E9]/20 cursor-pointer"
            title="Order Online"
            aria-label="Order Online"
          >
            <ShoppingBag className="w-4 h-4 text-[#F8F0E9]" />
            <span>Order Online</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
