import Image from 'next/image';

const shots = [
  { src: '/showroom/desktop-hero.png', caption: 'Desktop with launcher' },
  { src: '/showroom/launcher.png', caption: 'Application launcher' },
  { src: '/showroom/dashboard.png', caption: 'Dashboard: weather, calendar, system, media' },
  { src: '/showroom/desktop-neon.png', caption: 'Neon City — cyberpunk nights' },
  { src: '/showroom/settings-network.png', caption: 'Hornero Settings, Network page' },
];

export const metadata = {
  title: 'Showroom — Hornero OS',
  description: 'Screenshots of the Hornero OS desktop: launcher, dashboard, themes.',
};

export default function Showroom() {
  return (
    <section className="section">
      <h2>Showroom</h2>
      <p>
        Development snapshots of the Hornero desktop — Hyprland plus the Hornero
        Shell on Arch, captured from the graphical test harness at 1280×720.
      </p>
      <div className="gallery">
        {shots.map((s) => (
          <figure key={s.src} className="shot">
            <Image src={s.src} alt={s.caption} width={1280} height={720} />
            <figcaption>{s.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
