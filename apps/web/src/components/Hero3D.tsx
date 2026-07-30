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
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-900">
      
      {/* High Quality Responsive Fotorrealistic Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background Image (Vertical 9:16) */}
        <img
          src="/hero_delivery_mobile_bg.png"
          alt="Persona recibiendo su paquete en la puerta de su casa (Móvil)"
          className="block sm:hidden w-full h-full object-cover object-center scale-105 filter brightness-90"
        />
        {/* Desktop Background Image (Horizontal Widescreen) */}
        <img
          src="/hero_delivery_bg.png"
          alt="Persona recibiendo su paquete en la puerta de su casa (Escritorio)"
          className="hidden sm:block w-full h-full object-cover object-center scale-105 filter brightness-90"
        />
        {/* Soft Glassmorphism Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/50 sm:from-slate-950/90 sm:via-slate-950/75 sm:to-slate-900/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2"
          >
            <span className="text-xs font-bold text-blue-300 bg-blue-500/20 border border-blue-400/30 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
              ✈️ $8.00 USD / KG — Tarifa Plana Sin Costos Ocultos
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-md"
          >
            Traemos tus compras desde <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">Estados Unidos</span> hasta tu casa.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow"
          >
            Realizas tu compra en cualquier tienda de EE.UU., colocas nuestro casillero de Miami y nosotros hacemos toda la gestión hasta entregarlo en la puerta de tu casa.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-200 font-medium drop-shadow-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Delivery GRATIS en Lima</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Consolidación Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Compramos por Ti</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Envíos a Provincias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Asesoría SUNAT ($200 USD)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-3 hover:scale-102 active:scale-95"
            >
              <Calculator className="w-5 h-5" />
              Cotizar mi Envío Ahora
              <ArrowRight className="w-5 h-5" />
            </button>

            <button 
              onClick={onOpenTracking}
              className="w-full sm:w-auto px-7 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 font-semibold text-base rounded-xl transition-all flex items-center justify-center gap-2.5 shadow-md"
            >
              <Package className="w-5 h-5" />
              Rastrear Paquete
            </button>

            <a
              href="https://wa.me/51987654321?text=Hola%20AEROBOX%20PRO,%20quiero%20cotizar%20un%20env%C3%ADo%20desde%20EE.UU."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base rounded-xl transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 hover:scale-102 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              WhatsApp Directo
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
