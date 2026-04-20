import { FileText, BookOpen, CheckCircle, Calendar, ExternalLink } from 'lucide-react';

export default function CallForPapers() {
  const tracks = [
    {
      title: 'Track 1: AI-Driven Intelligent Systems and Advanced Analytics',
      topics: [
        'Artificial Intelligence, Machine Learning, and Deep Learning Architectures',
        'AI-Enabled Decision Support Systems and Predictive Analytics',
        'Explainable AI (XAI) and Human-Centric Intelligent Systems',
        'Intelligent Automation, Cognitive Computing, and Smart Agents',
        'Big Data Analytics and Real-Time Decision Intelligence',
        'Hybrid AI Systems (Symbolic–Subsymbolic Integration)',
        'AI Applications in Finance, Healthcare, Supply Chains, and Public Services',
        'Performance, Reliability, and Optimization of Intelligent Systems',
      ],
    },
    {
      title: 'Track 2: AI-Led Digital Transformation, Governance, and Sustainable Management',
      topics: [
        'AI-Powered Digital Transformation Strategies',
        'Industry 4.0 / 5.0 and Smart Cyber-Physical Systems',
        'Internet of Things (IoT), Edge Computing, and Cloud Ecosystems',
        'Platform Economies and AI-Driven Business Models',
        'Data-Driven Strategy and Algorithmic Management',
        'Digital Twins and Simulation-Based Decision Making',
        'Enterprise AI Adoption, Integration, and Change Management',
        'Measuring Digital Maturity and Transformation Outcomes',
      ],
    },
    {
      title: 'Track 3: AI-Enabled Innovation and Technology Management',
      topics: [
        'AI for Innovation Strategy, R&D Management, and Knowledge Discovery',
        'Technology Foresight, Horizon Scanning, and Future Technologies',
        'Digital Innovation Ecosystems and Open Innovation Platforms',
        'AI-Driven Entrepreneurship, Start-up Analytics, and Ethical Security',
        'Managing Disruptive, Emerging, and Converging Technologies',
        'Trust Engineering for Digital Platforms and Smart Infrastructure',
        'AI for National Security and Change in AI Enabled Enterprises',
      ],
    },
    {
      title: 'Track 4: AI, Cybersecurity, and Digital Trust',
      topics: [
        'AI-Based Cybersecurity, Threat Detection, and Incident Response',
        'Cyber Risk Analytics and Digital Resilience Frameworks',
        'Blockchain, Distributed Ledgers, and Secure Digital Systems',
        'Data Privacy, Surveillance Technologies, and Ethical Security',
        'Secure AI Systems and Adversarial Machine Learning',
        'Cyber Governance and Risk Management in Digital Enterprises',
        'Trust Engineering for Digital Platforms and Smart Infrastructure',
        'AI for National Security and Critical Infrastructure Protection',
      ],
    },
    {
      title: 'Track 5: Data Science, Analytics & Decision Intelligence',
      topics: [
        'Big data platforms and analytics',
        'Predictive modeling and simulation',
        'Data-driven policy and planning',
        'Responsible data governance',
        'AI-enabled decision support systems',
      ],
    },
    {
      title: 'Track 6: High-Performance, Cloud & Future Computing Paradigms',
      topics: [
        'Parallel and distributed computing',
        'High-performance and scalable systems',
        'Quantum and post-quantum computing',
        'Cloud-native and serverless architectures',
        'Performance optimization and benchmarking',
      ],
    },
    {
      title: 'Track 7: AI for Sustainable Development and Social Impact',
      topics: [
        'AI for Sustainable Development Goals (SDGs) Implementation',
        'Smart Cities, Smart Governance, and Urban Sustainability',
        'AI in Environmental Management and Climate Analytics',
        'Sustainable Supply Chains and Green AI Applications',
        'AI for Inclusive Growth (Poverty Reduction and Social Equity)',
        'Digital Technologies for Rural Development and MSMEs',
        'AI in Education, Healthcare, and Social Innovation',
      ],
    },
  ];

  const guidelines = [
    'Manuscripts must be original and unpublished',
    'Papers must follow the IEEE conference formatting guidelines',
    'All submissions must be made through the online CMT submission portal',
    'Double-blind peer review will be strictly followed',
    'At least one author must register and present the paper if accepted',
    'Papers must be 4-6 pages in length following IEEE template',
  ];

  const dates = [
    { event: 'Paper Submission Deadline', date: 'November 2026 (Tentative)' },
    { event: 'Acceptance Notification', date: 'December 2026 (Tentative)' },
    { event: 'Registration & Camera-Ready Submission', date: 'January 2027 (Tentative)' },
    { event: 'Conference Dates', date: 'February 19-20, 2027' },
  ];

  return (
    <section id="cfp" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <FileText size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Call for Papers</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Conference Tracks & Topics
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Research Papers are invited from academia, practitioners, research scholars and students in various areas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                  <BookOpen size={24} className="text-primary" />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {track.title}
                  </h3>
                  <ul className="space-y-2">
                    {track.topics.map((topic, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-foreground/70">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <FileText size={24} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Paper Submission Guidelines</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guidelines.map((guideline, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-xl border border-border">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">{guideline}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-background rounded-xl border border-border space-y-4">
            <p className="text-sm text-foreground/70">
              <span className="font-semibold text-primary">IEEE Template:</span> All submissions must strictly adhere to the IEEE template and be submitted through CMT. Papers should be 4-6 pages in length.
            </p>
            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg"
            >
              <span>Download IEEE Template</span>
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="mt-6 p-6 bg-accent/10 rounded-xl border border-accent/20">
            <h4 className="font-bold text-foreground mb-3">Plagiarism Policy</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>The overall similarity rate of a conference paper submission must be less than 10% excluding reference material.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>The similarity rate for a single source should be less than 3% if any.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>The AI-generated text must be 0%.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-12">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Calendar className="text-primary" size={28} />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Important Dates
            </h2>
          </div>
          <p className="text-lg text-foreground/70 text-center mb-8">Stay updated with key milestones and deadlines</p>

          <div className="max-w-3xl mx-auto space-y-4">
            {dates.map((item, index) => (
              <div key={index} className="flex gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-accent bg-accent/20"></div>
                  {index < dates.length - 1 && (
                    <div className="w-1 h-12 sm:h-16 bg-accent/30"></div>
                  )}
                </div>
                <div className="pb-8 sm:pb-12 pt-1 flex-1">
                  <div className="p-4 sm:p-5 rounded-xl border border-border bg-card">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-1">
                        <h3 className="font-bold text-foreground">{item.event}</h3>
                        <p className="text-sm sm:text-base text-foreground/60">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-3xl mx-auto">
            {[
              { label: 'Total Milestones', value: '4' },
              { label: 'Conference Tracks', value: '7+' },
              { label: 'Conference Duration', value: '2 Days' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-foreground/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
