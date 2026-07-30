'use client';

import React from 'react';
import { Package, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface TrackingSimulatorProps {
  onOpenTrackingPage?: () => void;
}

export const TrackingSimulator: React.FC<TrackingSimulatorProps> = ({ onOpenTrackingPage }) => {
  return (
    <section id="tracking" className="py-14 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-900/5 text-center space-y-6 relative overflow-hidden">
          
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold tracking-widest text-blue-700 uppercase bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200">
            <Package className="w-3.5 h-3.5" /> Seguimiento en Tiempo Real
          </span>

          {/* Heading */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Rastreo de Paquetes <span className="text-blue-600">USA → Perú</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Monitorea el trayecto exacto de tus importaciones en tiempo real desde que ingresan a nuestro almacén en Miami hasta la entrega en tu casa.
            </p>
          </div>

          {/* Action Link Button to /tracking page */}
          <div className="pt-2">
            <Link
              href="/tracking"
              onClick={onOpenTrackingPage}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:scale-102 active:scale-95 group"
            >
              <span>Rastrear Mi Paquete Ahora</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
