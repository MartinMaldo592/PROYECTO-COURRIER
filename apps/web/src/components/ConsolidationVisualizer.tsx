'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowRight, PackageCheck, Sparkles, Check } from 'lucide-react';

export const ConsolidationVisualizer: React.FC = () => {
  const [isConsolidated, setIsConsolidated] = useState<boolean>(false);

  const initialPackages = [
    { store: 'Amazon', item: 'Laptop Gamer', weight: '2.5 kg', volWeight: '4.8 kg', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { store: 'Apple Store', item: 'iPhone 16 Pro', weight: '0.4 kg', volWeight: '1.2 kg', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { store: 'Nike USA', item: 'Zapatillas Jordan', weight: '1.1 kg', volWeight: '2.9 kg', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
    { store: 'eBay', item: 'Consola PS5', weight: '3.8 kg', volWeight: '7.5 kg', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg' }
  ];

  return (
    <section id="consolidacion" className="py-24 bg-[#f8f9fa] border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-red uppercase bg-brand-red/10 px-3.5 py-1.5 rounded-full">
            Consolidación en Miami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Consolidación en <span className="text-brand-red">Miami</span> Sin Cargo Extra
          </h2>
          <p className="text-base sm:text-lg text-gray-500">
            ¿Compras en 5 tiendas distintas? Recibimos todo en tu casillero y reempacamos en 1 sola caja.
          </p>
        </div>

        <div className="bg-white border border-gray-200 p-8 sm:p-12 rounded-xl space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-200">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Simulador de Reempaque</h3>
              <p className="text-xs text-gray-500">Haz clic para ver la transformación.</p>
            </div>
            <button
              onClick={() => setIsConsolidated(!isConsolidated)}
              className="px-6 py-3.5 bg-brand-red hover:bg-brand-red-hover text-gray-900 font-bold text-sm rounded-xl transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {isConsolidated ? 'Ver Paquetes Separados' : 'Simular Consolidación'}
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
                    className="p-5 bg-gray-50 rounded-xl border border-gray-200 space-y-3 hover:border-gray-300 transition-colors"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-600 block">
                      Paquete #{idx + 1}
                    </span>
                    <div className="h-8 flex items-center">
                      <span className="text-sm font-bold text-gray-900">{pkg.store}</span>
                    </div>
                    <div className="text-xs text-gray-600 font-semibold">{pkg.item}</div>
                    <div className="pt-2 border-t border-gray-100 text-xs flex justify-between text-gray-500">
                      <span>Peso Real: <strong className="text-gray-900">{pkg.weight}</strong></span>
                      <span className="text-rose-600">Vol.: {pkg.volWeight}</span>
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
                className="p-8 bg-gray-50 rounded-xl border border-emerald-500/40 flex flex-col md:flex-row items-center justify-between gap-8"
              >
                <div className="space-y-3 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-700 text-xs font-bold">
                    <Check className="w-4 h-4" /> 1 Sola Caja Reempacada
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Consolidación Exitosa</h4>
                  <p className="text-sm text-gray-500 max-w-md">
                    Eliminamos 4 cajas voluminosas. Tus 4 productos fueron protegidos en 1 caja compacta.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center space-y-2 min-w-[240px]">
                  <span className="text-xs text-gray-500 uppercase font-bold block">Peso Total Unificado</span>
                  <div className="text-3xl font-bold text-emerald-700">7.8 KG</div>
                  <span className="text-xs text-gray-500 block font-semibold">
                    ¡Ahorraste <strong className="text-brand-red">$56 USD</strong> de flete!
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
