import Link from 'next/link';
import { Reveal } from '@/components/motion/reveal';
import { GithubDots } from '@/components/motion/github-dots';
import { profile } from '@/data/portfolio';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 pb-32">
      <div className="section-shell">
        <Reveal>
          <div className="relative rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-10 text-center sm:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            {/* Grid pattern overlay */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
              <GithubDots />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-[14px] left-1/2 -translate-x-1/2">
              <span className="badge">Contact</span>
            </div>

            <div className="relative flex flex-col items-center gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-[rgb(var(--text))] sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-md text-balance text-[rgb(var(--text-secondary))]">
                Reach out on{' '}
                <Link
                  href="https://x.com/geeekyvishal"
                  target="_blank"
                  className="font-medium text-[rgb(var(--accent))] underline underline-offset-2 transition hover:opacity-80"
                >
                  X
                </Link>{' '}
                or email me directly at{' '}
                <Link
                  href={`mailto:${profile.email}`}
                  className="font-medium text-[rgb(var(--accent))] underline underline-offset-2 transition hover:opacity-80"
                >
                  {profile.email}
                </Link>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
