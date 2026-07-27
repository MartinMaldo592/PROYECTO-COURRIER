'use client';

import React, { useState } from 'react';
import { MOCK_TRACKING_DATABASE } from '../data/mockData';
import { TrackingRecord } from '../types';
import { Package, Search, CheckCircle, Clock, MapPin, Plane, ShieldCheck, X, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface TrackingSimulatorProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const TrackingSimulator: React.FC<TrackingSimulatorProps> = ({ isOpen = false, onClose }) => {
  const [searchCode, setSearchCode] = useState<string>('AB-9042-PE');
  const [activeRecord, setActiveRecord] = useState<TrackingRecord | null>(MOCK_TRACKING_DATABASE['AB-9042-PE']);
  const [notFound, setNotFound] = useState<boolean>(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = searchCode.trim().toUpperCase();
    const record = MOCK_TRACKING_DATABASE[cleanCode];

    if (record) {
      setActiveRecord(record);
      setNotFound(false);
    } else {
      setActiveRecord(null);
      setNotFound(true);
    }
  };

  return (
    <section id="tracking" className="py-24 bg-[#f8f9fa] border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-bold tracking-widest text-brand-red uppercase bg-brand-red/10 px-3.5 py-1.5 rounded-full">
            Seguimiento
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Rastreo de Paquetes USA → Perú
          </h2>
          <p className="text-base text-gray-500">
            Ingresa tu código de seguimiento o prueba con: <strong className="text-brand-red cursor-pointer" onClick={() => setSearchCode('AB-9042-PE')}>AB-9042-PE</strong>, <strong className="text-brand-red cursor-pointer" onClick={() => setSearchCode('AB-5510-PE')}>AB-5510-PE</strong> o <strong className="text-brand-red cursor-pointer" onClick={() => setSearchCode('AB-3312-PE')}>AB-3312-PE</strong>.
          </p>
        </div>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-10">
          <div className="relative flex-1">
            <Package className="w-5 h-5 text-neutral-600 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Código de Rastreo (ej. AB-9042-PE)..."
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              className="w-full bg-gray-100 border border-gray-200 rounded-xl pl-12 pr-4 py-4 text-sm font-bold text-gray-900 focus:outline-none focus:border-brand-red uppercase"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-brand-red hover:bg-brand-red-hover text-gray-900 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            Buscar Paquete
          </button>
        </form>

        {activeRecord && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 p-8 rounded-xl space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Código de Seguimiento</span>
                <h3 className="text-2xl font-bold text-gray-900">{activeRecord.code}</h3>
                <p className="text-xs text-gray-500">Cliente: {activeRecord.clientName} • Destino: <strong className="text-gray-900">{activeRecord.destinationCity}</strong></p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-right">
                <span className="text-[11px] font-bold text-gray-500 block uppercase">Estado Actual</span>
                <span className="text-sm font-bold text-emerald-700 flex items-center justify-end gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {activeRecord.currentStatus}
                </span>
                <span className="text-[11px] text-gray-500 block mt-1">Estimado: {activeRecord.estimatedDelivery}</span>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gray-200">
              {activeRecord.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 relative z-10">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      step.completed
                        ? 'bg-emerald-500 text-gray-900'
                        : step.active
                        ? 'bg-brand-red text-gray-900'
                        : 'bg-gray-100 border border-gray-300 text-gray-500'
                    }`}
                  >
                    {step.completed ? '✓' : idx + 1}
                  </div>

                  <div className="space-y-0.5 pt-1">
                    <h4 className={`text-sm font-bold ${step.completed || step.active ? 'text-gray-900' : 'text-gray-500'}`}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {step.location} • <span className="text-neutral-600">{step.date}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        )}

        {notFound && (
          <div className="bg-white border border-rose-500/30 p-8 rounded-xl text-center space-y-3">
            <AlertCircle className="w-10 h-10 text-rose-600 mx-auto" />
            <h3 className="text-lg font-bold text-gray-900">Código no encontrado</h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              Verifica que el código ingresado sea correcto (ej. AB-9042-PE).
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
