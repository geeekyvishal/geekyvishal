import { Reveal } from '@/components/motion/reveal';
import { achievements } from '@/data/portfolio';

export function AboutSection() {
  return (
    <section id="highlights" className="pt-8 pb-16">
      <div className="section-shell">
        {/* Highlights */}
        <Reveal>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[rgb(var(--text))]">Highlights</h2>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4 text-sm leading-relaxed text-[rgb(var(--text-secondary))] transition-colors hover:bg-[rgb(var(--surface-hover))]"
                >
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
