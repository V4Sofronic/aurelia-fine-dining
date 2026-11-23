import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles } from 'lucide-react';
import { CHEFS } from '../data/restaurantData';

export default function Chefs() {
  return (
    <section id="chefs" className="relative py-28 sm:py-36 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A46A] font-semibold">
              The Culinary Visionaries
            </span>
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-6">
            Meet Our Master Chefs
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            The beating heart of AURELIA. Driven by an uncompromising standard of perfection, each brings distinct artistry, passion, and global mastery to our pass.
          </p>
        </div>

        {/* 3 Chef Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHEFS.map((chef, idx) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="group rounded-2xl bg-[#171717] border border-[#C9A46A]/20 hover:border-[#C9A46A]/60 overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(201,164,106,0.15)] flex flex-col justify-between"
            >
              {/* Chef Portrait Image */}
              <div className="relative h-80 w-full overflow-hidden bg-black">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-85" />

                {/* Golden Subtle Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A46A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Chef Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#C9A46A] font-medium mb-1">
                    {chef.position}
                  </div>

                  <h3 className="font-serif text-2xl text-white font-normal mb-4 group-hover:text-[#E5C992] transition-colors">
                    {chef.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                    {chef.bio}
                  </p>
                </div>

                {/* Accolades / Awards Badges */}
                <div className="pt-4 border-t border-[#C9A46A]/15 space-y-2">
                  {chef.awards.map((award) => (
                    <div key={award} className="flex items-center gap-2 text-xs text-neutral-300">
                      <Award className="w-3.5 h-3.5 text-[#C9A46A] flex-shrink-0" />
                      <span className="font-light">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
