const variants = {
  primary:
    'bg-accent text-white hover:bg-[var(--accent-hover)] focus-visible:outline-accent',
  secondary:
    'bg-accent-2 text-white hover:bg-[var(--accent-2-hover)] focus-visible:outline-accent-2',
  outline:
    'border border-border bg-surface text-text hover:bg-surface-elevated focus-visible:outline-accent',
  ghost: 'text-text hover:bg-surface-elevated focus-visible:outline-accent',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-sm',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
