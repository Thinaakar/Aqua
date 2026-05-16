import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ProcessSection from './components/ProcessSection';
import GuaranteeSection from './components/GuaranteeSection';
import LeadFormSection from './components/LeadFormSection';
import StickyMobileCTA from './components/StickyMobileCTA';
import ScrollReveal from './components/ScrollReveal';

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <ScrollReveal>
        <main>
          <HeroSection />
          <ProblemSection />
          <ProcessSection />
          <GuaranteeSection />
          <LeadFormSection />
        </main>
        <Footer />
      </ScrollReveal>
      <StickyMobileCTA />
    </div>
  );
}