'use client';

import { CreditCard, Users, GraduationCap, Briefcase, Globe, Building2, CheckCircle, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

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

        <RegistrationForm />
      </div>
    </section>
  );
}

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    designation: '',
    category: '',
    paperTitle: '',
    authors: '',
    country: '',
    paymentRef: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        institution: '',
        designation: '',
        category: '',
        paperTitle: '',
        authors: '',
        country: '',
        paymentRef: '',
      });
    }, 3000);
  };

  const categories = [
    'Non-IEEE Professional (Indian)',
    'IEEE Professional Members (Indian)',
    'Non-IEEE Students (Indian)',
    'IEEE Student Members (Indian)',
    'Attendees/Co-Author (Indian)',
    'Non-IEEE Professional (International)',
    'IEEE Professional Members (International)',
    'Non-IEEE Students (International)',
    'IEEE Student Members (International)',
    'Attendees/Co-Author (International)',
  ];

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle size={64} className="text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Registration Successful!</h3>
        <p className="text-foreground/70 mb-4">
          Thank you for registering for AIDIS-SM 2027. We have received your registration details.
        </p>
        <p className="text-foreground/60 text-sm">
          A confirmation email will be sent to {formData.email} shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-2xl bg-card border border-border">
      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
        <Send size={24} className="text-primary" />
        <span>Conference Registration Form</span>
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-semibold text-foreground">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
              placeholder="Dr. John Smith"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-foreground">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
              placeholder="john.smith@university.edu"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
              placeholder="+91 9876543210"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="country" className="block text-sm font-semibold text-foreground">
              Country *
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
              placeholder="India"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="institution" className="block text-sm font-semibold text-foreground">
              Institution/Organization *
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
              placeholder="Graphic Era Hill University"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="designation" className="block text-sm font-semibold text-foreground">
              Designation *
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
              placeholder="Professor / Student / Researcher"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="category" className="block text-sm font-semibold text-foreground">
              Registration Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
            >
              <option value="">Select your category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="paperTitle" className="block text-sm font-semibold text-foreground">
              Paper Title (if applicable)
            </label>
            <input
              type="text"
              id="paperTitle"
              name="paperTitle"
              value={formData.paperTitle}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
              placeholder="Enter your paper title (leave blank if attendee only)"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="authors" className="block text-sm font-semibold text-foreground">
              Co-Authors (if any)
            </label>
            <textarea
              id="authors"
              name="authors"
              value={formData.authors}
              onChange={handleChange}
              rows={2}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none resize-none"
              placeholder="List co-authors separated by commas"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="paymentRef" className="block text-sm font-semibold text-foreground">
              Payment Reference/Transaction ID *
            </label>
            <input
              type="text"
              id="paymentRef"
              name="paymentRef"
              value={formData.paymentRef}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
              placeholder="Enter your payment transaction reference number"
            />
            <p className="text-xs text-foreground/60">
              Please complete payment to the bank account listed above and enter the transaction reference here.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm text-foreground/70 mb-4">
            By submitting this form, you confirm that you have read and agree to the conference terms and conditions.
            All registration fees are non-refundable.
          </p>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90"
          >
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
}
