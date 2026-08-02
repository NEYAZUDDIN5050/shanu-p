import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Therapies from '../components/sections/Therapies';

const sections = [
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
            This section will be built in the next development stage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Therapies />
      {sections.map((section) => (
        <PlaceholderSection key={section.id} {...section} />
      ))}
    </>
  );
}
