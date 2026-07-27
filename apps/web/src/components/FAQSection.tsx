'use client';

import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { FAQItem } from '../types';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('rates');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('f1');

  const categories = [
    { id: 'rates', label: 'Tarifas y Pagos' },
    { id: 'shipping', label: 'Tiempos y Envíos' },
    { id: 'buyforme', label: 'Compramos por Ti' },
    { id: 'customs', label: 'Aduanas SUNAT' },
    { id: 'guarantee', label: 'Garantía y Seguro' },
  ];

  const filteredFaqs = FAQS.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 bg-[#f8f9fa] border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-red uppercase bg-brand-red/10 px-3.5 py-1.5 rounded-full">
            Centro de Ayuda
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-base sm:text-lg text-gray-500">
            Resolvemos tus dudas sobre tarifas, impuestos SUNAT, tiempos de vuelo y seguridad.
          </p>
        </div>

        <div className="relative mb-10">
          <Search className="w-5 h-5 text-neutral-600 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar en preguntas frecuentes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 border border-gray-200 rounded-xl pl-12 pr-4 py-4 text-sm text-gray-900 focus:outline-none focus:border-brand-red"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeCategory === 'all'
                ? 'bg-brand-red text-gray-900'
                : 'bg-gray-100 border border-gray-200 text-gray-500 hover:text-gray-900'
            }`}
          >
            Ver Todas (30)
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand-red text-gray-900'
                  : 'bg-gray-100 border border-gray-200 text-gray-500 hover:text-gray-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-gray-900 hover:text-brand-red transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-red shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-neutral-600 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-red' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-0 text-xs sm:text-sm text-gray-500 leading-relaxed border-t border-gray-200 mt-1"
                    >
                      <p className="pt-3">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
