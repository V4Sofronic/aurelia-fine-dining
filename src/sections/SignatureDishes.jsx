import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/restaurantData';
import DishModal from '../components/DishModal';

export default function SignatureDishes({ onReserveTable }) {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <section id="signature" className="relative py-28 sm:py-36 bg-[#171717]/40">
      {/* Decorative Golden Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A46A]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A46A] font-semibold">
              Culinary Highlights
            </span>
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-white mb-6"
          >
            Our Signature Creations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed"
          >
            Each signature offering is a harmonious symphony of rare provenance, artisanal precision, and breathtaking visual presentation.
          </motion.p>
        </div>

        {/* 6 Signature Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGNATURE_DISHES.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl bg-[#171717] border border-[#C9A46A]/20 hover:border-[#C9A46A]/60 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(201,164,106,0.15)] flex flex-col justify-between"
            >
              {/* Card Image Container with Hover Zoom */}
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-80" />

                {/* Category & Popular Badges */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#C9A46A]/40 text-[10px] uppercase tracking-widest text-[#E5C992]">
                    {dish.category}
                  </span>
                  {dish.isPopular && (
                    <span className="px-2.5 py-1 rounded-full bg-[#C9A46A] text-[#0B0B0B] text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-md">
                      <Sparkles className="w-2.5 h-2.5" />
                      Popular
                    </span>
                  )}
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 z-10">
                  <div className="font-serif text-2xl font-bold text-white drop-shadow-lg text-gold-gradient">
                    ${dish.price}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-3 group-hover:text-[#E5C992] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed line-clamp-2 mb-6">
                    {dish.description}
                  </p>
                </div>

                {/* View Details Button */}
                <div className="pt-4 border-t border-[#C9A46A]/15 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500 uppercase tracking-widest font-mono">
                    Aurelia Haute Cuisine
                  </span>
                  
                  <button
                    onClick={() => setSelectedDish(dish)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#C9A46A] hover:text-white transition-colors group/btn py-1"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Subtle Bottom Gold Border Shine */}
              <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#C9A46A] to-transparent transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dish Details Modal */}
      <DishModal
        dish={selectedDish}
        isOpen={!!selectedDish}
        onClose={() => setSelectedDish(null)}
        onReserveTable={onReserveTable}
      />
    </section>
  );
}
