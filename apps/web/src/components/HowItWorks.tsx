'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Building, Layers, Plane, ShieldAlert, Home, ArrowRight, Check } from 'lucide-react';

interface HowItWorksProps {
  onOpenCalculator: () => void;
  onOpenBuyForMe: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenCalculator, onOpenBuyForMe }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Compras en Tiendas de EE.UU.',
      subtitle: 'Compras tú mismo o usamos "Compramos por Ti"',
      desc: 'Elige tus productos favoritos en Amazon, Apple, Nike, eBay, BestBuy, Walmart o cualquier tienda online de EE.UU. Si tu tarjeta es rechazada, nosotros compramos por ti.',
      icon: ShoppingCart,
      color: 'from-blue-500 to-cyan-400',
      badge: 'Paso 1: Tienda Online'
    },
    {
      num: '02',
      title: 'Enviadas a tu Casillero en Miami',
      subtitle: 'Recibimos en nuestro Warehouse propio',
      desc: 'Colocas tu dirección personalizada de Miami (Casillero Gratuito AEROBOX). Recibimos tu compra, la fotografiamos y la ingresamos a tu casillero digital.',
      icon: Building,
      color: 'from-cyan-400 to-emerald-400',
      badge: 'Paso 2: Miami Warehouse'
    },
    {
      num: '03',
      title: 'Consolidación & Reempaque Gratis',
      subtitle: 'Eliminamos peso volumétrico innecesario',
      desc: 'Juntamos tus paquetes de distintas tiendas en 1 sola caja optimizada. Eliminamos cajas sobrantes y relleno innecesario para ahorrar hasta 60% en peso volumétrico.',
      icon: Layers,
      color: 'from-amber-400 to-rose-400',
      badge: 'Paso 3: Ahorro Inteligente'
    },
    {
      num: '04',
      title: 'Vuelo Exprés Miami → Lima',
      subtitle: 'Tránsito aéreo súper rápido (48-72 hrs)',
      desc: 'Tus paquetes abordan nuestros vuelos regulares directos a Lima. Carga asegurada en todo momento con número de seguimiento en vivo.',
      icon: Plane,
      color: 'from-rose-500 to-brand-red',
      badge: 'Paso 4: Vuelo Directo'
    },
    {
      num: '05',
      title: 'Despacho Aduanero SUNAT',
      subtitle: 'Cero complicaciones administrativas',
      desc: 'Gestionamos todo el trámite de aduanas SUNAT por ti. Compras menores a $200.00 USD pasan 100% libres de impuestos aduaneros.',
      icon: ShieldAlert,
      color: 'from-purple-500 to-pink-500',
      badge: 'Paso 5: Aduanas Perú'
    },
    {
      num: '06',
      title: 'Entrega en Puerta / Provincias',
      subtitle: 'Delivery GRATIS en Lima Metropolitana',
      desc: 'Recibes tu pedido directamente en la puerta de tu domicilio u oficina en Lima (Delivery GRATIS) o despachamos a cualquier provincia vía Shalom, Olva o Marvisur.',
      icon: Home,
      color: 'from-emerald-400 to-teal-500',
      badge: 'Paso 6: En Tus Manos'
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-red uppercase bg-brand-red/10 px-3.5 py-1.5 rounded-full">
            Proceso Transparente
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            ¿Cómo funciona <span className="text-brand-red">AEROBOX PRO</span>?
          </h2>
          <p className="text-base sm:text-lg text-gray-500">
            Importar desde Estados Unidos nunca fue tan sencillo. Sigue estos 6 pasos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setActiveStep(idx)}
                className={`bg-white p-8 rounded-xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-brand-red bg-gray-100'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="inline-block text-[11px] font-bold text-gray-600 bg-gray-200 px-3 py-1 rounded-full mb-6">
                  {step.badge}
                </span>

                <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-6">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-gray-500 mb-3">
                  {step.subtitle}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>

                <div className="mt-6 flex items-center justify-between text-xs font-bold text-gray-500 pt-4 border-t border-gray-200">
                  <span>Paso {step.num} de 06</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-brand-red' : ''}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 bg-white border border-gray-200 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold text-gray-900">¿Listo para calcular el costo de tu primera importación?</h4>
            <p className="text-sm text-gray-500">Prueba nuestra calculadora de envíos en tiempo real.</p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button
              onClick={onOpenCalculator}
              className="w-full md:w-auto px-7 py-3.5 bg-brand-red hover:bg-brand-red-hover text-gray-900 font-bold text-sm rounded-xl transition-all"
            >
              Ir a la Calculadora
            </button>
            <button
              onClick={onOpenBuyForMe}
              className="w-full md:w-auto px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm rounded-xl border border-gray-300 transition-colors"
            >
              Compramos por Ti
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
