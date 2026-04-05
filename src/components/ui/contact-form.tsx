'use client';

import { useState } from 'react';
import { GlassCard } from '@/components/ui/glass-card';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams({
      subject: `Portfolio inquiry from ${name || 'a visitor'}`,
      body: `Name: ${name}\nEmail: ${email}\n\n${message}`
    });

    window.location.href = `mailto:geeekyvishal@gmail.com?${params.toString()}`;
  };

  return (
    <GlassCard className="p-6 sm:p-8">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm text-[rgb(var(--text-soft))]">
            <span>Name</span>
            <input
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-2xl border border-[rgba(var(--border),0.9)] bg-[rgb(var(--surface-soft))] px-4 py-3 text-[rgb(var(--text))] outline-none transition placeholder:text-[rgb(var(--text-muted))] focus:border-[rgb(var(--brand))] focus:bg-[rgb(var(--bg-alt))]"
              placeholder="Your name"
            />
          </label>
          <label className="space-y-2 text-sm text-[rgb(var(--text-soft))]">
            <span>Email</span>
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-[rgba(var(--border),0.9)] bg-[rgb(var(--surface-soft))] px-4 py-3 text-[rgb(var(--text))] outline-none transition placeholder:text-[rgb(var(--text-muted))] focus:border-[rgb(var(--brand))] focus:bg-[rgb(var(--bg-alt))]"
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label className="space-y-2 text-sm text-[rgb(var(--text-soft))]">
          <span>Message</span>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full rounded-2xl border border-[rgba(var(--border),0.9)] bg-[rgb(var(--surface-soft))] px-4 py-3 text-[rgb(var(--text))] outline-none transition placeholder:text-[rgb(var(--text-muted))] focus:border-[rgb(var(--brand))] focus:bg-[rgb(var(--bg-alt))]"
            placeholder="Tell me about your idea, role, or collaboration."
          />
        </label>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[rgb(var(--brand))] to-[rgb(var(--accent))] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]"
        >
          Start the conversation
        </button>
      </form>
    </GlassCard>
  );
}
