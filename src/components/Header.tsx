'use client';
import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('book-test')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-lg border-b border-border/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <AppLogo
          text="Nexus"
          iconName="BeakerIcon"
          size={32}
          className="text-foreground transition-transform duration-300 hover:scale-105 origin-left"
        />
        <button
          onClick={scrollToForm}
          className="hidden sm:flex items-center gap-2 bg-primary text-white font-medium tracking-wide text-sm px-6 py-2.5 rounded-lg shadow-sm hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out"
        >
          Request a Demo
        </button>
      </div>
    </header>
  );
}