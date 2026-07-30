'use client';

import React from 'react';
import { Plane } from 'lucide-react';
import { motion } from 'framer-motion';

export const PageSkeleton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-0 z-50 bg-slate-950 flex flex-col justify-between p-4 sm:p-8 overflow-hidden select-none"
    >
      {/* Top Navbar Skeleton Placeholder */}
      <div className="container mx-auto flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-600/30 animate-pulse flex items-center justify-center">
            <Plane className="w-5 h-5 text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          <div className="space-y-1.5">
            <div className="w-32 h-4 bg-slate-800 rounded-lg animate-pulse" />
            <div className="w-20 h-2.5 bg-slate-800/80 rounded-md animate-pulse" />
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <div className="w-20 h-8 bg-slate-800 rounded-xl animate-pulse" />
          <div className="w-24 h-8 bg-slate-800 rounded-xl animate-pulse" />
          <div className="w-32 h-10 bg-blue-600/30 rounded-xl animate-pulse" />
        </div>
      </div>

      {/* Hero Center Skeleton Placeholder */}
      <div className="container mx-auto max-w-4xl space-y-6 text-center my-auto">
        <div className="mx-auto w-48 h-6 bg-blue-500/20 border border-blue-400/30 rounded-full animate-pulse" />
        
        <div className="space-y-3">
          <div className="mx-auto max-w-2xl h-10 sm:h-14 bg-slate-800 rounded-2xl animate-pulse" />
          <div className="mx-auto max-w-lg h-10 sm:h-14 bg-slate-800/80 rounded-2xl animate-pulse" />
        </div>

        <div className="mx-auto max-w-xl h-12 bg-slate-800/60 rounded-xl animate-pulse" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <div className="w-full sm:w-48 h-12 bg-blue-600/40 rounded-xl animate-pulse" />
          <div className="w-full sm:w-40 h-12 bg-slate-800 rounded-xl animate-pulse" />
          <div className="w-full sm:w-40 h-12 bg-emerald-600/30 rounded-xl animate-pulse" />
        </div>
      </div>

      {/* Bottom Footer Loader Line */}
      <div className="container mx-auto text-center py-2 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
        <span className="text-xs font-mono font-bold text-slate-400 tracking-widest uppercase">
          Cargando AEROBOX PRO...
        </span>
      </div>
    </motion.div>
  );
};
