'use client';

import React, { useState } from 'react';
import { X, HelpCircle, MessageCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface BuyForMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BuyForMeModal: React.FC<BuyForMeModalProps> = ({ isOpen, onClose }) => {
  const [productUrl, setProductUrl] = useState('');
  const [storeName, setStoreName] = useState('Amazon');
  const [clientNotes, setClientNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola AEROBOX PRO 👋, quisiera solicitar Asesoría Gratuita para realizar mi compra en EE.UU.:\n` +
      `🔗 Enlace del producto: ${productUrl}\n` +
      `🏪 Tienda: ${storeName}\n` +
      `📝 Consulta / Duda: ${clientNotes}`;

    window.open(`https://wa.me/51987654321?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl max-w-lg w-full relative space-y-6 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-slate-100 text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200">
            <HelpCircle className="w-4 h-4" /> Asesoría Gratuita 1 a 1
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Te Asesoramos en tu Compra en USA
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            ¿Tienes dudas con tu cuenta, dirección de casillero o tarjeta? Te guiamos paso a paso por WhatsApp.
          </p>
        </div>

        {/* Clear Business Policy Notice */}
        <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200 text-xs text-blue-950 space-y-1.5">
          <div className="flex items-center gap-2 font-extrabold text-blue-900">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Gestión Logística AEROBOX PRO</span>
          </div>
          <p className="leading-relaxed font-medium">
            Realizas tu compra en cualquier plataforma, página o tienda de EE.UU. y colocas la dirección de nuestro casillero / warehouse en Miami. Nosotros realizamos toda la gestión logística desde la recepción en Miami hasta traerlo a Lima / provincias y entregártelo en la puerta de tu casa. Te brindamos <strong>asesoría 1 a 1 totalmente GRATIS</strong> si deseas ayuda en el proceso.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Enlace del Producto (URL)</label>
            <input
              type="url"
              required
              placeholder="https://www.amazon.com/dp/..."
              value={productUrl}
              onChange={(e) => setProductUrl(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Nombre de la Tienda</label>
            <input
              type="text"
              required
              placeholder="Ej. Amazon, Apple, Nike, eBay"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">¿En qué necesitas ayuda?</label>
            <textarea
              rows={2}
              placeholder="Ej. Tengo dudas de cómo ingresar la dirección de Miami en Amazon o cómo configurar mi casillero..."
              value={clientNotes}
              onChange={(e) => setClientNotes(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Asesoría por WhatsApp
          </button>
        </form>
      </motion.div>
    </div>
  );
};
