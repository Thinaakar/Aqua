import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <AppLogo text="Nexus" iconName="BeakerIcon" size={28} className="text-foreground" />
        <nav className="flex items-center gap-6 text-sm font-medium text-muted">
          <a href="#process" className="hover:text-primary transition-colors">Platform</a>
          <a href="#book-test" className="hover:text-primary transition-colors">Integrations</a>
          <a href="#warranty" className="hover:text-primary transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-5 text-sm text-muted">
          <a href="#" className="hover:text-primary transition-colors">Trust Center</a>
          <a href="#" className="hover:text-primary transition-colors">Documentation</a>
          <span>© 2026 Nexus Inc</span>
        </div>
      </div>
    </footer>
  );
}