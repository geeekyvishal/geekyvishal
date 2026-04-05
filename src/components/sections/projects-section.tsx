import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/motion/reveal';
import { projects } from '@/data/portfolio';

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

function GitHubSmallIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="section-wide">
        <Reveal>
          <div className="flex flex-col gap-8">
            {/* Section header */}
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex w-full items-center gap-4">
                <div className="separator flex-1" />
                <span className="badge">My Projects</span>
                <div className="separator flex-1" />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[rgb(var(--text))] sm:text-4xl">
                Check out my latest work
              </h2>
              <p className="max-w-xl text-balance text-[rgb(var(--text-secondary))]">
                iOS apps, browser extensions, backend systems, and developer tooling designed
                with clarity, speed, and product feel in mind.
              </p>
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={0.06 + index * 0.04} className="h-full">
                  <div className="card flex h-full flex-col overflow-hidden">
                    {/* Image */}
                    <div className="relative p-3 pb-0">
                      <div className="relative overflow-hidden rounded-lg border border-[rgb(var(--border))]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={900}
                          height={620}
                          className="h-44 w-full object-cover"
                        />
                        {/* Overlay links */}
                        <div className="absolute right-2 top-2 flex gap-1.5">
                          {project.href && (
                            <Link
                              href={project.href}
                              target="_blank"
                              className="flex items-center gap-1 rounded-md bg-[rgb(var(--surface))]/90 px-2.5 py-1 text-xs font-medium text-[rgb(var(--text))] backdrop-blur-sm transition hover:bg-[rgb(var(--surface))]"
                            >
                              🌐 {project.linkLabel ?? 'Demo'}
                            </Link>
                          )}
                          <Link
                            href={project.github}
                            target="_blank"
                            className="flex items-center gap-1 rounded-md bg-[rgb(var(--surface))]/90 px-2.5 py-1 text-xs font-medium text-[rgb(var(--text))] backdrop-blur-sm transition hover:bg-[rgb(var(--surface))]"
                          >
                            <GitHubSmallIcon /> Source
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-base font-semibold text-[rgb(var(--text))]">{project.title}</h3>
                          <p className="mt-0.5 text-xs text-[rgb(var(--text-muted))]">{project.eyebrow}</p>
                        </div>
                        <ExternalLinkIcon />
                      </div>

                      <p className="flex-1 text-sm leading-relaxed text-[rgb(var(--text-secondary))]">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-[rgb(var(--border))] px-2 py-0.5 text-[11px] text-[rgb(var(--text-muted))]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
