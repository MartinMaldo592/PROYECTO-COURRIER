'use client';

import React from 'react';

export const PeruMapCoverage: React.FC = () => {
  return (
    <section id="cobertura" className="py-20 bg-[#f8f9fa] border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full">
            Cobertura Nacional
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Envíos a todo el Perú
          </h2>
          <p className="text-base sm:text-lg text-gray-500">
            Delivery <strong className="text-emerald-700 font-bold">GRATIS en Lima Metropolitana</strong> y despachos diarios a todos los departamentos.
          </p>
        </div>
      </div>
    </section>
  );
};
