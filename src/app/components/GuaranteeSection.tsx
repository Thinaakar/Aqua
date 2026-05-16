'use client';
import React, { useState } from 'react';

const guarantees = [
  {
    title: '99.99% Uptime SLA',
    body: 'We guarantee our ingestion and alerting pipelines will be available 99.99% of the time. If we drop below this threshold, you automatically receive service credits for the month.',
    kannada: 'Enterprise SLA financially backed by Nexus.',
  },
  {
    title: 'Zero Data Sampling',
    body: 'Unlike legacy platforms that drop 90% of your traces to save costs, we ingest and index 100% of your telemetry data. Every error, every trace, every log is searchable.',
    kannada: '100% data retention for 30 days.',
  },
  {
    title: 'Transparent Pricing',
    body: 'No complex tiering. No hidden overage penalties. You pay a flat rate per million requests. Your rate is locked into your annual contract and will never increase mid-cycle.',
    kannada: 'No surprise bills at the end of the month.',
  },
  {
    title: '24/7 Priority Engineering Support',
    body: 'When you open a P1 ticket, you don\'t get a chatbot or a level-1 triage agent. You are immediately routed to a senior Site Reliability Engineer within 15 minutes.',
    kannada: 'Direct access to the engineers who built it.',
  },
];

export default function GuaranteeSection() {
  return (
    <section id="warranty" className="bg-background py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-primary/60" />
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">Enterprise SLAs</span>
        </div>

        <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
          Terms that are<br />
          <span className="text-primary italic font-light">actually in your favour.</span>
        </h2>
        <p className="reveal reveal-delay-1 text-muted text-base leading-relaxed mb-12 max-w-xl">
          Every SLA below is written into your enterprise agreement. Not a marketing claim — a contractual commitment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {guarantees.map((g, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group bg-surface border border-border/60 rounded-xl p-6 shadow-sm hover:border-border hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                  <svg aria-hidden="true" className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                </div>
                <h3 className="text-foreground font-semibold text-base pt-1">{g.title}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{g.body}</p>
              <div className="border-t border-border pt-4">
                <p className="text-primary/80 text-xs font-medium italic">{g.kannada}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Warranty download gate */}
        <div className="reveal bg-surface border border-primary/20 rounded-xl shadow-sm p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-primary text-xs font-semibold tracking-widest uppercase mb-3" aria-hidden="true">
              <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Documentation
            </div>
            <h3 className="text-foreground font-bold tracking-tight text-xl mb-2">
              Review Our Enterprise SLAs
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              A comprehensive guide detailing our infrastructure security, compliance certifications, and financial guarantees. Written in plain English.
            </p>
          </div>
          <WarrantyDownloadForm />
        </div>
      </div>
    </section>
  );
}

function WarrantyDownloadForm() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center p-4">
        <div className="text-primary text-2xl mb-2">✓</div>
        <p className="text-foreground text-sm font-medium">Check your inbox.</p>
        <p className="text-muted text-xs mt-1">PDF sent to {email}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        aria-label="Email address for documentation"
        required
        className="form-field bg-surface border border-border text-foreground placeholder-muted text-sm px-4 py-3 rounded-lg w-full sm:w-64 transition-colors shadow-sm"
      />
      <button
        type="submit"
        className="bg-primary text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-primary-hover transition-all duration-300 ease-out whitespace-nowrap"
      >
        Send Docs
      </button>
    </form>
  );
}