import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, UtensilsCrossed, Users, Award, CheckCircle2, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function About({ onDiscoverStory }) {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  const HIGHLIGHTS = [
    {
      title: 'Fresh Ingredients',
      desc: 'Hand-selected daily from sustainable biodynamic estates and artisan purveyors.',
      icon: UtensilsCrossed
    },
    {
      title: 'Expert Chefs',
      desc: 'Masterfully orchestrated by Michelin-pedigreed chefs dedicated to sensory innovation.',
      icon: Award
    },
    {
      title: 'Exceptional Hospitality',
      desc: 'Intuitive, bespoke service tailored to anticipate every nuance of your gathering.',
      icon: Users
    }
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#0B0B0B] overflow-hidden">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#C9A46A] to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#C9A46A] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story / Photorealistic Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Primary Main Framed Image */}
            <div className="relative rounded-2xl overflow-hidden border border-[#C9A46A]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
              <img
                src="/images/about-interior.jpg"
                alt="Aurelia Fine Dining Salon Interior"
                className="w-full h-[450px] sm:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Luxury Detail Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#171717]/95 backdrop-blur-xl border border-[#C9A46A]/40 p-6 rounded-xl shadow-2xl max-w-xs hidden sm:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="font-serif text-3xl font-bold text-gold-gradient">Est. 2018</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                Six years of culinary excellence, world-class vintage cellars, and Michelin recognition.
              </p>
            </motion.div>

            {/* Delicate Accent Border */}
            <div className="absolute -inset-4 border border-[#C9A46A]/20 rounded-3xl -z-10 hidden sm:block pointer-events-none transform -rotate-1" />
          </motion.div>

          {/* Right Column: Editorial Narrative & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-[#C9A46A]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A46A] font-semibold">
                Our Heritage & Philosophy
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-[1.2] mb-6">
              More Than Just a Restaurant
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
              At {RESTAURANT_INFO.name}, dining is elevated into an unforgettable sensory journey. Born from a profound reverence for gastronomic artistry, our kitchen brings together centuries-old European culinary technique with modern global inspiration.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-10 font-light">
              We believe a truly great meal engages every sense: the warmth of flickering candlelight, the tactile grace of handcrafted ceramics, the aroma of white truffles shaved tableside, and the lingering finish of an extraordinary vintage.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {HIGHLIGHTS.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                    className="p-4 rounded-xl bg-[#171717]/60 border border-[#C9A46A]/15 hover:border-[#C9A46A]/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#C9A46A]/10 border border-[#C9A46A]/30 flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-[#C9A46A]" />
                    </div>
                    <h3 className="font-serif text-base text-white font-medium mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div>
              <button
                onClick={() => setIsStoryModalOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#C9A46A] bg-transparent text-[#C9A46A] font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#C9A46A] hover:text-[#0B0B0B] transition-all duration-300 shadow-[0_0_20px_rgba(201,164,106,0.15)] group"
              >
                <span>Discover Our Story</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Discover Our Story Interactive Modal */}
      <AnimatePresence>
        {isStoryModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsStoryModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#171717] border border-[#C9A46A]/40 rounded-2xl p-6 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsStoryModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#C9A46A]" />
                <span className="text-xs uppercase tracking-widest text-[#C9A46A]">The AURELIA Chronicle</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-6">
                Culinary Passion Engineered with Elegance
              </h3>

              <div className="space-y-4 text-sm text-neutral-300 font-light leading-relaxed mb-8">
                <p>
                  Founded in 2018 in the heart of Manhattan’s historic Park Avenue corridor, AURELIA was envisioned as a sanctuary where gastronomy meets fine art. We set out to discard the stiff pretension of classic dining while preserving the rigorous craft, rare vintages, and bespoke hospitality that turn an evening into a cherished memory.
                </p>
                <p>
                  Every morning, our culinary team inspects line-caught fish flown in from Tokyo’s Toyosu Market and Maine’s cold Atlantic harbors, coupled with heritage vegetables harvested at daybreak by upstate organic farming partners.
                </p>
                <p>
                  Our sommelier cellar curates more than 2,400 labels, featuring timeless Bordeaux First Growths alongside pioneering natural winemakers from the rolling hills of Tuscany and the volcanic soils of Mount Etna.
                </p>
              </div>

              <div className="border-t border-[#C9A46A]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#C9A46A]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Ranked among NYC's Premier Fine Dining Establishments</span>
                </div>
                <button
                  onClick={() => setIsStoryModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#C9A46A] text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
