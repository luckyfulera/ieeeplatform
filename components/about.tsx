import { BookOpen, Award, Globe, Building } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: BookOpen,
      title: 'About GEHU',
      description: 'Founded in 2011 under Graphic Era Educational Society (est. 1993), providing world-class education in Dehradun, Bhimtal, and Haldwani',
    },
    {
      icon: Building,
      title: 'IEEE UP Section',
      description: 'Technical co-sponsor - IEEE Uttar Pradesh Section established on 11 May 1992',
    },
    {
      icon: Globe,
      title: 'Global Platform',
      description: 'Premier international forum for researchers, academicians, engineers, and industry leaders',
    },
    {
      icon: Award,
      title: 'IEEE Publication',
      description: 'Accepted papers will be published in IEEE Xplore digital library',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            About The Conference
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            IEEE International Conference on AI-Driven Intelligent Systems, Digital Innovation, and Sustainable Management for a Resilient Future (AIDIS-SM 2027)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">About Conference</h3>
              <p className="text-foreground/70 leading-relaxed">
                The IEEE International Conference on AI-Driven Intelligent Systems, Digital Innovation, and Sustainable Management for a Resilient Future (AIDIS-SM 2027) serves as a premier global platform dedicated to advancing interdisciplinary research at the intersection of Artificial Intelligence, digital transformation, and sustainable development.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Conference Theme</h3>
              <p className="text-foreground/70 leading-relaxed">
                &quot;AI-Driven Intelligent Systems, Digital Innovation, and Sustainable Management for a Resilient Future&quot; — focusing on integration of intelligence, sustainability, and resilience in digital system design with energy-efficient computing and human-centred intelligent systems.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Objectives</h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Provide premier international forum for AI-driven intelligent systems research</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Foster interdisciplinary collaboration across computing, engineering, and management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Promote ethical, secure, sustainable, and resilient digital ecosystems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Strengthen industry–academia–policy partnerships</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="font-bold text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-foreground/60 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">About Graphic Era Hill University</h3>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Graphic Era is the culmination of the hard work of its visionary founder, Prof. (Dr.) Kamal Ghanshala, who had the dream to change the destiny of thousands of youths through quality and holistic education. The Graphic Era Educational Society is a non-profit organization established in 1993 that aims to mobilize world-class education and generate resources for providing quality education for all.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Founded in 2011 under the aegis of the Graphic Era Educational Society, Graphic Era Hill University has campuses in Dehradun, Bhimtal, and Haldwani, Uttarakhand, India. The University has achieved numerous milestones based on its academic rigor, consistently top-performing students and alumni, and an immensely strong and qualified teaching fraternity.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            The Graphic Era Hill University Dehradun Campus is in the serene surroundings of Dehradun, nestled between the Shivalik Hills, Rajaji National Park, and the historic Clement Town Cantonment. This setting supports a learning ecosystem that balances academic rigour with holistic personal development.
          </p>
          <h4 className="text-xl font-bold text-foreground mb-2">About IEEE UP Section</h4>
          <p className="text-foreground/70 leading-relaxed">
            The Institute of Electrical and Electronics Engineers (IEEE) is a non-profit corporation incorporated in New York on 16 March 1896. The IEEE Uttar Pradesh Section was established on 11 May 1992 and conducts activities to assist local IEEE members to enhance their professional careers and their communities.
          </p>
        </div>
      </div>
    </section>
  );
}
