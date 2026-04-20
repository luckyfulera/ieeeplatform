'use client';

import { Globe, TrendingUp, BookMarked } from 'lucide-react';

export default function PublishingInfo() {
  const benefits = [
    {
      icon: Globe,
      title: 'Publication Opportunities',
      description: 'Selected papers invited for publication in partner conference proceedings/Scopus Indexed/ABDC Journal(s)',
      stats: 'Blind Peer Review',
    },
    {
      icon: TrendingUp,
      title: 'ISBN Book Publication',
      description: 'All submitted papers will be published in form of a book with ISBN No. after blind peer review',
      stats: '100+ Reviewers',
    },
    {
      icon: BookMarked,
      title: 'Quality Standards',
      description: 'Assessment based on relevance to theme, originality, clarity, completeness and contribution to discipline',
      stats: 'Rigorous Review',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Publishing & Indexing
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get your research published in the world&apos;s leading academic repositories
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                  {/* Icon */}
                  <div className="mb-6 p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl w-fit">
                    <Icon size={32} className="text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">{benefit.description}</p>

                  {/* Stats Badge */}
                  <div className="flex items-center space-x-2 p-3 bg-primary/10 rounded-lg w-fit">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-semibold text-primary">{benefit.stats}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl border-2 border-primary/30 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 relative overflow-hidden animate-fadeInUp">
          <div className="absolute inset-0 -z-10 opacity-50">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              ✓ Publication Opportunities for Accepted Papers
            </h3>
            <p className="text-lg text-foreground/70">
              All submitted conference papers will be blind peer reviewed by competent reviewers. Assessment is based on relevance to the theme and parameters like originality, clarity, completeness and contribution to the discipline. Selected papers will be invited for publication in partner featured conference proceedings/Scopus Indexed/ABDC Journal(s) after due blind/peer review process.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {[
                {
                  title: 'Review Process',
                  stat: 'Blind Peer Review',
                  desc: 'Assessment based on relevance, originality and clarity',
                },
                {
                  title: 'ISBN Publication',
                  stat: 'Book with ISBN',
                  desc: 'All papers published in book format with ISBN number',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-card/50 border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="text-sm text-foreground/60 mb-1">{item.title}</div>
                  <div className="text-xl font-bold text-accent mb-1">{item.stat}</div>
                  <div className="text-sm text-foreground/70">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 animate-fadeInUp">
          <h3 className="text-2xl font-bold text-foreground">Ready to share your research?</h3>
          <button className="group relative px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
            <span className="relative flex items-center justify-center space-x-2">
              Submit Your Paper Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-white/20 group-hover:translate-y-0 translate-y-full transition-transform rounded-xl"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
