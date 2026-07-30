'use client';

import React from 'react';
import { ShoppingCart, Layers, Plane, Home, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onOpenCalculator: () => void;
  onOpenBuyForMe: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenCalculator, onOpenBuyForMe }) => {
  const steps = [
    {
      num: '1',
      title: 'Compras en Tiendas de EE.UU.',
      desc: 'Realizas tu compra en cualquier tienda de EE.UU. y colocas la dirección de nuestro Casillero Warehouse en Miami.',
      icon: ShoppingCart,
      badge: 'Paso 1'
    },
    {
      num: '2',
      title: 'Recepción en Miami & Consolidación Opcional',
      desc: 'Recibimos tu paquete en Miami y lo fotografiamos. Si lo solicitas, consolidamos gratis varios paquetes en 1 sola caja para ahorrar peso.',
      icon: Layers,
      badge: 'Paso 2'
    },
    {
      num: '3',
      title: 'Vuelo Exprés & Despacho SUNAT',
      desc: 'Vuelo aéreo directo a Lima (48-72h). Gestionamos SUNAT (sin impuestos si tu compra es menor a $200.00 USD).',
      icon: Plane,
      badge: 'Paso 3'
    },
    {
      num: '4',
      title: 'Entrega en tu Casa o Provincias',
      desc: 'Recibes en la puerta de tu domicilio en Lima (Delivery GRATIS) o despachamos a provincias vía Shalom, Olva, Marvisur o la agencia de transporte que elijas.',
      icon: Home,
      badge: 'Paso 4'
    }
  ];

  return (
    <section id="como-funciona" className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200/80">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8 sm:mb-10">
          <span className="text-[11px] font-extrabold tracking-widest text-blue-700 uppercase bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            Proceso Simple y Transparente
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            ¿Cómo funciona <span className="text-blue-600">AEROBOX PRO</span>?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Traer tus compras desde EE.UU. a Perú es rápido y seguro en 4 pasos concretos.
          </p>
        </div>

        {/* Compact Vertical Timeline Flow */}
        <div className="space-y-3 sm:space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex items-start gap-3.5 sm:gap-5"
              >
                {/* Step Icon Badge */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Step Content */}
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold text-blue-700 uppercase bg-blue-100/70 px-2 py-0.5 rounded-md">
                      Paso {step.num}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons Row */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={onOpenCalculator}
            className="w-full sm:flex-1 py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
          >
            <span>Cotizar mi Envío Ahora</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenBuyForMe}
            className="w-full sm:w-auto py-3 px-5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>¿Necesitas Asesoría de Compra?</span>
          </button>
        </div>

      </div>
    </section>
  );
};
