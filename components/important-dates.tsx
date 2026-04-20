'use client';

import { Calendar, CheckCircle2 } from 'lucide-react';

export default function ImportantDates() {
  const dates = [
    {
      event: 'Paper Submission Deadline',
      date: 'November 2026 (Tentative)',
      status: 'upcoming',
    },
    {
      event: 'Acceptance Notification',
      date: 'December 2026 (Tentative)',
      status: 'upcoming',
    },
    {
      event: 'Registration & Camera-Ready Submission',
      date: 'January 2027 (Tentative)',
      status: 'upcoming',
    },
    {
      event: 'Conference Dates',
      date: 'February 19-20, 2027',
      status: 'upcoming',
    },
  ];

  return (
    <section id="dates" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fadeInUp">
          <div className="flex items-center justify-center space-x-2">
            <Calendar className="text-primary" size={28} />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Important Dates
            </h2>
          </div>
          <p className="text-lg text-foreground/70">Stay updated with key milestones and deadlines</p>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {dates.map((item, index) => (
            <div
              key={index}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex gap-4 sm:gap-6">
                {/* Timeline Marker */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all duration-300 ${
                      item.status === 'completed'
                        ? 'bg-primary border-primary'
                        : item.status === 'active'
                          ? 'bg-accent border-accent animate-pulse'
                          : 'border-border bg-background'
                    }`}
                  ></div>
                  {index < dates.length - 1 && (
                    <div
                      className={`w-1 h-12 sm:h-16 transition-colors duration-300 ${
                        item.status === 'completed'
                          ? 'bg-primary'
                          : item.status === 'active'
                            ? 'bg-accent'
                            : 'bg-border'
                      }`}
                    ></div>
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 sm:pb-12 pt-1">
                  <div
                    className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 ${
                      item.status === 'active'
                        ? 'bg-accent/10 border-accent/50 hover:border-accent'
                        : 'bg-background border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-1">
                        <h3 className="font-bold text-foreground">{item.event}</h3>
                        <p className="text-sm sm:text-base text-foreground/60">{item.date}</p>
                      </div>
                      {item.status === 'completed' && (
                        <div className="flex-shrink-0">
                          <CheckCircle2 size={20} className="text-primary" />
                        </div>
                      )}
                      {item.status === 'active' && (
                        <div className="flex-shrink-0 px-3 py-1 bg-accent/20 rounded-full">
                          <span className="text-xs font-bold text-accent">ACTIVE</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
          {[
            { label: 'Total Milestones', value: '4' },
            { label: 'Conference Tracks', value: '7+' },
            { label: 'Conference Duration', value: '2 Days' },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/50 transition-colors animate-fadeInUp"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-foreground/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
