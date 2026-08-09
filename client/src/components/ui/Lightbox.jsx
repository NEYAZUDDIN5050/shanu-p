import { AnimatePresence, motion } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useEffect } from 'react';

export default function Lightbox({ open, onClose, imageUrl, title, subtitle }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && imageUrl && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Close lightbox"
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.figure
            role="dialog"
            aria-modal="true"
            aria-label={title || 'Certification image'}
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl">
              <img
                src={imageUrl}
                alt={title || 'Certification'}
                className="max-h-[70vh] w-full object-contain bg-surface-elevated"
              />
              {(title || subtitle) && (
                <figcaption className="border-t border-border px-5 py-4">
                  {title && (
                    <p className="font-heading font-semibold text-text">{title}</p>
                  )}
                  {subtitle && <p className="text-sm text-text-muted">{subtitle}</p>}
                </figcaption>
              )}
            </div>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-white/70">
              <ZoomIn className="h-3.5 w-3.5" />
              Press Esc to close
            </p>
          </motion.figure>
        </div>
      )}
    </AnimatePresence>
  );
}
