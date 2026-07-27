'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, CheckCircle2, ArrowRight } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
  const [shipmentsPerYear, setShipmentsPerYear] = useState<number>(6);
  const [avgKgPerShipment, setAvgKgPerShipment] = useState<number>(3);

  const totalKgYear = shipmentsPerYear * avgKgPerShipment;

  // Competencia: $10 USD / kg + $15 gasto administrativo + cobros extras
  const traditionalCost = totalKgYear * 10 + shipmentsPerYear * 15;

  // AEROBOX PRO: $8 USD / kg flat + $0 handling + $0 consolidation
  const aeroboxCost = totalKgYear * 8;

  const totalSavingsUsd = traditionalCost - aeroboxCost;
  const percentageSaved = Math.round((totalSavingsUsd / traditionalCost) * 100);

  return (
    <section id="ahorro" className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-600/10 px-3.5 py-1.5 rounded-full">
            Calculadora de Ahorro
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            ¿Cuánto dinero ahorras con <span className="text-brand-red">AEROBOX PRO</span>?
          </h2>
          <p className="text-base sm:text-lg text-gray-500">
            Compara nuestras tarifas planas de <strong className="text-gray-900">$8.00/kg</strong> frente a los couriers tradicionales.
          </p>
        </div>

        <div className="bg-white border border-gray-200 p-8 sm:p-12 rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-8">
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-gray-700">Envíos proyectados al año:</span>
                  <span className="text-brand-red text-lg">{shipmentsPerYear} envíos/año</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={shipmentsPerYear}
                  onChange={(e) => setShipmentsPerYear(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-red"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-gray-700">Peso promedio por envío:</span>
                  <span className="text-brand-red text-lg">{avgKgPerShipment} kg / paquete</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={avgKgPerShipment}
                  onChange={(e) => setAvgKgPerShipment(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-red"
                />
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Consolidación gratuita de múltiples tiendas en 1 sola caja</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Reempaque técnico para reducir espacio y peso volumétrico</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Delivery GRATIS en Lima Metropolitana a tu puerta</span>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6 bg-gray-50 p-8 rounded-xl border border-gray-200 space-y-6">
              
              <div className="grid grid-cols-2 gap-4">
                
                <div className="p-5 bg-gray-100 rounded-xl border border-gray-200 text-center space-y-2">
                  <span className="text-xs font-bold text-gray-500 uppercase block">Courier Tradicional</span>
                  <div className="text-2xl font-bold text-gray-500 line-through">
                    ${traditionalCost.toLocaleString()} USD
                  </div>
                  <span className="text-[11px] text-gray-500 block">$10/kg + $15 gasto adm. + cobros extras</span>
                </div>

                <div className="p-5 bg-gray-100 rounded-xl border border-brand-red/40 text-center space-y-2">
                  <span className="text-xs font-bold text-brand-red uppercase block">AEROBOX PRO</span>
                  <div className="text-3xl font-bold text-gray-900">
                    ${aeroboxCost.toLocaleString()} USD
                  </div>
                  <span className="text-[11px] text-emerald-700 font-bold block">$8/kg Tarifa Plana</span>
                </div>

              </div>

              <div className="p-6 bg-emerald-600/10 border border-emerald-500/30 rounded-xl text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                  <TrendingDown className="w-4 h-4" /> Ahorro Anual Proyectado ({percentageSaved}% Menos)
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-emerald-700">
                  ${totalSavingsUsd.toLocaleString()} <span className="text-sm font-bold text-gray-600">USD</span>
                </div>
                <p className="text-xs text-gray-500">
                  Equivalente a <strong className="text-gray-900">S/ {(totalSavingsUsd * 3.75).toLocaleString(undefined, { maximumFractionDigits: 0 })} PEN</strong> directo a tu bolsillo.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
