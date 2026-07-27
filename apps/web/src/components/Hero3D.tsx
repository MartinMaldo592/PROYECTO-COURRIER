'use client';

import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Calculator, Package, MessageCircle, MapPin, CheckCircle2, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface Hero3DProps {
  onOpenCalculator: () => void;
  onOpenTracking: () => void;
  onOpenQuote: () => void;
}

export const Hero3D: React.FC<Hero3DProps> = ({ onOpenCalculator, onOpenTracking, onOpenQuote }) => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText('8300 NW 30th Terrace, Ste 400, AB-9042, Doral, FL 33122');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 3000);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              <span className="text-xs font-bold text-brand-red bg-brand-red/10 px-3 py-1 rounded-full">
                $8.00 USD / KG — Sin costos ocultos
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]"
            >
              Traemos tus compras desde <span className="text-brand-red">Estados Unidos</span> hasta tu casa.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Compra en Amazon, Apple, Nike o cualquier tienda de EE.UU. Nosotros la recibimos en Miami, consolidamos tus paquetes y te la entregamos en cualquier ciudad del Perú.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Delivery GRATIS en Lima</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Consolidación Gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Compramos por Ti</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Envíos a Provincias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Asesoría SUNAT ($200 USD)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Seguimiento en Tiempo Real</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center lg:justify-start"
            >
              <button 
                onClick={onOpenCalculator}
                className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-base rounded-xl transition-all flex items-center justify-center gap-3"
              >
                <Calculator className="w-5 h-5" />
                Cotizar mi Envío Ahora
                <ArrowRight className="w-5 h-5" />
              </button>

              <button 
                onClick={onOpenTracking}
                className="w-full sm:w-auto px-7 py-4 bg-white border border-gray-300 text-gray-700 font-semibold text-base rounded-xl transition-all flex items-center justify-center gap-2.5"
              >
                <Package className="w-5 h-5" />
                Rastrear Paquete
              </button>

              <a
                href="https://wa.me/51987654321?text=Hola%20AEROBOX%20PRO,%20quiero%20cotizar%20un%20env%C3%ADo%20desde%20EE.UU."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 bg-emerald-600/10 border border-emerald-600/30 hover:bg-emerald-600 text-emerald-700 hover:text-white font-semibold text-base rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Directo
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-gray-500 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-amber-500 text-base">★★★★★</span>
                <span className="font-bold text-gray-900">4.9/5</span> en Google Reviews
              </div>
              <div className="hidden sm:block text-gray-300">•</div>
              <div className="flex items-center gap-1.5 text-gray-600">
                <ShieldCheck className="w-4 h-4 text-brand-red" />
                <span>+10,000 Paquetes Entregados</span>
              </div>
            </motion.div>

          </div>

          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl shadow-sm"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-red/10 rounded-xl text-brand-red">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-base">Tu Casillero en Miami (Gratis)</h3>
                    <p className="text-gray-500 text-xs">Usa esta dirección al comprar en EE.UU.</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase bg-emerald-600/10 text-emerald-700 px-2.5 py-1 rounded-full">
                  ACTIVO
                </span>
              </div>

              <div className="space-y-4 bg-gray-50 p-5 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-600">
                <div>
                  <span className="text-gray-500 block text-[11px]">Nombre / Name:</span>
                  <span className="text-gray-900 font-bold">Tu Nombre + (AB-9042)</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[11px]">Dirección Línea 1 / Address 1:</span>
                  <span className="text-brand-red font-semibold">8300 NW 30th Terrace, Ste 400</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-500 block text-[11px]">Ciudad / City:</span>
                    <span className="text-gray-900 font-semibold">Doral (Miami)</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[11px]">Estado / State:</span>
                    <span className="text-gray-900 font-semibold">Florida (FL)</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-500 block text-[11px]">Código Postal / Zip Code:</span>
                    <span className="text-gray-900 font-semibold">33122</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[11px]">Teléfono / Phone:</span>
                    <span className="text-gray-900 font-semibold">+1 (305) 987-6543</span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <button
                  onClick={copyAddress}
                  className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 border border-gray-300 transition-colors"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">¡Dirección Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-brand-red" />
                      Copiar Dirección de Miami
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-[11px] text-gray-500">
                  ¿No tienes tarjeta en dólares o te rechazan el pedido? Usamos <button onClick={onOpenQuote} className="text-brand-red font-semibold underline">"Compramos por Ti"</button>.
                </p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
