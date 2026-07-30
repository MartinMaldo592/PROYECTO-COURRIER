'use client';

import React from 'react';
import { ShoppingBag, CheckCircle2, Globe2 } from 'lucide-react';

export const StoresGrid: React.FC = () => {
  const featuredStores = [
    { name: 'Amazon USA', category: 'General', icon: '🛒' },
    { name: 'Apple Store', category: 'Tech', icon: '🍎' },
    { name: 'Nike USA', category: 'Moda', icon: '👟' },
    { name: 'eBay USA', category: 'General', icon: '📦' },
    { name: 'BestBuy', category: 'Tech', icon: '💻' },
    { name: 'Walmart', category: 'General', icon: '🏬' },
    { name: 'Sephora', category: 'Belleza', icon: '💄' },
    { name: "Carter's", category: 'Niños', icon: '👶' },
    { name: 'B&H Photo', category: 'Cámaras', icon: '📷' },
    { name: 'Shein USA', category: 'Moda', icon: '👗' },
    { name: "Macy's", category: 'Moda', icon: '🛍️' },
    { name: 'StockX / GOAT', category: 'Zapatillas', icon: '🔥' },
    { name: 'Newegg', category: 'Gaming', icon: '🎮' },
    { name: 'Disneystore', category: 'Juguetes', icon: '✨' },
    { name: 'Victoria Secret', category: 'Moda', icon: '💖' },
    { name: 'Ralph Lauren', category: 'Lujo', icon: '👔' },
  ];

  return (
    <section id="tiendas" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <span className="text-[11px] font-extrabold tracking-widest text-blue-700 uppercase bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            Sin Límites de Tiendas
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Compra en <span className="text-blue-600">Cualquier Tienda</span> de EE.UU.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Recibimos compras de absolutamente todas las plataformas y tiendas virtuales de Estados Unidos.
          </p>
        </div>

        {/* Ultra Compact Store Mention Chips Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
          {featuredStores.map((store) => (
            <div
              key={store.name}
              className="bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 group cursor-default"
            >
              <span className="text-sm">{store.icon}</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                {store.name}
              </span>
            </div>
          ))}

          {/* Plus 1000 Stores Badge */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold flex items-center gap-1.5 shadow-md shadow-blue-600/20">
            <Globe2 className="w-4 h-4" />
            <span>y +1,000 tiendas más de EE.UU.</span>
          </div>
        </div>

        {/* Compatibility Confirmation Banner */}
        <div className="bg-blue-50/80 border border-blue-200/80 rounded-xl p-3 text-center max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs font-bold text-blue-900">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>100% de las tiendas online de EE.UU. son compatibles con la dirección de tu casillero en Miami.</span>
        </div>

      </div>
    </section>
  );
};
