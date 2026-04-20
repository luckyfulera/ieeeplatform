import { Users, Crown, UserCircle, Users2, UserCog } from 'lucide-react';

export default function Committee() {
  const chiefPatron = {
    name: 'Prof. (Dr.) Kamal Ghanshala',
    role: 'President, Graphic Era Group',
    location: 'Dehradun, Uttarakhand, India',
  };

  const patrons = [
    {
      name: 'Prof. (Dr.) Amit R. Bhatt',
      role: 'Vice Chancellor',
      organization: 'Graphic Era Hill University (GEHU), Dehradun, India',
    },
  ];

  const conferenceChair = {
    name: 'Dr. Vishal Sagar',
    role: 'Head of Department, School of Management (SOM)',
    organization: 'GEHU, Dehradun, India',
  };

  const conveners = [
    {
      name: 'Prof. Prashant Singh Kutaula',
      role: 'Professor of Practice, SOM',
      organization: 'GEHU, Dehradun, India',
    },
    {
      name: 'Dr. Shikha Rana',
      role: 'Associate Professor, SOM',
      organization: 'GEHU, Dehradun, India',
    },
  ];

  const organizingCommittee = [
    'Prof. (Dr) Ajay Kumar Saini',
    'Prof. (Dr.) Ajay Sharma',
    'Prof. (Dr) Vikas Tyagi',
    'Prof.(Dr) Shipra Gupta',
    'Dr. Pradeep Joshi',
    'Dr. Namrata Prakash',
    'Dr. Suruchi Sharma',
    'Dr. Raj Kumar Singh',
    'Dr. Pankaj Agarwal',
    'Dr. Shyam Sunder Kapri',
    'Dr. Omdeep Gupta',
    'Dr Mayank Pant',
    'Dr Gaurav Chopra',
    'Dr Hemant Chauhan',
    'Mr Jitendra Chauhan',
  ];

  return (
    <section id="committee" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Users size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Organizing Team</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Committee
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Meet the dedicated team behind AIDIS-SM 2027
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
            <Crown size={24} className="text-primary" />
            <span>Chief Patron</span>
          </h3>
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 max-w-2xl">
            <div className="flex items-start space-x-4">
              <div className="p-4 bg-primary/20 rounded-xl">
                <Crown size={32} className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground">{chiefPatron.name}</h4>
                <p className="text-primary font-medium">{chiefPatron.role}</p>
                <p className="text-foreground/60 text-sm">{chiefPatron.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
            <UserCircle size={24} className="text-accent" />
            <span>Patrons</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patrons.map((patron, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/20 rounded-xl">
                    <UserCircle size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{patron.name}</h4>
                    <p className="text-accent font-medium">{patron.role}</p>
                    <p className="text-foreground/60 text-sm">{patron.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
            <UserCog size={24} className="text-primary" />
            <span>Conference Chair</span>
          </h3>
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 max-w-2xl">
            <div className="flex items-start space-x-4">
              <div className="p-4 bg-primary/20 rounded-xl">
                <UserCog size={32} className="text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground">{conferenceChair.name}</h4>
                <p className="text-primary font-medium">{conferenceChair.role}</p>
                <p className="text-foreground/60 text-sm">{conferenceChair.organization}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
            <Users2 size={24} className="text-accent" />
            <span>Conveners</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conveners.map((convener, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/20 rounded-xl">
                    <Users2 size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{convener.name}</h4>
                    <p className="text-accent font-medium">{convener.role}</p>
                    <p className="text-foreground/60 text-sm">{convener.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
            <Users size={24} className="text-primary" />
            <span>Organizing Committee</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {organizingCommittee.map((member, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-card border border-border"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xs font-bold">{member.split(' ').map(n => n[0]).join('').substring(0, 2)}</span>
                  </div>
                  <span className="text-foreground font-medium">{member}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
