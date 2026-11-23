import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Wine, Flame, HeartHandshake } from 'lucide-react';

export default function DishModal({ dish, isOpen, onClose, onReserveTable }) {
  if (!dish) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl bg-[#171717] border border-[#C9A46A]/40 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-neutral-300 hover:text-white hover:bg-black/90 transition-colors"
              aria-label="Close Dish Details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Dish Visual */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-black">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent md:hidden" />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#C9A46A]/50 text-[10px] uppercase tracking-widest text-[#E5C992]">
                {dish.category}
              </div>
            </div>

            {/* Right: Dish Gastronomy Details */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs uppercase tracking-widest text-[#C9A46A] font-medium">
                    Signature Creation
                  </span>
                  <span className="font-serif text-2xl font-bold text-white text-gold-gradient">
                    ${dish.price}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-white font-normal mb-3">
                  {dish.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  {dish.description}
                </p>

                {/* Sommelier Pairing */}
                {dish.pairing && (
                  <div className="p-3.5 rounded-xl bg-black/40 border border-[#C9A46A]/20 mb-4 flex items-start gap-3">
                    <Wine className="w-4 h-4 text-[#C9A46A] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#C9A46A] font-semibold">
                        Sommelier Recommended Pairing
                      </div>
                      <div className="text-xs text-neutral-200 font-serif italic mt-0.5">
                        {dish.pairing}
                      </div>
                    </div>
                  </div>
                )}

                {/* Dietary Tags */}
                {dish.dietary && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {dish.dietary.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-[#C9A46A]/10 border border-[#C9A46A]/30 text-[10px] uppercase tracking-wider text-[#E5C992]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#C9A46A]/20 flex items-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    if (onReserveTable) onReserveTable();
                  }}
                  className="flex-1 py-3 rounded-full bg-[#C9A46A] hover:bg-[#DFBF87] text-[#0B0B0B] font-semibold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(201,164,106,0.3)]"
                >
                  Reserve a Table
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-full border border-neutral-700 hover:border-neutral-500 text-neutral-300 text-xs uppercase tracking-wider transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
