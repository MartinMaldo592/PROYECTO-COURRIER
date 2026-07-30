'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { HowItWorks } from './components/HowItWorks';
import { ShippingCalculator } from './components/ShippingCalculator';
import { SavingsCalculator } from './components/SavingsCalculator';
import { ConsolidationVisualizer } from './components/ConsolidationVisualizer';
import { StoresGrid } from './components/StoresGrid';
import { DeliveryGallery } from './components/DeliveryGallery';
import { PeruMapCoverage } from './components/PeruMapCoverage';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { TrackingSimulator } from './components/TrackingSimulator';
import { QuoteModal } from './components/QuoteModal';
import { BuyForMeModal } from './components/BuyForMeModal';
import { MiamiAddressModal } from './components/MiamiAddressModal';
import { AIAssistantWidget } from './components/AIAssistantWidget';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Footer } from './components/Footer';
import { PageSkeleton } from './components/PageSkeleton';
import { ScrollReveal } from './components/ScrollReveal';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBuyForMeModalOpen, setIsBuyForMeModalOpen] = useState(false);
  const [isMiamiAddressModalOpen, setIsMiamiAddressModalOpen] = useState(false);

  useEffect(() => {
    // Show high quality initial skeleton screen for 1.1s on first load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTracking = () => {
    const el = document.getElementById('tracking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-700 antialiased selection:bg-blue-600 selection:text-white">
      
      {/* Initial Professional Skeleton Screen */}
      <AnimatePresence>
        {isLoading && <PageSkeleton key="skeleton" />}
      </AnimatePresence>

      <Navbar
        onOpenCalculator={scrollToCalculator}
        onOpenTracking={scrollToTracking}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
        onOpenBuyForMe={() => setIsBuyForMeModalOpen(true)}
        onOpenMiamiAddress={() => setIsMiamiAddressModalOpen(true)}
      />

      {/* Main Content Flow with Scroll Reveal Animations */}
      <main>
        {/* 1. Fullscreen Hero Section */}
        <Hero3D
          onOpenCalculator={scrollToCalculator}
          onOpenTracking={scrollToTracking}
          onOpenQuote={() => setIsQuoteModalOpen(true)}
        />

        {/* 2. Interactive Workflow (Compact Vertical List) */}
        <ScrollReveal>
          <HowItWorks
            onOpenCalculator={scrollToCalculator}
            onOpenBuyForMe={() => setIsBuyForMeModalOpen(true)}
          />
        </ScrollReveal>

        {/* 3. Live Shipping & Customs Calculator */}
        <ScrollReveal>
          <ShippingCalculator />
        </ScrollReveal>

        {/* 4. Savings Comparison Calculator */}
        <ScrollReveal>
          <SavingsCalculator />
        </ScrollReveal>

        {/* 5. Smart Package Consolidation Visualizer */}
        <ScrollReveal>
          <ConsolidationVisualizer />
        </ScrollReveal>

        {/* 6. Compatible US Stores Mentions Grid */}
        <ScrollReveal>
          <StoresGrid />
        </ScrollReveal>

        {/* 7. Real Delivery Photos Gallery */}
        <ScrollReveal>
          <DeliveryGallery />
        </ScrollReveal>

        {/* 8. Peru Delivery Coverage Map */}
        <ScrollReveal>
          <PeruMapCoverage />
        </ScrollReveal>

        {/* 9. Verified Customer Testimonials */}
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        {/* 10. Searchable FAQ Accordion (5 Items Default) */}
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>

        {/* 11. Real-Time Tracking Simulator */}
        <ScrollReveal>
          <TrackingSimulator />
        </ScrollReveal>

        {/* 12. Final Conversion Call to Action Banner */}
        <ScrollReveal>
          <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center border-y border-slate-800">
            <div className="container mx-auto px-4 max-w-3xl space-y-6">
              <span className="text-xs font-extrabold tracking-widest uppercase text-blue-300 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full shadow-sm">
                ✈️ ¡Comienza Tu Importación Hoy!
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Empieza a importar tus compras de EE.UU. al mejor precio del Perú
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-medium">
                Usa nuestro casillero en Miami y aprovecha nuestra tarifa plana de <strong className="text-white">$8.00 USD por Kilo</strong> sin cargos ocultos.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:scale-102 active:scale-95"
                >
                  Cotizar Mi Envío Ahora
                </button>
                <button
                  onClick={() => setIsBuyForMeModalOpen(true)}
                  className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base rounded-xl transition-all"
                >
                  Solicitar Asesoría de Compra
                </button>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>

      {/* Comprehensive Corporate Footer */}
      <Footer />

      {/* Modals, Floating Buttons & AI Drawer */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <BuyForMeModal isOpen={isBuyForMeModalOpen} onClose={() => setIsBuyForMeModalOpen(false)} />
      <MiamiAddressModal isOpen={isMiamiAddressModalOpen} onClose={() => setIsMiamiAddressModalOpen(false)} />
      <AIAssistantWidget />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
