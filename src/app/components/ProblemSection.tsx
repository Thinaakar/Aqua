'use client';
import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function ProblemSection() {
  return (
    <section className="bg-background py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-primary/60" />
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">The Challenge</span>
        </div>

        <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-6">

          Downtime doesn't announce itself.<br />
          <span className="font-light italic">It quietly destroys revenue.</span>
        </h2>

        <p className="reveal reveal-delay-1 text-muted text-base leading-relaxed max-w-2xl mb-14">
          Modern microservices generate millions of logs and traces that exceed the processing capacity of legacy monitoring tools. You don't see the silent API failures. You don't get alerted on the memory leaks. You only see it in the customer churn rate, the stalled deployments, and the engineering time wasted on debugging every weekend.
        </p>

        {/* Pain cards grid */}
        <div className="reveal reveal-delay-2 grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {painPoints?.map((point, i) =>
            <div
              key={i}
              className="flex gap-4 bg-surface rounded-xl p-6 border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 ease-out">

              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5" role="img" aria-label={point?.title}>
                <span className="text-primary text-lg" aria-hidden="true">{point?.icon}</span>
              </div>
              <div>
                <div className="text-foreground font-semibold text-sm mb-1">{point?.title}</div>
                <div className="text-muted text-sm leading-relaxed">{point?.description}</div>
              </div>
            </div>
          )}
        </div>

        {/* TDS meter visual */}
        <div className="reveal reveal-delay-3 bg-slate-900 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-800">
          <div className="p-8 flex flex-col justify-center">
            <div className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Live Reading</div>
            <div className="text-white mb-2 font-extrabold tracking-tighter" style={{ fontSize: '3.5rem', lineHeight: 1 }}>
              <span className="meter-blink">452</span>
              <span className="text-2xl text-slate-400 ml-2">ms Latency</span>
            </div>
            <div className="text-slate-400 text-sm mb-6">
              Average p99 latency in production — February 2026
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-lg font-medium text-sm">CRITICAL — Action Required</span>
              <span className="text-slate-400">SLA limit: 150 ms</span>
            </div>
          </div>
          <div className="relative min-h-[220px] md:min-h-0">
            <AppImage
              src="https://img.MonsterX/generatedImages/ _gen_img_11bbea309-1772164037817.png"
              alt="Nexus observability dashboard showing real-time performance metrics and p99 latency spikes"
              fill
              className="object-cover opacity-60" />

            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>);

}

const painPoints = [
  {
    icon: '⚡',
    title: 'Silent API Failures',
    description: 'Uncaught exceptions bubble up to users while legacy tools aggregate them into unreadable noise. The alert triggers 10 minutes too late.'
  },
  {
    icon: '🔍',
    title: 'Blind Spots in Architecture',
    description: 'Traces break between services. When an incident occurs, engineering spends hours stitching logs together manually to find the root cause.'
  },
  {
    icon: '📉',
    title: 'Database Bottlenecks',
    description: 'Slow queries pile up quietly, consuming connections and memory until the whole system locks up during a traffic spike.'
  },
  {
    icon: '💸',
    title: 'Runaway Cloud Costs',
    description: 'Logging every trace without intelligent sampling means your observability bill scales linearly with traffic, destroying your margins.'
  }];