'use client';

import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Local Address',
      value: 'Graphic Era Hill University, Society Area, Clement Town, Dehradun, Uttarakhand 248002',
    },
    {
      icon: Phone,
      label: 'Specific Queries',
      value: 'Prof. Prashant Singh Kutaula: +91-9654820999\nDr. Shikha Rana: +91-78305 04567',
    },
    {
      icon: Mail,
      label: 'Email Support',
      value: 'aidis-sm2027@gehu.ac.in',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">
            Contact Us
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            For any queries related to the Conference, contact our organizing team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border"
              >
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{info.label}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{info.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-semibold text-foreground">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
                placeholder="Paper Submission Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90"
            >
              <span className="flex items-center justify-center space-x-2">
                {submitted ? 'Message Sent!' : 'Send Message'}
                <Send size={18} />
              </span>
            </button>

            {submitted && (
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/50 text-accent">
                <p className="text-sm font-semibold">Thank you! We&apos;ll get back to you soon.</p>
              </div>
            )}
          </form>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Quick Response</h3>
              <p className="text-foreground/70 leading-relaxed">
                Our dedicated team is available to assist with any inquiries about the conference. Whether you have questions about paper submission, registration, or accommodation, we&apos;re here to help.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-border">
              <h4 className="font-bold text-foreground">Office Hours</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg border border-border">
                  <span className="text-foreground/70">Monday - Friday</span>
                  <span className="font-semibold text-primary">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg border border-border">
                  <span className="text-foreground/70">Saturday</span>
                  <span className="font-semibold text-accent">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg border border-border">
                  <span className="text-foreground/70">Sunday</span>
                  <span className="font-semibold text-foreground/60">Closed</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 space-y-3">
              <h4 className="font-bold text-foreground">Response Time</h4>
              <p className="text-sm text-foreground/70">
                We typically respond to all inquiries within 24 hours during business days. For urgent matters, please mark your email as &quot;Urgent&quot;.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
