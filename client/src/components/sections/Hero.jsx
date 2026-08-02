import { motion, useInView } from 'framer-motion';
import { Award, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useCountUp } from '../../hooks/useCountUp';
import Button from '../ui/Button';
import doctorImage from '../../assets/shanu-img.PNG';

const stats = [
  { label: 'Years of experience', value: 2, suffix: '+' },
  { label: 'Patients treated', value: 250, suffix: '+' },
  { label: 'Certifications', value: 18, suffix: '' },
];

function StatBlock({ label, value, suffix, enabled }) {
  const count = useCountUp(value, { enabled });

  return (
    <div className="text-center lg:text-left">
      <p className="font-heading text-3xl font-bold tabular-nums text-text sm:text-4xl">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-text-muted">{label}</p>
    </div>
  );
}

export default function Hero() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });

  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -35, 0], y: [0, 35, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-accent-2/12 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-sm font-medium text-text shadow-sm backdrop-blur-sm"
            >
              <Award className="h-4 w-4 text-accent" strokeWidth={2} />
              <span>BPT, MPT — Sports &amp; Musculoskeletal Specialist</span>
            </motion.div>

            <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Dr. Zeeshan Ur Rahman
              <span className="mt-2 block text-accent">Movement restored.</span>
              <span className="block text-text-muted">Life renewed.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-muted lg:mx-0">
              Personalized physiotherapy that blends evidence-based treatment with compassionate
              care — helping you recover faster and move with confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a href="#booking">
                <Button variant="primary" size="lg" className="group">
                  Book Appointment
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
              <a href="#therapies">
                <Button variant="outline" size="lg">
                  Explore Therapies
                </Button>
              </a>
            </div>
          </motion.div>

        <motion.div
  initial={{ opacity: 0, scale: 0.92 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
  className="relative mx-auto w-full max-w-md lg:max-w-none"
>
  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow)]">
    
    {/* Main image */}
    <img
      src={doctorImage}
      alt="Dr. Zeeshan Ur Rehman, physiotherapist"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    {/* Dark/gradient overlay, so text stays readable */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

    {/* Text content */}
    <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
      <div className="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-surface bg-accent/20">
        <img
          src={doctorImage}
          alt="Dr. Zeeshan Ur Rehman"
          className="h-full w-full object-cover"
        />
      </div>

      <p className="font-heading text-xl font-semibold text-white">
        Dr. Zeeshan Ur Rehman
      </p>
      <p className="text-sm text-white/80">
        Physiotherapist, FIT AGAIN BY-PHYSIO
      </p>
    </div>
  </div>

  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute -bottom-6 -left-4 rounded-2xl border border-border bg-surface px-4 py-1 shadow-[var(--shadow)] sm:-left-15"
  >
    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
      Patient satisfaction
    </p>
    <p className="font-heading text-2xl font-bold text-accent">98%</p>
  </motion.div>
</motion.div>
        </div>

        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 grid grid-cols-1 gap-8 rounded-2xl border border-border bg-surface/60 p-8 backdrop-blur-sm sm:grid-cols-3 sm:gap-6"
        >
          {stats.map((stat) => (
            <StatBlock key={stat.label} {...stat} enabled={statsInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
