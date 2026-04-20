import Link from 'next/link';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-semibold text-primary">Hybrid Mode Conference</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                1st IEEE Conference on
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">AIDIS-SM 2027</h2>
              <p className="text-lg sm:text-xl text-foreground/80">
                AI-Driven Intelligent Systems, Digital Innovation, and Sustainable Management for a Resilient Future
              </p>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              Advancing interdisciplinary research at the intersection of Artificial Intelligence, digital transformation, and sustainable development
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-sm text-foreground/60 mb-1">Conference Dates</div>
                <div className="font-bold text-lg text-primary">Feb 19-20, 2027</div>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-sm text-foreground/60 mb-1">Mode</div>
                <div className="font-bold text-lg text-accent">Hybrid Mode</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/registration"
                className="px-8 py-3 bg-primary text-white font-bold rounded-lg text-center hover:bg-primary/90"
              >
                <span className="flex items-center justify-center space-x-2">
                  Register Now
                  <ArrowRight size={18} />
                </span>
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative h-96 sm:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl border border-primary/20 overflow-hidden">
              <div className="relative h-full flex flex-col items-center justify-center space-y-6 p-8">
                <div className="space-y-4 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                    <Zap size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">IEEE Conference</h3>
                  <p className="text-sm text-foreground/60">Exploring AI-Driven Intelligent Systems, Digital Innovation, and Sustainable Management</p>
                </div>

                <div className="grid grid-cols-3 gap-4 w-full pt-4">
                  {[
                    { label: 'Tracks', value: '7+' },
                    { label: 'Papers', value: '200+' },
                    { label: 'Countries', value: '20+' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-3 bg-white/50 rounded-lg">
                      <div className="font-bold text-primary text-lg">{stat.value}</div>
                      <div className="text-xs text-foreground/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
