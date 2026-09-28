import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hornero OS — an Arch Linux desktop with Argentine soul',
  description:
    'Hornero OS: a Wayland/Hyprland desktop with a Quickshell shell, a native system CLI, and 15 curated themes. Built in the open.',
};

const links = [
  { href: '/', label: 'Home' },
  { href: '/showroom', label: 'Showroom' },
  { href: '/roots', label: 'Roots' },
  { href: '/install', label: 'Install' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <header className="site-nav">
          <Link href="/" className="brand">
            <span className="brand-mark">⌂</span> Hornero OS
          </Link>
          <nav>
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="app">{children}</main>
        <footer className="site-footer">
          <span>Hornero OS — built in the open.</span>
          <span>
            <a href="https://github.com/HorneroOS">GitHub</a>
            {' · '}
            <a href="https://github.com/HorneroOS/docs">Docs</a>
          </span>
        </footer>
      </body>
    </html>
  );
}
