import React from 'react';
import {
  X,
  Phone,
  MessageCircle,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Info
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { logCustomerOrder } from '../services/supabaseService';
import { motion } from 'motion/react';
import { DietaryIcon } from './DietaryIcon';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Build WhatsApp prefilled message
  let whatsappMessage = RESTAURANT_INFO.whatsappPrefilledMessage;
  if (cart.length > 0) {
    const itemsList = cart
      .map((item) => `• ${item.name} x${item.quantity} (₹${item.price * item.quantity})`)
      .join('\n');
    whatsappMessage = `Hello New Highway Chef Dhaba, I would like to place an order for:\n\n${itemsList}\n\nEstimated Total: ₹${totalAmount}\n\nPlease confirm availability and preparation time. Thank you!`;
  }

  const whatsappUrl = `https://wa.me/91${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-[#633C38]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#FFFDFC] rounded-3xl overflow-hidden border border-[#E8C5BE] shadow-2xl flex flex-col max-h-[90vh] text-[#633C38]"
      >
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#F8F0E9] text-[#633C38] flex items-center justify-between border-b border-[#E8C5BE]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C97870] text-[#FFFDFC] flex items-center justify-center font-bold shadow-md">
              <ShoppingBag className="w-5 h-5 text-[#FFFDFC]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">Your Dhaba Order</h3>
              <p className="text-xs text-[#8C5752]">Direct WhatsApp & Highway Kitchen Order</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#E8C5BE]/40 text-[#8C5752] hover:text-[#633C38] transition-colors cursor-pointer"
            aria-label="Close order dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Information Notice */}
          <div className="p-4 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE] flex items-start gap-3 text-xs text-[#8C5752]">
            <Info className="w-4 h-4 text-[#C97870] shrink-0 mt-0.5" />
            <span>
              All dishes are cooked fresh to order on live clay tandoors and cast-iron tawas. Send your selection directly to the kitchen on WhatsApp or call for immediate takeaway or table preparation.
            </span>
          </div>

          {/* Selected Dishes Tray */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-base font-bold text-[#633C38]">
                Selected Items ({cart.reduce((a, b) => a + b.quantity, 0)})
              </h4>
              {cart.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-[#C97870] hover:underline font-bold cursor-pointer"
                >
                  Clear all
                </button>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-8 px-4 bg-[#F8F0E9] rounded-2xl border border-dashed border-[#E8C5BE]">
                <p className="text-sm text-[#633C38] font-bold">
                  Your cart is empty
                </p>
                <p className="text-xs text-[#8C5752] mt-1">
                  Explore our menu and click "+ Add", or order directly on WhatsApp below.
                </p>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F8F0E9] border border-[#E8C5BE] text-sm"
                  >
                    <div className="flex-1 min-w-0 pr-3">
                      <div className="flex items-center gap-2">
                        <DietaryIcon
                          isVeg={
                            !item.name.toLowerCase().includes('chicken') &&
                            !item.name.toLowerCase().includes('duck') &&
                            !item.name.toLowerCase().includes('fish') &&
                            !item.name.toLowerCase().includes('mutton') &&
                            !item.name.toLowerCase().includes('egg') &&
                            !item.name.toLowerCase().includes('prawn')
                          }
                          className="w-3.5 h-3.5"
                        />
                        <p className="font-bold text-[#633C38] truncate">{item.name}</p>
                      </div>
                      <p className="text-xs text-[#C97870] font-bold mt-0.5">₹{item.price} each</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 bg-[#FFFDFC] rounded-full p-1 border border-[#E8C5BE]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-full bg-[#E8C5BE] flex items-center justify-center text-[#633C38] hover:bg-[#C97870] hover:text-[#FFFDFC] transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold text-[#633C38]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full bg-[#E8C5BE] flex items-center justify-center text-[#633C38] hover:bg-[#C97870] hover:text-[#FFFDFC] transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-[#8C5752] hover:text-[#C97870] transition-colors cursor-pointer"
                        title="Remove dish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Subtotal */}
                <div className="flex items-center justify-between pt-3 px-2 text-base font-bold text-[#633C38]">
                  <span>Estimated Total</span>
                  <span className="text-[#C97870] text-xl font-bold">₹{totalAmount}</span>
                </div>
              </div>
            )}
          </div>

          {/* Action Order Buttons */}
          <div className="space-y-3 pt-2">
            
            {/* WhatsApp Order Button */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (cart.length > 0) {
                  logCustomerOrder({
                    id: `ord-${Date.now()}`,
                    customerName: 'Website Visitor',
                    phone: 'WhatsApp Order',
                    items: cart,
                    totalAmount,
                  });
                }
              }}
              className="w-full py-3.5 px-6 rounded-full bg-[#C97870] hover:bg-[#b5655d] text-[#FFFDFC] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>
                {cart.length > 0 ? 'Send Order on WhatsApp' : 'Order via WhatsApp'}
              </span>
            </motion.a>

            {/* Direct Call to Order Button */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full py-3.5 px-6 rounded-full bg-[#FFFDFC] hover:bg-[#F8F0E9] text-[#633C38] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 border border-[#E8C5BE] transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#C97870]" />
              <span>Call to Order: {RESTAURANT_INFO.phone}</span>
            </motion.a>

          </div>

          {/* Payment and Hours Reminder */}
          <div className="text-center text-xs text-[#8C5752]">
            <p>Cash Only at counter · Open Daily till 11:30 PM</p>
            <p className="mt-0.5 text-[11px] text-[#8C5752]/70">NH-31 Rangia, Assam 781354</p>
          </div>

        </div>

      </motion.div>

    </div>
  );
};
