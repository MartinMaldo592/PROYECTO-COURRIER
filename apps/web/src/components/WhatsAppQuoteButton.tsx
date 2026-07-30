import React from 'react';
import { OfficialWhatsAppIcon } from './FloatingWhatsAppButton';

interface WhatsAppQuoteButtonProps {
  weightKg?: number;
  weightLb?: number;
  productValueUsd?: number;
  estimatedTotalUsd?: number;
  destinationCity?: string;
  className?: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const WhatsAppQuoteButton: React.FC<WhatsAppQuoteButtonProps> = ({
  weightKg = 1,
  weightLb,
  productValueUsd = 50,
  estimatedTotalUsd,
  destinationCity = 'Lima',
  className = '',
  label = 'Cotizar por WhatsApp',
  variant = 'primary',
}) => {
  const phone = '51987654321';

  const calculatedLb = weightLb || Math.round(weightKg * 2.20462 * 10) / 10;
  const shippingCost = estimatedTotalUsd || Math.round(weightKg * 8 * 100) / 100;

  const message = `👋 ¡Hola Aerobox Pro! Deseo cotizar mi envío desde EE.UU.:\n\n` +
    `📦 *Peso Estimado*: ${weightKg} kg (${calculatedLb} lbs)\n` +
    `💵 *Valor del Producto*: $${productValueUsd} USD\n` +
    `✈️ *Costo Estimado de Envío*: $${shippingCost} USD\n` +
    `📍 *Destino en Perú*: ${destinationCity}\n\n` +
    `¿Me ayudan a completar mi orden de compra o casillero?`;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const variantStyles = {
    primary: 'bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-emerald-600/25',
    secondary: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300',
    outline: 'bg-transparent hover:bg-emerald-50 text-emerald-600 border-2 border-emerald-600',
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${variantStyles[variant]} ${className}`}
    >
      <OfficialWhatsAppIcon className="w-5 h-5" />
      <span>{label}</span>
    </a>
  );
};
