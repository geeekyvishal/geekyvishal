import Image from 'next/image';
import { Reveal } from '@/components/motion/reveal';
import { experience } from '@/data/portfolio';

function TimelineLogo({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="relative mt-1 flex flex-col items-center">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
        ) : (
          <div className="h-2 w-2 rounded-full bg-[rgb(var(--text-muted))]" />
        )}
      </div>
      <div className="w-px flex-1 bg-[rgb(var(--border))]" />
    </div>
  );
}

export function ExperienceSection() {
  return (
    <div className="flex flex-col gap-8">
      {experience.map((item) => (
        <div key={`${item.title}-${item.period}`} className="flex gap-5">
          <TimelineLogo src={item.logo} alt={item.subtitle} />
          <div className="flex-1 pb-6 pt-0.5">
            <div className="flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="text-[15px] font-semibold text-[rgb(var(--text))]">{item.title}</h4>
                <span className="mt-1 text-[13px] font-medium text-[rgb(var(--text-muted))] sm:mt-0 sm:ml-4">{item.period}</span>
              </div>
              <p className="text-[14px] font-medium text-[rgb(var(--text))] opacity-80">{item.subtitle}</p>
            </div>
            
            <div className="mt-3.5 space-y-2.5">
              {item.bullets.map((bullet) => (
                <p key={bullet} className="text-[14px] leading-[1.65] text-[rgb(var(--text-secondary))] tracking-tight">
                  {bullet}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function JourneySection() {
  return (
    <section id="experience" className="py-16">
      <div className="section-shell">
        <Reveal>
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-[rgb(var(--text))]">Experience</h2>
            <ExperienceSection />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
