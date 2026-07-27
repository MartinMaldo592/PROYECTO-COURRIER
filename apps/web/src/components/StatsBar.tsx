'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Users, ThumbsUp, Clock, Globe } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    { label: 'Paquetes Entregados en Perú', value: '+10,000', icon: Package, color: 'text-brand-red' },
    { label: 'Clientes Satisfechos', value: '+5,000', icon: Users, color: 'text-brand-red' },
    { label: 'Entregas a Tiempo', value: '98.9%', icon: ThumbsUp, color: 'text-emerald-700' },
    { label: 'Asesoría de Compras', value: '24/7', icon: Clock, color: 'text-amber-600' },
    { label: 'Estados de EE.UU. Cubiertos', value: '48 Estados', icon: Globe, color: 'text-purple-400' },
  ];

  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white border border-gray-200 p-8 sm:p-10 rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center space-y-2"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 max-w-[140px] mx-auto leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
