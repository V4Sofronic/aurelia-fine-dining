import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}) {
  // Handle keyboard arrow navigation & Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 p-3 rounded-full bg-black/60 text-neutral-300 hover:text-white hover:bg-black/90 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 text-neutral-300 hover:text-[#C9A46A] hover:bg-black/90 transition-colors"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 text-neutral-300 hover:text-[#C9A46A] hover:bg-black/90 transition-colors"
          aria-label="Next Image"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Main Image Showcase */}
        <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative rounded-xl overflow-hidden border border-[#C9A46A]/30 shadow-2xl"
          >
            <img
              src={currentImage.image}
              alt={currentImage.title}
              className="max-h-[75vh] w-auto max-w-full object-contain"
            />
          </motion.div>

          {/* Caption & Counter */}
          <div className="mt-4 text-center">
            <h4 className="font-serif text-lg text-white font-medium">
              {currentImage.title}
            </h4>
            <p className="text-xs text-neutral-400 font-light mt-1 max-w-lg">
              {currentImage.caption}
            </p>
            <div className="text-[10px] text-[#C9A46A] tracking-widest font-mono mt-2 uppercase">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
