'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MOCK_TRACKING_DATABASE } from '../../data/mockData';
import { TrackingRecord } from '../../types';
import { Package, Search, ArrowLeft, AlertCircle, CheckCircle2, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function TrackingPage() {
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
    <div className="min-h-screen bg-slate-50 text-slate-700 antialiased flex flex-col justify-between">
      <Navbar
        onOpenCalculator={() => { window.location.href = '/#calculadora'; }}
        onOpenTracking={() => {}}
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
              <Package className="w-4 h-4" /> Búsqueda Oficial de Paquetes
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Rastreo de Envíos <span className="text-blue-600">USA → Perú</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Ingresa tu código de seguimiento o prueba con: {' '}
              <button onClick={() => setSearchCode('AB-9042-PE')} className="text-blue-600 font-bold underline hover:text-blue-800">AB-9042-PE</button>, {' '}
              <button onClick={() => setSearchCode('AB-5510-PE')} className="text-blue-600 font-bold underline hover:text-blue-800">AB-5510-PE</button> o {' '}
              <button onClick={() => setSearchCode('AB-3312-PE')} className="text-blue-600 font-bold underline hover:text-blue-800">AB-3312-PE</button>.
            </p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Package className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Código de Rastreo (ej. AB-9042-PE)..."
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold text-slate-900 focus:outline-none focus:border-blue-600 shadow-sm uppercase font-mono"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm rounded-2xl transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Buscar Paquete
            </button>
          </form>

          {/* Tracking Result Card */}
          {activeRecord && (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/5 space-y-8 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">Código de Seguimiento</span>
                  <h3 className="text-2xl font-black text-slate-900 font-mono">{activeRecord.code}</h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    Cliente: <strong className="text-slate-800">{activeRecord.clientName}</strong> • Destino: <strong className="text-slate-800">{activeRecord.destinationCity}</strong>
                  </p>
                </div>

                <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-100 text-left sm:text-right">
                  <span className="text-[11px] font-extrabold text-blue-700 block uppercase">Estado Actual</span>
                  <span className="text-sm font-extrabold text-emerald-600 flex items-center sm:justify-end gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    {activeRecord.currentStatus}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 block mt-1">Entrega estimada: {activeRecord.estimatedDelivery}</span>
                </div>
              </div>

              {/* Timeline Steps */}
              <div className="space-y-6 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
                {activeRecord.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 relative z-10">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        step.completed
                          ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                          : step.active
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                          : 'bg-white border border-slate-300 text-slate-400'
                      }`}
                    >
                      {step.completed ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                    </div>

                    <div className="space-y-0.5 pt-0.5">
                      <h4 className={`text-sm font-bold ${step.completed || step.active ? 'text-slate-900' : 'text-slate-400'}`}>
                        {step.title}
                      </h4>
                      <p className="text-xs font-medium text-slate-500">
                        {step.location} • <span className="text-slate-400 font-mono">{step.date}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {notFound && (
            <div className="bg-white border border-rose-200 p-8 rounded-3xl text-center space-y-3 shadow-md">
              <AlertCircle className="w-10 h-10 text-rose-500 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">Código no encontrado</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium">
                Verifica que el código ingresado sea correcto (ejemplo: AB-9042-PE).
              </p>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
