'use client';
import React, { useState } from 'react';

const localities = [
  'Fintech', 'E-commerce', 'Healthcare', 'SaaS',
  'EdTech', 'Logistics', 'Media', 'Gaming',
  'Enterprise', 'Web3', 'AI/ML', 'Other',
];

const waterSources = ['AWS', 'GCP', 'Azure', 'Multi-cloud', 'On-premise'];
const flatSizes = ['1-50', '51-200', '201-500', '501-1000', '1000+'];

export default function LeadFormSection() {
  const [form, setForm] = useState({
    apartment: '',
    locality: '',
    waterSource: '',
    flatSize: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.apartment.trim()) e.apartment = 'Please enter your apartment name.';
    if (!form.locality) e.locality = 'Please select your area.';
    if (!form.waterSource) e.waterSource = 'Please select your water source.';
    if (!form.flatSize) e.flatSize = 'Please select your flat size.';
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Please enter a valid 10-digit mobile number.';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    // Backend integration point
    setSubmitted(true);
  };

  const set = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  if (submitted) {
    return (
      <section id="book-test" className="bg-background py-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
            <svg aria-hidden="true" className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
          </div>
          <h3 className="text-foreground font-bold tracking-tight text-2xl mb-3">Booking confirmed.</h3>
          <p className="text-muted text-base leading-relaxed mb-2">
            Our technical team will call you within 4 working hours to schedule your platform demo.
          </p>
          <p className="text-muted text-sm">You'll receive a confirmation SMS on {form.phone}.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="book-test" className="bg-background py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-primary/60" />
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">Book a Demo</span>
        </div>

        <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-3">
          Schedule a Platform Demo
        </h2>
        <p className="reveal reveal-delay-1 text-muted text-base leading-relaxed mb-10">
          Takes 90 seconds to fill. We'll call to confirm a time that works for your engineering team.
        </p>

        <form onSubmit={handleSubmit} className="reveal reveal-delay-2 space-y-5">
          {/* Apartment name */}
          <div>
            <label htmlFor="companyName" className="block text-foreground text-sm font-semibold tracking-wide mb-2">
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              value={form.apartment}
              onChange={e => set('apartment', e.target.value)}
              placeholder="e.g. Acme Corp, Pied Piper"
              aria-invalid={!!errors.apartment}
              aria-describedby={errors.apartment ? 'companyName-error' : undefined}
              className={`form-field w-full bg-surface border text-foreground placeholder-muted text-sm px-4 py-3.5 rounded-lg shadow-sm transition-colors ${errors.apartment ? 'border-red-400' : 'border-border'}`}
            />
            {errors.apartment && <p id="companyName-error" className="text-red-500 text-xs mt-1" role="alert">{errors.apartment}</p>}
          </div>

          {/* Locality */}
          <div>
            <label htmlFor="industry" className="block text-foreground text-sm font-semibold tracking-wide mb-2">Industry</label>
            <select
              id="industry"
              value={form.locality}
              onChange={e => set('locality', e.target.value)}
              aria-invalid={!!errors.locality}
              aria-describedby={errors.locality ? 'industry-error' : undefined}
              className={`form-field w-full bg-surface border text-foreground text-sm px-4 py-3.5 rounded-lg shadow-sm transition-colors appearance-none ${errors.locality ? 'border-red-400' : 'border-border'} ${!form.locality ? 'text-muted' : ''}`}
            >
              <option value="" disabled>Select your industry</option>
              {localities.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
            {errors.locality && <p id="industry-error" className="text-red-500 text-xs mt-1" role="alert">{errors.locality}</p>}
          </div>

          {/* Water source */}
          <div>
            <label className="block text-foreground text-sm font-semibold tracking-wide mb-2">Primary Cloud Provider</label>
            <div className="grid grid-cols-2 gap-3" role="group" aria-labelledby="cloud-provider-label">
              <span id="cloud-provider-label" className="sr-only">Select Primary Cloud Provider</span>
              {waterSources.map(ws => (
                <button
                  key={ws}
                  type="button"
                  onClick={() => set('waterSource', ws)}
                  aria-pressed={form.waterSource === ws}
                  className={`text-left text-sm px-4 py-3 rounded-lg border shadow-sm transition-all duration-300 ease-out ${
                    form.waterSource === ws
                      ? 'bg-primary/10 border-primary text-primary font-medium' :'bg-surface border-border text-muted hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  {ws}
                </button>
              ))}
            </div>
            {errors.waterSource && <p className="text-red-500 text-xs mt-1" role="alert">{errors.waterSource}</p>}
          </div>

          {/* Flat size */}
          <div>
            <label className="block text-foreground text-sm font-semibold tracking-wide mb-2">Engineering Team Size</label>
            <div className="grid grid-cols-3 gap-3" role="group" aria-labelledby="team-size-label">
              <span id="team-size-label" className="sr-only">Select Engineering Team Size</span>
              {flatSizes.map(fs => (
                <button
                  key={fs}
                  type="button"
                  onClick={() => set('flatSize', fs)}
                  aria-pressed={form.flatSize === fs}
                  className={`text-sm px-3 py-3 rounded-lg border shadow-sm transition-all duration-300 ease-out ${
                    form.flatSize === fs
                      ? 'bg-primary/10 border-primary text-primary font-medium' :'bg-surface border-border text-muted hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  {fs}
                </button>
              ))}
            </div>
            {errors.flatSize && <p className="text-red-500 text-xs mt-1" role="alert">{errors.flatSize}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-foreground text-sm font-semibold tracking-wide mb-2">Work Phone Number</label>
            <div className="flex gap-3 items-center">
              <span className="bg-surface border border-border text-foreground text-sm px-4 py-3.5 rounded-lg font-medium shrink-0 shadow-sm" aria-hidden="true">+91</span>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={e => set('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="98XXXXXXXX"
                maxLength={10}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className={`form-field flex-1 bg-surface border text-foreground placeholder-muted text-sm px-4 py-3.5 rounded-lg shadow-sm transition-colors ${errors.phone ? 'border-red-400' : 'border-border'}`}
              />
            </div>
            {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>}
            <p className="text-muted text-xs mt-2">We'll call to confirm your appointment. No spam — ever.</p>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold text-base py-4 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-primary-hover transition-all duration-300 ease-out flex items-center justify-center gap-2 group"
          >
            Request a Demo
            <svg aria-hidden="true" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <p className="text-center text-muted text-xs">
            Free demo. No obligation. Our team will call within 4 hours.
          </p>
        </form>
      </div>
    </section>
  );
}