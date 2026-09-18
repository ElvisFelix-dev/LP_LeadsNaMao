import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  href,
  variant = 'primary',
  icon = true,
}) {
  const variants = {
    primary:
      'bg-white text-black hover:bg-white/90',

    secondary:
      'border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]',

    ghost:
      'text-white/60 hover:text-white',
  };

  const className = `
    group inline-flex items-center justify-center gap-2
    rounded-xl px-5 py-3
    text-sm font-semibold
    transition duration-300
    ${variants[variant]}
  `;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}

        {icon && (
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        )}
      </a>
    );
  }

  return (
    <button className={className}>
      {children}

      {icon && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </button>
  );
}
