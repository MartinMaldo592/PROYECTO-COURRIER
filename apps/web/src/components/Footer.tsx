'use client';

import React from 'react';
import { Plane, MapPin, Clock, Mail, BookOpen, Facebook, Instagram } from 'lucide-react';
import { OfficialWhatsAppIcon } from './FloatingWhatsAppButton';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b132b] text-slate-300 pt-16 pb-8 border-t border-slate-800 text-xs font-sans">
      <div className="container mx-auto px-4 lg:px-8 space-y-12">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          
          {/* Column 1: Brand & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-wider">
                  AEROBOX <span className="text-blue-500">PRO</span>
                </span>
                <span className="block text-[9px] font-bold text-slate-400 tracking-widest uppercase">
                  Courier USA → Perú
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-xs leading-relaxed">
              Servicio de courier seguro y confiable de USA a Perú.
            </p>

            {/* Social Links Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all font-bold text-[11px]"
                aria-label="TikTok"
              >
                <span>d</span>
              </a>
            </div>
          </div>

          {/* Column 2: Enlaces Rápidos (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Enlaces rápidos</h4>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a></li>
              <li><a href="#calculadora" className="hover:text-white transition-colors">Calculadora</a></li>
              <li><a href="#tiendas" className="hover:text-white transition-colors">Cómo comprar en USA</a></li>
              <li><a href="#calculadora" className="hover:text-white transition-colors">Dirección de USA</a></li>
              <li><a href="#consolidacion" className="hover:text-white transition-colors">Importa desde China</a></li>
              <li><a href="#ahorro" className="hover:text-white transition-colors">AeroPuntos</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Información (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Información</h4>
            <ul className="space-y-3.5 text-slate-400 font-medium">
              <li>
                <a href="#" className="hover:text-white transition-colors block">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
                  <div className="p-1 bg-amber-500/20 text-amber-500 rounded group-hover:scale-110 transition-transform">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-slate-200">Libro de reclamaciones</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Nuestra Oficina (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Nuestra oficina</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <strong className="text-slate-200 font-medium block">Surquillo, Lima - Perú</strong>
                  <span className="text-[11px] block">Jirón Dante 454, 3er piso</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[11px] block text-slate-300 font-medium">Lun - Vie: 9:00 am - 6:00 pm</span>
                  <span className="text-[11px] block">Sáb: 9:00 am - 1:00 pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 5: Atención al Cliente & CTA WhatsApp (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wide">Atención al cliente</h4>
            
            <ul className="space-y-2.5 text-slate-300 font-medium">
              <li className="flex items-center gap-2.5">
                <OfficialWhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/51987654321" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-mono">
                  +51 987 654 321
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:contacto@aeroboxpro.pe" className="hover:text-white transition-colors">
                  contacto@aeroboxpro.pe
                </a>
              </li>
            </ul>

            {/* Prominent Green WhatsApp CTA Button */}
            <a
              href="https://wa.me/51987654321?text=Hola%20AEROBOX%20PRO,%20quisiera%20cotizar%20un%20env%C3%ADo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 bg-[#10b981] hover:bg-[#059669] text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <OfficialWhatsAppIcon className="w-4 h-4" />
              <span>Cotizar por WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2026 Aerobox Pro. Todos los derechos reservados.</p>
          <p>
            Desarrollado y diseñado por <strong className="text-slate-200">Aerobox Pro Team</strong>.
          </p>
        </div>

      </div>
    </footer>
  );
};
