'use client';

import React, { useState } from 'react';
import { X, Sparkles, ShoppingBag, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface BuyForMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BuyForMeModal: React.FC<BuyForMeModalProps> = ({ isOpen, onClose }) => {
  const [productUrl, setProductUrl] = useState('');
  const [storeName, setStoreName] = useState('Amazon');
  const [estimatedPriceUsd, setEstimatedPriceUsd] = useState('150');
  const [clientNotes, setClientNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola AEROBOX PRO 👋, deseo solicitar el servicio "Compramos por Ti":\n` +
      `🔗 Enlace: ${productUrl}\n` +
      `🏪 Tienda: ${storeName}\n` +
      `💵 Precio Estimado: $${estimatedPriceUsd} USD\n` +
      `📝 Notas: ${clientNotes}`;

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600/10 text-amber-600 text-xs font-bold">
            <Sparkles className="w-4 h-4" /> Compramos por Ti
          </div>
          <h2 className="text-2xl font-bold text-gray-900">¿Rechazaron tu tarjeta en EE.UU.?</h2>
          <p className="text-xs text-gray-500">Compramos usando nuestros métodos de pago locales de Miami.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-600 block mb-1">Enlace del Producto (URL)</label>
            <input
              type="url"
              required
              placeholder="https://www.nike.com/t/jordan-retro-..."
              value={productUrl}
              onChange={(e) => setProductUrl(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs text-gray-900 focus:border-brand-red focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-600 block mb-1">Nombre de la Tienda</label>
              <input
                type="text"
                required
                placeholder="Ej. Nike USA, Sephora"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs text-gray-900 focus:border-brand-red focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-600 block mb-1">Precio Estimado ($ USD)</label>
              <input
                type="number"
                required
                placeholder="150"
                value={estimatedPriceUsd}
                onChange={(e) => setEstimatedPriceUsd(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs text-gray-900 focus:border-brand-red focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-600 block mb-1">Especificaciones</label>
            <textarea
              rows={2}
              placeholder="Ej. Talla 9.5 US, Color Negro..."
              value={clientNotes}
              onChange={(e) => setClientNotes(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs text-gray-900 focus:border-brand-red focus:outline-none resize-none"
            />
          </div>

          <div className="p-3 bg-amber-600/10 rounded-xl border border-amber-600/20 text-[11px] text-amber-600">
            Comisión del 5% (mínimo $5 USD). Incluye verificación física del producto en Miami.
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-brand-red hover:bg-brand-red-hover text-gray-900 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar en WhatsApp
          </button>
        </form>
      </motion.div>
    </div>
  );
};
