'use client';

import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ConsolidationVisualizerProps {
  onOpenConsolidationPage?: () => void;
}

export const ConsolidationVisualizer: React.FC<ConsolidationVisualizerProps> = ({ onOpenConsolidationPage }) => {
  return (
    <section id="consolidacion" className="py-14 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-900/5 text-center space-y-6 relative overflow-hidden">
          
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold tracking-widest text-blue-700 uppercase bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200">
            <Layers className="w-3.5 h-3.5" /> Ahorro Inteligente de Peso
          </span>

          {/* Heading */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Consolidación & Reempaque <span className="text-blue-600">Gratis en Miami</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              ¿Compras en varias tiendas? Recibimos todas tus cajas en nuestro warehouse de Miami, eliminamos embalaje innecesario y las reempacamos gratis en 1 sola caja para ahorrar peso.
            </p>
          </div>

          {/* Action Link Button to /consolidacion page */}
          <div className="pt-2">
            <Link
              href="/consolidacion"
              onClick={onOpenConsolidationPage}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:scale-102 active:scale-95 group"
            >
              <span>Ver Simulador de Consolidación</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
