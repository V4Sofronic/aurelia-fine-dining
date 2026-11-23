import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import Lightbox from '../components/Lightbox';

const GALLERY_CATEGORIES = ['All', 'Interior', 'Cuisine', 'Artistry'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const openLightbox = (idx) => {
    setCurrentIdx(idx);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="relative py-28 sm:py-36 bg-[#171717]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A46A] font-semibold">
              Visual Impressions
            </span>
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-6">
            The Restaurant Gallery
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Glimpse into the world of AURELIA — from intimate candlelit salon corners to fiery kitchen passes and meticulous plated sculptures.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 font-medium ${
                  activeCategory === cat
                    ? 'bg-[#C9A46A] text-[#0B0B0B] font-semibold shadow-[0_0_15px_rgba(201,164,106,0.3)]'
                    : 'bg-black/40 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry-style Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-black border border-neutral-800 hover:border-[#C9A46A]/60 transition-all duration-500 shadow-xl ${
                  idx === 0 || idx === 5 ? 'sm:col-span-2 h-80 sm:h-96' : 'h-80'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-40 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Hover Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-end">
                    <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-[#C9A46A]/50 flex items-center justify-center text-[#C9A46A] shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C9A46A] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-white font-normal mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-light line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={filteredItems}
        currentIndex={currentIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
