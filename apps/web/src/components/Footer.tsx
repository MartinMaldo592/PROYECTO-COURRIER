'use client';

import React from 'react';
import { Plane, MapPin, Phone, Mail, Clock, ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-12 text-gray-500 text-xs">
      <div className="container mx-auto px-4 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-red flex items-center justify-center text-gray-900">
                <Plane className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-gray-900 tracking-wider">
                AEROBOX <span className="text-brand-red">PRO</span>
              </span>
            </a>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Plataforma de courier internacional especializada en importar productos desde Estados Unidos a cualquier ciudad del Perú por <strong className="text-gray-900">$8.00 USD/kg</strong>.
            </p>
            <div className="flex items-center gap-3 text-gray-500">
              <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-emerald-700" /> SSL 256-bit</span>
              <span>•</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-brand-red" /> SUNAT Licencia</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#como-funciona" className="hover:text-gray-900 transition-colors">¿Cómo Funciona?</a></li>
              <li><a href="#calculadora" className="hover:text-gray-900 transition-colors">Calculadora de Tarifas</a></li>
              <li><a href="#ahorro" className="hover:text-gray-900 transition-colors">Comparador de Ahorro</a></li>
              <li><a href="#consolidacion" className="hover:text-gray-900 transition-colors">Consolidación en Miami</a></li>
              <li><a href="#tiendas" className="hover:text-gray-900 transition-colors">Tiendas Compatibles</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Oficinas Físicas</h4>
            <div className="space-y-3 text-gray-500">
              <div>
                <strong className="text-gray-900 block font-semibold">Almacén Miami (USA):</strong>
                <span>8300 NW 30th Terrace, Ste 400, Doral, FL 33122</span>
              </div>
              <div>
                <strong className="text-gray-900 block font-semibold">Centro Operativo Lima (Perú):</strong>
                <span>Av. Javier Prado Este 2450, San Isidro, Lima</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Atención al Cliente</h4>
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <span>+51 987 654 321</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-red" />
                <span>soporte@aerobox.pe</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-700" />
                <span>Lun - Sáb: 8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p>© 2026 AEROBOX PRO Logistics Inc. Todos los derechos reservados. RUC 20601234567.</p>
          <div className="flex items-center gap-3 text-[11px] font-bold text-gray-500">
            <span className="px-2.5 py-1 bg-gray-100 rounded border border-gray-200">Yape / Plin</span>
            <span className="px-2.5 py-1 bg-gray-100 rounded border border-gray-200">BCP / Interbank</span>
            <span className="px-2.5 py-1 bg-gray-100 rounded border border-gray-200">Visa / Mastercard</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
