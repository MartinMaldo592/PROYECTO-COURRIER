'use client';

import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AIAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: '¡Hola! Soy AERO-AI 🤖, tu asistente de logística internacional. ¿Tienes dudas sobre tarifas ($8/kg), aduanas SUNAT o productos restringidos?' }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    const userText = inputMsg.trim();
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setInputMsg('');

    // AI Knowledge Rule Engine Response
    setTimeout(() => {
      let botResponse = 'Nuestra tarifa plana es de $8.00 USD por kg sin costos ocultos. ¿Deseas cotizar un producto específico?';
      const textLower = userText.toLowerCase();

      if (textLower.includes('200') || textLower.includes('impuesto') || textLower.includes('sunat') || textLower.includes('aduana')) {
        botResponse = ' Citas menores a $200.00 USD de valor FOB no pagan impuestos aduaneros en Perú (IGV 0% y Arancel 0%). Si supera los $200 USD, paga aprox. 22% de impuestos de importación.';
      } else if (textLower.includes('tiempo') || textLower.includes('demora') || textLower.includes('dias') || textLower.includes('vuelo')) {
        botResponse = '⚡ El tiempo promedio de tránsito aéreo es de 48 a 72 horas hábiles desde que el paquete es escaneado en nuestro warehouse de Miami.';
      } else if (textLower.includes('prohibid') || textLower.includes('restringid') || textLower.includes('perfume') || textLower.includes('arma')) {
        botResponse = '🚫 Están prohibidos: armas, municiones, drogas, perecibles y dinero. Suplementos y celulares requieren permiso (el permiso MTC para celulares lo tramitamos GRATIS).';
      } else if (textLower.includes('miami') || textLower.includes('direccion') || textLower.includes('casillero')) {
        botResponse = ' Tu dirección de Casillero en Miami es: 8300 NW 30th Terrace, Ste 400, (Tu Código AB-XXXX), Doral, FL 33122.';
      } else if (textLower.includes('comprar') || textLower.includes('tarjeta') || textLower.includes('rechaz')) {
        botResponse = '🛍️ Con nuestro servicio "Compramos por Ti", nosotros realizamos la compra en EE.UU. directamente por ti con una comisión fija del 5%.';
      }

      setMessages((prev) => [...prev, { role: 'assistant', text: botResponse }]);
    }, 600);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 p-4 bg-brand-red hover:bg-brand-red-hover text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
        aria-label="Abrir asistente"
      >
        <Bot className="w-6 h-6" />
        <span className="hidden sm:inline text-xs font-bold">Asistente IA 24/7</span>
      </button>

      {/* Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-4 sm:left-6 z-50 w-[calc(100vw-32px)] sm:w-96 bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col h-[480px] shadow-2xl"
          >
            <div className="p-4 bg-gray-100 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-brand-red/10 rounded-xl text-brand-red">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-900">AERO-AI Assistant</h3>
                  <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    En línea 24/7
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 bg-gray-200 text-gray-500 hover:text-gray-900 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-brand-red text-gray-900 rounded-tr-none'
                        : 'bg-gray-100 border border-gray-200 text-gray-700 rounded-tl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-3 bg-gray-100 border-t border-gray-200 flex gap-2">
              <input
                type="text"
                placeholder="Pregunta sobre tarifas, SUNAT..."
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                className="flex-1 bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-brand-red"
              />
              <button
                type="submit"
                className="p-2 bg-brand-red hover:bg-brand-red-hover text-gray-900 rounded-xl transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
