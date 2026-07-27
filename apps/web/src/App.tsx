'use client';

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { TrustBar } from './components/TrustBar';
import { StatsBar } from './components/StatsBar';
import { HowItWorks } from './components/HowItWorks';
import { ShippingCalculator } from './components/ShippingCalculator';
import { SavingsCalculator } from './components/SavingsCalculator';
import { ConsolidationVisualizer } from './components/ConsolidationVisualizer';
import { StoresGrid } from './components/StoresGrid';
import { DeliveryGallery } from './components/DeliveryGallery';
import { PeruMapCoverage } from './components/PeruMapCoverage';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { BlogSection } from './components/BlogSection';
import { TrackingSimulator } from './components/TrackingSimulator';
import { QuoteModal } from './components/QuoteModal';
import { BuyForMeModal } from './components/BuyForMeModal';
import { AIAssistantWidget } from './components/AIAssistantWidget';
import { Footer } from './components/Footer';

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBuyForMeModalOpen, setIsBuyForMeModalOpen] = useState(false);

  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTracking = () => {
    const el = document.getElementById('tracking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-700">
      <Navbar
        onOpenCalculator={scrollToCalculator}
        onOpenTracking={scrollToTracking}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
        onOpenBuyForMe={() => setIsBuyForMeModalOpen(true)}
      />

      {/* Main Content Sections Flow */}
      <main>
        {/* 1. Fullscreen Three.js 3D Hero */}
        <Hero3D
          onOpenCalculator={scrollToCalculator}
          onOpenTracking={scrollToTracking}
          onOpenQuote={() => setIsQuoteModalOpen(true)}
        />

        {/* 2. Trust Indicators & Social Proof */}
        <TrustBar />

        {/* 3. Animated Metrics Bar */}
        <StatsBar />

        {/* 4. Interactive 6-Step Workflow */}
        <HowItWorks
          onOpenCalculator={scrollToCalculator}
          onOpenBuyForMe={() => setIsBuyForMeModalOpen(true)}
        />

        {/* 5. Live Shipping & Customs Calculator */}
        <ShippingCalculator />

        {/* 6. Savings Comparison Calculator */}
        <SavingsCalculator />

        {/* 7. Smart Package Consolidation Visualizer */}
        <ConsolidationVisualizer />

        {/* 8. Compatible US Stores Grid */}
        <StoresGrid />

        {/* 9. Real Delivery Photos Gallery (From Client Google Drive) */}
        <DeliveryGallery />

        {/* 10. Peru Delivery Coverage Map */}
        <PeruMapCoverage />

        {/* 11. Verified Customer Testimonials */}
        <Testimonials />

        {/* 12. Searchable 30+ FAQ Accordion */}
        <FAQSection />

        {/* 13. SEO Educational Blog Guides */}
        <BlogSection />

        {/* 14. Real-Time Tracking Simulator */}
        <TrackingSimulator />

        {/* 15. Conversion Banner */}
        <section className="py-20 bg-white border-y border-gray-200 text-center">
          <div className="container mx-auto px-4 max-w-3xl space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-red bg-brand-red/10 px-4 py-1.5 rounded-full">
              ¡Comienza Hoy Mismo!
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Empieza a importar tus compras de EE.UU. al mejor precio del Perú
            </h2>
            <p className="text-base text-gray-500">
              Crea tu Casillero Gratis en Miami en 30 segundos y aprovecha nuestra tarifa plana de <strong className="text-gray-900">$8.00 USD por Kilo</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full sm:w-auto px-10 py-5 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-lg rounded-xl transition-all"
              >
                Cotizar Mi Envío Ahora
              </button>
              <button
                onClick={() => setIsBuyForMeModalOpen(true)}
                className="w-full sm:w-auto px-8 py-5 bg-gray-100 border border-gray-300 hover:border-amber-500 text-amber-600 font-bold text-base rounded-xl transition-all"
              >
                Solicitar "Compramos por Ti"
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 16. Comprehensive Footer */}
      <Footer />

      {/* Modals & AI Drawer */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <BuyForMeModal isOpen={isBuyForMeModalOpen} onClose={() => setIsBuyForMeModalOpen(false)} />
      <AIAssistantWidget />
    </div>
  );
}

export default App;
