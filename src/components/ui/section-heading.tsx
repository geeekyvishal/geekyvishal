import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left'
}: SectionHeadingProps) {
  return (
    <div
      className={cn('mx-auto max-w-2xl', align === 'center' ? 'text-center' : 'text-left')}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(var(--brand))]">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-[rgb(var(--text))] sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-7 text-[rgb(var(--text-soft))]">{description}</p>
    </div>
  );
}
