'use client';

import React from 'react';
import { ShieldCheck, MapPin, Award, CheckCircle, Lock } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center md:text-left">
          
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 bg-amber-600/10 rounded-xl text-amber-600">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-600 text-xs font-bold">
                ★★★★★ <span className="text-gray-900 ml-1">4.9/5.0</span>
              </div>
              <p className="text-xs text-gray-500">Google & Facebook Reviews</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 bg-brand-red/10 rounded-xl text-brand-red">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">Almacenes Propios</h4>
              <p className="text-xs text-gray-500">Miami (Doral, FL) & Lima</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 bg-brand-red/10 rounded-xl text-brand-red">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">Despacho SUNAT Oficial</h4>
              <p className="text-xs text-gray-500">Gestión Aduanera 100% Legal</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2.5 bg-emerald-600/10 rounded-xl text-emerald-700">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">Cero Costos Ocultos</h4>
              <p className="text-xs text-gray-500">$8.00 USD/kg Tarifa Plana</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
