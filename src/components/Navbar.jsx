import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Menu as MenuIcon, X, Calendar, Phone } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { RESTAURANT_INFO } from '../data/restaurantData';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Signature', href: '#signature' },
  { name: 'Menu', href: '#menu' },
  { name: 'Offers', href: '#offers' },
  { name: 'Chefs', href: '#chefs' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onReserveClick }) {
  const { scrolled } = useScrollPosition(60);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map(link => document.querySelector(link.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B0B0B]/90 backdrop-blur-md py-3.5 border-b border-[#C9A46A]/20 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full border border-[#C9A46A] flex items-center justify-center bg-[#171717]/80 group-hover:border-[#DFBF87] transition-all duration-300 shadow-[0_0_15px_rgba(201,164,106,0.2)]">
              <span className="font-serif text-[#C9A46A] font-bold text-lg tracking-widest">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-white group-hover:text-[#C9A46A] transition-colors">
                {RESTAURANT_INFO.name}
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#C9A46A]/90 font-light -mt-1">
                Fine Dining
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-xs tracking-widest uppercase transition-all duration-300 py-1 font-medium ${
                    isActive ? 'text-[#C9A46A]' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A46A] to-transparent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onReserveClick}
              className="relative group overflow-hidden px-6 py-2.5 rounded-full border border-[#C9A46A] bg-[#C9A46A]/10 text-white text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:bg-[#C9A46A] hover:text-[#0B0B0B] hover:shadow-[0_0_25px_rgba(201,164,106,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#C9A46A] group-hover:text-[#0B0B0B] transition-colors" />
                Reserve a Table
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#C9A46A] hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B0B0B]/98 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="text-lg tracking-[0.25em] uppercase text-neutral-200 hover:text-[#C9A46A] transition-colors font-serif py-1"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 items-center pt-6 border-t border-[#C9A46A]/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReserveClick();
                }}
                className="w-full max-w-xs py-3.5 rounded-full border border-[#C9A46A] bg-[#C9A46A] text-[#0B0B0B] font-semibold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(201,164,106,0.3)] transition-transform active:scale-95"
              >
                Reserve a Table
              </button>

              <div className="text-center text-xs text-neutral-400 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A46A]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
