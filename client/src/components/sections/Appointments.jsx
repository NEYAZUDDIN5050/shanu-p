import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  Mail,
  MapPin,
  Phone,
  User,
  MessageSquare,
  Stethoscope,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const services = [
  'Sports Injury Rehab',
  'Back & Neck Pain',
  'Post-Surgery Rehabilitation',
  'Frozen Shoulder Treatment',
  'Manual Therapy',
  'General Consultation',
];

const timeSlots = [
  { value: 'morning', label: 'Morning · 9 AM – 12 PM' },
  { value: 'afternoon', label: 'Afternoon · 12 PM – 4 PM' },
  { value: 'evening', label: 'Evening · 4 PM – 8 PM' },
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
};

// 'idle' | 'submitting' | 'success' | 'error'
export default function BookAppointment() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch(`${API_URL}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Could not book your appointment. Please try again.');
    }
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section
      id="booking"
      className="relative scroll-mt-20 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-28 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent-2/12 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-sm font-medium text-text shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>Book an appointment</span>
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
            Let&apos;s get you
            <span className="block text-accent">moving again.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-muted">
            Share a few details and Dr. Zeeshan&apos;s team will confirm your slot within
            24 hours.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-3xl border border-border bg-surface/60 p-6 shadow-[var(--shadow)] backdrop-blur-sm sm:p-8">
              <h3 className="font-heading text-lg font-semibold text-text">Clinic details</h3>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <MapPin className="h-4.5 w-4.5 text-accent" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-text">FIT AGAIN BY-PHYSIO</p>
                    <p className="text-sm text-text-muted">
                      Sector 62, Noida, Uttar Pradesh, India
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Phone className="h-4.5 w-4.5 text-accent" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-text">+91 00000 00000</p>
                    <p className="text-sm text-text-muted">Mon – Sat, 9 AM – 8 PM</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Mail className="h-4.5 w-4.5 text-accent" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-text">care@fitagainbyphysio.com</p>
                    <p className="text-sm text-text-muted">Replies within a business day</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-surface/60 p-6 shadow-[var(--shadow)] backdrop-blur-sm sm:p-8">
              <h3 className="font-heading text-lg font-semibold text-text">What happens next</h3>
              <ol className="mt-5 space-y-4">
                {[
                  'We confirm your slot by phone or email within 24 hours.',
                  'You get a short pre-visit form to share your medical history.',
                  'Arrive 10 minutes early for your first assessment.',
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 font-heading text-xs font-semibold text-accent">
                      {i + 1}
                    </span>
                    <p className="text-sm text-text-muted">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow)] sm:p-8 lg:p-10"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
                  <CheckCircle2 className="h-8 w-8 text-accent" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-text">
                  Request received
                </h3>
                <p className="mt-2 max-w-sm text-sm text-text-muted">
                  Thanks — we&apos;ve got your details. Our team will call or email you
                  shortly to confirm your appointment.
                </p>
                <Button
                  variant="outline"
                  size="md"
                  className="mt-6"
                  onClick={() => setStatus('idle')}
                >
                  Book another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="name" icon={User}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Phone number" htmlFor="phone" icon={Phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Email address" htmlFor="email" icon={Mail}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>

                <Field label="Reason for visit" htmlFor="service" icon={Stethoscope}>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Preferred date" htmlFor="preferredDate" icon={Calendar}>
                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      required
                      min={todayStr}
                      value={form.preferredDate}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Preferred time" htmlFor="preferredTime" icon={Clock}>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      required
                      value={form.preferredTime}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select a slot
                      </option>
                      {timeSlots.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Anything we should know? (optional)" htmlFor="message" icon={MessageSquare}>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your condition or concern"
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                {status === 'error' && (
                  <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3.5 text-sm text-red-700">
                    <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" strokeWidth={2} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === 'submitting'}
                  className="w-full justify-center"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                      Booking...
                    </span>
                  ) : (
                    'Request Appointment'
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  'w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-text placeholder:text-text-muted/60 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20';

function Field({ label, htmlFor, icon: Icon, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-text"
      >
        <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
        {label}
      </label>
      {children}
    </div>
  );
}