import Image from 'next/image';
import Link from 'next/link';

const pillars = [
  {
    title: 'Quickshell desktop shell',
    text: 'Bar, launcher, dashboard, notifications and session controls — one QML shell on Wayland, with 11 layout presets.',
  },
  {
    title: 'horneroctl system CLI',
    text: 'One front door for presets, appearance, shell lifecycle, snapshots and health. Non-interactive, scriptable, tested.',
  },
  {
    title: '15 curated themes',
    text: 'From Hornero Dark to Neon City and Pampa — token-driven packs with an offline-first catalogue, cyberpunk included.',
  },
  {
    title: 'Cinematic greeter',
    text: 'An SDDM theme with offline Argentine landscapes, day/golden-hour/night rotation, zero network.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>
          An Arch Linux desktop <span className="neon">with Argentine soul</span>
        </h1>
        <p>
          Hornero OS is a Wayland desktop built around Hyprland and Quickshell —
          deeply integrated, AI-native, and developed in the open. From pampa
          calm to neon-city nights.
        </p>
        <div className="cta-row">
          <Link href="/install" className="cta primary">
            Install
          </Link>
          <Link href="/showroom" className="cta secondary">
            See it running
          </Link>
        </div>
        <div className="hero-shot">
          <Image
            src="/showroom/desktop-neon.png"
            alt="Hornero OS desktop, Neon City theme"
            width={1280}
            height={720}
            priority
          />
        </div>
      </section>

      <section className="section">
        <h2>One system, four parts</h2>
        <div className="cards">
          {pillars.map((p) => (
            <div key={p.title} className="card">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Where it comes from</h2>
        <p>
          HorneroOS grows out of years of dotfiles craft — open-source projects
          and the unixporn community — rebuilt as a real system: CLI, shell,
          config, installer. No Omarchy fork, no web-wrapper storefront.{' '}
          <Link href="/roots">Read our roots and how we compare →</Link>
        </p>
      </section>
    </>
  );
}
