import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Clock, Check, X, ArrowRight } from 'lucide-react';
import { SPECIAL_OFFERS } from '../data/restaurantData';

export default function SpecialOffers({ onReserveTable }) {
  const [selectedOffer, setSelectedOffer] = useState(null);

  return (
    <section id="offers" className="relative py-28 sm:py-36 bg-[#171717]/60 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-[#C9A46A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A46A] font-semibold">
              Curated Privileges
            </span>
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-6">
            Exclusive Dining Experiences
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Immerse yourself in our premier culinary journeys, designed for romantic evenings, celebrations, and tasting enthusiasts.
          </p>
        </div>

        {/* 3 Offer Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SPECIAL_OFFERS.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              className="rounded-2xl bg-[#0B0B0B] border border-[#C9A46A]/20 hover:border-[#C9A46A]/60 overflow-hidden shadow-2xl flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(201,164,106,0.12)]"
            >
              {/* Image & Badge */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-90" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#C9A46A] text-[#0B0B0B] text-[10px] font-bold uppercase tracking-wider shadow-lg">
                    {offer.tag}
                  </span>
                </div>
              </div>

              {/* Offer Info */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-[#C9A46A] uppercase tracking-widest block mb-2 font-medium">
                    {offer.subtitle}
                  </span>

                  <h3 className="font-serif text-2xl text-white font-normal mb-3 group-hover:text-[#E5C992] transition-colors">
                    {offer.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                    {offer.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {offer.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#C9A46A] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-5 border-t border-[#C9A46A]/15">
                  <div className="text-xs text-neutral-300 font-medium mb-4">
                    {offer.pricing}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedOffer(offer)}
                      className="flex-1 py-3 rounded-full border border-[#C9A46A] text-[#C9A46A] hover:bg-[#C9A46A] hover:text-[#0B0B0B] font-medium text-xs uppercase tracking-widest transition-all duration-300 text-center"
                    >
                      Explore Offer
                    </button>

                    <button
                      onClick={onReserveTable}
                      className="p-3 rounded-full bg-[#171717] hover:bg-[#C9A46A] text-neutral-300 hover:text-[#0B0B0B] border border-neutral-700 transition-colors"
                      title="Reserve This Experience"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Offer Details Modal */}
      <AnimatePresence>
        {selectedOffer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOffer(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-[#171717] border border-[#C9A46A]/40 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedOffer(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="px-3 py-1 rounded-full bg-[#C9A46A]/10 border border-[#C9A46A]/40 text-[#C9A46A] text-[10px] uppercase tracking-widest inline-block mb-3">
                {selectedOffer.tag}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2 font-normal">
                {selectedOffer.title}
              </h3>
              <p className="text-xs text-[#C9A46A] font-serif italic mb-4">
                {selectedOffer.subtitle}
              </p>

              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                {selectedOffer.description}
              </p>

              <div className="p-4 rounded-xl bg-black/50 border border-neutral-800 space-y-2 mb-6">
                <div className="text-xs text-[#C9A46A] font-medium">Terms & Inclusions:</div>
                <div className="text-xs text-neutral-400 leading-relaxed">
                  {selectedOffer.validity}
                </div>
                <div className="text-xs text-neutral-200 font-semibold pt-1">
                  Investment: {selectedOffer.pricing}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedOffer(null);
                    onReserveTable();
                  }}
                  className="flex-1 py-3.5 rounded-full bg-[#C9A46A] hover:bg-[#DFBF87] text-[#0B0B0B] font-semibold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(201,164,106,0.3)]"
                >
                  Reserve Experience Now
                </button>
                <button
                  onClick={() => setSelectedOffer(null)}
                  className="px-6 py-3.5 rounded-full border border-neutral-700 hover:border-neutral-500 text-neutral-300 text-xs uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
