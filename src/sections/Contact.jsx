import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A46A] font-semibold">
              Inquiries & Location
            </span>
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-6">
            Connect With Our Concierge
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Whether inquiring about private dining buyouts, press inquiries, or special culinary requests, our concierge team is at your disposal.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Details, Hours & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Details Card */}
            <div className="p-8 rounded-2xl bg-[#171717] border border-[#C9A46A]/20 shadow-xl space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C9A46A]/10 border border-[#C9A46A]/30 flex items-center justify-center flex-shrink-0 text-[#C9A46A]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-white font-medium mb-1">
                    Location
                  </h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {RESTAURANT_INFO.address.street}<br />
                    {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state} {RESTAURANT_INFO.address.zip}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C9A46A]/10 border border-[#C9A46A]/30 flex items-center justify-center flex-shrink-0 text-[#C9A46A]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-white font-medium mb-1">
                    Direct Line
                  </h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    Main: {RESTAURANT_INFO.phone}<br />
                    Concierge: {RESTAURANT_INFO.reservationsPhone}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C9A46A]/10 border border-[#C9A46A]/30 flex items-center justify-center flex-shrink-0 text-[#C9A46A]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-white font-medium mb-1">
                    Electronic Mail
                  </h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {RESTAURANT_INFO.email}
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="pt-4 border-t border-neutral-800">
                <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-widest text-[#C9A46A] font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>Service Hours</span>
                </div>
                <div className="space-y-2 text-xs">
                  {RESTAURANT_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between text-neutral-300">
                      <span className="text-neutral-400">{h.days}:</span>
                      <span>{h.dinner || h.status}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Styled Luxury Dark Map Preview */}
            <div className="rounded-2xl overflow-hidden border border-[#C9A46A]/20 bg-[#171717] relative h-56 shadow-xl group">
              <iframe
                title="Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9866632422736!2d-73.97305332353133!3d40.76231187138573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f001555555%3A0x6b4ef8d4b3b28b7e!2sPark%20Ave%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 filter invert contrast-125 opacity-80 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-[#C9A46A]/40 text-[10px] text-white">
                Park Avenue, Manhattan, NYC
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-2xl bg-[#171717] border border-[#C9A46A]/25 shadow-2xl">
              <h3 className="font-serif text-2xl text-white font-normal mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs text-neutral-400 font-light mb-8">
                Please submit your message below and our concierge desk will respond within two hours during service hours.
              </p>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 text-center rounded-xl bg-black/40 border border-[#C9A46A]/40"
                  >
                    <CheckCircle2 className="w-12 h-12 text-[#C9A46A] mx-auto mb-4" />
                    <h4 className="font-serif text-xl text-white mb-2">Inquiry Delivered</h4>
                    <p className="text-xs text-neutral-300 font-light max-w-sm mx-auto mb-6">
                      Thank you for contacting AURELIA. Our Maitre d' will review your message promptly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 rounded-full border border-[#C9A46A] text-[#C9A46A] text-xs uppercase tracking-widest hover:bg-[#C9A46A] hover:text-[#0B0B0B] transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-neutral-300 mb-2 font-medium">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Lord Hamilton"
                          className={`w-full bg-[#0B0B0B] border ${
                            errors.name ? 'border-red-500' : 'border-neutral-700 focus:border-[#C9A46A]'
                          } rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-neutral-300 mb-2 font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="hamilton@estate.com"
                          className={`w-full bg-[#0B0B0B] border ${
                            errors.email ? 'border-red-500' : 'border-neutral-700 focus:border-[#C9A46A]'
                          } rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-300 mb-2 font-medium">
                        Subject (Optional)
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Private Cellar Buyout / Press Inquiry / Dietary Consultation"
                        className="w-full bg-[#0B0B0B] border border-neutral-700 focus:border-[#C9A46A] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-neutral-300 mb-2 font-medium">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Kindly describe your inquiry in detail..."
                        className={`w-full bg-[#0B0B0B] border ${
                          errors.message ? 'border-red-500' : 'border-neutral-700 focus:border-[#C9A46A]'
                        } rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#C9A46A] hover:bg-[#DFBF87] text-[#0B0B0B] font-semibold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(201,164,106,0.3)] disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
