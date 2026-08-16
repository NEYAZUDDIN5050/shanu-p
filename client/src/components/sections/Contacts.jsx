import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const contactPoints = [
  {
    icon: Phone,
    label: 'Call or WhatsApp',
    value: '+91 00000 00000',
    href: 'tel:+910000000000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'care@fitagainbyphysio.com',
    href: 'mailto:care@fitagainbyphysio.com',
  },
  {
    icon: MapPin,
    label: 'Visit the clinic',
    value: 'Sector 62, Noida, UP',
    href: 'https://maps.google.com',
  },
];

const socials = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow)]"
        >
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:p-14">
            <div className="text-center lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-text">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Get in touch</span>
              </div>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Questions before you
                <span className="text-accent"> book?</span>
              </h2>
              <p className="mx-auto mt-3 max-w-md text-text-muted lg:mx-0">
                Reach out directly — we usually reply within a few hours.
              </p>

              <div className="mt-6 flex justify-center gap-3 lg:justify-start">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-3">
              {contactPoints.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background/40 px-4 py-3.5 transition-colors hover:border-accent/40 hover:bg-background/70 lg:min-w-[280px]"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/15">
                    <Icon className="h-4.5 w-4.5 text-accent" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-xs text-text-muted">{label}</p>
                    <p className="text-sm font-medium text-text">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}