'use client';

import React, { useState, useEffect } from 'react';
import { Plane, Calculator, Package, Menu, X, ChevronRight, Sparkles, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { OfficialWhatsAppIcon } from './FloatingWhatsAppButton';

interface NavbarProps {
  onOpenCalculator: () => void;
  onOpenTracking: () => void;
  onOpenQuote: () => void;
  onOpenBuyForMe: () => void;
  onOpenMiamiAddress?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCalculator,
  onOpenTracking,
  onOpenQuote,
  onOpenBuyForMe,
  onOpenMiamiAddress,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '¿Cómo Funciona?', href: '#como-funciona' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Ahorro', href: '#ahorro' },
    { label: 'Consolidación', href: '#consolidacion' },
    { label: 'Tiendas USA', href: '#tiendas' },
    { label: 'Entregas Reales', href: '#entregas' },
    { label: 'Cobertura Perú', href: '#cobertura' },
    { label: 'Preguntas (FAQ)', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-md shadow-slate-900/5'
          : 'bg-white/70 backdrop-blur-md border-b border-slate-200/50 py-4.5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <Plane className="w-5 h-5 text-white transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-1">
                AEROBOX <span className="text-blue-600 font-extrabold">PRO</span>
              </span>
              <span className="block text-[9.5px] font-bold text-slate-600 tracking-widest uppercase">
                Logística EE.UU. → Perú
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-bold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 transition-colors py-1 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Rate Pill */}
            <div className="hidden 2xl:flex items-center gap-2 bg-slate-100/90 border border-slate-200 px-3.5 py-2 rounded-xl text-xs font-extrabold text-slate-700 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>$8.00 USD / kg</span>
            </div>

            {/* Tracking Button */}
            <button
              onClick={onOpenTracking}
              className="p-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 rounded-xl transition-all shadow-sm hover:scale-105 active:scale-95"
              title="Seguimiento de Envío"
            >
              <Package className="w-4 h-4" />
            </button>

            {/* Miami Locker Address Button */}
            {onOpenMiamiAddress && (
              <button
                onClick={onOpenMiamiAddress}
                className="px-3.5 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-xl transition-all border border-blue-200/80 flex items-center gap-1.5 shadow-sm hover:scale-102 active:scale-95"
                title="Ver dirección de casillero en Miami"
              >
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Dirección Miami</span>
              </button>
            )}

            {/* Main Quote CTA Button */}
            <button
              onClick={onOpenCalculator}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 shadow-md shadow-blue-600/25 flex items-center gap-2 hover:scale-102 active:scale-95"
            >
              <Calculator className="w-4 h-4" />
              Cotizar Envío
            </button>

            {/* WhatsApp Quick Button */}
            <a
              href="https://wa.me/51987654321?text=Hola%20AEROBOX%20PRO,%20quiero%20cotizar%20un%20env%C3%ADo."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366] text-[#25D366] hover:text-white rounded-xl transition-all shadow-sm hover:scale-105 active:scale-95"
              title="Hablar por WhatsApp Oficial"
            >
              <OfficialWhatsAppIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Actions Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCalculator}
              className="px-3.5 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-600/20"
            >
              Cotizar
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 bg-slate-100 border border-slate-200 text-slate-700 rounded-xl"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl"
          >
            <div className="grid grid-cols-2 gap-2.5 text-xs font-bold text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between hover:border-blue-500/50 hover:text-blue-600 transition-all"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md shadow-blue-600/20"
              >
                <Calculator className="w-4 h-4" />
                Calcular Costo de Envío
              </button>

              {onOpenMiamiAddress && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenMiamiAddress();
                  }}
                  className="w-full py-3 bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs rounded-xl flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-blue-600" />
                  Ver Mi Dirección en Miami
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTracking();
                }}
                className="w-full py-3 bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center gap-2"
              >
                <Package className="w-4 h-4" />
                Rastrear mi Paquete
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBuyForMe();
                }}
                className="w-full py-3 bg-blue-50/70 border border-blue-200 text-blue-700 font-semibold text-xs rounded-xl flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                Asesoría de Compra (Servicio 1 a 1)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
