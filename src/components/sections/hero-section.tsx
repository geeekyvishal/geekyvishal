'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GithubGraph } from '@/components/motion/github-graph';
import { profile, skillGroups, education } from '@/data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-[0.15] [mask-image:radial-gradient(ellipse_at_top,black,transparent)]" />
      
      {/* Dynamic Blur Orbs */}
      <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-[rgb(var(--brand))] opacity-20 mix-blend-multiply blur-[120px]" />
      <div className="absolute -right-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-[rgb(var(--accent))] opacity-15 mix-blend-multiply blur-[100px]" />
      <div className="absolute left-[30%] top-[20%] h-[300px] w-[300px] rounded-full bg-blue-300 opacity-20 mix-blend-multiply blur-[100px] dark:bg-blue-600/30 dark:opacity-30 dark:mix-blend-screen" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative pb-16 pt-24 sm:pt-32">
      <AmbientBackground />
      <GithubGraph />

      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-8"
          >
            <motion.div variants={item} className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="mb-5 flex flex-wrap items-center gap-2.5">
                  <span className="flex items-center gap-1.5 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[rgb(var(--text-secondary))] shadow-sm backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgb(var(--brand))] opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand))]" />
                    </span>
                    iOS Developer
                  </span>
                  <span className="flex items-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[rgb(var(--text-secondary))] shadow-sm backdrop-blur-md">
                    Open Source Contributor
                  </span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-[rgb(var(--text))] sm:text-5xl">
                  Hi, I&apos;m {profile.name.split(' ')[0]}
                  <span className="ml-2 inline-block animate-[wave_2.5s_ease-in-out_infinite] origin-[70%_70%]">👋</span>
                </h1>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-[rgb(var(--text-secondary))]">
                  {profile.headline}
                </p>
              </div>

              <motion.div
                variants={item}
                className="hidden h-24 w-24 shrink-0 overflow-hidden rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] sm:flex"
              >
                <Image
                  src="/profile_photo.png"
                  alt={profile.name}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                  priority
                />
              </motion.div>
            </motion.div>

            <motion.p variants={item} className="max-w-md text-[15px] leading-relaxed text-[rgb(var(--text-secondary))]">
              {profile.heroDescription}
            </motion.p>

            <motion.div variants={item} className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-[rgb(var(--text-muted))]">
                <span>📍</span>
                <span>Nagpur, India</span>
              </div>
              
              <div className="h-4 w-px bg-[rgb(var(--border))]" />

              <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-[13px] font-medium text-green-700 dark:text-green-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Available for opportunities
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-10 lg:pt-2"
          >
            {/* Education */}
            <div className="flex flex-col gap-5">
              <h2 className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[rgb(var(--text-muted))]">
                <span className="h-px w-6 bg-[rgb(var(--border))]" />
                Education
              </h2>
              
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-1">
                  <Image
                    src="/iiitn.png"
                    alt="IIIT Nagpur logo"
                    width={28}
                    height={28}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-medium text-[rgb(var(--text))]">{education[0].subtitle}</h3>
                  <p className="text-[13px] text-[rgb(var(--text-secondary))]">{education[0].title}</p>
                  <p className="text-xs text-[rgb(var(--text-muted))]">2023 - 2027</p>
                </div>
              </div>

              <div className="mt-2 flex flex-col gap-3">
                <h3 className="text-xs font-medium text-[rgb(var(--text-muted))]">Relevant Coursework</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Programming",
                    "Database Management Systems",
                    "Operating Systems",
                    "Computer Networks",
                    "Distributed Systems",
                    "Software Engineering",
                    "Big Data Analytics",
                    "Data Mining and Warehousing",
                    "Design Thinking",
                    "Foundation of Computing"
                  ].map((course) => (
                    <span
                      key={course}
                      className="rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-2.5 py-1.5 text-[11px] font-medium text-[rgb(var(--text-secondary))] shadow-sm transition-colors hover:bg-[rgb(var(--surface-hover))]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>


          </motion.div>
        </div>

        {/* Full-width aesthetic Skills block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-36 flex flex-col items-center gap-6 border-t border-[rgb(var(--border))] pt-12 sm:mt-48"
        >
          <h2 className="text-sm font-medium uppercase tracking-widest text-[rgb(var(--text-muted))]">
            Technical Arsenal
          </h2>
          <div className="flex max-w-3xl flex-wrap justify-center gap-2.5">
            {skillGroups.flatMap((group) => group.items).map((item) => (
              <span key={item} className="chip text-[13px] px-3.5 py-1.5 border-[rgb(var(--border))/0.7]">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
