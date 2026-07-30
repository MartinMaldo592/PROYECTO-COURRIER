'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Camera, ShieldCheck, MapPin, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const DeliveryGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // List of downloaded real delivery photos from public/deliveries
  const deliveryPhotos = [
    { src: '/deliveries/IMG_20260406_125029.jpg', title: 'Entrega de Laptop & iPhone', location: 'Lima (Miraflores)', date: 'Abril 2026' },
    { src: '/deliveries/IMG_20260406_130853.jpg', title: 'Paquetes Consolidados Nike & Amazon', location: 'Lima (Surco)', date: 'Abril 2026' },
    { src: '/deliveries/IMG_20260406_131056.jpg', title: 'Entrega Directa a Domicilio', location: 'Lima (San Borja)', date: 'Abril 2026' },
    { src: '/deliveries/IMG_20260406_134147.jpg', title: 'Despacho de Equipos Electrónicos', location: 'Lima (San Isidro)', date: 'Abril 2026' },
    { src: '/deliveries/IMG_20260406_134150.jpg', title: 'Reempaque & Consolidación Miami', location: 'Lima (La Molina)', date: 'Abril 2026' },
    { src: '/deliveries/IMG_20260406_163218.jpg', title: 'Envío Entregado en Puerta', location: 'Callao', date: 'Abril 2026' },
    { src: '/deliveries/IMG_20260406_172910.jpg', title: 'Importación Comercial Ligera', location: 'Arequipa', date: 'Abril 2026' },
    { src: '/deliveries/IMG_20260406_183548.jpg', title: 'Paquetes de Ropa & Calzado USA', location: 'Trujillo', date: 'Abril 2026' },
    { src: '/deliveries/IMG_20260406_193016.jpg', title: 'Entrega de Consola & Accesorio', location: 'Cusco', date: 'Abril 2026' },
    { src: '/deliveries/IMG_20260406_202335.jpg', title: 'Delivery Final con Cliente', location: 'Lima (Jesús María)', date: 'Abril 2026' },
  ];

  // Update dots indicator on scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setMaxScroll(scrollWidth - clientWidth);
      
      // Calculate active dot based on card width
      const cardWidth = scrollRef.current.firstElementChild
        ? (scrollRef.current.firstElementChild as HTMLElement).offsetWidth + 16 // card + gap
        : clientWidth;
      
      const index = Math.round(scrollLeft / cardWidth);
      setActiveDot(Math.min(index, deliveryPhotos.length - 1));
    }
  };

  useEffect(() => {
    // Initial measurement
    handleScroll();
  }, []);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const cardWidth = scrollRef.current.firstElementChild
        ? (scrollRef.current.firstElementChild as HTMLElement).offsetWidth + 16
        : clientWidth;
      
      const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollToDot = (dotIndex: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild
        ? (scrollRef.current.firstElementChild as HTMLElement).offsetWidth + 16
        : scrollRef.current.clientWidth;
      
      scrollRef.current.scrollTo({
        left: dotIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="entregas" className="py-24 bg-[#f8f9fa] border-t border-gray-200 overflow-hidden">
      {/* Section Header Container */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full">
            Evidencia Real
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Fotos Reales de Entregas a Domicilio
          </h2>
          <p className="text-base sm:text-lg text-gray-500">
            Desliza con el dedo en tu celular para ver todas nuestras entregas.
          </p>
        </div>
      </div>

      {/* Edge-to-Edge Carousel con margen mínimo sutil a los lados */}
      <div className="relative w-full px-3 sm:px-6 lg:px-8 xl:px-10">
          
          {/* Scrollable touch-swipe viewport */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-2 px-1 scrollbar-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {deliveryPhotos.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(photo.src)}
                className="snap-start shrink-0 w-[85%] sm:w-[45%] md:w-[35%] lg:w-[28%] xl:w-[22%] 2xl:w-[18%] bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-emerald-500 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col shadow-sm select-none transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-gray-900">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 text-xs font-bold text-gray-900 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                    <Camera className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Foto Real</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 space-y-1 z-10">
                    <span className="text-sm sm:text-base font-bold text-white block truncate drop-shadow-sm">
                      {photo.title}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-gray-200 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
                      <span className="truncate">{photo.location}</span>
                    </div>
                  </div>

                  <div className="absolute top-3.5 right-3.5 p-2 bg-white/90 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-gray-900 shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Edge Navigation Buttons */}
          <button
            onClick={() => scrollByAmount('left')}
            className="hidden sm:flex absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 p-3 bg-white/95 backdrop-blur-md rounded-full border border-gray-200 shadow-xl hover:bg-white hover:border-emerald-500 hover:scale-110 transition-all text-gray-800 focus:outline-none z-20"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scrollByAmount('right')}
            className="hidden sm:flex absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 p-3 bg-white/95 backdrop-blur-md rounded-full border border-gray-200 shadow-xl hover:bg-white hover:border-emerald-500 hover:scale-110 transition-all text-gray-800 focus:outline-none z-20"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators (Dots) */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {deliveryPhotos.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToDot(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeDot
                  ? 'bg-emerald-600 w-5'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Fotografías originales reales.</span>
        </div>

      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] p-2 bg-white rounded-2xl border border-gray-200"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 p-2.5 bg-gray-100 text-gray-900 hover:bg-brand-red rounded-full border border-gray-300 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage}
                alt="Foto de entrega"
                className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

