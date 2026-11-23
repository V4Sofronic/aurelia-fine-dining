import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { HERO_VIDEOS } from '../data/restaurantData';

export default function Hero({ onExploreMenu, onReserveTable }) {
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef([]);

  // Setup video refs array
  videoRefs.current = HERO_VIDEOS.map((_, i) => videoRefs.current[i] ?? React.createRef());

  // Handle video looping and smooth transitions
  useEffect(() => {
    const activeVideo = videoRefs.current[currentVideoIdx]?.current;
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {
        // Autoplay policy fallback
      });
    }

    // Set transition interval as safety fallback if onEnded doesn't fire
    const timer = setTimeout(() => {
      handleNextVideo();
    }, 8000);

    return () => clearTimeout(timer);
  }, [currentVideoIdx]);

  const handleNextVideo = () => {
    setCurrentVideoIdx((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  const handleVideoSelect = (idx) => {
    setCurrentVideoIdx(idx);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    videoRefs.current.forEach((ref) => {
      if (ref.current) ref.current.muted = nextMuted;
    });
  };

  const togglePlay = () => {
    const activeVideo = videoRefs.current[currentVideoIdx]?.current;
    if (activeVideo) {
      if (isPlaying) {
        activeVideo.pause();
      } else {
        activeVideo.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#0B0B0B] flex items-center justify-center">
      {/* Cinematic Multi-Video Crossfade Layer */}
      <div className="absolute inset-0 w-full h-full">
        {HERO_VIDEOS.map((video, idx) => {
          const isActive = idx === currentVideoIdx;
          return (
            <div
              key={video.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <video
                ref={videoRefs.current[idx]}
                src={video.src}
                poster={video.fallback}
                muted={isMuted}
                playsInline
                autoPlay
                preload="auto"
                onEnded={handleNextVideo}
                className="w-full h-full object-cover object-center scale-105 transform animate-subtle-zoom"
                style={{
                  filter: 'brightness(0.72) contrast(1.1) saturate(1.1)'
                }}
              />
            </div>
          );
        })}

        {/* Cinematic Vignette & Luxury Gradient Overlays */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-black/60" />
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-black/70 via-transparent to-black/70" />
        <div className="absolute inset-0 z-20 pointer-events-none [radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.75)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pt-16">
        {/* Small Golden Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C9A46A]/40 bg-[#0B0B0B]/60 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(201,164,106,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C9A46A] animate-pulse" />
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#E5C992] font-medium">
            AN EXCEPTIONAL DINING EXPERIENCE
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#C9A46A] animate-pulse" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.1] mb-6 drop-shadow-2xl"
        >
          Where Every Bite <br className="hidden sm:inline" />
          <span className="italic font-light text-gold-gradient font-serif">
            Tells a Story
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-neutral-300 font-light leading-relaxed mb-10 tracking-wide drop-shadow"
        >
          Discover exceptional flavors, carefully crafted dishes, and unforgettable moments in an atmosphere designed for you.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#DFBF87] via-[#C9A46A] to-[#A58046] text-[#0B0B0B] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-[0_0_35px_rgba(201,164,106,0.4)] hover:shadow-[0_0_50px_rgba(201,164,106,0.65)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Explore Our Menu
          </button>

          <button
            onClick={onReserveTable}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#C9A46A] bg-black/40 backdrop-blur-md text-white font-medium text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-[#C9A46A]/20 hover:border-[#DFBF87] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Reserve a Table
          </button>
        </motion.div>
      </div>

      {/* Video Navigation Indicators & Sound Controller */}
      <div className="absolute bottom-10 left-6 sm:left-12 z-30 flex items-center gap-3">
        {HERO_VIDEOS.map((video, idx) => (
          <button
            key={video.id}
            onClick={() => handleVideoSelect(idx)}
            className="group flex items-center gap-2 py-2 focus:outline-none"
            aria-label={`Switch to video scene: ${video.title}`}
          >
            <div
              className={`h-1 transition-all duration-500 rounded-full ${
                idx === currentVideoIdx
                  ? 'w-10 sm:w-14 bg-[#C9A46A] shadow-[0_0_10px_#C9A46A]'
                  : 'w-4 sm:w-6 bg-white/30 group-hover:bg-white/60'
              }`}
            />
          </button>
        ))}

        <div className="hidden sm:block ml-2 text-[10px] tracking-widest uppercase text-neutral-400 font-mono">
          0{currentVideoIdx + 1} / 0{HERO_VIDEOS.length}
        </div>
      </div>

      {/* Video Audio & Playback Controls */}
      <div className="absolute bottom-10 right-6 sm:right-12 z-30 flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#C9A46A] transition-all"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#C9A46A] transition-all"
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-[#C9A46A]" /> : <Volume2 className="w-4 h-4 text-white" />}
        </button>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-light">
          Scroll to Discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-9 rounded-full border border-[#C9A46A]/50 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ height: ['4px', '12px', '4px'], y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1 bg-[#C9A46A] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
