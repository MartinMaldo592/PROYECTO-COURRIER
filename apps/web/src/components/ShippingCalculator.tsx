'use client';

import React, { useState } from 'react';
import { Calculator, ShieldAlert, CheckCircle, ArrowRight, Info, AlertTriangle, Sparkles, MessageCircle } from 'lucide-react';
import { PERU_DEPARTMENTS } from '../data/mockData';
import { ProductCategory } from '../types';
import confetti from 'canvas-confetti';

export const ShippingCalculator: React.FC = () => {
  const [weightKg, setWeightKg] = useState<number>(1.5);
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');
  const [selectedDeptId, setSelectedDeptId] = useState<string>('lima');
  const [category, setCategory] = useState<ProductCategory>('tech');
  const [declaredValueUsd, setDeclaredValueUsd] = useState<number>(140);
  const [includeInsurance, setIncludeInsurance] = useState<boolean>(true);
  const [includeBuyForMe, setIncludeBuyForMe] = useState<boolean>(false);

  // Conversion calculations
  const actualWeightKg = weightUnit === 'lb' ? weightKg * 0.453592 : weightKg;
  const roundedWeightKg = Math.max(0.5, Math.ceil(actualWeightKg * 10) / 10); // Minimum 0.5 kg, rounded to 1 decimal

  // Base Shipping Rate: $8.00 USD per kg
  const baseShippingUsd = roundedWeightKg * 8.0;

  // SUNAT Tax Logic: Exemption under $200 FOB
  const isSunatTaxExempt = declaredValueUsd <= 200;
  const estimatedSunatTaxesUsd = isSunatTaxExempt ? 0 : declaredValueUsd * 0.22; // ~4% Ad Valorem + 18% IGV

  // Insurance Logic (1.5% of value, min $3 USD)
  const insuranceUsd = includeInsurance ? Math.max(3, declaredValueUsd * 0.015) : 0;

  // Buy for me commission (5%, min $5 USD)
  const buyForMeUsd = includeBuyForMe ? Math.max(5, declaredValueUsd * 0.05) : 0;

  // Selected Department Info
  const deptInfo = PERU_DEPARTMENTS.find((d) => d.id === selectedDeptId) || PERU_DEPARTMENTS[0];

  // Total Estimated Cost
  const totalUsd = baseShippingUsd + estimatedSunatTaxesUsd + insuranceUsd + buyForMeUsd;
  const exchangeRatePen = 3.75;
  const totalPen = totalUsd * exchangeRatePen;

  // Trigger celebration on calculation quote export
  const handleExportQuote = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const msg = `Hola AEROBOX PRO 👋, quiero solicitar una cotización con los siguientes datos:\n` +
      `📦 Peso: ${weightKg} ${weightUnit.toUpperCase()} (${roundedWeightKg.toFixed(1)} kg)\n` +
      `📍 Destino: ${deptInfo.name}\n` +
      `🏷️ Categoría: ${category.toUpperCase()}\n` +
      `💵 Valor Declarado: $${declaredValueUsd} USD\n` +
      `🛡️ Seguro de Carga: ${includeInsurance ? 'Sí' : 'No'}\n` +
      `🛍️ Compramos por Ti: ${includeBuyForMe ? 'Sí' : 'No'}\n` +
      `---------------------------\n` +
      `💰 Costo Total Estimado: $${totalUsd.toFixed(2)} USD (S/ ${totalPen.toFixed(2)})`;

    window.open(`https://wa.me/51987654321?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="calculadora" className="py-24 bg-[#f8f9fa] border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-red uppercase bg-brand-red/10 px-3.5 py-1.5 rounded-full">
            Calculadora de Envíos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Calcula el costo exacto de tu <span className="text-brand-red">Envío a Perú</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500">
            Ingresa los datos de tu compra. Transparencia total a <strong className="text-gray-900">$8.00 USD por kg</strong> sin sorpresas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 bg-white border border-gray-200 p-8 rounded-xl space-y-6">
            
            {/* Weight Input & Toggle */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-gray-700">Peso del Paquete</label>
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl border border-gray-200 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setWeightUnit('kg')}
                    className={`px-3 py-1 rounded-lg transition-colors ${weightUnit === 'kg' ? 'bg-brand-red text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                  >
                    Kilogramos (KG)
                  </button>
                  <button
                    type="button"
                    onClick={() => setWeightUnit('lb')}
                    className={`px-3 py-1 rounded-lg transition-colors ${weightUnit === 'lb' ? 'bg-brand-red text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                  >
                    Libras (LB)
                  </button>
                </div>
              </div>

              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  max="100"
                  value={weightKg}
                  onChange={(e) => setWeightKg(parseFloat(e.target.value) || 0.5)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-2xl font-bold text-gray-900 focus:outline-none focus:border-brand-red transition-colors"
                />
                <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-500 uppercase">
                  {weightUnit}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Peso facturable equivalente: <strong className="text-brand-red">{roundedWeightKg.toFixed(1)} kg</strong> (tarifa plana de $8.00/kg).
              </p>
            </div>

            {/* Destination Department Selector */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Ciudad / Departamento de Destino en Perú</label>
              <select
                value={selectedDeptId}
                onChange={(e) => setSelectedDeptId(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-900 focus:outline-none focus:border-brand-red"
              >
                {PERU_DEPARTMENTS.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name} ({dept.isFreeLima ? 'Delivery GRATIS' : `Envío por ${dept.partner}`})
                  </option>
                ))}
              </select>
            </div>

            {/* Category & Declared Value */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Categoría del Producto</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as ProductCategory)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-900 focus:outline-none focus:border-brand-red"
                >
                  <option value="tech">Tecnología & Laptops</option>
                  <option value="fashion">Moda & Calzado</option>
                  <option value="auto">Repuestos Vehículos</option>
                  <option value="toys">Juguetes & Coleccionables</option>
                  <option value="cosmetics">Cosméticos Permitidos</option>
                  <option value="machinery">Maquinaria Ligera</option>
                  <option value="other">Otros Productos</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Valor Declarado ($ USD)</label>
                <input
                  type="number"
                  min="1"
                  value={declaredValueUsd}
                  onChange={(e) => setDeclaredValueUsd(parseFloat(e.target.value) || 10)}
                  className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3.5 text-sm font-bold text-gray-900 focus:outline-none focus:border-brand-red"
                />
              </div>
            </div>

            {/* SUNAT Warning / Alert Pill */}
            {isSunatTaxExempt ? (
              <div className="p-4 bg-emerald-600/10 border border-emerald-500/30 rounded-xl flex items-start gap-3 text-xs text-emerald-700">
                <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900 font-bold text-sm">¡Excelente! Exonerado de Impuestos SUNAT</strong>
                  Tu compra es menor a $200.00 USD. No pagas IGV ni arancel aduanero en Perú.
                </div>
              </div>
            ) : (
              <div className="p-4 bg-amber-600/10 border border-amber-500/30 rounded-xl flex items-start gap-3 text-xs text-amber-600">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900 font-bold text-sm">Aviso SUNAT: Excede los $200.00 USD</strong>
                  Tu compra está sujeta a impuestos de aduana en Perú (~22% estimado). Nuestro agente de aduanas realiza todo el trámite por ti.
                </div>
              </div>
            )}

            {/* Optional Toggles */}
            <div className="space-y-3 pt-2">
              <label className="flex items-center gap-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-colors">
                <input
                  type="checkbox"
                  checked={includeInsurance}
                  onChange={(e) => setIncludeInsurance(e.target.checked)}
                  className="w-4 h-4 accent-brand-red rounded"
                />
                <div className="text-xs">
                  <span className="font-bold text-gray-900 block">Seguro de Carga Premium (1.5%)</span>
                  <span className="text-gray-500">Protección total contra daño, robo o extravío aéreo.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-colors">
                <input
                  type="checkbox"
                  checked={includeBuyForMe}
                  onChange={(e) => setIncludeBuyForMe(e.target.checked)}
                  className="w-4 h-4 accent-brand-red rounded"
                />
                <div className="text-xs">
                  <span className="font-bold text-gray-900 block">Servicio "Compramos por Ti" (5%)</span>
                  <span className="text-gray-500">Compramos directamente en EE.UU. si rechazan tu tarjeta.</span>
                </div>
              </label>
            </div>

          </div>

          <div className="lg:col-span-5 bg-white border border-gray-200 p-8 rounded-xl space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-brand-red" />
                <h3 className="text-lg font-bold text-gray-900">Resumen de Cotización</h3>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-600/10 px-2.5 py-1 rounded-full">
                Tarifa $8/kg
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between text-gray-500">
                <span>Flete Aéreo (${roundedWeightKg.toFixed(1)} kg x $8.00):</span>
                <span className="font-bold text-gray-900">${baseShippingUsd.toFixed(2)} USD</span>
              </div>

              <div className="flex items-center justify-between text-gray-500">
                <span>Impuestos SUNAT (FOB &gt; $200):</span>
                <span className="font-bold text-gray-900">
                  {estimatedSunatTaxesUsd === 0 ? '$0.00 (Exonerado)' : `$${estimatedSunatTaxesUsd.toFixed(2)} USD`}
                </span>
              </div>

              <div className="flex items-center justify-between text-gray-500">
                <span>Seguro de Carga:</span>
                <span className="font-bold text-gray-900">
                  {insuranceUsd === 0 ? 'Sin seguro' : `$${insuranceUsd.toFixed(2)} USD`}
                </span>
              </div>

              {includeBuyForMe && (
                <div className="flex items-center justify-between text-gray-500">
                  <span>Comisión "Compramos por Ti":</span>
                  <span className="font-bold text-amber-600">${buyForMeUsd.toFixed(2)} USD</span>
                </div>
              )}

              <div className="flex items-center justify-between text-gray-500">
                <span>Delivery en Perú ({deptInfo.name}):</span>
                <span className="font-bold text-emerald-700">
                  {deptInfo.isFreeLima ? 'GRATIS' : 'Cobro por Agencia'}
                </span>
              </div>
            </div>

            <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-500 flex items-center justify-between">
              <span>Tiempo Estimado de Entrega:</span>
              <strong className="text-brand-red font-bold">{deptInfo.deliveryDays}</strong>
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-1">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Costo Total Estimado</span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-bold text-gray-900">${totalUsd.toFixed(2)} <span className="text-sm font-normal text-gray-500">USD</span></span>
                <span className="text-lg font-bold text-emerald-700">S/ {totalPen.toFixed(2)} <span className="text-xs text-gray-500">PEN</span></span>
              </div>
              <p className="text-[11px] text-gray-500 pt-1">
                Tipo de cambio referencial S/ 3.75 por dólar.
              </p>
            </div>

            <button
              onClick={handleExportQuote}
              className="w-full py-4 bg-brand-red hover:bg-brand-red-hover text-gray-900 font-bold text-base rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar Cotización por WhatsApp
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
