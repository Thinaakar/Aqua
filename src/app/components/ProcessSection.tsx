'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const steps = [
  {
    number: '01',
    title: 'API Integration',
    subtitle: 'Connect your services in minutes.',
    guarantee: 'We provide native SDKs for Node, Python, and Go. No heavy agents, no manual instrumentation.',
    body: 'Our integration starts with a single line of code. You add our SDK to your application and provide a secure API key. Within 60 seconds, your services will begin streaming trace data, metrics, and logs to our secure cloud. We automatically detect your framework and database layers to provide out-of-the-box dashboards.',
    image: "https://img.MonsterX/generatedImages/ _gen_img_1ba609682-1772164039050.png",
    imageAlt: 'Developer integrating Nexus SDK into a Node.js application',
    specs: ['Native SDKs (Node, Python, Go)', 'Automated framework detection', 'Secure API key authentication', 'Zero-configuration default dashboards']
  },
  {
    number: '02',
    title: 'Data Mapping',
    subtitle: 'Contextualize your infrastructure.',
    guarantee: 'We automatically map your entire service topology within the first hour of data ingestion.',
    body: 'Once connected, Nexus begins analyzing your traffic patterns and dependencies. We build a dynamic service map that shows exactly how your APIs, databases, and third-party services interact. You can label environments, tag specific microservices, and define critical paths to ensure the most important data is prioritized.',
    image: "https://img.MonsterX/generatedImages/ _gen_img_1cfbedc9e-1772164036381.png",
    imageAlt: 'Dynamic service map showing API dependencies and database connections',
    specs: ['Automated topology mapping', 'Environment tagging', 'Critical path definition', 'Real-time dependency graphs']
  },
  {
    number: '03',
    title: 'Alert Configuration',
    subtitle: 'Signal over noise.',
    guarantee: 'Our intelligent baseline engine prevents alert fatigue by learning your normal traffic patterns before alerting.',
    body: 'We don\'t believe in static thresholds. Our system monitors your performance for 24 hours to establish a baseline. You then configure alerting rules based on anomalies rather than fixed numbers. Connect alerts directly to Slack, PagerDuty, or Microsoft Teams. You define the escalation policies, we deliver the signals.',
    image: "https://img.MonsterX/generatedImages/ _gen_img_1d9bea011-1772164038807.png",
    imageAlt: 'Configuring anomaly-based alerts with Slack and PagerDuty integrations',
    specs: ['Machine learning baselines', 'Anomaly-based triggering', 'Slack & PagerDuty integrations', 'Custom escalation policies']
  },
  {
    number: '04',
    title: 'Continuous Optimization',
    subtitle: 'Actionable insights every week.',
    guarantee: 'You receive an automated weekly architectural review highlighting performance bottlenecks and cost-saving opportunities.',
    body: 'Nexus isn\'t just a dashboard you check when things break. Our analytics engine continuously scans your trace data for N+1 queries, memory leaks, and over-provisioned resources. Every Monday, your engineering team gets a prioritized list of optimization opportunities, complete with the exact lines of code causing the bottleneck.',
    image: "https://img.MonsterX/generatedImages/ _gen_img_144c6601f-1772164038567.png",
    imageAlt: 'Weekly architectural review report showing code-level performance bottlenecks',
    specs: ['Weekly automated reviews', 'N+1 query detection', 'Resource optimization insights', 'Code-level bottleneck isolation']
  }];


export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="bg-surface py-20 px-6 relative">
      {/* Background number watermark */}
      <div className="absolute top-16 right-8 font-extrabold tracking-tighter text-slate-900/[0.02] pointer-events-none select-none"
        style={{ fontSize: '20rem', lineHeight: 1 }}>
        {steps?.[activeStep]?.number}
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-primary/60" />
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">Transparent Process</span>
        </div>

        <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
          Seamless integration.<br />
          <span className="text-primary italic font-light">Transparent pricing.</span>
        </h2>
        <p className="reveal reveal-delay-1 text-muted text-base leading-relaxed mb-12 max-w-xl">
          We've mapped out exactly how we deploy into your environment. Review our methodology — because it's what we deliver.
        </p>

        {/* Step tabs */}
        <div className="reveal reveal-delay-2 flex gap-2 mb-10 overflow-x-auto pb-2 hide-scrollbar" role="tablist" aria-label="Deployment steps">
          {steps?.map((step, i) =>
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              role="tab"
              aria-selected={activeStep === i}
              aria-controls={`step-panel-${i}`}
              id={`step-tab-${i}`}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ease-out ${activeStep === i ?
                'bg-primary text-white shadow-sm' : 'bg-surface border border-border text-muted hover:border-primary/30 hover:shadow-sm hover:text-foreground'}`
              }>

              <span className="font-extrabold tracking-tighter" aria-hidden="true">{step?.number}</span>
              {step?.title}
            </button>
          )}
        </div>

        {/* Active step content */}
        <div key={activeStep} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start" role="tabpanel" id={`step-panel-${activeStep}`} aria-labelledby={`step-tab-${activeStep}`}>
          {/* Left: content */}
          <div>
            {/* Shield guarantee badge */}
            <div className="flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
              <div className="text-primary mt-0.5 shrink-0" aria-hidden="true">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
              </div>
              <p className="text-primary text-sm font-medium leading-relaxed">
                {steps?.[activeStep]?.guarantee}
              </p>
            </div>

            <h3 className="text-foreground font-bold tracking-tight text-2xl mb-2">
              {steps?.[activeStep]?.title}
            </h3>
            <p className="text-muted text-sm font-medium mb-4">{steps?.[activeStep]?.subtitle}</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {steps?.[activeStep]?.body}
            </p>

            {/* Specs list */}
            <div className="border-t border-border pt-5">
              <div className="text-xs text-muted uppercase tracking-widest font-semibold mb-3">What's included</div>
              <ul className="space-y-2">
                {steps?.[activeStep]?.specs?.map((spec, i) =>
                  <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <svg aria-hidden="true" className="w-3.5 h-3.5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {spec}
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-border/60 shadow-sm">
            <AppImage
              src={steps?.[activeStep]?.image}
              alt={steps?.[activeStep]?.imageAlt}
              fill
              className="object-cover" />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            {/* Step number overlay */}
            <div className="absolute bottom-4 left-4 font-extrabold tracking-tighter text-white/40"
              style={{ fontSize: '5rem', lineHeight: 1 }}>
              {steps?.[activeStep]?.number}
            </div>
          </div>
        </div>
      </div>
    </section>);

}