'use client';

import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { Search, ChevronDown, HelpCircle, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('f1');
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'rates', label: 'Tarifas y Pagos' },
    { id: 'shipping', label: 'Tiempos y Envíos' },
    { id: 'customs', label: 'Aduanas SUNAT' },
    { id: 'guarantee', label: 'Garantía y Seguro' },
  ];

  const filteredFaqs = FAQS.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Limit display to 5 FAQs by default to avoid long scroll
  const displayedFaqs = showAll || searchQuery.length > 0 ? filteredFaqs : filteredFaqs.slice(0, 5);

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10">
          <span className="text-[11px] font-extrabold tracking-widest text-blue-700 uppercase bg-blue-100 px-3.5 py-1.5 rounded-full border border-blue-200">
            Centro de Ayuda
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Resolvemos tus dudas principales sobre tarifas, impuestos SUNAT, envíos a todo el Perú y casillero.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar en preguntas frecuentes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 shadow-sm"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setShowAll(false);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List (Top 5 Displayed by Default) */}
        <div className="space-y-3">
          {displayedFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all hover:border-slate-300"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-medium"
                    >
                      <p className="pt-3">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Show More / Show Less Button */}
        {filteredFaqs.length > 5 && searchQuery.length === 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-300 hover:border-blue-500 text-blue-600 font-bold text-xs rounded-xl shadow-sm hover:shadow transition-all"
            >
              <span>{showAll ? 'Mostrar menos preguntas' : `Ver más preguntas frecuentes (${filteredFaqs.length - 5} más)`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
