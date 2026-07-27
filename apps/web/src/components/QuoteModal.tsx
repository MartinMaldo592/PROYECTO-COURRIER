'use client';

import React, { useState } from 'react';
import { X, Send, Calculator, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Lima');
  const [productDesc, setProductDesc] = useState('');
  const [weightKg, setWeightKg] = useState('2');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola AEROBOX PRO 👋, me llamo ${name}. Quisiera cotizar un envío:\n` +
      `📦 Producto: ${productDesc}\n` +
      `⚖️ Peso aproximado: ${weightKg} kg\n` +
      `📍 Ciudad de entrega: ${city}\n` +
      `📱 Teléfono: ${phone}`;

    window.open(`https://wa.me/51987654321?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/90">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white border border-gray-200 p-8 rounded-2xl max-w-lg w-full relative space-y-6"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-gray-100 text-gray-500 hover:text-gray-900 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-xs font-bold text-brand-red uppercase tracking-wider block">Cotización Exprés</span>
          <h2 className="text-2xl font-bold text-gray-900">Solicita tu Cotización</h2>
          <p className="text-xs text-gray-500">Recibe una estimación exacta vía WhatsApp.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-600 block mb-1">Nombres y Apellidos</label>
            <input
              type="text"
              required
              placeholder="Ej. Juan Pérez"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs text-gray-900 focus:border-brand-red focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-600 block mb-1">Teléfono / WhatsApp</label>
              <input
                type="tel"
                required
                placeholder="Ej. 987654321"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs text-gray-900 focus:border-brand-red focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-600 block mb-1">Ciudad de Destino</label>
              <input
                type="text"
                required
                placeholder="Ej. Lima, Arequipa, Cusco"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs text-gray-900 focus:border-brand-red focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-600 block mb-1">Descripción del Producto o Enlace</label>
            <textarea
              required
              rows={2}
              placeholder="Ej. Laptop Asus Rog Strix o link de Amazon..."
              value={productDesc}
              onChange={(e) => setProductDesc(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs text-gray-900 focus:border-brand-red focus:outline-none resize-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-600 block mb-1">Peso Estimado (KG)</label>
            <input
              type="number"
              step="0.5"
              value={weightKg}
              onChange={(e) => setWeightKg(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs text-gray-900 focus:border-brand-red focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-brand-red hover:bg-brand-red-hover text-gray-900 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Enviar Cotización vía WhatsApp
          </button>
        </form>
      </motion.div>
    </div>
  );
};
