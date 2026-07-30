import React from 'react';
import { ShieldCheck, AlertTriangle, Info } from 'lucide-react';

interface SunatTaxBadgeProps {
  productValueUsd: number;
}

export const SunatTaxBadge: React.FC<SunatTaxBadgeProps> = ({ productValueUsd }) => {
  const isTaxFree = productValueUsd <= 200;

  // Tasas tributarias de SUNAT para importaciones > $200 USD
  const adValoremRate = 0.06; // 6%
  const igvRate = 0.16;       // 16%
  const ipmRate = 0.02;       // 2% (Impuesto Promoción Municipal)
  const totalTaxRate = adValoremRate + igvRate + ipmRate; // 24% aprox

  const estimatedTaxesUsd = Math.round(productValueUsd * totalTaxRate * 100) / 100;

  if (isTaxFree) {
    return (
      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
        <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm sm:text-base">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>¡Importación 100% Libre de Impuestos SUNAT!</span>
        </div>
        <p className="text-xs text-emerald-700 leading-relaxed">
          Tus compras de hasta <strong>$200.00 USD</strong> entran a Perú con <span className="underline decoration-emerald-500 font-semibold">Arancel $0.00 y 0% de IGV</span> (Ley D.S. N° 011-2005-EF). Solo pagas el flete de envío.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
      <div className="flex items-center justify-between gap-2 text-amber-900 font-bold text-sm sm:text-base">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Compra superior a $200 USD (Aplica Impuestos SUNAT)</span>
        </div>
        <span className="text-xs bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-mono font-bold">
          ~${estimatedTaxesUsd} USD Est.
        </span>
      </div>
      <p className="text-xs text-amber-800 leading-relaxed">
        Las importaciones mayores a $200 USD abonan aranceles en aduanas: Ad-Valorem (6%), IGV (16%) e IPM (2%).
      </p>
      <div className="pt-1 flex items-center gap-1.5 text-[11px] text-amber-700 font-medium">
        <Info className="w-3.5 h-3.5 shrink-0" />
        <span>Tip: Puedes dividir tu pedido en 2 envíos de $200 USD para ahorrar el 100% de impuestos.</span>
      </div>
    </div>
  );
};
