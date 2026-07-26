import { AnimatePresence, motion } from 'framer-motion';
import { Activity, Menu, X } from 'lucide-react';
import { useEffect } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useUiStore } from '../../store/uiStore';
import Button from '../ui/Button';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Therapies', href: '#therapies' },
  { label: 'About', href: '#about' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const scrolled = useScrollPosition();
  const { mobileMenuOpen, closeMobileMenu, toggleMobileMenu } = useUiStore();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => closeMobileMenu();

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled
            ? 'border-b border-border bg-[color-mix(in_srgb,var(--bg)_75%,transparent)] shadow-[var(--shadow)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white shadow-sm transition-transform group-hover:scale-105">
              <Activity className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <span className="font-heading text-lg font-bold tracking-tight text-text">
              Physio<span className="text-accent">Care</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface-elevated hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <a href="#booking">
              <Button variant="primary" size="md">
                Book Appointment
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle className="!h-10 !w-10" />
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text transition-colors hover:bg-surface-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" strokeWidth={2} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={closeMobileMenu}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-x-0 top-16 z-50 border-b border-border bg-bg px-4 pb-6 pt-4 shadow-[var(--shadow)] lg:hidden"
            >
              <ul className="space-y-1">
                {navLinks.map(({ label, href }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <a
                      href={href}
                      onClick={handleNavClick}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-text transition-colors hover:bg-surface-elevated"
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 px-4"
              >
                <a href="#booking" onClick={handleNavClick} className="block w-full">
                  <Button variant="primary" size="lg" className="w-full">
                    Book Appointment
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
