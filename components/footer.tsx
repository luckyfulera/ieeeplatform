'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Conference',
      links: [
        { label: 'Call for Papers', href: '/call-for-papers' },
        { label: 'Registration', href: '/registration' },
        { label: 'Committee', href: '/committee' },
      ],
    },
    {
      title: 'Organization',
      links: [
        { label: 'GEHU', href: '/about' },
        { label: 'IEEE UP Section', href: '/about' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-border">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/ieee-logo.png"
                alt="IEEE Logo"
                width={80}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-bold text-lg text-primary">
                AIDIS-SM 2027
              </span>
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">
              1st IEEE Conference on AI-Driven Intelligent Systems, Digital Innovation, and Sustainable Management. February 19-20, 2027.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20"
                    title={social.label}
                  >
                    <Icon size={18} className="text-primary" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-bold text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <a
            href="tel:+919654820999"
            className="flex items-center space-x-3 p-4 rounded-lg bg-primary/10"
          >
            <Phone size={20} className="text-primary" />
            <div>
              <div className="text-xs text-foreground/60">Prof. Prashant Singh Kutaula</div>
              <div className="font-semibold text-foreground">+91 9654820999</div>
            </div>
          </a>

          <a
            href="mailto:aidis-sm2027@gehu.ac.in"
            className="flex items-center space-x-3 p-4 rounded-lg bg-accent/10"
          >
            <Mail size={20} className="text-accent" />
            <div>
              <div className="text-xs text-foreground/60">Email</div>
              <div className="font-semibold text-foreground">aidis-sm2027@gehu.ac.in</div>
            </div>
          </a>

          <div className="flex items-center space-x-3 p-4 rounded-lg bg-primary/10">
            <MapPin size={20} className="text-primary" />
            <div>
              <div className="text-xs text-foreground/60">Location</div>
              <div className="font-semibold text-foreground">GEHU, Dehradun, India</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60 text-center sm:text-left">
            © {currentYear} Graphic Era Hill University. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
