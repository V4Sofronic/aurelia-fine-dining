import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar as CalendarIcon,
  Clock,
  Users,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Info
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Reservation() {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: todayStr,
    time: '19:00',
    guests: '2',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const TIME_SLOTS = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full legal name';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a complete phone number';
    }

    if (!formData.date) {
      errs.date = 'Reservation date is required';
    } else if (formData.date < todayStr) {
      errs.date = 'Reservation date cannot be in the past';
    }

    if (!formData.time) {
      errs.time = 'Preferred seating time is required';
    }

    if (!formData.guests || parseInt(formData.guests, 10) < 1) {
      errs.guests = 'Party size must be at least 1 guest';
    }

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

    // Simulate API reservation request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setConfirmedBooking({
        ...formData,
        reservationId: `AUR-${Math.floor(100000 + Math.random() * 900000)}`
      });
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setConfirmedBooking(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      date: todayStr,
      time: '19:00',
      guests: '2',
      specialRequests: ''
    });
  };

  return (
    <section id="reservation" className="relative py-28 sm:py-36 bg-[#171717]/60 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C9A46A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A46A] font-semibold">
              Bespoke Seating
            </span>
            <span className="h-[1px] w-8 bg-[#C9A46A]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-6">
            Reserve Your Experience
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Ensure an unhurried, transcendent evening. For parties exceeding 8 guests or private cellar buyouts, please contact our concierge desk directly at {RESTAURANT_INFO.phone}.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="rounded-3xl bg-[#0B0B0B] border border-[#C9A46A]/30 p-6 sm:p-12 shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-300 mb-2 font-medium">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Lord / Lady Sterling"
                        className={`w-full bg-[#171717] border ${
                          errors.fullName ? 'border-red-500' : 'border-neutral-700 focus:border-[#C9A46A]'
                        } rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-300 mb-2 font-medium">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="guest@luxury.com"
                        className={`w-full bg-[#171717] border ${
                          errors.email ? 'border-red-500' : 'border-neutral-700 focus:border-[#C9A46A]'
                        } rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-300 mb-2 font-medium">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (212) 000-0000"
                        className={`w-full bg-[#171717] border ${
                          errors.phone ? 'border-red-500' : 'border-neutral-700 focus:border-[#C9A46A]'
                        } rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-300 mb-2 font-medium">
                      Date *
                    </label>
                    <div className="relative">
                      <CalendarIcon className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        name="date"
                        min={todayStr}
                        value={formData.date}
                        onChange={handleChange}
                        className={`w-full bg-[#171717] border ${
                          errors.date ? 'border-red-500' : 'border-neutral-700 focus:border-[#C9A46A]'
                        } rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white focus:outline-none transition-colors scheme-dark`}
                      />
                    </div>
                    {errors.date && (
                      <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.date}
                      </p>
                    )}
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-300 mb-2 font-medium">
                      Time *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full bg-[#171717] border ${
                          errors.time ? 'border-red-500' : 'border-neutral-700 focus:border-[#C9A46A]'
                        } rounded-xl pl-11 pr-8 py-3 text-xs sm:text-sm text-white focus:outline-none transition-colors appearance-none cursor-pointer`}
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot} className="bg-[#171717] text-white">
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.time && (
                      <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.time}
                      </p>
                    )}
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-neutral-300 mb-2 font-medium">
                      Guests *
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className={`w-full bg-[#171717] border ${
                          errors.guests ? 'border-red-500' : 'border-neutral-700 focus:border-[#C9A46A]'
                        } rounded-xl pl-11 pr-8 py-3 text-xs sm:text-sm text-white focus:outline-none transition-colors appearance-none cursor-pointer`}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <option key={num} value={num} className="bg-[#171717] text-white">
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.guests && (
                      <p className="text-[11px] text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.guests}
                      </p>
                    )}
                  </div>

                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-300 mb-2 font-medium">
                    Special Requests & Dietary Requirements (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-neutral-400 absolute left-4 top-3.5" />
                    <textarea
                      name="specialRequests"
                      rows={3}
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Anniversary celebration, window table preference, shellfish allergy, wine pairings..."
                      className="w-full bg-[#171717] border border-neutral-700 focus:border-[#C9A46A] rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Note regarding sample backend */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-neutral-800 flex items-start gap-3 text-xs text-neutral-400">
                  <Info className="w-4 h-4 text-[#C9A46A] mt-0.5 flex-shrink-0" />
                  <span>
                    Note: This is a modern frontend reservation system with complete field validation. Ready for PostgreSQL / REST API integration upon deployment.
                  </span>
                </div>

                {/* Submit CTA Button */}
                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-12 py-4 rounded-full bg-gradient-to-r from-[#DFBF87] via-[#C9A46A] to-[#A58046] text-[#0B0B0B] font-semibold text-xs uppercase tracking-[0.25em] shadow-[0_0_35px_rgba(201,164,106,0.35)] hover:shadow-[0_0_50px_rgba(201,164,106,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Confirming Availability...' : 'Confirm Table Reservation'}
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Success Confirmation Card */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 sm:py-12 max-w-xl mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-[#C9A46A]/20 border border-[#C9A46A] flex items-center justify-center mx-auto mb-6 text-[#C9A46A] shadow-[0_0_30px_rgba(201,164,106,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="text-xs uppercase tracking-[0.3em] text-[#C9A46A] font-medium mb-2">
                  Reservation Confirmed
                </div>

                <h3 className="font-serif text-3xl text-white font-normal mb-4">
                  We Await Your Presence
                </h3>

                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  Thank you, <strong className="text-white font-medium">{confirmedBooking?.fullName}</strong>. A confirmation concierge dossier has been prepared for <span className="text-[#E5C992]">{confirmedBooking?.email}</span>.
                </p>

                {/* Summary Table */}
                <div className="bg-[#171717] border border-[#C9A46A]/25 rounded-2xl p-6 text-left mb-8 space-y-3 text-xs">
                  <div className="flex justify-between border-b border-neutral-800 pb-2">
                    <span className="text-neutral-400">Reference Code:</span>
                    <span className="font-mono text-[#C9A46A] font-semibold">{confirmedBooking?.reservationId}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800 pb-2">
                    <span className="text-neutral-400">Date & Time:</span>
                    <span className="text-white font-medium">{confirmedBooking?.date} at {confirmedBooking?.time}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800 pb-2">
                    <span className="text-neutral-400">Guests:</span>
                    <span className="text-white font-medium">{confirmedBooking?.guests} Guests</span>
                  </div>
                  {confirmedBooking?.specialRequests && (
                    <div className="flex justify-between pt-1">
                      <span className="text-neutral-400">Notes:</span>
                      <span className="text-neutral-300 max-w-xs text-right italic">{confirmedBooking.specialRequests}</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleReset}
                  className="px-8 py-3 rounded-full border border-[#C9A46A] text-[#C9A46A] hover:bg-[#C9A46A] hover:text-[#0B0B0B] text-xs uppercase tracking-widest font-semibold transition-all"
                >
                  Make Another Reservation
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
