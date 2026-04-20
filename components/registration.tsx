import { CreditCard, Users, GraduationCap, Briefcase, Globe, Building2 } from 'lucide-react';

export default function Registration() {
  const indianFees = [
    { category: 'Non-IEEE Professional', fee: '9500 INR', icon: Briefcase },
    { category: 'IEEE Professional Members', fee: '8500 INR', icon: Briefcase },
    { category: 'Non-IEEE Students', fee: '7500 INR', icon: GraduationCap },
    { category: 'IEEE Student Members', fee: '6000 INR', icon: GraduationCap },
    { category: 'Attendees and Co-Author/Poster Presentation', fee: '2000 INR', icon: Users },
  ];

  const foreignFees = [
    { category: 'Non-IEEE Professional', fee: '350 USD', icon: Globe },
    { category: 'IEEE Professional Members', fee: '250 USD', icon: Globe },
    { category: 'Non-IEEE Students', fee: '200 USD', icon: Globe },
    { category: 'IEEE Student Members', fee: '180 USD', icon: Globe },
    { category: 'Attendees and Co-Author/Poster Presentation', fee: '30 USD', icon: Users },
  ];

  const bankDetails = {
    beneficiaryName: 'GRAPHIC ERA HILL UNIVERSITY A/C RESEARCH & DEVELOPMENT',
    bankName: 'AXIS BANK',
    branch: 'Saharanpur Road',
    ifscCode: 'UTIB0002959',
    accountNumber: '920010040627250',
    branchCode: '002959',
    bankAddress: 'Saharanpur Road, C1498, Dehradun, Uttarakhand 248001',
  };

  const importantDates = [
    { label: 'Registration & Camera-Ready Submission', date: 'January 2027 (Tentative)' },
    { label: 'Conference Dates', date: 'February 19-20, 2027' },
  ];

  return (
    <section id="registration" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <CreditCard size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Registration</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Conference Registration
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Register for AIDIS-SM 2027 - 1st IEEE Conference on AI-Driven Intelligent Systems
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
            <CreditCard size={24} className="text-primary" />
            <span>Important Dates</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {importantDates.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-background rounded-xl border border-border">
                <span className="text-foreground/70">{item.label}</span>
                <span className="font-bold text-primary">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Registration Fees for Indian Participants</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary/5">
                  <th className="p-4 text-left text-foreground font-bold border-b-2 border-primary/20">Category</th>
                  <th className="p-4 text-center text-foreground font-bold border-b-2 border-primary/20">Fee</th>
                </tr>
              </thead>
              <tbody>
                {indianFees.map((fee, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <fee.icon size={20} className="text-primary" />
                        </div>
                        <span className="font-semibold text-foreground">{fee.category}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-bold text-primary">{fee.fee}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Registration Fees for International Participants</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary/5">
                  <th className="p-4 text-left text-foreground font-bold border-b-2 border-primary/20">Category</th>
                  <th className="p-4 text-center text-foreground font-bold border-b-2 border-primary/20">Fee</th>
                </tr>
              </thead>
              <tbody>
                {foreignFees.map((fee, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <fee.icon size={20} className="text-accent" />
                        </div>
                        <span className="font-semibold text-foreground">{fee.category}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-bold text-accent">{fee.fee}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
            <Building2 size={24} className="text-primary" />
            <span>Bank / Payment Details</span>
          </h3>
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-background rounded-xl border border-border">
                  <span className="text-sm text-foreground/60">Beneficiary Name</span>
                  <p className="font-semibold text-foreground">{bankDetails.beneficiaryName}</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-border">
                  <span className="text-sm text-foreground/60">Bank Name</span>
                  <p className="font-semibold text-foreground">{bankDetails.bankName}</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-border">
                  <span className="text-sm text-foreground/60">Branch</span>
                  <p className="font-semibold text-foreground">{bankDetails.branch}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-background rounded-xl border border-border">
                  <span className="text-sm text-foreground/60">IFSC Code</span>
                  <p className="font-semibold text-foreground">{bankDetails.ifscCode}</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-border">
                  <span className="text-sm text-foreground/60">Account Number</span>
                  <p className="font-semibold text-foreground">{bankDetails.accountNumber}</p>
                </div>
                <div className="p-4 bg-background rounded-xl border border-border">
                  <span className="text-sm text-foreground/60">Branch Code</span>
                  <p className="font-semibold text-foreground">{bankDetails.branchCode}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-background rounded-xl border border-border">
              <span className="text-sm text-foreground/60">Bank Address</span>
              <p className="font-semibold text-foreground">{bankDetails.bankAddress}</p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
          <p className="text-foreground/70">
            <span className="font-semibold text-accent">Note:</span> At least one author must register and present the paper if accepted. For any registration queries, please contact the organizing committee.
          </p>
        </div>

        <div className="text-center">
          <button className="px-10 py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90">
            Register Now →
          </button>
        </div>
      </div>
    </section>
  );
}
