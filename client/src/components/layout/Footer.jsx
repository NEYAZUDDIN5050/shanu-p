import { Activity, Globe, Mail, MapPin, MessageCircle, Phone, Share2 } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Therapies', href: '#therapies' },
  { label: 'About', href: '#about' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'Instagram', href: '#', icon: Share2 },
  { label: 'Facebook', href: '#', icon: Globe },
  { label: 'LinkedIn', href: '#', icon: MessageCircle },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white">
                <Activity className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="font-heading text-lg font-bold text-text">
                Physio<span className="text-accent">Care</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-text-muted">
              Expert physiotherapy care tailored to your recovery. Movement restored,
              pain relieved, life renewed.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-text-muted transition-colors hover:text-accent"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>ALAMGANJ PATNA, BIHAR</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+911234567890" className="hover:text-accent">
                  +91 123456789
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:hello@physiocare.com" className="hover:text-accent">
                  hello@physiocare.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-text-muted">
            &copy; {year} PhysioCare. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Developed & Maintained by Neyaz.
          </p>
        </div>
      </div>
    </footer>
  );
}
