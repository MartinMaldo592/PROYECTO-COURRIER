'use client';

import React, { useState } from 'react';
import { Camera, ShieldCheck, MapPin, CheckCircle, ExternalLink, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const DeliveryGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  return (
    <section id="entregas" className="py-24 bg-[#f8f9fa] border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full">
            Evidencia Real
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Fotos Reales de Entregas a Domicilio
          </h2>
          <p className="text-base sm:text-lg text-gray-500">
            Fotografías originales capturadas por nuestro equipo de reparto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {deliveryPhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(photo.src)}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden bg-black">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                <div className="absolute top-3 left-3 flex items-center gap-1 text-[10px] font-bold text-gray-900 bg-white/90 px-2.5 py-1 rounded-full">
                  <Camera className="w-3 h-3 text-emerald-700" />
                  <span>Foto Real</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 space-y-0.5">
                  <span className="text-xs font-bold text-gray-900 block">
                    {photo.title}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-gray-500">
                    <MapPin className="w-3 h-3 text-brand-red" />
                    <span>{photo.location}</span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 p-1.5 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-gray-900">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Fotografías originales reales.</span>
        </div>

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
