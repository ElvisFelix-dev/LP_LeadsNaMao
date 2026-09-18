export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
}) {
  const alignment = {
    center: 'mx-auto text-center items-center',
    left: 'text-left items-start',
  };

  return (
    <div className={`flex max-w-3xl flex-col ${alignment[align]}`}>
      {eyebrow && (
        <span className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
