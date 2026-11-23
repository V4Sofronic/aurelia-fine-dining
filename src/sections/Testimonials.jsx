import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto advance every 6 seconds unless hovered/paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIdx];

  return (
    <section
      id="testimonials"
      className="relative py-28 sm:py-36 bg-[#0B0B0B] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Gold Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C9A46A]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A46A] font-semibold">
              Guest Reflections
            </span>
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-4">
            Words from Our Guests
          </h2>

          <p className="text-xs text-neutral-500 uppercase tracking-widest font-mono">
            Sample Critical Accolades & Guest Impressions
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative min-h-[340px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-3xl p-8 sm:p-12 rounded-3xl bg-[#171717]/80 border border-[#C9A46A]/30 backdrop-blur-md shadow-2xl relative"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-full bg-[#C9A46A]/10 border border-[#C9A46A]/30 flex items-center justify-center mx-auto mb-6 text-[#C9A46A]">
                <Quote className="w-5 h-5" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1.5 mb-6 text-[#C9A46A]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A46A]" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="font-serif text-lg sm:text-2xl text-white font-normal italic leading-relaxed mb-8">
                "{current.quote}"
              </p>

              {/* Author Initials & Details */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#C9A46A] bg-[#0B0B0B] flex items-center justify-center text-sm font-bold text-[#E5C992] shadow-md">
                  {current.avatar}
                </div>
                <div className="text-left">
                  <h4 className="font-serif text-base text-white font-semibold">
                    {current.name}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light">
                    {current.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-[#C9A46A]/30 text-neutral-300 hover:text-white hover:border-[#C9A46A] hover:bg-black/90 transition-all focus:outline-none"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 border border-[#C9A46A]/30 text-neutral-300 hover:text-white hover:border-[#C9A46A] hover:bg-black/90 transition-all focus:outline-none"
            aria-label="Next Review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === currentIdx
                  ? 'w-8 bg-[#C9A46A]'
                  : 'w-2 bg-neutral-700 hover:bg-neutral-500'
              }`}
              aria-label={`Jump to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
