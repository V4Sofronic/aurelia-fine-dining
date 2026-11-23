import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import SignatureDishes from './sections/SignatureDishes';
import Menu from './sections/Menu';
import SpecialOffers from './sections/SpecialOffers';
import Chefs from './sections/Chefs';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Reservation from './sections/Reservation';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#C9A46A] selection:text-[#0B0B0B]">
      {/* Top Sticky Navigation */}
      <Navbar onReserveClick={scrollToReservation} />

      {/* Hero Section with Cinematic Background Videos */}
      <main>
        <Hero
          onExploreMenu={scrollToMenu}
          onReserveTable={scrollToReservation}
        />

        {/* About Section */}
        <About onDiscoverStory={scrollToAbout} />

        {/* Signature Dishes */}
        <SignatureDishes onReserveTable={scrollToReservation} />

        {/* Interactive Food Menu with Category Filters & Search */}
        <Menu onReserveTable={scrollToReservation} />

        {/* Special Offers Section */}
        <SpecialOffers onReserveTable={scrollToReservation} />

        {/* Meet Our Chefs Section */}
        <Chefs />

        {/* Interactive Restaurant Gallery with Lightbox */}
        <Gallery />

        {/* Customer Testimonials Carousel */}
        <Testimonials />

        {/* Table Reservation Form */}
        <Reservation />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Dark Footer */}
      <Footer onReserveClick={scrollToReservation} />
    </div>
  );
}
