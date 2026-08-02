import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { useState } from 'react';
import { therapies } from '../../data/therapies';
import Button from '../ui/Button';
import Modal from '../ui/Modal';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

function TherapyCard({ therapy, onSelect }) {
  const Icon = therapy.icon;

  return (
    <motion.button
      type="button"
      variants={item}
      onClick={() => onSelect(therapy)}
      className="group relative w-full cursor-pointer rounded-2xl border border-border bg-surface p-6 text-left shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_12px_40px_-12px_color-mix(in_srgb,var(--accent)_35%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--accent)_25%,transparent)]" />
      <div className="relative">
        <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </span>
        <h3 className="font-heading text-lg font-semibold text-text">{therapy.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          {therapy.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">
          Learn more
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </motion.button>
  );
}

function TherapyDetail({ therapy, onClose }) {
  const DetailIcon = therapy.icon;

  return (
    <div className="space-y-4">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <DetailIcon className="h-6 w-6" strokeWidth={2} />
      </span>
      <p className="leading-relaxed text-text-muted">{therapy.description}</p>
      <p className="flex items-center gap-2 text-sm font-medium text-text">
        <Clock className="h-4 w-4 text-accent" />
        {therapy.duration}
      </p>
      <a href="#booking" onClick={onClose} className="block pt-2">
        <Button variant="primary" size="md" className="w-full sm:w-auto">
          Book this therapy
        </Button>
      </a>
    </div>
  );
}

export default function Therapies() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="therapies"
      className="scroll-mt-20 border-b border-border bg-surface-elevated/40 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Our Services
          </span>
          <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">
            Therapy &amp; treatment programs
          </h2>
          <p className="mt-4 text-text-muted">
            Evidence-based care for every stage of recovery — from acute injury to long-term
            wellness. Select a service to learn more.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {therapies.map((therapy) => (
            <TherapyCard key={therapy.id} therapy={therapy} onSelect={setSelected} />
          ))}
        </motion.div>
      </div>

      <Modal
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        title={selected?.name ?? ''}
      >
        {selected && (
          <TherapyDetail therapy={selected} onClose={() => setSelected(null)} />
        )}
      </Modal>
    </section>
  );
}
