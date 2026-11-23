import React, { useState } from 'react';
import { ArrowUp, Mail, CheckCircle2, Instagram, Facebook, Twitter, Phone, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer({ onReserveClick }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070707] border-t border-[#C9A46A]/20 pt-20 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C9A46A] flex items-center justify-center bg-[#171717]">
                <span className="font-serif text-[#C9A46A] font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white">
                  {RESTAURANT_INFO.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C9A46A] font-light -mt-1">
                  Fine Dining
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              An international modern haute-cuisine sanctuary celebrating artisanal gastronomy, rare cellars, and intuitive hospitality.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#171717] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#C9A46A] hover:border-[#C9A46A] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#171717] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#C9A46A] hover:border-[#C9A46A] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#171717] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#C9A46A] hover:border-[#C9A46A] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm text-white tracking-widest uppercase font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#C9A46A] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C9A46A] transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#C9A46A] transition-colors">Signature Dishes</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#C9A46A] transition-colors">Interactive Menu</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-[#C9A46A] transition-colors">Special Offers</a>
              </li>
              <li>
                <a href="#chefs" className="hover:text-[#C9A46A] transition-colors">Meet Our Chefs</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C9A46A] transition-colors">Gallery</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm text-white tracking-widest uppercase font-semibold">
              Reservations & Hours
            </h4>
            <div className="space-y-2 text-xs font-light">
              <p className="text-white font-medium">Tuesday – Saturday</p>
              <p className="text-neutral-400">5:00 PM – 11:30 PM</p>
              <p className="text-white font-medium pt-2">Sunday Brunch & Dinner</p>
              <p className="text-neutral-400">11:30 AM – 10:00 PM</p>
              <p className="text-neutral-500 pt-2 italic">Valet parking available at entrance.</p>
            </div>

            <div className="pt-2">
              <button
                onClick={onReserveClick}
                className="text-xs text-[#C9A46A] uppercase tracking-widest underline hover:text-[#E5C992]"
              >
                Book a Table Now →
              </button>
            </div>
          </div>

          {/* Col 4: Newsletter Subscription (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm text-white tracking-widest uppercase font-semibold">
              The Grand Gazette
            </h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Subscribe to receive exclusive invitations to winemaker dinners, seasonal degustation debuts, and culinary stories.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-black/60 border border-[#C9A46A]/50 flex items-center gap-2 text-xs text-[#C9A46A]">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>You are subscribed to the Grand Gazette.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="w-full bg-[#171717] border border-neutral-800 focus:border-[#C9A46A] rounded-full px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#C9A46A] hover:bg-[#DFBF87] text-[#0B0B0B] font-semibold text-xs uppercase tracking-widest transition-colors shadow-md"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {RESTAURANT_INFO.name} Fine Dining. All rights reserved. Designed for international haute cuisine.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-[#C9A46A] transition-colors group p-2"
            aria-label="Back to Top"
          >
            <span className="uppercase tracking-widest text-[10px]">Back to top</span>
            <div className="w-7 h-7 rounded-full border border-neutral-800 group-hover:border-[#C9A46A] flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
