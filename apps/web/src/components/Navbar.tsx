'use client';

import React, { useState, useEffect } from 'react';
import { Plane, Calculator, Package, Menu, X, ChevronRight, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenCalculator: () => void;
  onOpenTracking: () => void;
  onOpenQuote: () => void;
  onOpenBuyForMe: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCalculator,
  onOpenTracking,
  onOpenQuote,
  onOpenBuyForMe,
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
    { label: 'Tiendas', href: '#tiendas' },
    { label: 'Entregas Reales', href: '#entregas' },
    { label: 'Cobertura Perú', href: '#cobertura' },
    { label: 'Preguntas (FAQ)', href: '#faq' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 border-b border-gray-200 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold text-gray-900 tracking-wider">
                AEROBOX <span className="text-brand-red">PRO</span>
              </span>
              <span className="block text-[9px] font-bold text-gray-400 tracking-widest uppercase">
                Courier EE.UU. → Perú
              </span>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold text-gray-500">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            
            <div className="hidden xl:flex items-center gap-2 bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>$8.00 USD / kg</span>
            </div>

            <button
              onClick={onOpenTracking}
              className="p-2.5 bg-white border border-gray-200 text-gray-500 hover:text-gray-900 rounded-xl transition-all"
              title="Seguimiento de Envío"
            >
              <Package className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCalculator}
              className="px-5 py-2.5 bg-brand-red hover:bg-brand-red-hover text-white text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              Cotizar Envío
            </button>

            <a
              href="https://wa.me/51987654321?text=Hola%20AEROBOX%20PRO,%20quiero%20cotizar%20un%20env%C3%ADo."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-emerald-600/10 border border-emerald-600/30 hover:bg-emerald-600 text-emerald-700 hover:text-white rounded-xl transition-all"
              title="Hablar por WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCalculator}
              className="px-3.5 py-2 bg-brand-red text-white text-xs font-bold rounded-lg"
            >
              Cotizar
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-white border border-gray-200 text-gray-600 rounded-lg"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-lg"
          >
            <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-gray-700">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between hover:border-brand-red/50 hover:text-brand-red transition-all"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full py-3.5 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                Calcular Costo de Envío
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTracking();
                }}
                className="w-full py-3 bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-sm rounded-xl flex items-center justify-center gap-2"
              >
                <Package className="w-4 h-4" />
                Rastrear mi Paquete
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBuyForMe();
                }}
                className="w-full py-3 bg-gray-50 border border-gray-200 text-amber-600 font-semibold text-sm rounded-xl flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Compramos por Ti (Servicio 1 a 1)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
