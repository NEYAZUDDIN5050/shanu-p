import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

// TODO: swap in real patient testimonials (with permission) when available
const testimonials = [
  {
    name: 'Ankit Sharma',
    condition: 'ACL Recovery',
    rating: 5,
    quote:
      "Six months after my ACL surgery I still couldn't run without pain. Dr. Zeeshan rebuilt my program from scratch and explained every single step. I'm back on the field now, and honestly moving better than before the injury.",
  },
  {
    name: 'Priya Nair',
    condition: 'Chronic Lower Back Pain',
    rating: 5,
    quote:
      "I'd seen three other physios before this and nothing stuck. What's different here is he actually watches how you move before deciding anything. Two months in, I sleep through the night without pain for the first time in years.",
  },
  {
    name: 'Rohit Verma',
    condition: 'Shoulder Rehabilitation',
    rating: 5,
    quote:
      'As a badminton player, I was terrified my shoulder injury would end my season. The sessions were tough but never careless — every exercise had a clear reason behind it. I was back on court in 9 weeks.',
  },
  {
    name: 'Meera Iyer',
    condition: 'Post-Pregnancy Core Recovery',
    rating: 5,
    quote:
      "Nobody really prepares you for how much your body changes after childbirth. Dr. Zeeshan's approach was patient and never rushed — he worked at my pace and celebrated every small win with me.",
  },
  {
    name: 'Sameer Khan',
    condition: 'Frozen Shoulder',
    rating: 4,
    quote:
      "Couldn't lift my arm above my shoulder for almost a year. The dry needling combined with mobility work made a difference I could feel within the first few sessions. Still doing my home exercises — it actually works.",
  },
];

const AUTOPLAY_MS = 6000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);
  const total = testimonials.length;

  const goTo = useCallback(
    (next) => {
      setDirection(next > index || (index === total - 1 && next === 0) ? 1 : -1);
      setIndex(((next % total) + total) % total);
    },
    [index, total]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const restartAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
  }, [total]);

  useEffect(() => {
    restartAutoplay();
    return () => clearInterval(timerRef.current);
  }, [restartAutoplay]);

  const handleManual = (fn) => {
    fn();
    restartAutoplay();
  };

  const active = testimonials[index];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-20 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent-2/12 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-sm font-medium text-text shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>Patient stories</span>
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
            Real recoveries,
            <span className="block text-accent">in their own words.</span>
          </h2>
        </div>

        {/* Slider */}
        <div
          className="relative mt-14"
          onMouseEnter={() => clearInterval(timerRef.current)}
          onMouseLeave={restartAutoplay}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 px-6 py-10 shadow-[var(--shadow)] backdrop-blur-sm sm:px-12 sm:py-14">
            <Quote
              className="absolute left-6 top-6 h-10 w-10 text-accent/15 sm:left-10 sm:top-10 sm:h-14 sm:w-14"
              strokeWidth={2}
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeOut' }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) handleManual(next);
                  else if (info.offset.x > 60) handleManual(prev);
                }}
                className="relative z-10 cursor-grab text-center active:cursor-grabbing"
              >
                <div className="mb-4 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < active.rating ? 'fill-accent text-accent' : 'text-border'
                      }`}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-text sm:text-xl">
                  &ldquo;{active.quote}&rdquo;
                </p>

                <div className="mt-7 flex flex-col items-center gap-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 font-heading text-base font-semibold text-accent">
                    {active.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                  <p className="mt-2 font-heading text-sm font-semibold text-text">
                    {active.name}
                  </p>
                  <p className="text-xs text-text-muted">{active.condition}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow controls */}
          <button
            type="button"
            onClick={() => handleManual(prev)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface p-2.5 text-text shadow-[var(--shadow)] transition-colors hover:border-accent/40 hover:text-accent sm:flex"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => handleManual(next)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-surface p-2.5 text-text shadow-[var(--shadow)] transition-colors hover:border-accent/40 hover:text-accent sm:flex"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        {/* Mobile arrows + dots */}
        <div className="mt-6 flex items-center justify-center gap-6 sm:mt-8">
          <button
            type="button"
            onClick={() => handleManual(prev)}
            aria-label="Previous testimonial"
            className="flex items-center justify-center rounded-full border border-border bg-surface p-2.5 text-text shadow-sm transition-colors hover:border-accent/40 hover:text-accent sm:hidden"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => handleManual(() => goTo(i))}
                aria-label={`Go to testimonial ${i + 1}`}
                className="group flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 bg-accent' : 'w-1.5 bg-border group-hover:bg-accent/50'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => handleManual(next)}
            aria-label="Next testimonial"
            className="flex items-center justify-center rounded-full border border-border bg-surface p-2.5 text-text shadow-sm transition-colors hover:border-accent/40 hover:text-accent sm:hidden"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}