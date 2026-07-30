import React, { useState } from 'react';
import { X, Copy, Check, MapPin, Building2, Globe, Shield, Sparkles } from 'lucide-react';

interface MiamiAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MiamiAddressModal: React.FC<MiamiAddressModalProps> = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [clientName, setClientName] = useState('Tu Nombre Apellido');

  if (!isOpen) return null;

  const addressData = [
    { key: 'name', label: 'Full Name / Nombre', value: clientName || 'Tu Nombre Apellido' },
    { key: 'line1', label: 'Address Line 1 / Dirección 1', value: '8400 NW 25th St' },
    { key: 'line2', label: 'Address Line 2 / Suite (ID Casillero)', value: 'AERO-8842-PERU' },
    { key: 'city', label: 'City / Ciudad', value: 'Miami' },
    { key: 'state', label: 'State / Estado', value: 'Florida (FL)' },
    { key: 'zip', label: 'Zip Code / Código Postal', value: '33198' },
    { key: 'phone', label: 'US Phone / Teléfono EE.UU.', value: '+1 (786) 558-4920' },
  ];

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(key);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-blue-700 tracking-wider uppercase bg-blue-100 px-2.5 py-0.5 rounded-full">
              Casillero Físico en Miami
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Tu Dirección Personal en EE.UU.
            </h2>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          Usa estos datos exactos al comprar en <strong>Amazon, eBay, Apple, Walmart o Nike</strong>. Copia cada campo con 1-clic:
        </p>

        {/* Dynamic Name Input */}
        <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
            Personaliza tu casilla con tu nombre:
          </label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Ej. Juan Pérez"
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-900 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Address Cards Grid */}
        <div className="space-y-3">
          {addressData.map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between p-3.5 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <div className="space-y-0.5 overflow-hidden pr-2">
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">
                  {item.label}
                </span>
                <span className="text-sm font-bold text-gray-800 truncate block font-mono">
                  {item.value}
                </span>
              </div>
              <button
                onClick={() => handleCopy(item.key, item.value)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all shrink-0 ${
                  copiedField === item.key
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-700'
                }`}
              >
                {copiedField === item.key ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Footer */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>Almacén Seguro 24/7 en Florida</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Consolidación Gratis</span>
          </div>
        </div>
      </div>
    </div>
  );
};
