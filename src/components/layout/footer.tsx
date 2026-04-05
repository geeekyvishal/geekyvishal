import { profile } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))] pb-28">
      <div className="section-shell">
        <div className="flex items-center justify-between py-6">
          <p className="text-sm text-[rgb(var(--text-muted))]">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="text-sm text-[rgb(var(--text-muted))]">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
