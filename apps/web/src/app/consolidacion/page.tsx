'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, ArrowLeft, Sparkles, Check, Package, Calculator, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function ConsolidationPage() {
  const [isConsolidated, setIsConsolidated] = useState<boolean>(false);

  const initialPackages = [
    { store: 'Amazon USA', item: 'Laptop Gamer & Accesorios', weight: '2.5 kg', volWeight: '4.8 kg', icon: '💻' },
    { store: 'Apple Store', item: 'iPhone 16 Pro Max', weight: '0.4 kg', volWeight: '1.2 kg', icon: '📱' },
    { store: 'Nike USA', item: 'Zapatillas Jordan Retro', weight: '1.1 kg', volWeight: '2.9 kg', icon: '👟' },
    { store: 'eBay USA', item: 'Consola PS5 Slim', weight: '3.8 kg', volWeight: '7.5 kg', icon: '🎮' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 antialiased flex flex-col justify-between">
      <Navbar
        onOpenCalculator={() => { window.location.href = '/#calculadora'; }}
        onOpenTracking={() => { window.location.href = '/tracking'; }}
        onOpenQuote={() => { window.location.href = '/#calculadora'; }}
        onOpenBuyForMe={() => { window.location.href = '/#como-funciona'; }}
      />

      <main className="pt-32 pb-20 flex-1">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-8">
          
          {/* Back to Home Button */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 bg-white border border-slate-200 px-3.5 py-2 rounded-xl transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al Inicio
            </Link>
          </div>

          {/* Header */}
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-widest text-blue-700 uppercase bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200">
              <Layers className="w-4 h-4" /> Simulador de Reempaque Inteligente
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Consolidación en Miami <span className="text-blue-600">Sin Costo Extra</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Si compras en distintas tiendas de EE.UU., recibimos todo en tu casillero de Miami, retiramos cajas de empaque sobrantes y las reempacamos gratis en 1 sola caja compacta.
            </p>
          </div>

          {/* Interactive Visualizer Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-900/5 space-y-8">
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">Demostración Interactiva de Ahorro</h2>
                <p className="text-xs text-slate-500 font-medium">Haz clic en el botón para ver la transformación de los paquetes.</p>
              </div>
              <button
                onClick={() => setIsConsolidated(!isConsolidated)}
                className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xs sm:text-sm rounded-2xl transition-all shadow-md shadow-blue-600/20 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                {isConsolidated ? 'Ver Paquetes Separados' : 'Simular Consolidación Gratis'}
              </button>
            </div>

            <AnimatePresence mode="wait">
              {!isConsolidated ? (
                <motion.div
                  key="separated"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {initialPackages.map((pkg, idx) => (
                    <div
                      key={pkg.store}
                      className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                          Paquete #{idx + 1}
                        </span>
                        <span className="text-lg">{pkg.icon}</span>
                      </div>
                      <div>
                        <span className="text-sm font-bold text-slate-900 block">{pkg.store}</span>
                        <span className="text-xs font-medium text-slate-500 block truncate">{pkg.item}</span>
                      </div>
                      <div className="pt-2 border-t border-slate-200 text-xs flex justify-between text-slate-500 font-medium">
                        <span>Peso Real: <strong className="text-slate-900">{pkg.weight}</strong></span>
                        <span className="text-rose-600 font-bold">Vol: {pkg.volWeight}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="consolidated"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-6 sm:p-8 bg-blue-50/70 border border-blue-200 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8"
                >
                  <div className="space-y-3 text-center md:text-left">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200">
                      <Check className="w-4 h-4" /> 1 Sola Caja Unificada y Reempacada
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">¡Consolidación Exitosa!</h3>
                    <p className="text-sm text-slate-600 font-medium max-w-md leading-relaxed">
                      Eliminamos las 4 cajas voluminosas individuales. Tus 4 productos fueron empaquetados juntos con protección especial en 1 sola caja optimizada.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-blue-200 text-center space-y-2 min-w-[240px] shadow-sm">
                    <span className="text-xs text-slate-400 uppercase font-extrabold block">Peso Unificado Final</span>
                    <div className="text-4xl font-black text-emerald-600">7.8 KG</div>
                    <span className="text-xs text-slate-600 block font-bold">
                      ¡Ahorro estimado: <strong className="text-blue-600">$56.00 USD</strong> en flete!
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-1.5 shadow-sm">
              <span className="text-xs font-bold text-blue-600">01. Cero Costo Adicional</span>
              <h4 className="text-sm font-bold text-slate-900">Reempaque 100% Gratis</h4>
              <p className="text-xs text-slate-500">No cobramos comisiones extras por juntar tus compras de distintas tiendas.</p>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-1.5 shadow-sm">
              <span className="text-xs font-bold text-blue-600">02. Fotos HD de Validación</span>
              <h4 className="text-sm font-bold text-slate-900">Fotografiado e Inspección</h4>
              <p className="text-xs text-slate-500">Recibes fotos de tus paquetes antes y después de consolidar.</p>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-1.5 shadow-sm">
              <span className="text-xs font-bold text-blue-600">03. Protección Asegurada</span>
              <h4 className="text-sm font-bold text-slate-900">Empaque Resistente</h4>
              <p className="text-xs text-slate-500">Protección especial antichoque para electrónicos y artículos frágiles.</p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
