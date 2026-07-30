'use client';

import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [cardsPerPage, setCardsPerPage] = useState(2);

  // Responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.ceil(TESTIMONIALS.length / cardsPerPage) - 1;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [maxIndex, cardsPerPage]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  // Get active items for the current slide index
  const startIdx = currentIndex * cardsPerPage;
  const visibleTestimonials = TESTIMONIALS.slice(startIdx, startIdx + cardsPerPage);

  return (
    <section className="py-24 bg-[#f8f9fa] overflow-hidden border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-600 uppercase bg-amber-600/10 px-3.5 py-1.5 rounded-full">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Lo que dicen nuestros Clientes
          </h2>
          <p className="text-base sm:text-lg text-gray-500">
            Más de 5,000 importadores confían en AEROBOX PRO.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-12">
          {/* Carousel Wrapper */}
          <div className="relative h-[340px] sm:h-[260px] md:h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 absolute w-full"
              >
                {visibleTestimonials.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 space-y-4 sm:space-y-6 hover:border-amber-500/30 transition-all flex flex-col justify-between h-[320px] sm:h-[240px] md:h-[260px] shadow-sm"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-12 h-12 rounded-xl object-cover border-2 border-amber-500/40"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-none">{item.name}</h3>
                            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{item.city} • <span className="text-brand-red">{item.store}</span></p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-amber-600 text-sm">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                        <span className="text-[11px] font-semibold text-gray-500 ml-2">{item.date}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed italic line-clamp-3">
                        "{item.comment}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-150 flex items-center justify-between text-xs font-bold shrink-0">
                      <span className="text-emerald-700 bg-emerald-600/10 px-3 py-1 rounded-full">
                        {item.savedAmount}
                      </span>
                      <span className="text-gray-400 font-semibold">Cliente Verificado ✓</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:-ml-4 p-2 bg-white rounded-full border border-gray-200 shadow-md hover:bg-gray-50 hover:border-amber-500 transition-colors text-gray-600 focus:outline-none z-10"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:-mr-4 p-2 bg-white rounded-full border border-gray-200 shadow-md hover:bg-gray-50 hover:border-amber-500 transition-colors text-gray-600 focus:outline-none z-10"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators (Dots) */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-amber-600 w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

