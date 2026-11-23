import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Leaf, Eye, X, Filter } from 'lucide-react';
import { MENU_CATEGORIES, FULL_MENU_ITEMS } from '../data/restaurantData';
import DishModal from '../components/DishModal';

export default function Menu({ onReserveTable }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState(null);
  const [vegetarianOnly, setVegetarianOnly] = useState(false);

  // Filtered menu items calculation
  const filteredItems = useMemo(() => {
    return FULL_MENU_ITEMS.filter((item) => {
      // Category Match
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;

      // Search Query Match (name or description)
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Vegetarian Filter
      const matchesVeg = !vegetarianOnly || item.isVegetarian;

      return matchesCategory && matchesSearch && matchesVeg;
    });
  }, [activeCategory, searchQuery, vegetarianOnly]);

  return (
    <section id="menu" className="relative py-28 sm:py-36 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A46A] font-semibold">
              Gastronomic Selection
            </span>
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-6">
            The Interactive Dining Menu
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Explore our curated culinary creations, filtered by course or searched by ingredients. Prepared fresh for every sitting.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#171717]/80 border border-[#C9A46A]/20 p-4 sm:p-6 rounded-2xl backdrop-blur-md shadow-xl">
          
          {/* Categories Tab Pill Bar */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-[#C9A46A] text-[#0B0B0B] font-semibold shadow-[0_0_15px_rgba(201,164,106,0.3)]'
                      : 'bg-black/40 text-neutral-400 hover:text-white hover:bg-black/80 border border-neutral-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input & Vegetarian Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes or flavors..."
                className="w-full bg-black/60 border border-neutral-700 focus:border-[#C9A46A] rounded-full pl-10 pr-9 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Vegetarian Toggle Button */}
            <button
              onClick={() => setVegetarianOnly(!vegetarianOnly)}
              className={`p-2 sm:px-3 sm:py-2 rounded-full border text-xs flex items-center gap-1.5 transition-all ${
                vegetarianOnly
                  ? 'border-emerald-500 bg-emerald-950/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                  : 'border-neutral-700 bg-black/40 text-neutral-400 hover:text-white'
              }`}
              title="Filter Vegetarian options"
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline text-[11px] uppercase tracking-wider">
                {vegetarianOnly ? 'Veg Only' : 'All Diets'}
              </span>
            </button>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-[#171717]/40 rounded-2xl border border-dashed border-neutral-800">
            <Filter className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
            <h3 className="font-serif text-lg text-neutral-300 mb-1">No dishes found</h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-4">
              We couldn't find any dishes matching "{searchQuery}" in {activeCategory}.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
                setVegetarianOnly(false);
              }}
              className="text-xs text-[#C9A46A] underline uppercase tracking-widest hover:text-[#E5C992]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="rounded-xl bg-[#171717] border border-neutral-800 hover:border-[#C9A46A]/50 transition-all duration-300 overflow-hidden group flex flex-col justify-between hover:shadow-xl"
                >
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-black">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-80" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-[#C9A46A]/30 text-[9px] uppercase tracking-wider text-[#E5C992]">
                        {item.category}
                      </span>
                      {item.isVegetarian && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[9px] flex items-center gap-1 font-medium">
                          <Leaf className="w-2.5 h-2.5" />
                          Veg
                        </span>
                      )}
                      {item.isPopular && (
                        <span className="px-2 py-0.5 rounded-full bg-[#C9A46A] text-[#0B0B0B] text-[9px] font-bold uppercase tracking-wider flex items-center gap-0.5">
                          <Sparkles className="w-2 h-2" />
                          Top
                        </span>
                      )}
                    </div>

                    {/* Calories Tag */}
                    {item.calories && (
                      <div className="absolute bottom-2.5 left-3 text-[10px] text-neutral-400 font-mono">
                        {item.calories}
                      </div>
                    )}

                    {/* Price */}
                    <div className="absolute bottom-2.5 right-3 font-serif text-xl font-bold text-white text-gold-gradient">
                      ${item.price}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg text-white font-medium mb-2 group-hover:text-[#E5C992] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-2 mb-4">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedDish(item)}
                        className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#C9A46A] hover:text-white transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Dish Details</span>
                      </button>

                      <button
                        onClick={onReserveTable}
                        className="text-[10px] uppercase tracking-widest text-neutral-400 hover:text-[#C9A46A] transition-colors"
                      >
                        Order at Table →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Dish Modal */}
      <DishModal
        dish={selectedDish}
        isOpen={!!selectedDish}
        onClose={() => setSelectedDish(null)}
        onReserveTable={onReserveTable}
      />
    </section>
  );
}
