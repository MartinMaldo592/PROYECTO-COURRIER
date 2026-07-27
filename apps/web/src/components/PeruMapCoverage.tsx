'use client';

import React, { useState } from 'react';
import { PERU_DEPARTMENTS } from '../data/mockData';
import { MapPin, Truck, CheckCircle2, Search } from 'lucide-react';

export const PeruMapCoverage: React.FC = () => {
  const [searchCity, setSearchCity] = useState<string>('');

  const filteredDepts = PERU_DEPARTMENTS.filter((d) =>
    d.name.toLowerCase().includes(searchCity.toLowerCase()) ||
    d.partner.toLowerCase().includes(searchCity.toLowerCase())
  );

  return (
    <section id="cobertura" className="py-24 bg-[#f8f9fa] border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
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

        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="w-5 h-5 text-neutral-600 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar ciudad o departamento..."
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="w-full bg-gray-100 border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDepts.map((dept) => (
            <div
              key={dept.id}
              className={`p-5 rounded-xl border transition-all ${
                dept.isFreeLima
                  ? 'bg-white border-emerald-500/40'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className={`w-4 h-4 ${dept.isFreeLima ? 'text-emerald-700' : 'text-brand-red'}`} />
                  <h3 className="text-base font-bold text-gray-900">{dept.name}</h3>
                </div>
                {dept.isFreeLima && (
                  <span className="text-[10px] font-bold uppercase bg-emerald-600/10 text-emerald-700 px-2 py-0.5 rounded-full">
                    FREE
                  </span>
                )}
              </div>

              <div className="space-y-1.5 text-xs text-gray-500">
                <div className="flex justify-between">
                  <span className="text-gray-500">Tiempo de Entrega:</span>
                  <strong className="text-gray-900">{dept.deliveryDays}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Agencia:</span>
                  <span className="text-brand-red font-semibold">{dept.partner}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
