export const metadata = {
  title: 'Install — Hornero OS',
  description: 'How to install Hornero OS: profiles, requirements, status.',
};

export default function Install() {
  return (
    <section className="section">
      <h2>Install</h2>
      <p>
        HorneroOS is pre-release. The composition model is defined — release
        manifests pin every component — and three profiles exist:{' '}
        <code className="inline">base</code>,{' '}
        <code className="inline">desktop</code>, and{' '}
        <code className="inline">developer</code>.
      </p>
      <ul>
        <li>
          Start with the{' '}
          <a href="https://github.com/HorneroOS/docs">documentation</a> and the{' '}
          <a href="https://github.com/HorneroOS/hornero">composition repo</a>.
        </li>
        <li>
          On Arch today: install <code className="inline">horneroctl</code>{' '}
          from AUR and drive the desktop from one CLI.
        </li>
        <li>
          The guided installer (archinstall, Calamares, or custom — undecided)
          is bound by the{' '}
          <a href="https://github.com/HorneroOS/installer">
            staged install contract
          </a>
          .
        </li>
      </ul>
      <p>
        Requirements: Arch Linux, Hyprland, Quickshell. The greeter needs SDDM
        plus Qt6 Multimedia.
      </p>
    </section>
  );
}
