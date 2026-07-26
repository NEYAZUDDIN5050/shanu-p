import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const sections = [
  { id: 'home', label: 'Home', stage: 3 },
  { id: 'therapies', label: 'Therapies', stage: 4 },
  { id: 'about', label: 'About', stage: 9 },
  { id: 'certifications', label: 'Certifications', stage: 6 },
  { id: 'testimonials', label: 'Testimonials', stage: 8 },
  { id: 'booking', label: 'Book Appointment', stage: 7 },
  { id: 'contact', label: 'Contact', stage: 9 },
];

function PlaceholderSection({ id, label, stage }) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-border px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
        >
          <span className="mb-3 inline-block rounded-full bg-surface-elevated px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Coming in Stage {stage}
          </span>
          <h2 className="mb-3 text-3xl font-bold text-text sm:text-4xl">{label}</h2>
          <p className="text-text-muted">
            This section will be built in the next development stage. Scroll to test
            navigation and the sticky navbar blur effect.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative scroll-mt-20 overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-16 bottom-24 h-80 w-80 rounded-full bg-accent-2/10 blur-3xl"
          />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-text-muted">
              Stage 2 — Layout &amp; Navigation
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
              Restore movement.
              <br />
              <span className="text-accent">Reclaim your life.</span>
            </h1>
            <p className="mx-auto max-w-xl text-lg text-text-muted">
              Premium physiotherapy care with a sticky navbar, responsive mobile menu,
              and full dark/light theme support.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a href="#booking">
                <Button variant="primary" size="lg">
                  Book Appointment
                </Button>
              </a>
              <a href="#therapies">
                <Button variant="outline" size="lg">
                  Explore Therapies
                </Button>
              </a>
            </div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Stage 2 complete — ready for Stage 3 (Hero)
            </p>
          </motion.div>
        </div>
      </section>

      {sections.slice(1).map((section) => (
        <PlaceholderSection key={section.id} {...section} />
      ))}
    </>
  );
}
