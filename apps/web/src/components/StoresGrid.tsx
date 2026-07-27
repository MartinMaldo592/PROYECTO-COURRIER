'use client';

import React, { useState } from 'react';
import { COMPATIBLE_STORES } from '../data/mockData';
import { StoreItem } from '../types';
import { ExternalLink, Search } from 'lucide-react';

export const StoresGrid: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredStores = COMPATIBLE_STORES.filter((store) => {
    const matchesCategory = filterCategory === 'all' || store.category === filterCategory;
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          store.popularItems.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tiendas" className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold tracking-widest text-brand-red uppercase bg-brand-red/10 px-3.5 py-1.5 rounded-full">
            Sin Límites de Compra
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Compra en <span className="text-brand-red">Cualquier Tienda</span> de EE.UU.
          </h2>
          <p className="text-base sm:text-lg text-gray-500">
            Recibimos compras de todas las tiendas virtuales de Estados Unidos.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {['all', 'tech', 'fashion', 'general', 'luxury'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all whitespace-nowrap ${
                  filterCategory === cat
                    ? 'bg-brand-red text-gray-900'
                    : 'bg-gray-100 border border-gray-200 text-gray-500 hover:text-gray-900'
                }`}
              >
                {cat === 'all' ? 'Todas' : cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-neutral-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar tienda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 border border-gray-200 rounded-xl pl-10 pr-4 py-2 text-xs text-gray-900 focus:outline-none focus:border-brand-red"
            />
          </div>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-red/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-gray-900">
                    {store.name}
                  </span>
                  <a
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-gray-100 rounded-lg text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2">
                  <strong className="text-gray-500">Populares:</strong> {store.popularItems}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-brand-red">
                <span>Casillero Miami</span>
                <span className="text-emerald-700">✓ Aceptado</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
