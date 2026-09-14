import { motion, useInView } from 'framer-motion';
import {
  GraduationCap,
  ClipboardList,
  Activity,
  TrendingUp,
  Quote,
  BadgeCheck,
  Stethoscope,
  Dumbbell,
  Syringe,
} from 'lucide-react';
import { useRef } from 'react';
import Button from '../ui/Button';

// NOTE: adjust the file extensions below to whatever you actually saved
// (e.g. .jpg / .jpeg / .png) — imports must match the real file on disk.
import doctorImagePrimary from '../../assets/fit-pic.jpeg';
import doctorImageSession from '../../assets/Fit-pic-2.jpeg';
import doctorImageCloseUp from '../../assets/fit-pic-3.jpeg';

// TODO: swap these for Dr. Zeeshan's real credentials/certifications
const credentials = [
  { icon: GraduationCap, label: 'Bachelor of Physiotherapy (BPT)' },
  { icon: Dumbbell, label: 'Sports Rehabilitation Certified' },
  { icon: Stethoscope, label: 'Manual & Manipulative Therapy' },
  { icon: Syringe, label: 'Certified Dry Needling Practitioner' },
];

const process = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Assess',
    description:
      'A thorough, hands-on evaluation of your movement, posture and history to pinpoint the real source of pain — not just the symptom.',
  },
  {
    step: '02',
    icon: Activity,
    title: 'Treat',
    description:
      'Manual therapy paired with a targeted exercise plan, built around your body, your goals, and your daily life.',
  },
  {
    step: '03',
    icon: TrendingUp,
    title: 'Restore',
    description:
      'Progressive rehab that rebuilds strength and confidence, so recovery holds long after the sessions end.',
  },
];

export default function About() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' });

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Ambient background, echoes Hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 25, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent-2/12 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        />
        {/* faint dot grid behind the photo collage, desktop only */}
        <div
          className="absolute left-[6%] top-16 hidden h-64 w-64 opacity-[0.35] lg:block"
          style={{
            backgroundImage:
              'radial-gradient(var(--color-border, currentColor) 1.5px, transparent 1.5px)',
            backgroundSize: '18px 18px',
            color: 'var(--color-border)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Photo collage column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-rows-2">
              {/* Large primary photo */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow)] sm:col-span-1 sm:aspect-auto lg:row-span-2"
              >
                <img
                  src={doctorImagePrimary}
                  alt="Dr. Zeeshan Ur Rehman consulting a patient"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="font-heading text-base font-semibold text-white sm:text-lg">
                    Dr. Zeeshan Ur Rehman
                  </p>
                  <p className="text-xs text-white/80 sm:text-sm">
                    Founder, FIT AGAIN BY-PHYSIO
                  </p>
                </div>
              </motion.div>

              {/* Small photo: in session */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow)]"
              >
                <img
                  src={doctorImageSession}
                  alt="Guided rehabilitation session in progress"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>

              {/* Small photo: quote card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow)]"
              >
                <img
                  src={doctorImageCloseUp}
                  alt="Close-up of hands-on physiotherapy technique"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <Quote
                  className="absolute bottom-3 left-3 h-5 w-5 text-white/90 sm:bottom-4 sm:left-4"
                  strokeWidth={2}
                />
              </motion.div>
            </div>

            {/* Floating credential badge, overlaps the collage */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow)] sm:left-auto sm:right-4 sm:translate-x-0"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/15">
                <BadgeCheck className="h-5 w-5 text-accent" strokeWidth={2} />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold leading-tight text-text">
                  BPT, Sports Physio
                </p>
                <p className="text-xs text-text-muted">Musculoskeletal Specialist</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mt-8 text-center lg:mt-0 lg:text-left"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-sm font-medium text-text shadow-sm backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>About the doctor</span>
            </div>

            <h2 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight text-text sm:text-4xl lg:text-5xl">
              Care built around
              <span className="block text-accent">how your body actually moves.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-muted lg:mx-0 lg:text-lg">
              Dr. Zeeshan Ur Rahman is the physiotherapist behind FIT AGAIN BY-PHYSIO, with
              two years dedicated to sports injuries and musculoskeletal rehabilitation. His
              approach pairs evidence-based technique with genuine patience — every plan is
              built for the person in front of him, not a textbook case.
            </p>

            <div className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2 lg:mx-0">
              {credentials.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 p-3 text-left backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-surface"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-[18px] w-[18px] text-accent" strokeWidth={2} />
                  </span>
                  <span className="text-sm text-text-muted">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a href="#booking">
                <Button variant="primary" size="lg">
                  Book a Consultation
                </Button>
              </a>
              <a href="#therapies">
                <Button variant="outline" size="lg">
                  See Therapies
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Process: Assess -> Treat -> Restore */}
        <motion.div
          ref={gridRef}
          initial={{ opacity: 0, y: 24 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-24 lg:mt-32"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
              The recovery journey
            </h3>
            <p className="mt-3 text-text-muted">
              Three stages, one goal — getting you back to moving without thinking about it.
            </p>
          </div>

          <div className="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-6">
            {/* Connecting line, desktop only */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-10 hidden h-px bg-border sm:block"
            />

            {process.map(({ step, icon: Icon, title, description }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.12 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col items-center rounded-2xl border border-border bg-surface/60 p-6 text-center backdrop-blur-sm transition-colors hover:border-accent/40 sm:items-start sm:text-left"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface shadow-[var(--shadow)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                  <Icon className="h-6 w-6 text-accent" strokeWidth={2} />
                </div>
                <span className="mt-4 font-heading text-xs font-semibold tracking-widest text-accent/70">
                  STEP {step}
                </span>
                <h4 className="mt-1 font-heading text-lg font-semibold text-text">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}