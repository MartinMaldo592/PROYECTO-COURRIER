'use client';

import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-600 uppercase bg-amber-600/10 px-3.5 py-1.5 rounded-full">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Lo que dicen nuestros Clientes
          </h2>
          <p className="text-base sm:text-lg text-gray-500">
            Más de 5,000 importadores confían en AEROBOX PRO.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-xl border border-gray-200 space-y-6 hover:border-amber-500/30 transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-xl object-cover border-2 border-amber-500/40"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  </div>
                  <p className="text-xs text-gray-500">{item.city} • <span className="text-brand-red">{item.store}</span></p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-amber-600 text-sm">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs font-bold text-gray-500 ml-2">{item.date}</span>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed italic">
                "{item.comment}"
              </p>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-bold">
                <span className="text-emerald-700 bg-emerald-600/10 px-3 py-1 rounded-full">
                  {item.savedAmount}
                </span>
                <span className="text-gray-500">Cliente Verificado ✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
