'use client';
import React from 'react';

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('book-test')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 px-6 overflow-hidden bg-surface">
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Badge */}
        <div className="reveal flex items-center gap-3 mb-10">
          <span className="inline-flex items-center gap-2 border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-lg">
            <ShieldIcon />
            SOC2 Type II Certified Observability Platform
          </span>
        </div>

        {/* Manifesto headline */}
        <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary tracking-tighter leading-[1.1] mb-6">
          Your infrastructure generates data.<br />
          We make it actionable.
        </h1>

        {/* Sub-manifesto */}
        <p className="reveal reveal-delay-2 text-lg sm:text-xl text-muted font-medium leading-relaxed mb-10">
          Real-time metrics. Automated alerts. Guaranteed uptime.
        </p>

        {/* Contract rule */}
        <hr className="reveal reveal-delay-2 contract-rule mb-10" />

        {/* Pain stats row */}
        <div className="reveal reveal-delay-3 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            { stat: '< 50ms', label: 'Average alert latency across global nodes', note: 'Industry standard: 2-5 minutes' },
            { stat: '99.99%', label: 'Guaranteed platform uptime SLA', note: 'Financially backed commitment' },
            { stat: '0 days', label: 'Implementation time for core metrics', note: 'Agentless deployment' },
          ]?.map((item) => (
            <div key={item?.stat} className="border border-border/60 rounded-xl p-5 bg-surface shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-primary text-3xl font-extrabold tracking-tight mb-1">{item?.stat}</div>
              <div className="text-foreground text-sm font-medium mb-1">{item?.label}</div>
              <div className="text-muted text-xs">{item?.note}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-4 flex flex-col sm:flex-row gap-4 items-start">
          <button
            onClick={scrollToForm}
            className="group flex items-center gap-3 bg-primary text-white font-semibold px-8 py-4 rounded-lg text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-primary-hover transition-all duration-300 ease-out"
          >
            Request a Demo
            <svg aria-hidden="true" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <a
            href="#process"
            className="flex items-center gap-2 text-muted hover:text-foreground text-sm font-medium transition-colors py-4"
          >
            See exactly what happens next
            <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
    </svg>
  );
}